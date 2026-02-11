# Image Checklist -- Poke Parent Shop

A complete checklist of every image slot in the theme, with recommended dimensions, content guidance, and legal notes for using Pokemon-related imagery.

---

## Legal Guidance: Using Pokemon Images

**This is critical. Read before uploading any images.**

Pokemon, all character names, and all related visual assets are trademarks and copyrights of Nintendo, Creatures Inc., and GAME FREAK Inc. The Pokemon Company International controls licensing for the trading card game.

### What You CAN Use

- **Your own photos:** Photos you personally take of sealed products, opened packs, cards in binders, supplies, your workspace, and your family (with consent). This is the safest and most authentic approach.
- **Official press images:** The Pokemon Company provides press assets through their [media library](https://press.pokemon.com/) for editorial and promotional use. Use these where permitted and follow their usage guidelines.
- **Product manufacturer images:** Some product manufacturers (e.g., Ultra PRO for binders and sleeves) provide promotional images for retailers. Check their retailer programs.
- **Shopify product photography:** Take your own flat-lay or lifestyle photos of the physical products you sell.

### What You CANNOT Use

- **Screenshots from the Pokemon website or app.** These are copyrighted.
- **Images from fan sites, wikis, or databases** (Bulbapedia, Serebii, PokemonDB, etc.). These sites either hold their own copyrights on compiled images or host copyrighted Pokemon Company assets.
- **Scanned card images from third-party sites.** If you want to show a card, photograph your own physical copy.
- **Art ripped from the games or anime.**
- **Other stores' product photos.**

### Best Practice

Take your own photos. This is the most legally safe approach and creates authentic, trustworthy content that matches the shop's parent-friendly tone. A simple setup with natural light, a clean background, and your actual products will look better than stock imagery.

---

## Image Slots by Section

### 1. Theme Settings: Logo

| Detail | Value |
|---|---|
| **Location in admin** | Theme settings > Brand > Logo |
| **Setting ID** | `settings.logo` (image_picker) |
| **Rendered in** | `sections/header.liquid` |
| **Recommended dimensions** | 200px wide, any height (aspect ratio preserved) |
| **Format** | PNG with transparent background |
| **Content** | Your store logo. If not uploaded, the store name ("Poke Parent Shop") renders as styled text. |
| **Notes** | Keep it simple and readable at small sizes. The header renders it at 40px height on desktop. |

---

### 2. Homepage: Hero Image

| Detail | Value |
|---|---|
| **Location in admin** | Theme editor > Homepage > Hero section > "Hero image" |
| **Setting ID** | `section.settings.image` (image_picker) |
| **Rendered in** | `sections/hero.liquid` |
| **Recommended dimensions** | 1200 x 800px (3:2 aspect ratio) |
| **Format** | JPG or WebP, optimized for web (under 300KB if possible) |
| **Alt text field** | `section.settings.image_alt` (default: "A parent and child looking at Pokemon cards together") |
| **Content** | A warm, family-friendly photo. Ideal: a parent and child opening Pokemon packs together at a table, or a child excitedly looking at cards. Avoid: dark/moody lighting, messy backgrounds, visible brand logos of competitors. |
| **Fallback** | If no image is uploaded, a gray placeholder with the text "Upload a warm, family-friendly hero image in the theme editor." is shown. |

---

### 3. Homepage: Founder Story Photo

| Detail | Value |
|---|---|
| **Location in admin** | Theme editor > Homepage > Founder Story section > "Photo" |
| **Setting ID** | `section.settings.image` (image_picker) |
| **Rendered in** | `sections/founder-story.liquid` |
| **Recommended dimensions** | 400 x 500px (4:5 portrait aspect ratio) |
| **Format** | JPG or WebP |
| **Alt text field** | `section.settings.image_alt` (default: "The founder of Poke Parent Shop") |
| **Content** | A friendly, approachable photo of the founder. Casual and authentic -- not a corporate headshot. Ideally shows personality (e.g., holding Pokemon cards, sitting at a table with supplies). |
| **Fallback** | Gray placeholder box (250x300px) with "Upload a photo in the theme editor." |

---

### 4. Bundle Products: Featured Image (x3)

One image per bundle product (Starter Explorer, Growing Collector, Confident Collector).

| Detail | Value |
|---|---|
| **Location in admin** | Shopify Admin > Products > [Product] > Media |
| **Rendered in** | `sections/product-bundle.liquid` (main image) and `sections/main-collection.liquid` (collection grid) |
| **Recommended dimensions** | 600 x 600px (1:1 square) for consistency in the collection grid; the product page renders at 600px wide |
| **Format** | JPG or WebP |
| **Content** | A flat-lay or styled photo of the physical bundle contents laid out neatly. Show all items: packs, sleeves, binder, top loaders (if included), and the PDF guide (printed or on a tablet screen). Use a clean, light background. |
| **Alt text** | Set in the product media alt text field. E.g., "Starter Explorer bundle contents: 4 booster packs, penny sleeves, small binder, and parent guide." |

**Checklist for each bundle:**

- [ ] **Starter Explorer** (handle: `starter-explorer`)
  - Featured image: Full bundle laid out
  - Additional images (optional): Close-up of packs, close-up of binder, close-up of sleeves

- [ ] **Growing Collector** (handle: `growing-collector`)
  - Featured image: Full bundle laid out
  - Additional images (optional): Close-up of packs, binder open showing side-loading pages, top loaders

- [ ] **Confident Collector** (handle: `confident-collector`)
  - Featured image: Full bundle laid out
  - Additional images (optional): Close-up of premium binder, multiple pack varieties, storage tips sheet

---

### 5. Bundle Products: Additional Thumbnail Images

| Detail | Value |
|---|---|
| **Location in admin** | Shopify Admin > Products > [Product] > Media (add multiple images) |
| **Rendered in** | `sections/product-bundle.liquid` (thumbnail strip below main image, shown if product has more than 1 image) |
| **Recommended dimensions** | 600 x 600px (same as featured, they are rendered at 120px as thumbnails) |
| **Format** | JPG or WebP |
| **Content** | Close-ups of individual items, different angles, lifestyle shots of a child using the supplies. |

---

### 6. Add-On Products: Featured Image (x2)

One image per add-on product (Extra Sleeves, Binder Upgrade).

| Detail | Value |
|---|---|
| **Location in admin** | Shopify Admin > Products > [Product] > Media |
| **Rendered in** | `sections/product-bundle.liquid` (add-on cards at bottom of product page, rendered at 200px wide) and `sections/main-collection.liquid` (collection grid) |
| **Recommended dimensions** | 400 x 400px (1:1 square) |
| **Format** | JPG or WebP |
| **Content** | Clean photo of the add-on item. |

**Checklist:**

- [ ] **Extra Sleeves Pack** (handle: `extra-sleeves`)
  - Photo of the sleeves package or a fanned-out display of penny sleeves

- [ ] **Binder Upgrade** (handle: `binder-upgrade`)
  - Photo of the premium binder, ideally open to show side-loading pages with a few cards sleeved inside

---

### 7. Pack Types Guide: Product Type Photos (x5)

Each pack type entry on the Pack Types page (`/pages/pack-types`) has an image slot.

| Detail | Value |
|---|---|
| **Location in admin** | Theme editor > Pack Types page > Pack Types Guide section > Each block > "Product photo" |
| **Setting ID** | `block.settings.image` (image_picker) |
| **Rendered in** | `sections/pack-types.liquid` |
| **Recommended dimensions** | 400 x 400px (displayed in a 300px-wide column) |
| **Format** | JPG or WebP |
| **Alt text** | Auto-set to the block title (e.g., "Single Booster Pack") |
| **Attribution field** | `block.settings.image_attribution` (text, optional) |

**Checklist:**

- [ ] **Single Booster Pack** (block anchor: `single-pack`)
  - Photo of a single sealed booster pack (front and back visible)
  - Attribution: Add if using a press image

- [ ] **Booster Bundle** (block anchor: `booster-bundle`)
  - Photo of a booster bundle box (6-pack box)
  - Attribution: Add if using a press image

- [ ] **Elite Trainer Box (ETB)** (block anchor: `etb`)
  - Photo of an ETB with contents partially visible or laid out next to it
  - Attribution: Add if using a press image

- [ ] **Booster Box** (block anchor: `booster-box`)
  - Photo of a sealed 36-pack booster box
  - Attribution: Add if using a press image

- [ ] **Build & Battle / Starter Deck** (block anchor: `starter-deck`)
  - Photo of a starter deck or Build & Battle kit
  - Attribution: Add if using a press image

---

### 8. Set Spotlight Images

The `set-spotlight.liquid` snippet is used to showcase specific Pokemon TCG sets. It accepts an image parameter when rendered.

| Detail | Value |
|---|---|
| **Location in admin** | Depends on where the snippet is rendered (typically via page content or a section that invokes it) |
| **Snippet parameter** | `image` (passed as a Liquid variable) |
| **Rendered in** | `snippets/set-spotlight.liquid` |
| **Recommended dimensions** | 400 x 400px (displayed in a 200px-wide column) |
| **Format** | JPG or WebP |
| **Alt text parameter** | `image_alt` (passed as a Liquid variable) |
| **Attribution parameter** | `image_attribution` (text, rendered below the image in small gray text) |
| **Content** | A photo of example cards from the set, or the set's booster pack art. Photograph your own cards from the set. Do not use scanned images from databases. |

**How to add attribution:** When rendering the snippet, pass the `image_attribution` parameter:
```liquid
{% render 'set-spotlight',
  title: 'Scarlet & Violet -- Phantasmal Flames',
  summary: 'A recent set with colorful ghost and fire-themed Pokemon illustrations.',
  good_for: 'Collectors who love unique art, kids who like fire and ghost types',
  image: block.settings.set_image,
  image_alt: 'Example cards from the Phantasmal Flames set',
  image_attribution: 'Photo: Our own collection'
%}
```

---

### 9. Collection Grid: Product Images

| Detail | Value |
|---|---|
| **Location in admin** | These come from the product featured images (see items 4 and 6 above) |
| **Rendered in** | `sections/main-collection.liquid` |
| **Recommended dimensions** | 400 x 400px (1:1 square, rendered at 400px wide in the grid) |
| **Fallback** | If a product has no image, a gray placeholder reading "No image yet" is shown. |

No additional action needed -- the collection grid automatically pulls from each product's featured image.

---

## Complete Image Upload Checklist

Use this checklist to track your progress. Every image slot in the theme is listed.

### Theme-Level Images
- [ ] Store logo (Theme settings > Brand)

### Homepage Section Images
- [ ] Hero image (Hero section)
- [ ] Founder photo (Founder Story section)

### Product Images (Shopify Admin > Products)
- [ ] Starter Explorer -- featured image
- [ ] Starter Explorer -- additional images (optional, 2-3 recommended)
- [ ] Growing Collector -- featured image
- [ ] Growing Collector -- additional images (optional, 2-3 recommended)
- [ ] Confident Collector -- featured image
- [ ] Confident Collector -- additional images (optional, 2-3 recommended)
- [ ] Extra Sleeves Pack -- featured image
- [ ] Binder Upgrade -- featured image

### Pack Types Guide Images (Theme editor > Pack Types page)
- [ ] Single Booster Pack photo
- [ ] Booster Bundle photo
- [ ] Elite Trainer Box photo
- [ ] Booster Box photo
- [ ] Build & Battle / Starter Deck photo

### Set Spotlight Images (as needed)
- [ ] Set spotlight image for each featured set (number varies based on content)

**Total minimum images needed: 15**
**Total with optional additional product images: ~24**

---

## Image Optimization Tips

1. **File size:** Keep images under 300KB each. Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress without visible quality loss.
2. **Format:** JPG for photographs, PNG for logos with transparency, WebP for best compression (Shopify serves WebP automatically via its CDN when the browser supports it).
3. **Naming:** Use descriptive filenames: `starter-explorer-bundle-contents.jpg`, not `IMG_4523.jpg`. This helps with SEO and organization.
4. **Alt text:** Always fill in alt text for accessibility and SEO. Describe what the image shows, not what it is (e.g., "Four Pokemon booster packs, a stack of penny sleeves, and a blue binder on a white table" instead of "Product photo").
5. **Consistency:** Use the same background, lighting, and style across all product photos. A white or light wood background with natural lighting works well and matches the theme's warm, clean aesthetic.
6. **Loading behavior:** The theme uses `loading="eager"` for above-the-fold images (hero, logo) and `loading="lazy"` for everything below the fold. This is already handled in the code -- no action needed.

---

## Photography Setup Recommendations

For consistent, professional-looking product photos on a budget:

1. **Surface:** A clean white poster board or light wood cutting board.
2. **Lighting:** Natural window light (overcast days are best for even lighting). Place the surface near a large window. Use a white sheet of paper as a bounce reflector on the shadow side.
3. **Camera:** A modern smartphone camera is sufficient. Use portrait mode or the 2x lens for close-ups.
4. **Arrangement:** Lay items out neatly with even spacing. For bundles, fan out the packs slightly and place the binder open behind them. Include the sleeves pack and any other items.
5. **Editing:** Adjust brightness and contrast slightly if needed. Keep edits minimal -- the goal is accurate representation, not glamour shots.

---

## Admin Instructions Summary

### Uploading to Theme Settings (Logo, Hero, Founder Photo)
1. Go to **Online Store > Themes > Customize**.
2. Navigate to the relevant section.
3. Click the image picker field.
4. Upload or select from library.
5. Fill in the alt text field.
6. Save.

### Uploading Product Images
1. Go to **Shopify Admin > Products**.
2. Open the product.
3. In the **Media** section, click **Add** or drag and drop images.
4. Click on each image to set alt text.
5. Drag images to reorder (first image becomes the featured image).
6. Save.

### Uploading Pack Type Images
1. Go to **Online Store > Themes > Customize**.
2. Use the page selector dropdown (top center) to navigate to the Pack Types page.
3. Click on each Pack Type block in the left sidebar.
4. Upload the image in the "Product photo" field.
5. Optionally fill in the "Image attribution" field.
6. Save.

### Adding Image Attribution
The pack-types section and set-spotlight snippet both support an `image_attribution` text field. When filled in, a small gray credit line appears below the image. Use this for:
- Press images: "Image: The Pokemon Company"
- Your own photos: "Photo: [Your Name]" or leave blank
- Manufacturer images: "Image: Ultra PRO" or similar
