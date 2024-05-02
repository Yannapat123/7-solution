import React from 'react'

import { useManageTodoList } from './hook/useManageTodoList';
import { Box } from '@mui/material';


export default function TestB() {
    const { items } = useManageTodoList()

    return (
        <Box sx={{ p: 4 }}>
            <pre>{JSON.stringify(items, null, 2)}</pre>
        </Box>
    )
}