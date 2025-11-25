import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './App.css';

function App() {
  const [repositories, setRepositories] = useState([]);

  // Column definitions with sortable and filter enabled
  const columns = [
    { field: 'full_name', sortable: true, filter: true },
    { field: 'html_url', sortable: true, filter: true },
    { field: 'owner.login', sortable: true, filter: true, valueGetter: (params) => params.data.owner.login }
  ];

  // Fetch GitHub repositories on component mount
  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=react')
      .then(response => response.json())
      .then(data => {
        setRepositories(data.items);
      })
      .catch(error => console.error('Error fetching repositories:', error));
  }, []);

  return (
    <div className="App">
      <h1>GitHub Repositories - AG Grid</h1>
      <div
        className="ag-theme-material"
        style={{ height: 500, width: '100%', maxWidth: 1200, margin: '0 auto' }}
      >
        <AgGridReact
          rowData={repositories}
          columnDefs={columns}
          pagination={true}
          paginationPageSize={8}
        />
      </div>
    </div>
  );
}

export default App;
