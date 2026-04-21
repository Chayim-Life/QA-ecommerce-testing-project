# Test Cases

## Overview
This document defines test cases for core user flows in the application.

---

## TC-001: Successful Login

**Preconditions:** User is registered  
**Test Data:**  
- Email: testuser@example.com  
- Password: ValidPassword123  

**Steps:**
1. Navigate to login page
2. Enter valid email
3. Enter valid password
4. Click Login

**Expected Result:**
- User is logged in successfully  
- Redirected to dashboard  

---

## TC-002: Login with Invalid Password

**Test Data:**  
- Email: testuser@example.com  
- Password: WrongPassword123  

**Steps:**
1. Enter valid email
2. Enter invalid password
3. Click Login

**Expected Result:**
- Error message displayed  
- Login is not successful  

---

## TC-003: Login with Empty Fields

**Steps:**
1. Leave email and password empty
2. Click Login

**Expected Result:**
- Validation messages displayed  
- Login not submitted  

---

## TC-004: Product Search

**Test Data:**  
- Keyword: laptop  

**Steps:**
1. Enter "laptop" in search bar
2. Press Enter

**Expected Result:**
- Relevant products are displayed  

---

## TC-005: Add to Cart

**Steps:**
1. Select a product
2. Click Add to Cart

**Expected Result:**
- Product is added to cart  
- Cart count updates  
