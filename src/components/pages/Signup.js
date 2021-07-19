import React from 'react'
import {TextField, Button, Grid, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';

const useStyles = makeStyles({
  wrapper: {
    marginTop:"5rem"
  },
  input: {
    border: '1px solid red',
  }
});
function Signup() {
  const formik = useFormik({
    initialValues: {
      displayName: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik);
 const signUpStyles = useStyles();
    return (
     
        <Container className={signUpStyles.wrapper} maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
        <Grid item xs={12}>
        <TextField
          name="displayName"
          label="Display Name"
          variant="outlined"
          value={formik.values.displayName}
          onChange={formik.handleChange}
          fullWidth/>
        </Grid>

        <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          fullWidth/>
        </Grid>

        <Grid item xs={12}>
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          fullWidth/>
        </Grid>

        <Grid item xs={12}>
        <Button type='submit' variant="contained" color="primary"fullWidth>Submit</Button>
        </Grid>

        <Grid item xs={12}>
        <Button variant="contained" color="secondary"fullWidth>SignUp with Google</Button>
        </Grid>

        </Grid>
        </form>
        </Container>
       
    )
}

export default Signup
