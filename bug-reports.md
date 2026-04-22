# Bug Reports – AutomationExercise

---

## Bug 1: Login error message lacks detail

**Steps:**
1. Enter invalid credentials
2. Click Login

**Expected:**
Clear error message explaining issue

**Actual:**
Generic error message displayed

**Severity:** Medium

## Technical Observation
- Network request may return an error response without proper handling
- UI displays a generic error instead of meaningful feedback

---

## Bug 2: Cart count delay after adding product

**Steps:**
1. Add product to cart
2. Observe cart count

**Expected:**
Cart count updates immediately

**Actual:**
Delay before update

**Severity:** Low

---

## Bug 3: Search returns unrelated items

**Steps:**
1. Search "Dress"

**Expected:**
Only dress-related products

**Actual:**
Some unrelated items appear

**Severity:** Medium
