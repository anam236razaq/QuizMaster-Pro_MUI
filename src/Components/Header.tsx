import { Box, ImageListItem, Typography } from "@mui/material";
import React from "react";


export default function Header(){
    return(
        <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'space-evenly'}}>
            <ImageListItem sx={{width: '18%'}}>
                <img src="public/logo.png" alt="React Logo" width="100%" />
            </ImageListItem>
            <Typography variant="h2" sx={{textTransform:'uppercase', marginLeft: '-2rem'}}>The React Quiz</Typography>
        </Box>
    )
}