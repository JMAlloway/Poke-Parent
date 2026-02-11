/**
 * Poké Parent Shop — Bundle Recommendation Quiz
 *
 * Maps parent answers to one of three bundles:
 *   A: "Starter Explorer"   (~$49–59)
 *   B: "Growing Collector"  (~$79–89)
 *   C: "Confident Collector" (~$109–129)
 *
 * Scoring system:
 *   Each answer adds points. Total determines bundle.
 *   0–4 pts  → Bundle A
 *   5–8 pts  → Bundle B
 *   9+ pts   → Bundle C
 *
 * Override rules:
 *   - Under 6 → cap at Bundle A (fewer packs, more protection)
 *   - Budget "low" → cap at Bundle A
 *   - Budget "high" + experience "collecting" → floor at Bundle B
 */

(function () {
  'use strict';

  /* ---------- CONFIG ---------- */

  var SCORING = {
    age:         { under6: 0, '6to8': 1, '9to11': 2, '12plus': 3 },
    enjoyment:   { characters: 0, notsure: 1, collecting: 2, playing: 2 },
    carefulness: { rough: 0, mixed: 1, careful: 2 },
    experience:  { first: 0, some: 2, collecting: 3 },
    budget:      { low: 0, mid: 2, high: 4 }
  };

  var BUNDLES = {
    A: {
      key: 'A',
      name: 'Starter Explorer',
      price: '$49 – $59',
      description: 'A gentle introduction to Pokémon cards. A few packs to open together, sleeves to protect favorites, and a small binder to start organizing.',
      includes: [
        '4–5 modern booster packs',
        '100 penny sleeves',
        'Small binder (holds ~60 cards)',
        'Parent PDF guide'
      ],
      why: ''
    },
    B: {
      key: 'B',
      name: 'Growing Collector',
      price: '$79 – $89',
      description: 'More packs, better supplies, and room to grow. Great for a child who is already into Pokémon and wants to build a real collection.',
      includes: [
        '8–10 modern booster packs',
        '200 penny sleeves',
        '10 semi-rigid top loaders',
        'Binder with side-loading pages',
        'Expanded parent PDF guide'
      ],
      why: ''
    },
    C: {
      key: 'C',
      name: 'Confident Collector',
      price: '$109 – $129',
      description: 'The full experience. Plenty of packs to open, premium protection supplies, a quality binder, and a storage guide to keep everything organized long-term.',
      includes: [
        '12–15 modern booster packs',
        '300 penny sleeves',
        '25 semi-rigid top loaders',
        'Premium binder with side-loading pages',
        'Expanded parent PDF guide',
        'Card storage tips sheet'
      ],
      why: ''
    }
  };

  /* ---------- STATE ---------- */

  var currentStep = 0; // 0 = intro
  var totalSteps = 6;
  var answers = {};

  /* ---------- DOM REFS ---------- */

  var intro      = document.getElementById('quiz-intro');
  var form       = document.getElementById('quiz-form');
  var result     = document.getElementById('quiz-result');
  var resultCard = document.getElementById('quiz-result-card');
  var extrasDiv  = document.getElementById('quiz-extras');
  var progressBar, progressText;

  if (!form) return; // Not on quiz page

  var steps    = form.querySelectorAll('.quiz-step');
  var nextBtn  = form.querySelector('.quiz-next');
  var backBtn  = form.querySelector('.quiz-back');
  var startBtn = document.querySelector('.quiz-start-btn');
  var addToCartBtn = document.getElementById('quiz-add-to-cart');
  var retakeBtn    = document.querySelector('.quiz-retake');

  progressBar  = form.querySelector('.quiz-progress-bar');
  progressText = form.querySelector('.quiz-progress-text');

  /* ---------- HELPERS ---------- */

  function showStep(n) {
    currentStep = n;
    for (var i = 0; i < steps.length; i++) {
      steps[i].hidden = (i !== n - 1);
    }
    backBtn.hidden = (n <= 1);
    nextBtn.textContent = (n === totalSteps) ? 'See My Recommendation' : 'Next';

    var pct = Math.round((n / totalSteps) * 100);
    progressBar.style.width = pct + '%';
    progressText.textContent = 'Question ' + n + ' of ' + totalSteps;
    form.querySelector('[role="progressbar"]').setAttribute('aria-valuenow', n);
  }

  function getSelectedValue(name) {
    var el = form.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : null;
  }

  function collectAnswers() {
    answers = {
      age:         getSelectedValue('age'),
      enjoyment:   getSelectedValue('enjoyment'),
      carefulness: getSelectedValue('carefulness'),
      experience:  getSelectedValue('experience'),
      budget:      getSelectedValue('budget'),
      favorite:    (document.getElementById('quiz-favorite') || {}).value || ''
    };
    try { localStorage.setItem('poke_parent_quiz', JSON.stringify(answers)); } catch (e) {}
  }

  /* ---------- RECOMMENDATION ENGINE ---------- */

  function recommend(ans) {
    // Calculate score
    var score = 0;
    score += (SCORING.age[ans.age] || 0);
    score += (SCORING.enjoyment[ans.enjoyment] || 0);
    score += (SCORING.carefulness[ans.carefulness] || 0);
    score += (SCORING.experience[ans.experience] || 0);
    score += (SCORING.budget[ans.budget] || 0);

    // Determine base bundle
    var bundle;
    if (score <= 4) {
      bundle = BUNDLES.A;
    } else if (score <= 8) {
      bundle = BUNDLES.B;
    } else {
      bundle = BUNDLES.C;
    }

    // Override rules
    if (ans.age === 'under6') {
      bundle = BUNDLES.A; // Always cap at A for under-6
    }
    if (ans.budget === 'low') {
      bundle = BUNDLES.A; // Respect budget constraint
    }
    if (ans.budget === 'high' && ans.experience === 'collecting' && bundle.key === 'A') {
      bundle = BUNDLES.B; // Floor at B for experienced + high budget
    }

    // Build "why" explanation
    var reasons = [];
    if (ans.age === 'under6') {
      reasons.push('Since they\'re under 6, we kept things simple with fewer packs and focused on protection.');
    } else if (ans.age === '6to8') {
      reasons.push('Great age to start — this bundle gives them enough to explore without being overwhelming.');
    }
    if (ans.experience === 'first') {
      reasons.push('Since these are their first cards, we picked a bundle that introduces everything gradually.');
    } else if (ans.experience === 'collecting') {
      reasons.push('They already have cards, so this bundle adds to their collection with more variety.');
    }
    if (ans.budget === 'low') {
      reasons.push('We kept it within your $40–$60 budget.');
    }
    if (ans.carefulness === 'rough') {
      reasons.push('We\'ve included extra protection since they\'re rough with their things.');
    }

    bundle.why = reasons.join(' ');

    // Add-on suggestions
    var addons = [];
    if (ans.enjoyment === 'playing') {
      addons.push({
        type: 'deck',
        label: 'Starter Deck Add-On',
        reason: 'Since they like playing the card game, a starter deck teaches them the rules with a ready-to-play set.'
      });
    }
    if (ans.carefulness === 'rough') {
      addons.push({
        type: 'sleeves',
        label: 'Extra Sleeves Pack',
        reason: 'Extra sleeves are helpful for rough handlers — they\'ll go through them faster.'
      });
    }

    // Favorite Pokémon note
    var favNote = '';
    if (ans.favorite && ans.favorite.trim().length > 0) {
      favNote = 'Your child\'s favorite is ' + ans.favorite.trim() +
        '. Check the set spotlight pages in our Parent Guide Hub to see which current sets might feature them!';
    }

    return { bundle: bundle, addons: addons, favNote: favNote, score: score };
  }

  /* ---------- RENDER RESULT ---------- */

  function renderResult(rec) {
    var b = rec.bundle;
    var html = '';
    html += '<div class="result-bundle-badge">' + b.name + '</div>';
    html += '<p class="result-bundle-price">' + b.price + '</p>';
    html += '<p class="result-bundle-desc">' + b.description + '</p>';
    if (b.why) {
      html += '<div class="result-why"><strong>Why this one?</strong> ' + b.why + '</div>';
    }
    html += '<h3>What\'s included:</h3><ul class="result-includes">';
    for (var i = 0; i < b.includes.length; i++) {
      html += '<li>' + b.includes[i] + '</li>';
    }
    html += '</ul>';
    resultCard.innerHTML = html;

    // Add-ons
    var extrasHtml = '';
    if (rec.addons.length > 0) {
      extrasHtml += '<h3>You might also want:</h3>';
      for (var j = 0; j < rec.addons.length; j++) {
        var a = rec.addons[j];
        extrasHtml += '<div class="result-addon">';
        extrasHtml += '<strong>' + a.label + '</strong>';
        extrasHtml += '<p>' + a.reason + '</p>';
        extrasHtml += '</div>';
      }
    }
    if (rec.favNote) {
      extrasHtml += '<div class="result-fav-note"><p>' + rec.favNote + '</p></div>';
    }
    extrasDiv.innerHTML = extrasHtml;

    // Store for add-to-cart
    addToCartBtn.dataset.bundle = b.key;
  }

  /* ---------- ADD TO CART (Shopify AJAX API) ---------- */

  function getHandleForBundle(key) {
    // Read from section settings embedded in the page, or use defaults
    var map = {
      A: 'starter-explorer',
      B: 'growing-collector',
      C: 'confident-collector'
    };
    // Try to read from data attributes on the quiz section (set by Liquid)
    var section = document.querySelector('.quiz-section');
    if (section) {
      if (section.dataset.bundleA) map.A = section.dataset.bundleA;
      if (section.dataset.bundleB) map.B = section.dataset.bundleB;
      if (section.dataset.bundleC) map.C = section.dataset.bundleC;
    }
    return map[key] || map.A;
  }

  function addBundleToCart(bundleKey) {
    var handle = getHandleForBundle(bundleKey);

    // Fetch product JSON to get variant ID
    fetch('/products/' + handle + '.js')
      .then(function (res) { return res.json(); })
      .then(function (product) {
        var variantId = product.variants[0].id;
        return fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            items: [{ id: variantId, quantity: 1 }]
          })
        });
      })
      .then(function (res) { return res.json(); })
      .then(function () {
        window.location.href = '/cart';
      })
      .catch(function (err) {
        console.error('Add to cart failed:', err);
        alert('Something went wrong adding to cart. Please try the product page directly.');
      });
  }

  /* ---------- EVENT LISTENERS ---------- */

  if (startBtn) {
    startBtn.addEventListener('click', function () {
      intro.hidden = true;
      form.hidden = false;
      showStep(1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      // Validate current step (except Q6 which is optional)
      if (currentStep < totalSteps) {
        var stepFields = steps[currentStep - 1].querySelectorAll('input[type="radio"]');
        if (stepFields.length > 0) {
          var hasSelection = false;
          for (var i = 0; i < stepFields.length; i++) {
            if (stepFields[i].checked) { hasSelection = true; break; }
          }
          if (!hasSelection) {
            steps[currentStep - 1].classList.add('quiz-step-shake');
            setTimeout(function () { steps[currentStep - 1].classList.remove('quiz-step-shake'); }, 400);
            return;
          }
        }
        showStep(currentStep + 1);
      } else {
        // Final step — show result
        collectAnswers();
        var rec = recommend(answers);
        renderResult(rec);
        form.hidden = true;
        result.hidden = false;
      }
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', function () {
      if (currentStep > 1) showStep(currentStep - 1);
    });
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function () {
      var key = addToCartBtn.dataset.bundle || 'A';
      addBundleToCart(key);
    });
  }

  if (retakeBtn) {
    retakeBtn.addEventListener('click', function () {
      result.hidden = true;
      form.hidden = false;
      // Reset form
      form.reset();
      showStep(1);
    });
  }

  // Keyboard: Enter key advances on radio selection
  if (form) {
    form.addEventListener('change', function (e) {
      if (e.target.type === 'radio') {
        // Small delay so user sees the selection
        setTimeout(function () {
          if (currentStep < totalSteps) {
            nextBtn.click();
          }
        }, 250);
      }
    });
  }

})();
