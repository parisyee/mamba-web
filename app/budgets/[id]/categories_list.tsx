import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { useState, MouseEvent } from 'react';

export default function CategoriesList({ categories }) {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '30%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="">
        {categories.map((category) => {
          return (
            <>
              <ListItemButton
                key={category.id}
                selected={selectedIndex === category.id}
                onClick={(event) => handleListItemClick(event, category.id)}
              >
                <ListItemText primary={category.name} />
              </ListItemButton>
              <Divider />
            </>
          );
        })}
      </List>
    </Box>
  );
}