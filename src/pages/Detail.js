import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { fetchData } from '../helper/FetchData';
import {Container, Grid, Typography} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';



const styles = makeStyles((theme)=>{

    return {
        wrapper: {
            fontSize: theme.typography.pxToRem(20),
            textAlign: 'center',
            marginTop: theme.spacing(10),
            height: 'calc(100vh - 19rem)',
        },
        userPicture:{
            width: '30%',
            height: 'auto',
            minWidth:"16rem",
            borderRadius: '50%',
            boxShadow: '0px 0px 30px #000000',
        },
        text:{
            minWidth:"16rem"
        },
        circul: {
            
            position: 'absolute',
            right: '50%',
            left: '47%',
            top: '30%',
            bottom: '50%',
        }
      
    }
})

function Detail() {
const classes = styles();
const {id} = useParams();
const [userDetail, setUserDetail] = useState();
useEffect(()=>{
   fetchData(`user/${id}`).then((res) => setUserDetail(res)).catch().finally();
},[])
console.log(userDetail)
    return (
        <Container className={classes.wrapper} >
            {!userDetail ? <CircularProgress className={classes.circul} /> : <>
            <img className={classes.userPicture} src={userDetail?.picture} alt={userDetail?.firstName + ".jpeg"}/>
            <Typography className={classes.text} variant="h4">{userDetail?.title} {userDetail?.firstName} {userDetail?.lastName}</Typography>
            <Typography className={classes.text} variant="h6">{userDetail?.email}</Typography>
            <Typography className={classes.text} variant="h6">{userDetail?.dateOfBirth}</Typography>
            <Typography className={classes.text} variant="h6">{userDetail?.registerDate}</Typography>
            <Typography className={classes.text} variant="h6">{userDetail?.phone}</Typography>
            {/* <Typography variant="h6">{userDetail?.location}</Typography> */}
          {/* {JSON.stringify(userDetail)} */}
            </>}
       
          </Container>
    )
}

export default Detail
