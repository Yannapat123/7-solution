import React from 'react'

import { useManageTodoList } from './hook/useManageTodoList';
import { Box, Button, Grid } from '@mui/material';
import FruitList from './components/FruitList';
import VegetableList from './components/VegetableList';

export default function TestA() {
    const { items, handleAddTodo, fruitList, vegetableList } = useManageTodoList()

    return (
        <Box sx={{ p: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    {items.map((item, index) => (
                        <Box key={index} sx={{ mt: 2 }}>
                            <Button
                                onClick={() => handleAddTodo(item.type, item.name, index)}
                                sx={{
                                    boxShadow: 2,
                                    width: '8rem',
                                    color: 'black'
                                }}>
                                {item.name}
                            </Button>
                        </Box>
                    ))}

                </Grid>
                <Grid item xs={4}>
                    <FruitList fruitList={fruitList} />
                </Grid>
                <Grid item xs={4}>
                    <VegetableList vegetableList={vegetableList} />

                </Grid>
            </Grid>
        </Box>
    )
}