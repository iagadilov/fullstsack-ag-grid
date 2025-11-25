# Carshop Application - Functional Requirements

## Overview
The Carshop application is a full-stack web application for managing a car dealership inventory.

## Functional Requirements

### 1. List Cars
- The frontend must display a list of all cars from the database
- Data is fetched from the backend REST API endpoint `/api/cars`

### 2. Grid Features
The car list must support:
- **Paging**: Display cars in pages (e.g., 10 cars per page)
- **Sorting**: Allow sorting by any column (brand, model, year, price, etc.)
- **Filtering**: Allow filtering/searching cars by various criteria

### 3. Add Functionality
- A button must be available to open a modal form
- The modal form allows adding new cars to the database
- Required fields: Brand, Model, Color, Year, Price
- On submit, the new car is saved via POST request to `/api/cars`

### 4. Row-Level Actions
Each row in the car table must have:
- **Delete button**: Removes the car from the database (DELETE `/api/cars/{id}`)
- **Edit button**: Opens a modal to edit the car's details (PUT `/api/cars/{id}`)

### 5. Export
- A button or link to export the table data to a CSV file
- Export should include all displayed car data

## Technical Stack

### Backend
- Spring Boot
- Spring Data JPA
- H2 Database (development) / MySQL (production)
- REST API

### Frontend
- React
- Material-UI (MUI) component library
- AG Grid for data table display

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cars` | Get all cars |
| GET | `/api/cars/{id}` | Get car by ID |
| POST | `/api/cars` | Add new car |
| PUT | `/api/cars/{id}` | Update car |
| DELETE | `/api/cars/{id}` | Delete car |
