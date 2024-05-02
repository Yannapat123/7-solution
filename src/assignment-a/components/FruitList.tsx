import { Box, Button, Typography } from '@mui/material'
import React from 'react'

type Props = {
    fruitList: any[]
}

export default function FruitList(props: Props) {
    return (
        <div>
            <Box sx={{ boxShadow: 2, height: '100vh', width: '300px' }}>
                <Box sx={{ background: 'gray', py: '10px', display: 'flex', justifyContent: 'center' }}>
                    <Typography >Fruit</Typography>

                </Box>
                {/* <Divider /> */}
                {props.fruitList.map((item, index) => (
                    <Box key={index} sx={{ mt: 2, display: 'flex', justifyContent: 'center' }} >
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