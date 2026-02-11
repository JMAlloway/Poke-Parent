# Build Plan -- Poke Parent Shop

A step-by-step plan for going from a fresh Shopify account to a live store using the Poke Parent Shop custom theme.

---

## Phase 1: Shopify Admin Setup

### 1.1 Create the Shopify Store

1. Sign up at [shopify.com](https://www.shopify.com/) and create a new store.
2. Choose the **Basic Shopify** plan (~$39/month). This is sufficient for launch. You can upgrade later if needed.
3. Complete the initial setup wizard (store name, address, currency = USD).

### 1.2 Install the Theme

**Option A -- Upload as ZIP:**
1. Zip the entire theme directory (the folder containing `layout/`, `sections/`, `templates/`, `assets/`, `config/`, `snippets/`, `locales/`, and `extensions/`).
2. In Shopify Admin, go to **Online Store > Themes**.
3. Click **Add theme > Upload zip file** and select your ZIP.
4. Once uploaded, click **Publish** to make it your active theme.

**Option B -- Shopify CLI (for developers):**
1. Install the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli).
2. Authenticate with `shopify auth login --store your-store.myshopify.com`.
3. From the theme root directory, run `shopify theme push`.
4. Publish the theme via Shopify Admin.

### 1.3 Create Products

Create five products in **Shopify Admin > Products > Add product**:

#### Bundle Products

| Product Name | Handle (URL slug) | Price | Type |
|---|---|---|---|
| Starter Explorer | `starter-explorer` | $54.99 | Bundle |
| Growing Collector | `growing-collector` | $84.99 | Bundle |
| Confident Collector | `confident-collector` | $119.99 | Bundle |

#### Add-On Products

| Product Name | Handle (URL slug) | Price | Type |
|---|---|---|---|
| Extra Sleeves Pack | `extra-sleeves` | $6.99 | Add-On |
| Binder Upgrade | `binder-upgrade` | $14.99 | Add-On |

**For each bundle product, fill in the description with what is included.** The theme also supports metafields (see Section 1.6 below), which provide a richer display on the product page.

### 1.4 Create Collections

Go to **Shopify Admin > Products > Collections** and create two collections:

| Collection Name | Handle | Type | Rules |
|---|---|---|---|
| Bundles | `bundles` | Automated | Product type is equal to "Bundle" |
| Add-Ons | `add-ons` | Automated | Product type is equal to "Add-On" |

Set the **Product type** field on each product (Step 1.3) to either "Bundle" or "Add-On" so products automatically appear in the correct collection.

### 1.5 Create Pages

Go to **Shopify Admin > Online Store > Pages** and create the following pages:

| Page Title | Handle (auto-generated) | Template Assignment |
|---|---|---|
| Find Your Bundle (Quiz) | `quiz` | `page.quiz` |
| Parent Guide Hub | `parent-guide-hub` | `page.parent-guide-hub` |
| What Are Booster Packs? | `pack-types` | `page.pack-types` |
| Pokemon 101 for Parents | `pokemon-101` | Default (`page`) |
| What to Expect from Packs | `what-to-expect-from-packs` | Default (`page`) |
| Card Protection Basics | `card-protection-basics` | Default (`page`) |
| Grading Explained Calmly | `grading-explained` | Default (`page`) |
| Avoiding Fakes and Safe Buying | `avoiding-fakes` | Default (`page`) |
| About / Our Story | `about` | Default (`page`) |
| Affiliate Disclosure | `affiliate-disclosure` | Default (`page`) |

**How to assign a page template:**
1. Open the page in Shopify Admin.
2. In the right sidebar, find the **Theme template** dropdown.
3. Select the appropriate template (e.g., `page.quiz` for the quiz page).
4. Save.

**Important:** The handles must match exactly what the theme links to. Shopify auto-generates handles from the page title, but double-check them. The header links to `/pages/quiz`, `/pages/parent-guide-hub`, and `/pages/about`. The footer links to all of the above plus `/pages/affiliate-disclosure`.

For the content pages (Pokemon 101, What to Expect from Packs, Card Protection Basics, Grading Explained, Avoiding Fakes), write the content directly in the Shopify rich text editor. The default `page` template will render it using the `main-page.liquid` section.

### 1.6 Set Up Product Metafields

The product template (`product-bundle.liquid`) reads four custom metafields for enhanced product display. To set these up:

1. Go to **Shopify Admin > Settings > Custom data > Products**.
2. Click **Add definition** for each of the following:

| Metafield Name | Namespace & Key | Type | Description |
|---|---|---|---|
| Bundle Summary | `custom.bundle_summary` | Single line text | One-sentence summary shown below the price (e.g., "A gentle introduction to Pokemon cards for kids under 8.") |
| What's Included | `custom.whats_included` | List of single line text values | Each item on its own line. Renders as a bulleted list. |
| Age Note | `custom.age_note` | Single line text | Age-appropriate guidance (e.g., "Best for ages 6-8. Younger children should open packs with a parent.") |
| Care Tips | `custom.care_tips` | Single line text | Brief card care instructions (e.g., "Sleeve your favorites right after opening. Store the binder upright on a shelf.") |

3. After creating the definitions, go to each product and fill in the metafield values under the **Metafields** section at the bottom of the product editor.

**Example metafield values for Starter Explorer:**
- **Bundle Summary:** "A gentle introduction to Pokemon cards -- a few packs to open together, sleeves to protect favorites, and a small binder to start organizing."
- **What's Included:** `4-5 modern booster packs`, `100 penny sleeves`, `Small binder (holds ~60 cards)`, `Parent PDF guide`
- **Age Note:** "Great for ages 5-8. Younger children should open packs with a parent for the best experience."
- **Care Tips:** "Sleeve favorite cards right after opening. Store the binder upright to prevent bending."

### 1.7 Configure Legal Pages

Go to **Shopify Admin > Settings > Policies** and fill in:

- **Shipping policy:** Describe your shipping timeline (1-3 business days to ship, 5-7 days delivery), carriers, and any flat-rate or free shipping thresholds.
- **Refund policy:** Sealed products returnable within 30 days. Opened packs are non-returnable (randomized contents). Unused supplies (binders, sleeves) returnable unused within 30 days.
- **Privacy policy:** Use Shopify's template as a starting point. Customize with your actual data practices.
- **Terms of service:** Standard e-commerce terms. Shopify provides a template.

These pages are automatically available at `/policies/shipping-policy`, `/policies/refund-policy`, and `/policies/privacy-policy`. The footer already links to the first three.

---

## Phase 2: Theme Customization

### 2.1 Upload Logo and Hero Image

1. Go to **Online Store > Themes > Customize** (on your published theme).
2. **Logo:** In the left sidebar, click **Theme settings** (paint palette icon at the bottom). Under **Brand**, upload your logo image. Recommended: transparent PNG, 200px wide.
3. **Hero image:** Navigate to the homepage. Click the **Hero** section. Upload your hero image. Recommended: 1200x800px, warm family-friendly photo (parent and child with Pokemon cards).

### 2.2 Configure Section Settings via Theme Editor

Still in the theme editor, review each section on the homepage:

1. **Hero** -- Edit heading, subtitle, and CTA button text. Defaults are already set but can be customized.
2. **Quiz CTA** -- Edit the quiz call-to-action heading and body text.
3. **Bundle Grid** -- Each bundle card is a block. Verify the product handles match your actual products (`starter-explorer`, `growing-collector`, `confident-collector`).
4. **Founder Story** -- Upload a personal photo. Edit the story text and your name.
5. **Education Hub Teaser** -- Verify the guide card links point to your actual pages.
6. **Honesty Promise** -- Review and customize the promise statements if desired.

### 2.3 Upload Product Photos

For each product in **Shopify Admin > Products**:
1. Open the product.
2. Upload product photos in the **Media** section.
3. The theme uses the featured image (first image) as the main display and shows additional images as thumbnails.
4. See `docs/IMAGE-CHECKLIST.md` for detailed specifications.

### 2.4 Customize Colors and Fonts (Optional)

The theme ships with a carefully chosen palette. To customize:

1. In the theme editor, click **Theme settings** (bottom of left sidebar).
2. Under **Colors**, you can adjust:
   - Primary (warm blue): `#3B82A0`
   - Secondary (soft gold): `#F5C542`
   - Background: `#FAFAF7`
   - Text: `#2D2D2D`
   - Accent (soft green): `#6BBF7A`
3. Under **Typography**, you can change heading and body fonts. Defaults are Nunito (headings) and Open Sans (body).

---

## Phase 3: Apps to Install

### 3.1 Shopify Digital Downloads (Free)

**Purpose:** Deliver the Parent PDF Guide automatically after purchase.

1. Go to **Shopify Admin > Apps > Shopify App Store**.
2. Search for "Shopify Digital Downloads" (by Shopify, free).
3. Install the app.
4. For each bundle product, attach your PDF guide as a digital download.
5. Customers will receive a download link in their order confirmation email.

### 3.2 Email Marketing: Klaviyo or Shopify Email

**Purpose:** Post-purchase follow-up emails, welcome emails for newsletter signups, and promotional campaigns.

**Option A -- Shopify Email (simpler, built-in):**
- Free for the first 10,000 emails/month.
- Go to **Apps > Shopify Email** to set up.
- Good for basic flows: welcome email, post-purchase follow-up.

**Option B -- Klaviyo (more powerful, recommended for growth):**
- Free up to 250 contacts.
- Install from the Shopify App Store.
- Better for automated flows, segmentation, and analytics.
- Integrates deeply with Shopify for abandoned cart recovery.

### 3.3 Analytics: Google Analytics / GA4 (Optional but Recommended)

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com/).
2. In Shopify Admin, go to **Online Store > Preferences**.
3. Paste your GA4 Measurement ID (format: `G-XXXXXXXXXX`) in the Google Analytics field.
4. Enable enhanced e-commerce tracking for purchase funnel insights.

### 3.4 Other Recommended Apps

| App | Purpose | Cost |
|---|---|---|
| Shopify Inbox | Live chat for customer questions | Free |
| Judge.me or Shopify Product Reviews | Customer reviews on product pages | Free tier available |
| Recharge or Bold Subscriptions | Recurring subscription bundles (future) | Paid |

---

## Phase 4: Email Setup

### 4.1 Order Confirmation Email

1. Go to **Shopify Admin > Settings > Notifications**.
2. Edit the **Order confirmation** template.
3. Ensure it includes:
   - Standard order details (items, price, shipping address).
   - If using Digital Downloads app: the PDF download link is automatically inserted.
   - A warm, on-brand message: "Thanks for your order! Your bundle is on its way. In the meantime, check out our Parent Guide Hub for tips on opening packs together."

### 4.2 Post-Purchase Follow-Up (3 Days Later)

Set this up in Klaviyo or Shopify Email as an automated flow:

- **Trigger:** Order fulfilled, 3-day delay.
- **Subject line:** "Your bundle arrived -- here is how to use everything inside"
- **Content:**
  - Quick guide on opening packs together as a family activity.
  - How to use the sleeves, top loaders, and binder included in their bundle.
  - Link to the Parent Guide Hub: `/pages/parent-guide-hub`
  - Link to Card Protection Basics: `/pages/card-protection-basics`
  - Reminder about the PDF guide included with their order.

### 4.3 Welcome Email for Newsletter Signups

- **Trigger:** Customer subscribes to newsletter (footer signup or pop-up).
- **Subject line:** "Welcome to Poke Parent Shop -- here is what we are about"
- **Content:**
  - Brief intro to the shop and its philosophy.
  - Link to the quiz: `/pages/quiz`
  - Link to top guides: Pokemon 101, What to Expect from Packs.
  - Optional: discount code for first purchase (e.g., 10% off).

### 4.4 Abandoned Cart Recovery

- Enable **Shopify's built-in abandoned checkout emails** in Settings > Notifications.
- If using Klaviyo, set up a 3-email abandoned cart flow (1 hour, 24 hours, 72 hours).

---

## Phase 5: Testing and Launch

### 5.1 Test the Quiz Flow End-to-End

1. Navigate to `/pages/quiz`.
2. Click "Let's Go" to start.
3. Answer all 6 questions (including the optional favorite Pokemon).
4. Verify the correct bundle is recommended (see `docs/QUIZ-MAPPING-TABLE.md` for expected results).
5. Click "Add to Cart" and verify the correct product is added.
6. Click "Retake Quiz" and verify the form resets properly.
7. Test override scenarios: select "Under 6" to confirm it always recommends Starter Explorer.

### 5.2 Test Add to Cart and Checkout

1. From the quiz result, click "Add to Cart."
2. Verify you are redirected to `/cart` with the correct product.
3. Verify the cart tour banner appears ("First time here? We have a quick walkthrough...").
4. Click "Proceed to Checkout" and verify the pre-checkout modal appears with shipping, pack randomness, returns, and payment info.
5. Click "Got It -- Proceed to Checkout" and verify you reach Shopify's checkout page.

### 5.3 Test the Guided Tour on Cart Page

1. With items in your cart, click "Show Me the Walkthrough."
2. Verify the tooltip appears on the cart item, then subtotal, then checkout button.
3. Verify Back/Next navigation works.
4. Verify the tour can be dismissed with the X button or Escape key.
5. Verify the tour does not auto-start on repeat visits (localStorage check).

### 5.4 Place a Test Order

1. Enable **Shopify Payments test mode** in Settings > Payments > Shopify Payments > Manage > Enable test mode.
2. Use test credit card numbers (Shopify docs provide these: `4242 4242 4242 4242` etc.).
3. Complete a full purchase.
4. Verify order confirmation email is received.
5. Verify PDF download link works (if using Digital Downloads).
6. Disable test mode before going live.

### 5.5 Check Mobile Responsiveness

Test every page on a mobile device (or browser dev tools at 375px width):

- [ ] Homepage: hero stacks vertically, navigation hamburger works.
- [ ] Quiz page: options are tappable, progress bar visible, result renders cleanly.
- [ ] Product page: gallery and details stack vertically.
- [ ] Cart page: table is readable, tour tooltip positions correctly.
- [ ] Parent Guide Hub: cards reflow into single column.
- [ ] Pack Types page: pack type cards stack vertically.
- [ ] Collection page: product grid becomes single column.

### 5.6 Verify All Links

Walk through every link in the header, footer, and all page content:

**Header links:**
- Home (`/`)
- Find Your Bundle (`/pages/quiz`)
- Bundles (`/collections/bundles`)
- Parent Guides (`/pages/parent-guide-hub`)
- Our Story (`/pages/about`)
- Cart (`/cart`)

**Footer links:**
- Find Your Bundle (`/pages/quiz`)
- All Bundles (`/collections/bundles`)
- Add-Ons (`/collections/add-ons`)
- Parent Guide Hub (`/pages/parent-guide-hub`)
- Pokemon 101 (`/pages/pokemon-101`)
- What to Expect from Packs (`/pages/what-to-expect-from-packs`)
- Card Protection Basics (`/pages/card-protection-basics`)
- Shipping Policy (`/policies/shipping-policy`)
- Returns (`/policies/refund-policy`)
- Privacy (`/policies/privacy-policy`)
- Affiliate Disclosure (`/pages/affiliate-disclosure`)

**In-page links:**
- Parent Guide Hub cards link to all 6 guide pages.
- Bundle grid "View Bundle" buttons link to correct product pages.
- Quiz result links to `/collections/bundles` and `/pages/parent-guide-hub`.

### 5.7 Set Up Shipping Rates

Go to **Shopify Admin > Settings > Shipping and delivery**:

**Recommended for pilot launch -- Flat Rate:**
- Domestic (US): $5.99 flat rate.
- Free shipping over $75 (optional, good marketing incentive).

**Alternative -- Weight-based:**
- Set product weights in the product editor.
- Configure weight-based tiers in shipping settings.
- Use carrier-calculated rates if you have a Shopify Shipping or carrier account.

### 5.8 Configure Taxes

Go to **Shopify Admin > Settings > Taxes and duties**:
1. Confirm your business location.
2. Enable US tax collection. Shopify auto-calculates state taxes based on nexus.
3. If selling in multiple states, review your tax obligations.
4. Prices in this theme are shown as-is; tax is added at checkout (the cart page says "Taxes and shipping calculated at checkout").

### 5.9 Enable Payment Providers

Go to **Shopify Admin > Settings > Payments**:

1. **Shopify Payments:** Complete setup with your business and banking details. This is the primary payment method (credit/debit cards).
2. **PayPal:** Enable PayPal Express Checkout. Shopify auto-creates a PayPal account linked to your store email, or you can connect an existing PayPal Business account.
3. **Shop Pay:** Automatically enabled with Shopify Payments. Provides accelerated checkout.
4. **Apple Pay / Google Pay:** Automatically available through Shopify Payments.

### 5.10 Pre-Launch Final Checks

- [ ] Remove any test orders from the admin.
- [ ] Disable Shopify Payments test mode.
- [ ] Verify all product inventory counts are correct.
- [ ] Ensure product images are uploaded for every product.
- [ ] Review the store from an incognito browser window.
- [ ] Test the store on at least two different devices.
- [ ] Set up a custom domain (see Phase 5.11).

### 5.11 Domain Setup

1. Purchase a domain (e.g., `pokeparentshop.com`) from your preferred registrar (Namecheap, Cloudflare, Google Domains, or directly through Shopify).
2. In **Shopify Admin > Settings > Domains**, click **Connect existing domain** or **Buy new domain**.
3. Update DNS records as instructed (typically an A record pointing to Shopify's IP and a CNAME for `www`).
4. Enable **SSL** -- Shopify provides free SSL certificates. This activates automatically once DNS propagates.
5. Set your primary domain and enable automatic HTTPS redirects.

### 5.12 Soft Launch (Friends and Family)

Before announcing publicly:
1. Share the store URL with 5-10 friends or family members.
2. Ask them to browse, take the quiz, and place a test order (offer free shipping or a discount code).
3. Collect feedback on:
   - Clarity of product descriptions.
   - Quiz experience and recommendation accuracy.
   - Checkout flow and pre-checkout modal.
   - Mobile experience.
4. Fix any issues found.
5. Once confident, remove password protection (Online Store > Preferences > uncheck "Restrict access") and announce publicly.

---

## Timeline Estimate

| Phase | Estimated Time |
|---|---|
| Phase 1: Shopify Admin Setup | 2-4 hours |
| Phase 2: Theme Customization | 1-2 hours |
| Phase 3: Apps to Install | 30-60 minutes |
| Phase 4: Email Setup | 1-2 hours |
| Phase 5: Testing and Launch | 2-4 hours |
| **Total** | **7-13 hours** |

This can be completed over a single weekend if product photos and guide content are already written.
