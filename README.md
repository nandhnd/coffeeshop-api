# CoffeeShop API ☕️

Sistem Informasi Manajemen Coffee Shop berbasis RESTful API menggunakan:

- Express.js
- Sequelize (ORM)
- MySQL
- JSON Web Token (JWT)

# Kelompok

- Rayhan Bagas M (2318071)
- Nanda Handika (2318089)
- Karis Ilham M (2318093)
- Chesky Aseka Pratama (2318051)

---

# Setup Project

### 1. Clone Repository
```bash
git clone https://github.com/nandhnd/coffeeshop-api.git
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Konfigurasi Environment
Buat file .env

### 4. Setup Database
Buat database sesuai isi .env.

Jalankan migration dan seeder:
```bash
npx sequelize db:migrate
npx sequelize db:seed:all
```
### 5. Jalankan
```bash
npm start
```
