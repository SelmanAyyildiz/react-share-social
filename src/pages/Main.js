import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import { useEffect, useState } from 'react';
import axios from 'axios';

const styles = makeStyles((theme)=>{

    return {
        wrapper: {
            fontSize: theme.typography.pxToRem(20),
            textAlign: 'center',
            margin: theme.spacing(10),
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
        <Container className={classes.wrapper} maxWidth="sm">
            {userList?.map((user,index)=> {
                return <div key={index}>{`${user.title} ${user.firstName} ${user.lastName}`}</div>
            })}
        </Container>
    )
}

export default Main
