# PrimeTek Digital Solutions website

## What will be built

- Rename and restyle the selected Signal Coral design as **PrimeTek Digital Solutions**.
- Add separate **Home, Services, Testimonials, Contact, and About Us** pages with persistent desktop tabs and a three-line mobile menu panel.
- Expand the service catalogue beyond website design and custom software to include mobile apps, e-commerce, cloud systems, databases, cybersecurity, SEO, digital marketing, UI/UX, business automation, IT consulting, and support.
- Make every service discoverable from the Services page and connect each quote action to the contact form.
- Add working WhatsApp and phone actions for **+254722493288**. WhatsApp opens a direct conversation with the requested pre-filled quote message.
- Add testimonials with star ratings, company information, contact details, and placeholder Facebook, Instagram, LinkedIn, and TikTok buttons.
- Add a full footer with navigation, contact details, social buttons, and copyright.

## Homepage experience

- Replace the static opening area with three locally served background video scenes covering web design, custom software, and mobile/digital work.
- Preload and autoplay muted video, with readable floating content over a restrained dark overlay. Videos rotate without user input.
- Extend the page with service highlights, the requested results band, a step-by-step “How we work” tree, testimonials, contact call-to-action, and footer.
- Use poster/fallback styling so the page remains polished while video data is still arriving. True zero-load playback cannot be guaranteed on a first visit, but local/CDN delivery and preloading will minimize delay.

## Quote backend

- Save quote requests in Lovable Cloud with name, email, phone, preferred contact method, selected service, message, and submission time.
- Accept public submissions while preventing public reading, editing, or deleting of stored requests.
- Validate submissions on the server and show clear success/error feedback in the form.

## Technical details

- Keep TanStack Start routing and create one route file per public page, each with unique search/social metadata.
- Extract shared header, mobile navigation, footer, theme control, service data, and quote form into reusable modules.
- Persist light/dark preference in the browser after hydration to avoid page mismatch.
- Use generated video asset pointers directly in the app and generate the remaining two scenes sequentially.
- Verify navigation, menu panel, theme switching, forms, phone/WhatsApp links, video playback, and responsive layouts on desktop and mobile.
