# Car Cards UI (React + Figma)

A responsive car category card component built with **React** based on a **Figma design**.
This project showcases reusable components, clean styling, and modern frontend practices.

---

## Features

- Reusable React component (`Component.jsx`)
- Props-based dynamic content
- Clean and responsive layout
- Styled with custom CSS
- Hover effects and smooth transitions
- Mobile-friendly design

---

## Design

The UI was inspired and implemented from a Figma design.
Each card represents a car category:

- Sedans
- SUVs
- Luxury

---

## 🛠️ Tech Stack

- React (Vite)
- JavaScript (ES6+)
- CSS3 (Flexbox, Media Queries)
- Google Fonts

---

## 📂 Project Structure

```
car-cards/
│── src/
│   │── Component/
│   │   ├── Component.jsx
│   │   ├── Component.css
│   │
│   │── assets/
│   │   ├── car1-card.png
│   │   ├── car2-card.png
│   │   ├── car3-card.png
│   │
│   │── App.jsx
│   │── App.css
│   │── main.jsx
│
│── index.html
│── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/car-cards.git
```

2. Navigate to the project:

```bash
cd car-cards
```

3. Install dependencies:

```bash
npm install
```

4. Run the project:

```bash
npm run dev
```

---

## Component Example

```jsx
<Component
  imageSrc={sedanIcon}
  title="SEDANS"
  info="Choose a sedan for its affordability and excellent fuel economy."
  backgroundColor="#e38826"
/>
```

---

## Author

Created by **Lana Shotashvili**
Frontend Developer | React Learner
