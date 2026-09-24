import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/site-data";
import { submitQuoteRequest } from "@/lib/quotes.functions";

export function QuoteForm({ defaultService = "Website Design" }: { defaultService?: string }) {
  const submit = useServerFn(submitQuoteRequest); const [pending,setPending]=useState(false); const [service,setService]=useState(defaultService); const [preferred,setPreferred]=useState<"whatsapp"|"phone"|"email">("whatsapp");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setPending(true); const form=new FormData(event.currentTarget); try { await submit({data:{name:String(form.get("name")??""),email:String(form.get("email")??""),phone:String(form.get("phone")??""),preferredContact:preferred,service,message:String(form.get("message")??"")}}); toast.success("Quote request received. We’ll contact you shortly."); event.currentTarget.reset(); setService(defaultService); setPreferred("whatsapp"); } catch { toast.error("We couldn’t save your request. Please try again."); } finally { setPending(false); } }
  return <form onSubmit={handleSubmit} className="grid gap-5"><div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="name">Full name</Label><Input id="name" name="name" required minLength={2} placeholder="Your name"/></div><div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required placeholder="you@example.com"/></div></div><div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="phone">Phone number</Label><Input id="phone" name="phone" type="tel" required minLength={7} placeholder="+254 ..."/></div><div className="space-y-2"><Label>Preferred contact</Label><Select value={preferred} onValueChange={(v)=>setPreferred(v as typeof preferred)}><SelectTrigger><SelectValue/></SelectTrigger><SelectContent><SelectItem value="whatsapp">WhatsApp</SelectItem><SelectItem value="phone">Phone call</SelectItem><SelectItem value="email">Email</SelectItem></SelectContent></Select></div></div><div className="space-y-2"><Label>Service</Label><Select value={service} onValueChange={setService}><SelectTrigger><SelectValue/></SelectTrigger><SelectContent>{services.map(item=><SelectItem key={item.title} value={item.title}>{item.title}</SelectItem>)}</SelectContent></Select></div><div className="space-y-2"><Label htmlFor="message">Project note <span className="text-muted-foreground">(optional)</span></Label><Textarea id="message" name="message" maxLength={2000} rows={5} placeholder="Tell us briefly what you need."/></div><Button type="submit" disabled={pending} className="h-12 rounded-none bg-coral font-bold text-coral-foreground hover:bg-coral-strong">{pending?<Loader2 className="animate-spin"/>:<Send/>}{pending?"Sending…":"Request a quote"}</Button></form>;
}
