# Web Maintenance Project

Day 14 task: Maintain and update a simple web application.

## 1. Bug Fixed
- Image bahut badi thi aur page responsive nahi tha.
- Fix: CSS me width, max-width aur height: auto lagayi.
- Fetch fail hone par error handle nahi hota tha, isliye .catch() add kiya.

## 2. New Feature Added
- Dark Mode: "Toggle Dark Mode" button se page ka theme badal sakte hain.

## 3. Performance and Security
- Data localStorage me cache hota hai, isliye dobara load fast hota hai.
- textContent use kiya hai, innerHTML nahi (XSS se bachav).

## 4. Testing
- Command: npm test
- Result: 4 tests passed (unit + integration, Jest).

## 5. Deployment
- Code GitHub par push kiya gaya hai.
- Live link (GitHub Pages): <yahan baad me link paste karna>