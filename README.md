# 💱 Convert – Currency Converter to BRL

A clean and modern web application that converts US Dollar (USD), Euro (EUR), or British Pound (GBP) into Brazilian Real (BRL).  
Built with pure HTML, CSS, and JavaScript.

---

## 📌 Features

- Input for currency amount  
- Selection of supported currencies: USD, EUR, GBP  
- Conversion to BRL using predefined exchange rates  
- Automatic formatting using toLocaleString  
- Dynamic display of conversion rate and final value  
- Input sanitization for non-numeric characters  
- Clean UI and simple interaction  

---

## 🧠 How It Works

When the user submits the form:

1. The amount is validated  
2. The selected currency is checked  
3. The value is multiplied by the exchange rate  
4. The result is formatted to BRL using:

Number(value).toLocaleString("pt-br", { style: "currency", currency: "BRL" });

5. The result section becomes visible  

---

## 🗂️ Project Structure

/
├── index.html      # Main structure  
├── styles.css      # Application styling  
├── scripts.js      # Logic and interactivity  
└── img/  
    ├── bg.png  
    ├── logo.svg  
    └── chevron-down.svg  

---

## 🚀 Running the Project

Clone the repository:

git clone https://github.com/jhsouzaIT/convert.git

Navigate into the folder:

cd convert

Open index.html in your browser  
(or use Live Server in VS Code)
