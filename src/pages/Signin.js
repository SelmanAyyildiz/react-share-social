import React from 'react'
import {TextField, Button, Grid, Container, ThemeProvider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import firebase from '../firebase/firebase.utils';
import * as Yup from 'yup';
import LockIcon from '@material-ui/icons/Lock';
import Avatar from '@material-ui/core/Avatar';


const signInSchema = Yup.object().shape({
 email:Yup.string().email("Invalid Email").required('Email Is Required'),
 password:Yup.string().required('Password Is Required')
                      .min(6, 'Password Must Be At Least 6 Characters') 
                      .max(20, 'Password Must Be At Most 20 Characters')
                      .matches(/^[a-zA-Z0-9]+$/, 'Password Must Be Alphanumeric'),
})

const useStyles = makeStyles((theme)=>({
  wrapper: {
    marginTop:"5rem"
  },
  loginBtn:{
    color:"white",
    fontWeight: "bold",
  },
  googleBtn:{
    backgroundColor:"#EA4335",
    color:"white",
    fontWeight: "bold",
  },
  avatar:{
    margin:"2rem auto",
    
    
  },
  p:{
    fontSize:"1.5rem",
    width: "inherit",
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
   

    
  }
}));

const initialValues = {
  email: '',
  password: '',
}

function Signin() {
  
  const classes = useStyles();
  
  const handleGoogleBtnClick = () => {
    firebase.signInWithGoogle();
  };
  const handleFormSubmit = (values) => {
    // alert(JSON.stringify(values, null, 2));
    firebase.signIn(values.email, values.password);
  };
    return (
     
        <Container className={classes.wrapper} maxWidth="sm">
          <Avatar className={classes.avatar}>
          <LockIcon />
          </Avatar>
          <div className={classes.p}>Log In</div>
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
            <Button type='submit' className={classes.loginBtn} variant="contained" color="primary"fullWidth>LOGIN</Button>
            </Grid>
    
            <Grid item xs={12}>
            <Button variant="contained" className={classes.googleBtn} color="secondary"fullWidth onClick={handleGoogleBtnClick}>Login with Google</Button>
            </Grid>
    
            </Grid>
            </form>
            )}
       </Formik>
        </Container>
       
    )
}

export default Signin
