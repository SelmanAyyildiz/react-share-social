import React,{useCallback, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {FirebaseAuthContext} from '../context/AuthContext';
import firebase from '../firebase/firebase.utils';
import { Link as LINK} from 'react-router-dom'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
  },
  link: {
    margin: theme.spacing(1),
    color:"white",
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  avatarImg : {
        borderRadius: '50%',
        width: 25,
        height: 25,
        marginRight: theme.spacing(1),
      border: '1px solid lightblue',
    },
    avatar: {
      alignItems: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      fontSize: '1.3rem',
      justifyContent: 'spaceEvenly',
    }
  
  

}));

export default function Navbar() {

  const {currentUser} = useContext(FirebaseAuthContext);
  console.log("🚀🚀🚀", currentUser)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose =useCallback( () => {
    setAnchorEl(null);
  },[]);
  const handleSignOut =useCallback( () => {
    firebase.signOut();
   
  },[]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React-Share-Social
          </Typography>
          {currentUser ? (
            <div>
              <LINK to="/"><HomeRoundedIcon  style={{color:"white"}} fontSize="large"  /></LINK>
              
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >

              <div className={classes.avatar}>
                  <h6 style={{margin:"0.3rem"}}>{currentUser?.displayName}</h6>
                  {currentUser?.photoURL ? (<img src={currentUser?.photoURL} alt="avatar" className={classes.avatarImg}/>):null}
                </div> 
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>
          ):
            <div className={classes.linkWrapper}>
            <LINK to="/"><HomeRoundedIcon  style={{color:"white"}} fontSize="large"  /></LINK>
            <Link href="/login" className={classes.link}>Login</Link>
            <Link href="/register" className={classes.link}>Register</Link>
            </div>
            }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
