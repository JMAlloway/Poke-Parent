# Quiz Mapping Table -- Poke Parent Shop

Complete reference for how the Bundle Recommendation Quiz maps parent answers to product recommendations.

**Source file:** `assets/quiz.js`

---

## Questions and Answer Options

The quiz has 6 steps. Questions 1-5 are required and scored. Question 6 is optional (text input, not scored).

### Question 1: How old is the child?

| Answer | Value | Points |
|---|---|---|
| Under 6 | `under6` | 0 |
| 6 - 8 | `6to8` | 1 |
| 9 - 11 | `9to11` | 2 |
| 12+ | `12plus` | 3 |

### Question 2: How does your child enjoy Pokemon?

| Answer | Value | Points |
|---|---|---|
| Playing the card game | `playing` | 2 |
| Collecting and organizing | `collecting` | 2 |
| They just love the characters | `characters` | 0 |
| Not sure yet | `notsure` | 1 |

### Question 3: How careful is your child with their things?

| Answer | Value | Points |
|---|---|---|
| Rough | `rough` | 0 |
| Mixed | `mixed` | 1 |
| Very careful | `careful` | 2 |

### Question 4: What is their experience with Pokemon cards?

| Answer | Value | Points |
|---|---|---|
| These would be their first cards | `first` | 0 |
| They have some already | `some` | 2 |
| They have been collecting a while | `collecting` | 3 |

### Question 5: What is your budget comfort zone?

| Answer | Value | Points |
|---|---|---|
| $40 - $60 (A solid starting point) | `low` | 0 |
| $60 - $90 (More packs and better supplies) | `mid` | 2 |
| $90 - $130+ (The full experience) | `high` | 4 |

### Question 6: Does your child have a favorite Pokemon? (Optional)

This is a free-text input. It is not scored. If the parent types a name (e.g., "Pikachu"), the result page displays a note suggesting they check the Set Spotlight pages in the Parent Guide Hub to see which current sets might feature that Pokemon.

---

## Scoring System

### Point Ranges

The total score is the sum of points from Questions 1-5. The maximum possible score is **14** (age 12+ = 3, enjoyment playing/collecting = 2, careful = 2, collecting a while = 3, high budget = 4).

| Total Score | Recommended Bundle |
|---|---|
| 0 - 4 points | **Bundle A: Starter Explorer** ($54.99) |
| 5 - 8 points | **Bundle B: Growing Collector** ($84.99) |
| 9+ points | **Bundle C: Confident Collector** ($119.99) |

### Point Range Breakdown

- **Minimum possible score:** 0 (Under 6 + characters + rough + first cards + low budget)
- **Maximum possible score:** 14 (12+ + collecting/playing + careful + collecting a while + high budget)
- **Bundle A range (0-4):** Young children, first-timers, budget-conscious parents
- **Bundle B range (5-8):** Mid-range age, some experience, moderate budget
- **Bundle C range (9+):** Older kids, experienced collectors, higher budget

---

## Override Rules

After calculating the base score, three override rules are applied in order. These exist to ensure sensible recommendations regardless of score.

### Override 1: Age Cap -- Under 6

```
IF age = "under6" THEN force Bundle A
```

**Rationale:** Children under 6 benefit from fewer packs and more focus on protection. Even if the parent selects high budget and the child has some experience, the recommendation caps at Starter Explorer for safety and simplicity.

**This override takes precedence over the score-based recommendation.**

### Override 2: Budget Cap -- Low Budget

```
IF budget = "low" THEN force Bundle A
```

**Rationale:** If a parent says their budget is $40-$60, we respect that constraint absolutely. Recommending an $85 or $120 bundle to a budget-conscious parent would violate trust.

**This override takes precedence over the score-based recommendation.**

### Override 3: Experience Floor -- High Budget + Experienced Collector

```
IF budget = "high" AND experience = "collecting" AND current recommendation = Bundle A THEN upgrade to Bundle B
```

**Rationale:** If a parent has a high budget and their child is already an active collector, Bundle A (the intro bundle) would feel underwhelming. This rule ensures they get at least Bundle B (Growing Collector), which offers more packs and better supplies for an established collection.

**This override only applies when the base recommendation is Bundle A.** If the score already placed the child in Bundle B or C, this rule does nothing.

### Override Priority

The overrides are evaluated in this order:
1. Under 6 check (forces A)
2. Low budget check (forces A)
3. High budget + collecting check (floors at B)

Because overrides 1 and 2 are evaluated first, the floor rule in override 3 can never conflict with them. For example, if age is "under6" AND budget is "high" AND experience is "collecting," overrides 1 and 2 do not both apply (budget is not "low"), but override 1 forces Bundle A, and then override 3 would check if bundle = A, budget = high, and experience = collecting. In the current code, override 1 sets bundle to A, then override 3 could potentially upgrade it to B. **However**, this is an edge case to be aware of: the code as written would upgrade to B for an under-6 child with a high budget and collecting experience. If this is undesired, add a guard to check age before applying override 3.

---

## Add-On Suggestion Rules

After the bundle recommendation, the quiz optionally suggests add-on products based on specific answers.

### Rule 1: Starter Deck Suggestion

```
IF enjoyment = "playing" THEN suggest Starter Deck Add-On
```

- **Label shown:** "Starter Deck Add-On"
- **Reason shown:** "Since they like playing the card game, a starter deck teaches them the rules with a ready-to-play set."
- **Product handle:** `starter-deck-addon` (configurable in theme editor)

### Rule 2: Extra Sleeves Suggestion

```
IF carefulness = "rough" THEN suggest Extra Sleeves Pack
```

- **Label shown:** "Extra Sleeves Pack"
- **Reason shown:** "Extra sleeves are helpful for rough handlers -- they'll go through them faster."
- **Product handle:** `extra-sleeves` (configurable in theme editor)

### Both Can Trigger Simultaneously

If a child likes playing (enjoyment = "playing") AND is rough with their things (carefulness = "rough"), both add-on suggestions appear on the result page.

---

## "Why This Bundle?" Explanation Rules

The result page includes a personalized explanation. These reason strings are assembled based on answers:

| Condition | Reason Text |
|---|---|
| age = "under6" | "Since they're under 6, we kept things simple with fewer packs and focused on protection." |
| age = "6to8" | "Great age to start -- this bundle gives them enough to explore without being overwhelming." |
| experience = "first" | "Since these are their first cards, we picked a bundle that introduces everything gradually." |
| experience = "collecting" | "They already have cards, so this bundle adds to their collection with more variety." |
| budget = "low" | "We kept it within your $40-$60 budget." |
| carefulness = "rough" | "We've included extra protection since they're rough with their things." |

Multiple reasons can appear together. They are concatenated into a single paragraph.

---

## Favorite Pokemon Note

If the parent types a Pokemon name in Question 6, the result page shows:

> "Your child's favorite is [NAME]. Check the set spotlight pages in our Parent Guide Hub to see which current sets might feature them!"

If the field is left blank, no note appears.

---

## Example Scenarios

### Scenario 1: Young Beginner, Budget-Conscious

| Question | Answer | Points |
|---|---|---|
| Age | Under 6 | 0 |
| Enjoyment | They just love the characters | 0 |
| Carefulness | Rough | 0 |
| Experience | First cards | 0 |
| Budget | $40-$60 | 0 |
| Favorite | Pikachu | -- |

**Total score:** 0
**Base recommendation:** Bundle A (score 0-4)
**Override 1 (under6):** Forces Bundle A -- no change
**Override 2 (low budget):** Forces Bundle A -- no change
**Override 3:** Does not apply (budget is not "high")

**Final recommendation:** Bundle A (Starter Explorer, $54.99)
**Add-ons suggested:** Extra Sleeves Pack (rough handler)
**Why text:** "Since they're under 6, we kept things simple with fewer packs and focused on protection. Since these are their first cards, we picked a bundle that introduces everything gradually. We kept it within your $40-$60 budget. We've included extra protection since they're rough with their things."
**Fav note:** "Your child's favorite is Pikachu. Check the set spotlight pages in our Parent Guide Hub to see which current sets might feature them!"

---

### Scenario 2: Mid-Range Child, Moderate Budget

| Question | Answer | Points |
|---|---|---|
| Age | 6-8 | 1 |
| Enjoyment | Collecting and organizing | 2 |
| Carefulness | Mixed | 1 |
| Experience | They have some already | 2 |
| Budget | $60-$90 | 2 |
| Favorite | (blank) | -- |

**Total score:** 8
**Base recommendation:** Bundle B (score 5-8)
**Override 1:** Does not apply (age is not under6)
**Override 2:** Does not apply (budget is not "low")
**Override 3:** Does not apply (recommendation is already B)

**Final recommendation:** Bundle B (Growing Collector, $84.99)
**Add-ons suggested:** None
**Why text:** "Great age to start -- this bundle gives them enough to explore without being overwhelming."

---

### Scenario 3: Experienced Collector, High Budget

| Question | Answer | Points |
|---|---|---|
| Age | 9-11 | 2 |
| Enjoyment | Collecting and organizing | 2 |
| Carefulness | Very careful | 2 |
| Experience | Collecting a while | 3 |
| Budget | $90-$130+ | 4 |
| Favorite | Charizard | -- |

**Total score:** 13
**Base recommendation:** Bundle C (score 9+)
**Overrides:** None apply

**Final recommendation:** Bundle C (Confident Collector, $119.99)
**Add-ons suggested:** None
**Why text:** "They already have cards, so this bundle adds to their collection with more variety."
**Fav note:** "Your child's favorite is Charizard. Check the set spotlight pages in our Parent Guide Hub to see which current sets might feature them!"

---

### Scenario 4: Older Kid Wants to Play, Low Budget

| Question | Answer | Points |
|---|---|---|
| Age | 12+ | 3 |
| Enjoyment | Playing the card game | 2 |
| Carefulness | Very careful | 2 |
| Experience | They have some already | 2 |
| Budget | $40-$60 | 0 |
| Favorite | (blank) | -- |

**Total score:** 9
**Base recommendation:** Bundle C (score 9+)
**Override 1:** Does not apply (age is not under6)
**Override 2 (low budget):** Forces Bundle A
**Override 3:** Does not apply (budget is "low," not "high")

**Final recommendation:** Bundle A (Starter Explorer, $54.99)
**Add-ons suggested:** Starter Deck Add-On (enjoys playing)
**Why text:** "We kept it within your $40-$60 budget."

This scenario demonstrates how the budget override protects parents from being upsold. Even though the score was high enough for Bundle C, the low budget constraint is respected.

---

### Scenario 5: Under 6, High Budget, Collecting Experience

| Question | Answer | Points |
|---|---|---|
| Age | Under 6 | 0 |
| Enjoyment | Collecting and organizing | 2 |
| Carefulness | Very careful | 2 |
| Experience | Collecting a while | 3 |
| Budget | $90-$130+ | 4 |
| Favorite | Eevee | -- |

**Total score:** 11
**Base recommendation:** Bundle C (score 9+)
**Override 1 (under6):** Forces Bundle A
**Override 2:** Does not apply (budget is not "low")
**Override 3 (high budget + collecting):** Current recommendation is Bundle A, so this upgrades to Bundle B

**Final recommendation:** Bundle B (Growing Collector, $84.99)
**Add-ons suggested:** None
**Why text:** "Since they're under 6, we kept things simple with fewer packs and focused on protection. They already have cards, so this bundle adds to their collection with more variety."
**Fav note:** "Your child's favorite is Eevee. Check the set spotlight pages in our Parent Guide Hub to see which current sets might feature them!"

**Note:** This is the edge case mentioned in the Override Priority section. Override 1 caps at A, but then override 3 lifts the floor to B because of high budget + collecting experience. Whether this is the desired behavior for a child under 6 is a judgment call. If you want under-6 to always stay at Bundle A regardless, add a guard check in the override 3 logic.

---

### Scenario 6: Not Sure Yet, First Timer, Mid Budget

| Question | Answer | Points |
|---|---|---|
| Age | 6-8 | 1 |
| Enjoyment | Not sure yet | 1 |
| Carefulness | Mixed | 1 |
| Experience | First cards | 0 |
| Budget | $60-$90 | 2 |
| Favorite | (blank) | -- |

**Total score:** 5
**Base recommendation:** Bundle B (score 5-8)
**Overrides:** None apply

**Final recommendation:** Bundle B (Growing Collector, $84.99)
**Add-ons suggested:** None
**Why text:** "Great age to start -- this bundle gives them enough to explore without being overwhelming. Since these are their first cards, we picked a bundle that introduces everything gradually."

---

## Bundle Details Reference

### Bundle A: Starter Explorer ($54.99)

- 4-5 modern booster packs
- 100 penny sleeves
- Small binder (holds ~60 cards)
- Parent PDF guide
- **Best for:** First-timers, younger kids, budget-conscious parents

### Bundle B: Growing Collector ($84.99)

- 8-10 modern booster packs
- 200 penny sleeves
- 10 semi-rigid top loaders
- Binder with side-loading pages
- Expanded parent PDF guide
- **Best for:** Kids with some experience, collectors and organizers

### Bundle C: Confident Collector ($119.99)

- 12-15 modern booster packs
- 300 penny sleeves
- 25 semi-rigid top loaders
- Premium binder with side-loading pages
- Expanded parent PDF guide
- Card storage tips sheet
- **Best for:** Experienced collectors, careful kids, bigger budgets

---

## Quick Reference Matrix

This table shows the recommended bundle for common answer combinations, with overrides already applied.

| Age | Enjoyment | Care | Experience | Budget | Score | Overrides | Final Bundle |
|---|---|---|---|---|---|---|---|
| Under 6 | Characters | Rough | First | Low | 0 | Under6, Low budget | **A** |
| Under 6 | Collecting | Careful | Collecting | High | 11 | Under6 -> A, then Floor -> B | **B** |
| 6-8 | Not sure | Mixed | First | Low | 3 | Low budget | **A** |
| 6-8 | Collecting | Mixed | Some | Mid | 8 | None | **B** |
| 6-8 | Playing | Careful | Some | Mid | 8 | None | **B** |
| 9-11 | Playing | Mixed | First | Mid | 6 | None | **B** |
| 9-11 | Collecting | Careful | Collecting | High | 13 | None | **C** |
| 12+ | Playing | Careful | Collecting | High | 14 | None | **C** |
| 12+ | Characters | Rough | First | Low | 3 | Low budget | **A** |
| 12+ | Playing | Careful | Some | Low | 9 | Low budget | **A** |
