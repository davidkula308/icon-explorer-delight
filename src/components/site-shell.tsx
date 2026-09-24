import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Menu, Moon, Phone, Sun, Youtube } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { EMAIL, navItems, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_URL } from "@/lib/site-data";

function BrandMark() {
  return <Link to="/" className="flex items-center gap-2.5" aria-label="PrimeTek Digital Solutions home"><span className="grid size-9 place-items-center bg-coral text-sm font-extrabold text-coral-foreground">P</span><span className="leading-none"><span className="block text-[15px] font-extrabold">PrimeTek</span><span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-coral">Digital Solutions</span></span></Link>;
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => { const stored = window.localStorage.getItem("primetek-theme"); const next = stored === "dark"; document.documentElement.classList.toggle("dark", next); setDark(next); }, []);
  const toggle = () => { const next = !dark; setDark(next); document.documentElement.classList.toggle("dark", next); window.localStorage.setItem("primetek-theme", next ? "dark" : "light"); };
  return <Button variant="outline" size="icon" onClick={toggle} aria-label={dark ? "Use light theme" : "Use dark theme"} title={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun /> : <Moon />}</Button>;
}

export function SiteHeader() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  return <>
    <div className="bg-brand text-brand-foreground"><div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-2 text-[11px] sm:px-6"><div className="flex items-center gap-5"><a className="inline-flex items-center gap-1.5 text-brand-foreground/80 hover:text-brand-foreground" href={`tel:${PHONE_LINK}`}><Phone className="size-3 text-coral" />{PHONE_DISPLAY}</a><a className="hidden items-center gap-1.5 text-brand-foreground/80 hover:text-brand-foreground sm:inline-flex" href={`mailto:${EMAIL}`}><Mail className="size-3 text-coral" />{EMAIL}</a></div><span className="hidden items-center gap-2 tracking-wide text-brand-foreground/80 sm:inline-flex"><span className="size-1.5 bg-coral" />Technology that moves business forward</span></div></div>
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur"><div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-6"><BrandMark/><nav className="hidden items-center gap-7 text-[13px] font-semibold lg:flex" aria-label="Primary navigation">{navItems.map(item => <Link key={item.to} to={item.to} className={`nav-link ${path === item.to ? "nav-link-active" : ""}`}>{item.label}</Link>)}</nav><div className="flex items-center gap-2"><ThemeToggle/><Button asChild className="hidden rounded-none bg-coral font-bold text-coral-foreground hover:bg-coral-strong sm:inline-flex"><Link to="/contact">Request a Quote</Link></Button><Sheet><SheetTrigger asChild><Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu"><Menu/></Button></SheetTrigger><SheetContent className="w-[88%]"><SheetHeader><SheetTitle><BrandMark/></SheetTitle></SheetHeader><nav className="mt-10 flex flex-col" aria-label="Mobile navigation">{navItems.map(item => <SheetClose asChild key={item.to}><Link to={item.to} className="border-b border-border py-4 text-lg font-bold">{item.label}</Link></SheetClose>)}</nav><Button asChild className="mt-8 w-full rounded-none bg-coral text-coral-foreground hover:bg-coral-strong"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Chat on WhatsApp</a></Button></SheetContent></Sheet></div></div></header>
  </>;
}

const socials = [{label:"Facebook",icon:Facebook},{label:"Instagram",icon:Instagram},{label:"LinkedIn",icon:Linkedin},{label:"TikTok",icon:Youtube}];
export function SiteFooter() { return <footer className="bg-brand text-brand-foreground"><div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-6 md:grid-cols-3"><div><BrandMark/><p className="mt-5 max-w-sm text-sm leading-6 text-brand-foreground/65">Digital products, software and technology systems built for useful, lasting business impact.</p></div><div><p className="text-xs font-bold uppercase text-coral">Explore</p><div className="mt-4 grid grid-cols-2 gap-3 text-sm">{navItems.map(item=><Link key={item.to} to={item.to} className="text-brand-foreground/70 hover:text-coral">{item.label}</Link>)}</div></div><div><p className="text-xs font-bold uppercase text-coral">Connect</p><div className="mt-4 space-y-2 text-sm"><a className="block text-brand-foreground/70 hover:text-coral" href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a><a className="block break-all text-brand-foreground/70 hover:text-coral" href={`mailto:${EMAIL}`}>{EMAIL}</a></div><div className="mt-5 flex gap-2">{socials.map(({label,icon:Icon})=><Button key={label} variant="outline" size="icon" className="border-brand-foreground/20 bg-transparent text-brand-foreground hover:bg-coral hover:text-coral-foreground" aria-label={label} title={`${label} link coming soon`}><Icon/></Button>)}</div></div></div><div className="border-t border-brand-foreground/10"><div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-5 text-[11px] text-brand-foreground/50 sm:flex-row sm:items-center sm:justify-between sm:px-6"><span>© {new Date().getFullYear()} PrimeTek Digital Solutions. All rights reserved.</span><span>Built with purpose in Kenya.</span></div></div></footer>; }

export function SiteLayout({children}:{children:ReactNode}) { return <div className="min-h-screen bg-background text-foreground"><SiteHeader/>{children}<SiteFooter/></div>; }
