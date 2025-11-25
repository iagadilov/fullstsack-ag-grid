# Week 9 Laboratory Work - Third-Party React Components

**Course:** SFT6314 Full Stack Development
**Week:** 9

## Overview

This repository contains three React applications demonstrating the use of third-party components:

1. **aggrid-github** - AG Grid with GitHub API integration
2. **shoppinglist** - MUI Shopping List application
3. **routerapp** - React Router navigation demo

## Task 1: AG Grid Data Grid (`aggrid-github`)

A React application that fetches GitHub repositories and displays them in an AG Grid data table.

### Features
- Fetches React repositories from GitHub Search API
- Displays columns: `full_name`, `html_url`, `owner.login`
- Sorting enabled on all columns
- Filtering enabled on all columns
- Pagination with 8 items per page
- Material theme styling

### Run
```bash
cd aggrid-github
npm install
npm start
```

### Dependencies
- `ag-grid-community`
- `ag-grid-react`

## Task 2: MUI Shopping List (`shoppinglist`)

A shopping list application built with Material-UI component library.

### Features
- AppBar with Toolbar for header layout
- Container for main content
- Modal Dialog for adding new items
- TextField inputs for Product and Amount
- List display with ListItem and ListItemText
- Stack component for centering

### Run
```bash
cd shoppinglist
npm install
npm start
```

### Dependencies
- `@mui/material`
- `@emotion/react`
- `@emotion/styled`

## Task 3: React Router Navigation (`routerapp`)

A multi-page application demonstrating client-side routing with React Router v6.

### Features
- BrowserRouter wrapper
- Navigation with Link components
- Routes and Route for path definitions
- Home and Contact page components

### Run
```bash
cd routerapp
npm install
npm start
```

### Dependencies
- `react-router-dom@6`
- `history@5`

## Branch Structure

- `main` - Contains all merged code
- `lab-9-aggrid` - Task 1 development branch
- `lab-9-mui` - Task 2 development branch
- `lab-9-router` - Task 3 development branch

## Technical Requirements Met

- [x] Node.js installed
- [x] All dependencies saved to package.json
- [x] React Router v6 used
- [x] MUI v5 with emotion packages
- [x] AG Grid community and react packages
- [x] Separate feature branches for each task
- [x] All branches merged via commits
