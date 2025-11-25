import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

function AddItem({ addItem }) {
  // State for dialog open/close
  const [open, setOpen] = useState(false);

  // State for form inputs
  const [item, setItem] = useState({ product: '', amount: '' });

  // Open dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Handle input changes
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  // Handle add button click
  const handleAdd = () => {
    addItem(item);
    setItem({ product: '', amount: '' }); // Reset form
    handleClose();
  };

  return (
    <div>
      {/* Button to open dialog */}
      <Button variant="contained" onClick={handleOpen}>
        Add Item
      </Button>

      {/* Modal Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="product"
            label="Product"
            fullWidth
            variant="outlined"
            value={item.product}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="amount"
            label="Amount"
            fullWidth
            variant="outlined"
            value={item.amount}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd} variant="contained">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddItem;
