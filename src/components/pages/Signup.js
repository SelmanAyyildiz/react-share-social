import React from 'react'
import {TextField, Button, Grid, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  wrapper: {
    marginTop:"5rem"
  },
  input: {
    border: '1px solid red',
  }
});
function Signup() {
 const signUpStyles = useStyles();
    return (
     
        <Container className={signUpStyles.wrapper} maxWidth="sm">
        <Grid container spacing={4}>
        <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth/>
        </Grid>

        <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth/>
        </Grid>

        <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth/>
        </Grid>

        <Grid item xs={12}>
        <Button variant="contained" color="primary"fullWidth>Submit</Button>
        </Grid>

        <Grid item xs={12}>
        <Button variant="contained" color="secondary"fullWidth>SignUp with Google</Button>
        </Grid>

        </Grid>
        </Container>
       
    )
}

export default Signup
