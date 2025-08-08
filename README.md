# 🌍 European Cities Explorer

European Cities Explorer is a responsive React web app that displays a curated list of iconic cities in Europe, along with descriptions and beautiful images.
---

## 📸 Preview
<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/13282e06-0f0b-4111-a874-57f379e2d4df" />

---

## ✨ Live Demo

👉 [View Deployed Site](https://your-deployed-url.com)

---

## 🛠 Tech Stack

| Technology             | Purpose                              |
| ---------------------- | ------------------------------------ |
| **React + Vite**       | Fast frontend framework              |
| **Tailwind CSS**       | Utility-first responsive styling     |
| **Firebase Firestore** | Cloud database for storing city data |
| **Cloudinary**         | Hosting and optimizing image assets  |
| **Git**                | Version control                      |

---

## 🧹 Features

* ✨ Modern, clean and responsive UI
* 🌐 Cities stored in Firestore, dynamically rendered
* 🖼️ Images hosted via Cloudinary CDN
* 📱 Fully responsive layout using Tailwind breakpoints

---

## 📂 Folder Structure

```
european-cities/
├── public/
├── src/
│   ├── components/
│   │   ├── CityCard.jsx
│   │   └── Footer.jsx
│   ├── firebaseConfig.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── README.md
├── index.html
├── package.json
└── tailwind.config.js
```

---

## 🔥 Firebase Integration

* Firestore is used to store data such as:

  ```json
  {
    "city": "Paris",
    "country": "France",
    "image": "https://res.cloudinary.com/your-cloud/image/upload/...jpg",
    "description": "A historic and cultural capital of Europe."
  }
  ```

* Firebase SDK is initialized in `firebaseConfig.js` and queried from `App.jsx`.

---

## 📦 Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/your-username/european-cities.git

# 2. Navigate into the project
cd european-cities

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

---

## ☁️ Deployment

The project can be deployed using:

* [Vercel](https://vercel.com/)

---

## 📝 License

This project is open-source and free to use.

---

## 🙌 Acknowledgements

* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Firebase](https://firebase.google.com/)
* [Cloudinary](https://cloudinary.com/)
* [Figma](https://figma.com/) (for design reference from Sessami)

---
