import React from 'react'
import {TextField, Button, Grid, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import firebase from '../firebase/firebase.utils';
import * as Yup from 'yup';


const signInSchema = Yup.object().shape({
 email:Yup.string().email("Invalid Email").required('Email Is Required'),
 password:Yup.string().required('Password Is Required')
                      .min(6, 'Password Must Be At Least 6 Characters') 
                      .max(20, 'Password Must Be At Most 20 Characters')
                      .matches(/^[a-zA-Z0-9]+$/, 'Password Must Be Alphanumeric'),
})

const useStyles = makeStyles({
  wrapper: {
    marginTop:"5rem"
  },
  input: {
    border: '1px solid red',
  }
});

const initialValues = {
  email: '',
  password: '',
}

function Signin() {
  
  const signInStyles = useStyles();
  
  const handleGoogleBtnClick = () => {
    firebase.signInWithGoogle();
  };
  const handleFormSubmit = (values) => {
    // alert(JSON.stringify(values, null, 2));
    firebase.signIn(values.email, values.password);
  };
    return (
     
        <Container className={signInStyles.wrapper} maxWidth="sm">
          <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={handleFormSubmit}>

          {({handleSubmit, values, handleChange, errors}) => (
               <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
            <Grid item xs={12}>

            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth={true}
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email}
               />
            </Grid>
    
            <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              value={values.password}
              onChange={handleChange}
              fullWidth
              error={errors.password}
              helperText={errors.password}
              />
            </Grid>
    
            <Grid item xs={12}>
            <Button type='submit' variant="contained" color="primary"fullWidth>LOGIN</Button>
            </Grid>
    
            <Grid item xs={12}>
            <Button variant="contained" color="secondary"fullWidth onClick={handleGoogleBtnClick}>SignIn with Google</Button>
            </Grid>
    
            </Grid>
            </form>
            )}
       </Formik>
        </Container>
       
    )
}

export default Signin
