# Launch Checklist -- Poke Parent Shop

A comprehensive pre-launch checklist organized by category. Complete every item before opening the store to the public.

---

## Payment Setup

- [ ] **Shopify Payments activated.** Go to Settings > Payments. Complete the full setup including business details, banking information, and identity verification.
- [ ] **Shopify Payments test mode used.** Enable test mode (Settings > Payments > Shopify Payments > Manage), place a test order using card number `4242 4242 4242 4242`, verify the entire flow works, then disable test mode.
- [ ] **Shopify Payments test mode disabled.** Confirm test mode is OFF before going live.
- [ ] **PayPal enabled.** Enable PayPal Express Checkout in Settings > Payments. Either connect an existing PayPal Business account or let Shopify auto-create one linked to your store email. Verify by logging into PayPal and confirming the connection.
- [ ] **Shop Pay enabled.** Automatically available when Shopify Payments is active. Verify it appears as an option during checkout.
- [ ] **Apple Pay / Google Pay enabled.** Automatically available through Shopify Payments in supported browsers. Test on a mobile device.
- [ ] **Currency set to USD.** Settings > Store details > Store currency.
- [ ] **Test orders deleted.** Delete any test orders from the admin before going live (Orders > select test orders > More actions > Delete).

---

## Shipping Configuration

- [ ] **Shipping origin address set.** Settings > Shipping and delivery > Shipping from. Confirm your warehouse/shipping origin address.
- [ ] **Domestic shipping rates configured.** Recommended for pilot launch:
  - Flat rate: $5.99 for all domestic orders.
  - Optional: Free shipping on orders over $75 (good incentive to buy a bundle + add-on).
- [ ] **International shipping decided.** Either disable international shipping (recommended for pilot) or configure rates for target countries.
- [ ] **Shipping weight set on each product.** Open each product and enter the weight in the Shipping section. This is needed if using weight-based or carrier-calculated rates.
- [ ] **Shipping dimensions set (optional).** If using carrier-calculated rates, enter package dimensions.
- [ ] **Processing time set.** Set an expected processing time of 1-3 business days in your shipping policy and product descriptions.
- [ ] **Test shipping rate calculation.** Add a product to cart, go to checkout, enter a real address, and verify the shipping rate displays correctly.

---

## Tax Configuration

- [ ] **Business location confirmed.** Settings > Store details. Verify your business address.
- [ ] **US taxes enabled.** Settings > Taxes and duties > United States. Shopify auto-calculates state sales tax based on nexus rules.
- [ ] **Tax nexus states reviewed.** If you have physical presence (nexus) in multiple states, verify the correct states are enabled for tax collection.
- [ ] **"Include tax in prices" setting reviewed.** Default is OFF (tax added at checkout), which matches the cart page text "Taxes and shipping calculated at checkout." Leave this as-is.
- [ ] **Tax ID / registration numbers entered (if applicable).** Enter state-level sales tax registration numbers if required.

---

## Legal Pages

- [ ] **Shipping policy written.** Settings > Policies > Shipping policy. Include:
  - Processing time: 1-3 business days.
  - Delivery estimate: 5-7 business days (domestic).
  - Carrier information.
  - Tracking number provided via email.
  - Flat rate or free shipping threshold details.

- [ ] **Returns / refund policy written.** Settings > Policies > Refund policy. Include:
  - Sealed products: returnable within 30 days.
  - Opened packs: non-returnable (randomized contents, cannot be resold).
  - Unused supplies (binders, sleeves): returnable within 30 days in original packaging.
  - Return shipping: customer responsibility or prepaid label (your choice).
  - Refund timeline: within 5-10 business days of receiving the return.

- [ ] **Privacy policy written.** Settings > Policies > Privacy policy. Shopify provides a template. Customize with:
  - What data you collect (name, email, address, payment via Shopify).
  - How you use it (order fulfillment, email communication).
  - Third-party services (Shopify, payment processors, email marketing tool).
  - Cookie usage.
  - Customer rights (data access, deletion requests).

- [ ] **Terms of service written.** Settings > Policies > Terms of service. Include:
  - Product descriptions accuracy (packs are randomized, no card guarantees).
  - Intellectual property notice (Pokemon trademarks).
  - Limitation of liability.
  - Governing jurisdiction.

- [ ] **Affiliate disclosure page created.** Online Store > Pages > Affiliate Disclosure (handle: `affiliate-disclosure`). Disclose any affiliate relationships, sponsorships, or referral arrangements. Required by FTC if applicable.

- [ ] **Footer links verified.** The footer (`sections/footer.liquid`) links to:
  - `/policies/shipping-policy`
  - `/policies/refund-policy`
  - `/policies/privacy-policy`
  - `/pages/affiliate-disclosure`
  - Verify all four links resolve correctly.

- [ ] **Trademark disclaimer present.** The footer already includes: "Pokemon and all related names are trademarks of Nintendo / Creatures Inc. / GAME FREAK Inc. This store is not affiliated with or endorsed by The Pokemon Company. Cards are collectibles for fun -- not financial instruments." Verify this renders on every page.

---

## Domain Setup

- [ ] **Domain purchased.** Buy your domain from a registrar (Namecheap, Cloudflare, Google Domains, or directly from Shopify).
- [ ] **Domain connected to Shopify.** Settings > Domains > Connect existing domain. Follow DNS instructions.
- [ ] **DNS records configured:**
  - A record pointing to Shopify's IP address (`23.227.38.65`).
  - CNAME record for `www` pointing to `shops.myshopify.com`.
- [ ] **DNS propagation verified.** Allow up to 48 hours. Use [whatsmydns.net](https://www.whatsmydns.net/) to check propagation.
- [ ] **SSL certificate active.** Shopify auto-provisions a free SSL certificate. Verify by visiting your domain with `https://` and confirming the padlock icon.
- [ ] **Primary domain set.** Settings > Domains > Set as primary. Choose either `www.yourdomain.com` or `yourdomain.com` (Shopify will redirect the other).
- [ ] **HTTPS redirect enabled.** Settings > Domains > Enable HTTPS redirect. All HTTP traffic should redirect to HTTPS.
- [ ] **Myshopify.com URL redirects.** The default `your-store.myshopify.com` URL should auto-redirect to your custom domain.

---

## Email Notifications

- [ ] **Order confirmation email customized.** Settings > Notifications > Order confirmation. Review and add on-brand messaging.
- [ ] **Shipping confirmation email reviewed.** Settings > Notifications > Shipping confirmation. Verify tracking number is included.
- [ ] **Post-purchase follow-up email created.** In Klaviyo or Shopify Email: automated email 3 days after fulfillment with tips for using bundle contents and links to Parent Guide Hub.
- [ ] **Welcome email for newsletter signups created.** Automated email triggered by newsletter subscription with intro to the shop, quiz link, and top guide links.
- [ ] **Abandoned cart recovery enabled.** Settings > Notifications > Abandoned checkout emails. Enable the automatic email (recommended: send after 1 hour).
- [ ] **Email sender name and address configured.** Settings > Notifications > Sender email. Use a professional address (e.g., hello@pokeparentshop.com).
- [ ] **All notification emails tested.** Place a test order and verify all triggered emails are received and display correctly.

---

## Inventory and Products

- [ ] **All 5 products created.** Verify in Products:
  - Starter Explorer (`starter-explorer`) -- $54.99
  - Growing Collector (`growing-collector`) -- $84.99
  - Confident Collector (`confident-collector`) -- $119.99
  - Extra Sleeves Pack (`extra-sleeves`) -- $6.99
  - Binder Upgrade (`binder-upgrade`) -- $14.99

- [ ] **Product types assigned.** Each bundle product has type "Bundle." Each add-on product has type "Add-On."

- [ ] **Inventory tracking enabled.** For each product, confirm:
  - "Track quantity" is checked.
  - Inventory count is entered and accurate.
  - Inventory location is set.

- [ ] **Inventory stocked and counted.** Physically count your inventory and verify it matches Shopify's numbers.

- [ ] **Product descriptions complete.** Each product has:
  - A clear, parent-friendly title.
  - A thorough description explaining what is included and why.
  - Accurate pricing.

- [ ] **Product metafields populated.** For each bundle product:
  - `custom.bundle_summary` -- filled in.
  - `custom.whats_included` -- list populated with all items.
  - `custom.age_note` -- age guidance written.
  - `custom.care_tips` -- care instructions written.

- [ ] **Product weights set.** Each product has an accurate shipping weight.

- [ ] **Collections created and populated:**
  - "Bundles" collection (`/collections/bundles`) -- contains 3 bundle products.
  - "Add-Ons" collection (`/collections/add-ons`) -- contains 2 add-on products.

---

## Images

- [ ] **Store logo uploaded.** Theme settings > Brand > Logo.
- [ ] **Hero image uploaded.** Homepage > Hero section.
- [ ] **Founder photo uploaded.** Homepage > Founder Story section.
- [ ] **Starter Explorer -- featured image uploaded.**
- [ ] **Growing Collector -- featured image uploaded.**
- [ ] **Confident Collector -- featured image uploaded.**
- [ ] **Extra Sleeves Pack -- featured image uploaded.**
- [ ] **Binder Upgrade -- featured image uploaded.**
- [ ] **Pack Types guide images uploaded (5 pack types).**
- [ ] **Alt text filled in for every image.**
- [ ] **No images sourced from fan sites, wikis, or unauthorized sources.**

See `docs/IMAGE-CHECKLIST.md` for full specifications and legal guidance.

---

## Quiz Testing

- [ ] **Quiz loads on /pages/quiz.** Page exists with template `page.quiz` assigned.
- [ ] **"Let's Go" button starts the quiz.** Intro hides, form appears, Question 1 visible.
- [ ] **Progress bar updates with each step.** Bar width and "Question X of 6" text are correct.
- [ ] **All 5 scored questions require an answer.** Cannot proceed without selecting a radio option (shake animation fires on skip attempt).
- [ ] **Question 6 (favorite Pokemon) is optional.** Can proceed without entering text.
- [ ] **Back button works.** Returns to previous question with prior answer preserved.
- [ ] **Auto-advance on radio selection works.** Selecting an option auto-advances after 250ms delay.
- [ ] **Result page shows correct bundle.** Test at least 3 scenarios from `docs/QUIZ-MAPPING-TABLE.md`.
- [ ] **Override rules work:**
  - Under 6 always recommends Starter Explorer.
  - Low budget always recommends Starter Explorer.
  - High budget + collecting experience never recommends Starter Explorer (floors at Growing Collector).
- [ ] **"Why this bundle?" explanation renders.** Personalized text appears based on answers.
- [ ] **Add-on suggestions appear when triggered:**
  - "Playing" enjoyment triggers Starter Deck suggestion.
  - "Rough" carefulness triggers Extra Sleeves suggestion.
- [ ] **Favorite Pokemon note appears.** Type a Pokemon name and verify it shows in the result.
- [ ] **"Add to Cart" button works.** Correct product is added to cart and user is redirected to /cart.
- [ ] **"Retake Quiz" button works.** Form resets, returns to Question 1.
- [ ] **Quiz product handles configured.** Theme editor > Quiz section settings match actual product handles.
- [ ] **Quiz answers persist in localStorage.** Open browser dev tools > Application > Local Storage and verify `poke_parent_quiz` is saved.

---

## Mobile Responsiveness

Test on actual devices and/or browser developer tools (375px width for phone, 768px for tablet).

- [ ] **Homepage:**
  - Hero section stacks vertically (image below text).
  - Quiz CTA steps stack vertically on narrow screens.
  - Bundle grid cards stack into a single column.
  - Founder story stacks vertically.
  - Education hub teaser cards reflow.

- [ ] **Header:**
  - Hamburger menu icon appears at 768px and below.
  - Tapping hamburger opens navigation menu.
  - Navigation links are tappable with sufficient touch targets.
  - Cart icon remains visible and accessible.

- [ ] **Quiz page:**
  - Quiz options are full-width and easily tappable.
  - Progress bar spans full width.
  - Result card is readable without horizontal scrolling.

- [ ] **Product page:**
  - Image and details stack vertically.
  - "Add to Cart" button is full-width and prominent.
  - Add-on grid reflows.

- [ ] **Cart page:**
  - Cart table is readable (may need horizontal scroll on very small screens).
  - Tour tooltip positions correctly on mobile.
  - Pre-checkout modal is scrollable and fits the viewport.

- [ ] **Parent Guide Hub:**
  - Guide cards reflow into a single column on mobile.
  - Cards are tappable with clear touch targets.

- [ ] **Pack Types page:**
  - Pack type cards stack vertically (image above text).
  - TL;DR box is readable.

- [ ] **Collection page:**
  - Product grid becomes single column on mobile.
  - Product cards maintain proper image aspect ratios.

- [ ] **Footer:**
  - Footer grid reflows: 2 columns on tablet, 1 column on phone.

---

## Analytics

- [ ] **Google Analytics / GA4 installed.** Measurement ID entered in Online Store > Preferences > Google Analytics.
- [ ] **Enhanced e-commerce tracking enabled.** Tracks add-to-cart, checkout, and purchase events.
- [ ] **GA4 real-time report verified.** Visit the store and confirm your visit appears in GA4 real-time.
- [ ] **Shopify Analytics accessible.** Review the built-in Analytics dashboard in Shopify Admin for sales, sessions, and conversion data.

---

## Social Accounts

- [ ] **Instagram account created (if applicable).** Enter URL in Theme settings > Social Media > Instagram URL.
- [ ] **Facebook page created (if applicable).** Enter URL in Theme settings > Social Media > Facebook URL.
- [ ] **Social links render in the theme.** Verify social links appear where expected (if the theme displays them).
- [ ] **Social meta tags present.** Shopify auto-generates Open Graph tags. Verify by pasting a product URL into [Facebook's Sharing Debugger](https://developers.facebook.com/tools/debug/) or [Twitter Card Validator](https://cards-dev.twitter.com/validator).

---

## SEO

- [ ] **Homepage meta title and description set.** Online Store > Preferences > Title and meta description.
- [ ] **Each page has a meta description.** Open each page in admin and fill in the SEO section at the bottom.
- [ ] **Each product has a meta description.** Open each product and fill in the SEO section.
- [ ] **Image alt text filled in everywhere.** (Also covered in Images section above.)
- [ ] **No broken links.** Use a tool like [Broken Link Checker](https://www.brokenlinkcheck.com/) or manually verify all links (see link list in `docs/BUILD-PLAN.md` section 5.6).

---

## Performance

- [ ] **Page speed tested.** Run the homepage, a product page, and the quiz page through [PageSpeed Insights](https://pagespeed.web.dev/). Aim for a score above 80 on mobile.
- [ ] **Images optimized.** All images are compressed (under 300KB each). See `docs/IMAGE-CHECKLIST.md` for optimization tips.
- [ ] **No render-blocking issues.** The theme loads CSS in the head and JS at the bottom of the body, which is correct. Verify no third-party apps introduce render-blocking scripts.

---

## Accessibility

- [ ] **Skip-to-content link works.** Tab on any page and verify "Skip to content" appears and jumps to main content.
- [ ] **All images have alt text.**
- [ ] **Form inputs have labels.** The quiz uses `<legend>` and `<label>` elements correctly.
- [ ] **Color contrast passes.** The theme's default palette (dark text on light background) should pass WCAG AA. Verify with browser dev tools or [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) if you change colors.
- [ ] **Keyboard navigation works.** Tab through the quiz, cart page tour, and pre-checkout modal. Verify all interactive elements are reachable and Escape closes modals/tooltips.
- [ ] **ARIA attributes present.** The theme includes `aria-label`, `aria-controls`, `aria-expanded`, `role`, and `aria-live` attributes. Verify they render correctly in the browser.

---

## Security

- [ ] **SSL certificate active.** Green padlock visible on all pages.
- [ ] **Password protection OFF (when ready to launch).** Online Store > Preferences > uncheck "Restrict access to visitors with the password."
- [ ] **Admin accounts reviewed.** Settings > Users and permissions. Remove any accounts that should not have access.
- [ ] **Two-factor authentication enabled.** Enable 2FA on the store owner account and all staff accounts.

---

## Soft Launch (Friends and Family)

- [ ] **Share the store with 5-10 trusted people.**
- [ ] **Ask testers to complete the quiz and place an order.**
- [ ] **Collect feedback on:**
  - [ ] Product descriptions clarity.
  - [ ] Quiz recommendation accuracy.
  - [ ] Checkout flow smoothness.
  - [ ] Pre-checkout modal helpfulness.
  - [ ] Mobile experience.
  - [ ] Overall trust and comfort level.
- [ ] **Fix any issues identified during soft launch.**
- [ ] **Confirm orders are fulfilled correctly and emails are sent.**

---

## Final Go-Live Steps

1. [ ] Remove password protection.
2. [ ] Verify custom domain resolves correctly with HTTPS.
3. [ ] Place one final real test order from an incognito browser and complete the full purchase.
4. [ ] Verify order confirmation email, fulfillment email, and (if applicable) digital download link.
5. [ ] Announce the store.

---

## Post-Launch Monitoring (First 7 Days)

After launch, monitor these daily for the first week:

- [ ] **Orders dashboard.** Check for incoming orders in Shopify Admin.
- [ ] **Abandoned checkouts.** Review abandoned checkout rate and ensure recovery emails are sending.
- [ ] **Customer messages.** Respond to any customer inquiries promptly (check Shopify Inbox and email).
- [ ] **Analytics.** Monitor traffic sources, conversion rate, and top-viewed pages.
- [ ] **Inventory levels.** Track stock to avoid overselling.
- [ ] **Site uptime.** Verify the store loads correctly each day.
- [ ] **Payment processing.** Confirm payouts are processing in Shopify Payments > Payouts.
