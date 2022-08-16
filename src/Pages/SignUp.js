import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));





export default function SignUp() {

  const classes = useStyles();

  const [users,setUsers]=useState({
     firstName:"",
     lastName:"",
     username:"",
     password:""
    
  })

  const submitForm = (e) => {

    e.preventDefault();
    fetch("https://pure-depths-83970.herokuapp.com/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users)
    }) 
      .then(res=>res.json())
      .then(data=>{
        alert(`The user ${users.firstName} was added successfully`);
        setUsers({
          firstName:"",
          lastName:"",
          username:"",
          password:""
         
       })
      })
      .catch(err => console.log(`Error : ${err}`))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          action="/"
          method="POST"
          onSubmit={submitForm}
          className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  backgroundColor: "whitesmoke",
                  borderRadius: "10px"
                }}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={users.firstName}
                autoFocus
                onChange={(event)=>{
                   setUsers({
                     ...users,
                     firstName:event.target.value
                   })
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  backgroundColor: "whitesmoke",
                  borderRadius: "10px"
                }}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={users.lastName}
                autoComplete="lname"
                onChange={(event)=>{
                  setUsers({
                    ...users,
                    lastName:event.target.value
                  })
               }}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                style={{
                  backgroundColor: "whitesmoke",
                  borderRadius: "10px"
                }}
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="userName"
                value={users.username}
                autoComplete="uname"
                onChange={(event)=>{
                  setUsers({
                    ...users,
                    username:event.target.value
                  })
               }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{
                  backgroundColor: "whitesmoke",
                  borderRadius: "10px"
                }}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={users.password}
                autoComplete="current-password"
                onChange={(event)=>{
                  setUsers({
                    ...users,
                    password:event.target.value
                  })
               }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="white"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}


