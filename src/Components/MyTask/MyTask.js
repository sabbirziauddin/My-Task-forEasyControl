import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SingleTask from '../SingleTask/SingleTask';
import { securityTask } from '../Data/SecurityTask';

const MyTask = () => {
    
    return (
        <Container>

            <Typography variant="h3"  gutterBottom component="div">
                <h3> Total security task {<span style={{ color: '#FF4233'}} >{securityTask.length}</span>} </h3>

            </Typography>

            <Grid container spacing={2}>

                {
                 securityTask.map(task => <SingleTask

                         task={task} ></SingleTask>)
                }


            </Grid>


        </Container>
    );
};

export default MyTask;