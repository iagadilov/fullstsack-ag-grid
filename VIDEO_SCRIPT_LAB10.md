# Video Demonstration Script - Lab 10: Frontend and Backend Integration Setup

**Duration:** 5-10 minutes
**Requirements:** Webcam + Screen capture

---

## Introduction (30 seconds)

"Hello, my name is [YOUR NAME], and this is my video demonstration for Laboratory Work 10: Frontend and Backend Integration Setup. In this lab, I prepared the environment for full-stack integration by defining functional requirements, configuring the Spring Boot backend with security disabled, and creating a React frontend with Material-UI. Let me show you each part."

---

## Task 1: Functional Requirements (1 minute)

### Open CARSHOP_REQUIREMENTS.md

**Script:**

"Before coding, I analyzed the functional requirements for the Carshop application. Let me show you the documentation I created.

**Show the file and explain:**

The application needs to:
1. **List Cars** - Display all cars from the database
2. **Grid Features** - Support paging, sorting, and filtering
3. **Add Functionality** - A button to open a modal form for adding new cars
4. **Row-Level Actions** - Edit and Delete buttons for each car
5. **Export** - Ability to export data to CSV

These requirements will guide our implementation in future labs."

---

## Task 2: Spring Boot Backend with Security Disabled (3-4 minutes)

### Part A: Show SecurityConfig.java

**Open the file in IDE:**
`carshop-backend/src/main/java/com/carshop/config/SecurityConfig.java`

**Script:**

"This is the most important part of Lab 10 - the SecurityConfig.java file where I disabled security to facilitate frontend development.

[Point to the code]

1. **The commented section** shows what a typical JWT security configuration would look like - with session management, authentication filters, and protected endpoints.

2. **The active configuration** is simple:
   - `csrf().disable()` - Disables CSRF protection
   - `cors()` - Enables CORS for frontend access
   - `anyRequest().permitAll()` - This is the key line! It allows ALL requests without authentication.

This means our API is completely open for development purposes."

### Part B: Show the Car Entity and Controller

**Open Car.java:**

"Here's our Car entity with fields for id, brand, model, color, year, and price. Notice the `@Column(name = 'model_year')` annotation - this is because 'year' is a reserved keyword in H2 database."

**Open CarController.java:**

"The controller provides REST endpoints:
- GET `/api/cars` - Get all cars
- POST `/api/cars` - Create a car
- PUT `/api/cars/{id}` - Update a car
- DELETE `/api/cars/{id}` - Delete a car"

### Part C: Demonstrate with Postman

**Open Postman and make a GET request:**

"Now let me prove that security is disabled. I'll make a GET request to `http://localhost:8080/api/cars` WITHOUT any authorization token.

[Make the request]

As you can see, I receive all 8 cars from the database:
- Ford Mustang
- Nissan Leaf
- Toyota Camry
- BMW X5
- Mercedes C-Class
- Honda Civic
- Tesla Model 3
- Audi A4

No authentication was required! This confirms our security configuration is working correctly for development."

---

## Task 3: React Frontend with MUI (2-3 minutes)

### Part A: Show Project Creation

**Script:**

"For the frontend, I created a new React application using create-react-app with the command:

```
npx create-react-app carfront
```

Then I installed Material-UI with:

```
npm install @mui/material @emotion/react @emotion/styled
```"

### Part B: Show App.js Code

**Open carfront/src/App.js in VS Code:**

"Here's the App.js file. I removed all the default template code and implemented the AppBar component exactly as specified in the lab requirements.

[Point to the code]

1. **Imports** - I imported AppBar, Toolbar, and Typography from MUI
2. **AppBar** - With `position='static'` for a fixed header
3. **Toolbar** - Contains the application title
4. **Typography** - Displays 'Carshop' with variant h6

This is the base layout that we'll expand in future labs."

### Part C: Show Running Application

**Open browser at http://localhost:3000:**

"And here's the running application. You can see the 'Carshop' toolbar displayed at the top of the page with Material-UI's default blue styling.

This provides the foundation for our car management interface that we'll build in upcoming labs."

---

## Project Structure & Git (1 minute)

**Script:**

"Let me show you the project structure and version control:

[Show terminal or file explorer]

1. **Repository Structure:**
   - `carshop-backend/` - Spring Boot application
   - `carfront/` - React application
   - `CARSHOP_REQUIREMENTS.md` - Functional requirements

2. **Branching:**
   - Created `lab-10-setup` branch for this work
   - Merged into `main` branch
   - All commits are descriptive and frequent

3. **GitHub:** All code is available at my repository."

---

## Conclusion (30 seconds)

"To summarize Lab 10:

1. **Functional Requirements** - Documented what the Carshop app needs to do
2. **Backend** - Created Spring Boot app with security DISABLED for development
3. **Frontend** - Created React app with MUI AppBar displaying 'Carshop'
4. **Verification** - Tested that `/api/cars` works without authentication

This sets up the environment for full-stack integration in the next labs. Thank you for watching."

---

## Demo Checklist

Before recording, ensure:

1. **Backend running:** `cd carshop-backend && mvn spring-boot:run`
   - Test: http://localhost:8080/api/cars returns JSON

2. **Frontend running:** `cd carfront && npm start`
   - Test: http://localhost:3000 shows "Carshop" AppBar

3. **Postman ready:** Create a GET request to http://localhost:8080/api/cars

4. **Files open in IDE:**
   - SecurityConfig.java
   - Car.java
   - CarController.java
   - carfront/src/App.js
   - CARSHOP_REQUIREMENTS.md

---

## Key Points to Emphasize

1. **Security is DISABLED** - Show the `anyRequest().permitAll()` line
2. **No authentication needed** - Demonstrate in Postman with no headers
3. **MUI components** - AppBar, Toolbar, Typography
4. **This is for DEVELOPMENT only** - Security would be enabled for production

---

## URLs

- Backend API: http://localhost:8080/api/cars
- H2 Console: http://localhost:8080/h2-console
- Frontend: http://localhost:3000
- GitHub: https://github.com/iagadilov/fullstsack-ag-grid
