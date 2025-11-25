# Video Demonstration Script - Week 9 Laboratory Work

**Duration:** 5-10 minutes
**Requirements:** Webcam + Screen capture

---

## Introduction (30 seconds)

"Hello, my name is [YOUR NAME], and this is my video demonstration for Laboratory Work 9: Useful Third-Party Components for React. In this lab, I implemented three separate React applications using AG Grid, Material-UI, and React Router. Let me show you each one."

---

## Task 1: AG Grid Application (2-3 minutes)

### Open http://localhost:3000

**Script:**

"This is Task 1 - the AG Grid data grid implementation. This application fetches repositories from the GitHub API and displays them in an AG Grid table.

**Show the grid and explain:**

1. **Data Source:** The data comes from the GitHub Search API. I'm using the `useEffect` hook to fetch React repositories when the component mounts.

2. **Columns:** I defined three columns as required:
   - `full_name` - the repository's full name
   - `html_url` - the URL to the repository
   - `owner.login` - the owner's username. For this nested field, I used a `valueGetter` function to access `params.data.owner.login`

3. **Sorting:** [Click on a column header to sort] As you can see, clicking on any column header sorts the data. I enabled this by adding `sortable: true` to each column definition.

4. **Filtering:** [Click the filter icon on a column] Each column also has filtering capability. I can type here to filter the results. This was enabled with `filter: true` in the column definitions.

5. **Pagination:** [Show pagination at bottom] The grid displays 8 items per page using `pagination={true}` and `paginationPageSize={8}` props.

6. **Styling:** The grid uses the Material theme with `className='ag-theme-material'` and has a height of 500 pixels."

---

## Task 2: MUI Shopping List Application (2-3 minutes)

### Open http://localhost:3001

**Script:**

"This is Task 2 - the Shopping List application built entirely with Material-UI components.

**Show the layout and explain:**

1. **Layout Components:** At the top, I have an `AppBar` with a `Toolbar` containing the title. The main content is wrapped in a `Container` component for proper spacing and centering.

2. **State Management:** In App.js, I defined an `items` state using `useState([])` and an `addItem` function that adds new items to this array.

3. **Modal Dialog:** [Click "Add Item" button] When I click this button, it opens a Dialog modal. Let me show you how this works:
   - The `AddItem` component has its own `open` state initialized with `useState(false)`
   - Clicking the button sets `open` to `true`
   - The Dialog component is controlled by this `open` state

4. **Dialog Structure:** Inside the dialog, I used:
   - `DialogTitle` for the header
   - `DialogContent` containing two `TextField` components for Product and Amount
   - `DialogActions` with Cancel and Add buttons

5. **Adding Items:** [Type a product and amount, click Add] When I click Add:
   - The `handleAdd` function calls `addItem` (passed as a prop from App.js)
   - It resets the form fields
   - And closes the dialog

6. **List Display:** [Show the list] The items are rendered using MUI's `List`, `ListItem`, and `ListItemText` components. The product name is the primary text, and the amount is shown as secondary text.

7. **Stack Component:** The Add Item button is centered using the `Stack` component with `alignItems='center'`."

---

## Task 3: React Router Application (2-3 minutes)

### Open http://localhost:3002

**Script:**

"This is Task 3 - demonstrating client-side routing with React Router version 6.

**Show navigation and explain:**

1. **Router Setup:** The entire application is wrapped in `BrowserRouter` from react-router-dom.

2. **Navigation Links:** [Point to the nav] I created a `nav` element containing two `Link` components:
   - One pointing to '/' for the Home page
   - One pointing to '/contact' for the Contact page

3. **Route Configuration:** Below the navigation, I defined the routing table using `Routes` and `Route` components:
   - `Route path='/' element={<Home />}` renders the Home component
   - `Route path='/contact' element={<Contact />}` renders the Contact component

4. **Page Components:** [Click between Home and Contact]
   - Home.js renders a simple heading `<h1>Home.js</h1>`
   - Contact.js renders `<h1>Contact.js</h1>`

5. **Client-Side Navigation:** [Click links to demonstrate] Notice that when I click these links, the page doesn't reload. This is client-side routing - React Router intercepts the navigation and renders the appropriate component without a server request.

6. **Dependencies:** I installed react-router-dom version 6 and history version 5 as specified in the requirements."

---

## Code Structure & Git (1 minute)

**Script:**

"Let me briefly show you the project structure and version control:

[Show terminal or GitHub]

1. **Repository:** All three applications are in a single GitHub repository.

2. **Branching Strategy:** I created separate feature branches for each task:
   - `lab-9-aggrid` for the AG Grid task
   - `lab-9-mui` for the MUI Shopping List
   - `lab-9-router` for the React Router app

3. **All branches have been merged into main.**

4. **README:** The repository includes a comprehensive README.md documenting all three applications."

---

## Conclusion (30 seconds)

"To summarize, in this laboratory work I:
- Implemented AG Grid with sorting, filtering, and pagination using GitHub API data
- Built a Shopping List app with MUI components including a modal dialog
- Created a multi-page application with React Router v6 for client-side navigation

All code is available in my GitHub repository. Thank you for watching."

---

## Tips for Recording

1. **Test all apps before recording** - make sure they're running on ports 3000, 3001, 3002
2. **Prepare some test data** - add a few items to the shopping list before showing it
3. **Speak clearly and at a moderate pace**
4. **Show your face in a corner of the screen** (picture-in-picture)
5. **Have the code files open** in your IDE to show if needed
6. **Practice once** before the final recording

---

## URLs to Open

- Task 1 (AG Grid): http://localhost:3000
- Task 2 (Shopping List): http://localhost:3001
- Task 3 (Router): http://localhost:3002
- GitHub: https://github.com/iagadilov/fullstsack-ag-grid
