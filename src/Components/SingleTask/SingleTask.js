import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { Subtitles } from '@mui/icons-material';
import MuiButton from '../../StyledComponent/MuiButton';
import SecurityIcon from '@mui/icons-material/Security';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const SingleTask = ({task}) => {
   const  {Icon,subtitle,title} = task;
    const handleOnClick =(e)=>{
        alert('Congratulation, you passed the task');
        e.preventDefault();
    }
    return (
        <>
            <Grid item xs={12} sm={12} md={3}>

                <Paper/>


                <Paper />
                <Paper elevation={3} sx={{ py: 3 }} sx={{ height: '400px' }} >
                    <Typography sx={{ color: 'info.main', fontWeight: '600' }} variant="h5" gutterBottom component="div">
                        <Icon sx={{fontSize:'100px'}}/>

                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        {title}

                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        {subtitle} space avialable

                    </Typography>
                    <MuiButton onClick ={handleOnClick}>Select</MuiButton>

                </Paper>


            </Grid>

        </>
    );
};

export default SingleTask;