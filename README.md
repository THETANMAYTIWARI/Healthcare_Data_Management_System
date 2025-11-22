# Healthcare Data Management

## 📘 Introduction

The Healthcare Data Management System provides a digital platform to handle hospital workflows — from maintaining patient logs, prescriptions, appointments, and health journals to securely storing and retrieving data using MongoDB Atlas.

## 🚀 Live Hosting

🔗 **Live URL:** https://healthcare-mocha.vercel.app/

---

### 🧪 Sample Login (Demo Credentials)

* Username : username
* Password : password


### ✨ Features
```
Secure user authentication using Passport.js

Manage doctors, clinics, appointments, and prescriptions

Maintain health logs and symptom journals

Real-time data visualization using FusionCharts

Responsive React UI for a seamless user experience

Centralized MongoDB database with Express.js backend
```

### ⚙️ Tech Stack
```
Frontend: React.js, Material-UI, Axios, React Router
Backend: Node.js, Express.js, MongoDB
Database: MongoDB Atlas
Visualization: FusionCharts
Authentication: Passport.js (Local Strategy)
```

### Third-Party Libraries Required :

```
🖥️ Backend Dependencies:
   "chartist": "^0.11.4",
    "connect-mongo": "^4.6.0",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "express-session": "^1.17.2",
    "fusioncharts": "^3.18.0",
    "mongoose": "^6.2.10",
    "nodemon": "^2.0.15",
    "passport": "^0.5.2",
    "passport-local": "^1.0.0"
```

```
💻 Frontend Dependencies:
 "@material-ui/icons": "^1.0.0",
        "axios": "^0.18.0",
        "connect-mongo": "^2.0.1",
        "express-session": "^1.15.6",
        "fusioncharts": "^3.12.2",
        "material-ui": "^1.0.0-beta.42",
        "moment": "^2.22.1",
        "passport": "^0.4.0",
        "passport-local": "^1.0.0",
        "react": "^16.3.1",
        "react-dom": "^16.3.1",
        "react-drop-to-upload": "^1.0.1",
        "react-fusioncharts": "^1.0.5",
        "react-router": "^4.2.0",
        "react-router-dom": "^4.2.2",
        "react-scripts": "1.1.4",
        "rebass": "^2.0.0-0"
```
### Clone this repo :
```
git clone https://github.com/THETANMAYTIWARI/Healthcare-Data-Management-System.git
```
### How to install the above Library :

- Change to the directory using -

- For the back-end:-
  ```
  cd backend
  npm install
  ```
- For the front-end:-
  ```
  cd client
  npm install
  ```

### How to use it:

- Run this command to start the project.

- For the back-end:
  ```
  cd backend
  npm start
  ```
- For the front-end:
  ```
  cd client
  npm start
  ```


### 🗄️ Mongodb Setup:

- First create a '.env' file the create a key like 'MONGO_URI=' and paste the below command. Make sure you first create
  an account in [Mongodb atlas](https://www.mongodb.com/cloud/atlas)
```
mongodb+srv://yourusername:<password>@cluster0.m9l4p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
- Use your username and password and database name here you created in MongoDB atlas


### 🖼️ Output Previews:
```
🧍‍♂️ Registration & Login

Users can register and log in securely using Passport.js authentication.

🏠 Dashboard

Displays patient statistics, appointment summaries, and graphical insights using FusionCharts.

💊 Prescription & Health Logs

Doctors and patients can manage and view prescriptions, health logs, and symptoms over time.
```
