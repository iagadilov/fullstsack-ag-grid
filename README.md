# Full Stack Development Labs - Weeks 9 & 10

**Course:** SFT6314 Full Stack Development

---

## Week 9: Third-Party React Components

### Overview
Three React applications demonstrating third-party components:

1. **aggrid-github** - AG Grid with GitHub API integration
2. **shoppinglist** - MUI Shopping List application
3. **routerapp** - React Router navigation demo

### Task 1: AG Grid Data Grid (`aggrid-github`)
- Fetches React repositories from GitHub Search API
- Columns: `full_name`, `html_url`, `owner.login`
- Sorting, filtering, and pagination (8 items per page)

```bash
cd aggrid-github && npm install && npm start
```

### Task 2: MUI Shopping List (`shoppinglist`)
- AppBar, Toolbar, Container layout
- Modal Dialog for adding items
- List, ListItem, ListItemText display

```bash
cd shoppinglist && npm install && npm start
```

### Task 3: React Router Navigation (`routerapp`)
- BrowserRouter, Routes, Route, Link
- Home and Contact page components

```bash
cd routerapp && npm install && npm start
```

---

## Week 10: Frontend and Backend Integration Setup

### Overview
Carshop application with Spring Boot backend and React frontend integration.

### Functional Requirements (CARSHOP_REQUIREMENTS.md)
- List cars from database
- Grid with paging, sorting, filtering
- Add car via modal form
- Edit/Delete buttons per row
- Export to CSV

### Backend (`carshop-backend`)

Spring Boot application with **security disabled** for frontend development.

**Key File:** `src/main/java/com/carshop/config/SecurityConfig.java`
- CSRF disabled
- All requests permitted without authentication

**Run Backend:**
```bash
cd carshop-backend
mvn spring-boot:run
```

**Test API (no auth required):**
```bash
curl http://localhost:8080/api/cars
```

### Frontend (`carfront`)

React application with MUI AppBar component.

**Run Frontend:**
```bash
cd carfront && npm install && npm start
```

Opens at http://localhost:3000 with "Carshop" AppBar.

---

## Branch Structure

- `main` - All merged code
- `lab-9-aggrid` - Week 9 Task 1
- `lab-9-mui` - Week 9 Task 2
- `lab-9-router` - Week 9 Task 3
- `lab-10-setup` - Week 10 Integration Setup

## Technical Stack

### Backend
- Spring Boot 3.2.0
- Spring Security (disabled for dev)
- Spring Data JPA
- H2 Database

### Frontend
- React 18
- Material-UI (MUI) v5
- AG Grid
- React Router v6
