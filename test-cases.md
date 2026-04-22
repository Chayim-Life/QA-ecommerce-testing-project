# Test Cases – AutomationExercise

## Overview
Test cases covering authentication, product search, and cart functionality on https://automationexercise.com

---

## TC-001: Login with valid credentials
**Steps:**
1. Navigate to login page
2. Enter valid email and password
3. Click Login

**Expected Result:**
User is logged in and redirected to account page

---

## TC-002: Login with invalid credentials
**Steps:**
1. Enter incorrect email/password
2. Click Login

**Expected Result:**
Error message: "Your email or password is incorrect!"

---

## TC-003: Login with empty fields
**Steps:**
1. Leave fields empty
2. Click Login

**Expected Result:**
Validation message displayed

---

## TC-004: Search for product
**Steps:**
1. Enter "Dress" in search bar
2. Press Enter

**Expected Result:**
Relevant products are displayed

---

## TC-005: Add product to cart
**Steps:**
1. Select a product
2. Click "Add to cart"

**Expected Result:**
Product is added successfully

---

## TC-006: Remove product from cart
**Steps:**
1. Add item to cart
2. Remove item

**Expected Result:**
Item is removed and cart updates
