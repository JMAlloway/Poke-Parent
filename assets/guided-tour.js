/**
 * Poké Parent Shop — Guided Tour & Pre-Checkout Modal
 *
 * Two paths:
 *   A) Shopify Plus: Uses Checkout Extensibility (see /extensions/ directory).
 *   B) Non-Plus (this file): Cart page tour + pre-checkout interstitial modal.
 *
 * Features:
 *   - Step-by-step tooltip tour on the cart page
 *   - Pre-checkout modal with key info (shipping, randomness, returns, payment)
 *   - Keyboard accessible (Tab, Escape, Enter)
 *   - ARIA roles and live regions
 *   - Remembers dismissal via localStorage so it doesn't repeat every visit
 */

(function () {
  'use strict';

  /* ========== GUIDED TOUR (TOOLTIP STEPPER) ========== */

  var TOUR_STEPS = [
    {
      target: '[data-tour-target="cart-item"]',
      title: 'Your Bundle',
      body: 'Here\'s what you\'re buying. Each bundle includes packs, protection supplies, and a parent guide. Click the product name to see full details.'
    },
    {
      target: '[data-tour-target="cart-total"]',
      title: 'Subtotal',
      body: 'This is your subtotal before tax and shipping. Tax is calculated at checkout based on your location. Shipping is calculated on the next page.'
    },
    {
      target: '[data-tour-target="cart-checkout"]',
      title: 'Checkout',
      body: 'When you click this, you\'ll go to Shopify\'s secure checkout. You can pay with credit card, debit, or PayPal. Your information is encrypted and safe.'
    }
  ];

  var tourStartBtn = document.getElementById('start-cart-tour');
  var currentTourStep = 0;
  var tooltip = null;

  function createTooltip() {
    if (tooltip) return;
    tooltip = document.createElement('div');
    tooltip.className = 'tour-tooltip';
    tooltip.setAttribute('role', 'dialog');
    tooltip.setAttribute('aria-live', 'polite');
    tooltip.innerHTML =
      '<div class="tour-tooltip-content">' +
        '<h4 class="tour-tooltip-title"></h4>' +
        '<p class="tour-tooltip-body"></p>' +
        '<div class="tour-tooltip-nav">' +
          '<button type="button" class="btn btn-secondary btn-sm tour-prev">Back</button>' +
          '<span class="tour-counter"></span>' +
          '<button type="button" class="btn btn-primary btn-sm tour-next">Next</button>' +
        '</div>' +
        '<button type="button" class="tour-dismiss" aria-label="Close tour">&times;</button>' +
      '</div>';
    document.body.appendChild(tooltip);

    tooltip.querySelector('.tour-next').addEventListener('click', nextTourStep);
    tooltip.querySelector('.tour-prev').addEventListener('click', prevTourStep);
    tooltip.querySelector('.tour-dismiss').addEventListener('click', dismissTour);
  }

  function positionTooltip(targetEl) {
    if (!targetEl || !tooltip) return;
    var rect = targetEl.getBoundingClientRect();
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    tooltip.style.position = 'absolute';
    tooltip.style.top = (rect.bottom + scrollY + 12) + 'px';
    tooltip.style.left = Math.max(16, rect.left) + 'px';
  }

  function showTourStep(index) {
    if (index < 0 || index >= TOUR_STEPS.length) { dismissTour(); return; }
    currentTourStep = index;
    var step = TOUR_STEPS[index];
    var target = document.querySelector(step.target);

    tooltip.querySelector('.tour-tooltip-title').textContent = step.title;
    tooltip.querySelector('.tour-tooltip-body').textContent = step.body;
    tooltip.querySelector('.tour-counter').textContent = (index + 1) + ' / ' + TOUR_STEPS.length;
    tooltip.querySelector('.tour-prev').hidden = (index === 0);
    tooltip.querySelector('.tour-next').textContent = (index === TOUR_STEPS.length - 1) ? 'Done' : 'Next';
    tooltip.hidden = false;

    if (target) {
      target.classList.add('tour-highlight');
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      positionTooltip(target);
    }

    // Remove highlight from other targets
    TOUR_STEPS.forEach(function (s, i) {
      if (i !== index) {
        var el = document.querySelector(s.target);
        if (el) el.classList.remove('tour-highlight');
      }
    });

    tooltip.querySelector('.tour-next').focus();
  }

  function nextTourStep() { showTourStep(currentTourStep + 1); }
  function prevTourStep() { showTourStep(currentTourStep - 1); }

  function dismissTour() {
    if (tooltip) tooltip.hidden = true;
    TOUR_STEPS.forEach(function (s) {
      var el = document.querySelector(s.target);
      if (el) el.classList.remove('tour-highlight');
    });
    try { localStorage.setItem('poke_parent_tour_seen', '1'); } catch (e) {}
  }

  function startTour() {
    createTooltip();
    showTourStep(0);
  }

  if (tourStartBtn) {
    tourStartBtn.addEventListener('click', startTour);

    // Auto-show for first-time visitors
    try {
      if (!localStorage.getItem('poke_parent_tour_seen')) {
        // Show banner but don't auto-start (let them click)
      }
    } catch (e) {}
  }

  /* ========== PRE-CHECKOUT MODAL (NON-PLUS PATH) ========== */

  var modal = document.getElementById('pre-checkout-modal');
  var checkoutBtn = document.getElementById('cart-checkout-btn');
  var modalProceed = document.getElementById('modal-proceed');
  var modalClose = modal ? modal.querySelector('.modal-close') : null;
  var modalBackdrop = modal ? modal.querySelector('.modal-backdrop') : null;

  function openModal(e) {
    // Only intercept if user hasn't seen it this session
    try {
      if (sessionStorage.getItem('poke_parent_checkout_seen')) return;
    } catch (ex) {}

    if (modal && e) {
      e.preventDefault();
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      // Focus trap
      if (modalProceed) modalProceed.focus();
    }
  }

  function closeModal() {
    if (modal) {
      modal.hidden = true;
      document.body.style.overflow = '';
    }
  }

  function proceedToCheckout() {
    try { sessionStorage.setItem('poke_parent_checkout_seen', '1'); } catch (e) {}
    closeModal();
    // Submit the form
    var form = document.querySelector('.cart-form');
    if (form) {
      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'checkout';
      input.value = '';
      form.appendChild(input);
      form.submit();
    }
  }

  if (checkoutBtn && modal) {
    checkoutBtn.addEventListener('click', openModal);
  }
  if (modalProceed) {
    modalProceed.addEventListener('click', proceedToCheckout);
  }
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModal);
  }

  // Keyboard: Escape to close modal
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (modal && !modal.hidden) closeModal();
      if (tooltip && !tooltip.hidden) dismissTour();
    }
  });

})();
