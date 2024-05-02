import { Box, Button, Typography } from '@mui/material'
import React from 'react'

type Props = {
    vegetableList: any[]
}

export default function VegetableList(props: Props) {
    return (
        <div>
            <Box sx={{ boxShadow: 2, height: '100vh', width: '300px' }}>
                <Box sx={{ background: 'gray', py: '10px', display: 'flex', justifyContent: 'center' }}>
                    <Typography > Vegetable</Typography>

                </Box>
                {props.vegetableList.map((item, index) => (
                    <Box key={index} sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                        <Button
                            // onClick={() => handleAddTodo(item.type, item.name)}
                            sx={{
                                boxShadow: 2,
                                width: '8rem',
                                color: 'black'
                            }}>
                            {item.name}
                        </Button>
                    </Box>
                ))}
            </Box>
        </div>
    )
}