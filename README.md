# 🏥 PharmaLite & Python Utilities

PharmaLite is a next-generation medicine shopping and autonomous delivery web application designed with modern glassmorphic aesthetics. This workspace also provides a collection of core mathematical and utility algorithms written in Python.

---

## 🎨 Visual Preview

Here is a visual recording of the complete application flow (adding items, live search, checkout, and AI chatbot support):

![PharmaLite UI Verification](/Users/mahidhar/.gemini/antigravity/brain/a7005f07-8bdd-4938-88e5-194a79f19f1b/pharmalite_verification_1782974920475.webp)

---

## 📁 Repository Structure

The repository is divided into two primary zones: the React frontend and core Python scripts.

```
├── pharmalite/             # React Medicine E-commerce App
│   ├── src/
│   │   ├── components/     # UI elements (Navbar, Cart Drawer, Search, Chatbot)
│   │   ├── context/        # React Context (Cart State Management)
│   │   ├── pages/          # Home, Shop, About, Checkout
│   │   └── data/           # Mock Products Catalog
│   ├── package.json
│   └── vite.config.js
│
├── a.py                    # Greatest Common Divisor (GCD) script
└── a1.py/                  # Mathematical and file processing Python scripts
    ├── a1.py               # Square Root Approximation (Newton's Method)
    ├── a2.py               # Exponentiation Utility
    ├── a3.py               # Max Value Finder from User Input Lists
    ├── a4.py               # Prime Number Generator
    └── a5.py               # Text File Word Counter
```

---

## 💊 Component 1: PharmaLite React Frontend

PharmaLite is built using React, Vite, and CSS Modules, delivering high visual appeal, responsive interactivity, and glassmorphic translucent effects.

### Key Features
- **✨ Shopping & Filtering Catalog**: Responsive product grid grouped by health categories (Wellness, Sleep, Pain Relief, Allergy, etc.).
- **🛒 Dynamic Shopping Cart**: Sliding side drawer tracking items, dynamically increasing quantities, and calculating totals instantly with persistent browser `localStorage`.
- **⚡ Checkout & Drone Logistics Simulation**: Live checkout form validating card payments, and rendering delivery progress options including **Autonomous Drone Delivery (15-30 mins)**.
- **🔍 Real-time Search Overlay**: Keyboard-friendly instant matching searching products by name, description, or category to add to cart instantly from recommendations.
- **💬 Glassmorphic Chatbot Assistant**: Sticky floating customer assistance widget replying to typical inquiries about same-day drones, refund policies, and 24/7 pharmacist consulting lines.

### Getting Started

#### Prerequisites
- Node.js (version 18 or above recommended)
- npm or yarn

#### 1. Quick Development Setup
Change paths into the directory and install local dependencies:
```bash
cd pharmalite
npm install
```

Start the Vite hot-reloading development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

#### 2. Production Build Check
Bundle the optimized, production-ready static assets:
```bash
npm run build
```

---

## 🐍 Component 2: Python Utility Scripts

A set of core algorithmic script utilities dealing with calculations and file input/output.

1. **`a.py` (GCD Calculator)**: Prompt for two numbers to compute their Greatest Common Divisor under the Euclidean division cycle.
2. **`a1.py/a1.py` (Newton-Raphson Approximation)**: Interactively estimates square roots using numerical calculation steps.
3. **`a1.py/a2.py` (Power exponent calculator)**: Utility evaluating $Base^{Exponent}$.
4. **`a1.py/a3.py` (List Max Finder)**: Takes user numbers sequentially to output lists and find the largest input integer.
5. **`a1.py/a4.py` (Prime Number List)**: Generates the list of the first $N$ prime integers using division checks.
6. **`a1.py/a5.py` (Text File Word Counter)**: Safely opens a text file name provided by the user, counts individual whitespace-separated words, and prints the result. Handles file errors gracefully.

---

## 🛡️ License

This project is licensed under the MIT License.
