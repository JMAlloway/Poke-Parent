# Checkout Tour Extension (Shopify Plus Only)

This is a Checkout UI Extension for Shopify Plus merchants that adds a
parent-friendly information panel to the checkout page.

## How to use

### If you're on Shopify Plus:
1. Go to **Settings → Checkout → Customize**
2. Add this as an **App Block** in the order summary area
3. The extension renders collapsible info sections about packs, shipping, returns, and payment

### If you're NOT on Shopify Plus:
Skip this entirely. The Non-Plus guided tour is built into the cart page
(`sections/cart-with-tour.liquid` + `assets/guided-tour.js`) and handles
the same information via:
- A tooltip tour on the cart page
- A pre-checkout interstitial modal

## What it shows
- A note about pack randomness (sets expectations)
- Shipping timeframes
- Returns policy summary
- Payment and tax info
