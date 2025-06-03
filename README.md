# 💳 Razorpay-Inspired Fintech Platform (React App)

A modern, component-based frontend clone of Razorpay built using **React.js**, featuring routing, modular sections, custom sliders, form validation, and testimonial carousels.

---

## 📁 Folder Structure

```
src/
├── assets/               # Static images, SVGs, logos, trust badges
│   └── images/
├── component/            # All major UI components
│   ├── asideBlock/
│   │   ├── AsideBlock01.jsx
│   │   └── ... (02–04)
│   ├── card/
│   │   └── Card.jsx
│   ├── footer/
│   │   └── Footer.jsx
│   ├── header/
│   │   └── Header.jsx
│   ├── mainBox/
│   │   ├── MainBox01–05.jsx
│   │   └── MainBP.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── SignUp.jsx
│   ├── section/
│   │   ├── MainComponent.jsx
│   │   ├── Section.jsx
│   │   └── Section.module.css
│   ├── signUp/
│   │   ├── SignUpLeft.jsx
│   │   ├── SignUpRight.jsx
│   │   └── SignUp.css
│   ├── login/
│   │   ├── LoginPage.jsx
│   │   ├── LoginLeft.jsx
│   │   ├── LoginRight.jsx
│   │   └── login.css
│   ├── userCommentCard/
│   │   ├── UserCommentCard.jsx
│   │   └── UserCommentCard.css
├── router/
│   └── AppRouter.jsx     # Routing for "/", "/login", "/signup"
├── utils/
│   └── slider.js         # Custom JS slider logic
├── App.jsx
├── main.jsx
└── index.css             # Global styles & CSS variables
```

---

## 🚀 Features

### ✅ Homepage (`/`)

* **Header:** Full-width nav bar with dropdowns, login/signup, slider, and action buttons.
* **MainBox01–05:** Hero sections, CTA blocks, animated logos, sliders.
* **AsideBlocks:** Informational left-side sections enhancing layout richness.
* **Cards:** Reusable visual components for promoting features.
* **Footer:** Enterprise-grade, multi-column footer with links and trust badges.

### ✅ Authentication Pages

* **Login Page:** Email/password form with split layout using `LoginLeft` and `LoginRight`.
* **SignUp Page:** Business email validation, Google sign-up integration, and testimonial slider via `UserCommentCard`.

### ✅ Custom Slider

* Built in `utils/slider.js` and used across testimonial and feature carousels.
* Supports three modes: `default`, `scroll`, `group`.

---

## 🧩 Technologies Used

| Tech         | Purpose                  |
| ------------ | ------------------------ |
| React.js     | Component architecture   |
| React Router | Page navigation (SPA)    |
| FontAwesome  | Icons                    |
| CSS Modules  | Scoped component styling |
| Vanilla JS   | Custom slider logic      |

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/razorpay-clone.git
cd razorpay-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
npm start
```

### 4. Build for Production

```bash
npm run build
```

---

## 📌 Available Routes

| Path      | Component    | Description                 |
| --------- | ------------ | --------------------------- |
| `/`       | `Home.jsx`   | Homepage (Header + Content) |
| `/login`  | `Login.jsx`  | Login form page             |
| `/signUp` | `SignUp.jsx` | Sign-up with testimonials   |

---

## 🎥 Demo Video

A short demo video showcasing the user interface and features will be uploaded soon.

---

## 🧪 Notes

* Custom JavaScript slider — no external carousel libraries used.
* Image-heavy design for trust and branding consistency.
* Email validation logic is implemented in `SignUpLeft.jsx` and `LoginLeft.jsx`.

---

## 🤝 Contributing

Pull requests and suggestions are welcome! For major changes, please open an issue first.

---

## 🧾 License

This project is for educational purposes only. It mimics Razorpay UI features but is not affiliated with Razorpay.

---

Let me know if you'd like me to export this to a `.md` file or tweak anything else.

