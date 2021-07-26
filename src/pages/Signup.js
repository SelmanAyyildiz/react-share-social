import React from 'react'
import {TextField, Button, Grid, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import firebase from '../firebase/firebase.utils';
import * as Yup from 'yup';


const signUpSchema = Yup.object().shape({
  displayName:Yup.string().required('Display Name Is Required'),
  email:Yup.string().email("Invalid Email").required('Email Is Required'),
  password:Yup.string().required('Password Is Required')
                       .min(6, 'Password Must Be At Least 6 Characters') 
                       .max(20, 'Password Must Be At Most 20 Characters')
                       .matches(/^[a-zA-Z0-9]+$/, 'Password Must Be Alphanumeric'),
 })


const useStyles = makeStyles({
  wrapper: {
    marginTop:"5rem",
  },
  singInBtn:{
    color:"white",
    fontWeight: "bold",
  },
  googleBtn:{
    backgroundColor:"#EA4335",
    color:"white",
    fontWeight: "bold",
 }
});
function Signup() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      displayName: '',
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      firebase.register( values.displayName, values.email, values.password);
    },
  });


 const handleGoogleBtnClick = () => {
   firebase.signInWithGoogle();
 }
    return (
     
        <Container className={classes.wrapper} maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
        <Grid item xs={12}>
        <TextField
          name="displayName"
          label="Display Name"
          variant="outlined"
          value={formik.values.displayName}
          onChange={formik.handleChange}
          error={formik.errors.displayName}
          helperText={formik.errors.displayName}
          fullWidth/>
        </Grid>

        <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
          helperText={formik.errors.email}
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
          error={formik.errors.password}
          helperText={formik.errors.password}
          fullWidth/>
        </Grid>

        <Grid item xs={12}>
        <Button type='submit' className={classes.singInBtn}  variant="contained" color="primary"fullWidth>Register</Button>
        </Grid>

        <Grid item xs={12}>
        <Button  className={classes.googleBtn} variant="contained" color="secondary"fullWidth onClick={handleGoogleBtnClick}>SignUp with Google</Button>
        </Grid>

        </Grid>
        </form>
        </Container>
       
    )
}

export default Signup
