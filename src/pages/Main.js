import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import {Container, Grid, capitalize} from '@material-ui/core';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MediaCard from '../components/MediaCard';


const styles = makeStyles((theme)=>{

    return {
        wrapper: {
            fontSize: theme.typography.pxToRem(20),
            textAlign: 'center',
            marginTop: theme.spacing(10),
            margin: theme.spacing("auto"),
            height: 'calc(100vh - 19rem)',
        },
    }
})
function Main() {
    const[userList, setUserList] = useState();
    const{REACT_APP_BASE_URL, REACT_APP_API_TOKEN} = process.env;
    const classes = styles();
    const fetchData = async() =>{
        
    const response = await axios.get(`${REACT_APP_BASE_URL}user`,{headers:{"app-id":REACT_APP_API_TOKEN}})
        setUserList(response?.data?.data )
    }
    useEffect(()=>{
        fetchData();
    },[])
     console.log(userList)
    return (
        <Container className={classes.wrapper} >
            <Grid container spacing={3}>
            {userList?.map((user,index)=> {
                return(
                    <Grid item sm={4}  key={index}>
                    <MediaCard key={index} id={user.id} userImage={user.picture} userEmail={user.email} userName={`${capitalize(user.title)} ${user.firstName} ${user.lastName}`}/>
                    
            </Grid>
            )
        })}
                
            </Grid>
        </Container>
    )
}

export default Main
