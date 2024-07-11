'use client'

import { useState, MouseEvent } from 'react';

import Category from '@/lib/types/category';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


export default function CategoriesList({
  categories,
  onSelectCategory,
  onAddCategory,
  onDeleteCategory,
}: {
  categories: Category[],
  onSelectCategory: (category: Category) => void,
  onAddCategory: () => void,
  onDeleteCategory: (id: string) => void,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (
    event: MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    onSelectCategory(categories[index]);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label=""
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Budget Categories
          </ListSubheader>
        }
      >
        {categories.map((category, i) => {
          return (
            <div key={category.id}>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onDeleteCategory(category.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  onClick={(event) => handleListItemClick(event, i)}
                  primary={category.name}
                />
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
      <Button onClick={onAddCategory}>Add Category</Button>
    </div>
  );
}