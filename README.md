# 🌤️ Weather App

A modern weather application built with **React**, **TypeScript**, **SCSS**, and
**Node.js**, allowing users to search for cities and view accurate real-time
weather forecasts from OpenWeather.

---

## 🚀 Local Development

### ✅ Requirements

- Node.js >= 16.x
- npm or yarn
- OpenWeather API key (get one at https://openweathermap.org/api)

---

### 📁 Project Structure

```
weather-app/
├── client/       # Frontend - React + TS + SCSS
└── server/       # Backend - Node.js + Express
```

---

### 🔧 Setup

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

#### 2. Create environment files

✅ In `server/.env`:

```
PORT=5000
OPENWEATHER_API_KEY=your_api_key
```

✅ In `client/.env`:

```
REACT_APP_API_URL=http://localhost:5000
```

#### 3. Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

#### 4. Start development servers

Use two terminal tabs or windows:

```bash
# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend
cd client
npm start
```

---

## 🖥️ App Running

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

---

## 🔧 Tech Stack

| Area     | Technology                                   |
| -------- | -------------------------------------------- |
| Frontend | React, TypeScript, SCSS, Axios, React Router |
| Backend  | Node.js, Express, dotenv, Axios              |
| API      | OpenWeather One Call API                     |

---

## 🎨 Styling

- Uses SCSS (SASS)
- No manual build needed — SCSS is compiled automatically with `npm start`
- CSS Modules supported (e.g. `Sidebar.module.scss`)

---

## 🧪 Testing

- Frontend: `Jest`, `React Testing Library`
- Backend: tested via `Postman`, `curl`, or integration tests

---

## 🚀 Deployment

- **Netlify**: recommended for frontend (static hosting)
- **Render / Railway / Heroku**: for backend (Node.js server)

---

## 📄 License

MIT © Oleksii Shopin

---

## 🙌 Contribution

Pull requests and feedback are welcome! If you'd like to contribute, feel free
to fork the repo and submit a PR.

---

## 🌐 Author

**Oleksii Shopin** — [@OleksiiShopin](https://github.com/OleksiiShopin)
