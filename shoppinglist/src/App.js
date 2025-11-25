import React, { useState } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import AddItem from './AddItem';

function App() {
  // State for shopping list items
  const [items, setItems] = useState([]);

  // Function to add new item to the list
  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      {/* App Bar with title */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main content container */}
      <Container maxWidth="sm" sx={{ mt: 3 }}>
        {/* Centered AddItem button using Stack */}
        <Stack alignItems="center" sx={{ mb: 2 }}>
          <AddItem addItem={addItem} />
        </Stack>

        {/* Shopping list display */}
        <List>
          {items.map((item, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={item.product}
                secondary={`Amount: ${item.amount}`}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
}

export default App;
