import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MovieContext from "../components/MovieContext";
import { useContext } from 'react';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '80%',
  },
  image: {
    backgroundImage: 'url(https://www.themoviethemesong.com/wp-content/uploads/2014/04/Game-of-Thrones-Theme-Song-9.jpg)',
    backgroundRepeat: 'no-repeat',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#39445a'

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    backgroundColor: "white"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#39445a'
  },
}));


function Login() {

  const state = {
    username: '',
    password: '',
    firstName:'',
    lastName:''

  }

  const classes = useStyles();

  let history = useHistory();
  const { userActive, setUser } = useContext(MovieContext);
  
  const handleEmailChange = (e) => {

    state.username = e.target.value;
    console.log(state.username);


  }
  const handlePasswordChange = (e) => {

    state.password = e.target.value;
    console.log(state.password);


  }

  const onSubmit = (e) => {
    //console.log("onSubmit Call....");

    fetch("http://localhost:5000/auth",
      {

        method: "POST",
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify({
          username: state.username,
          password: state.password,
          firstName: '',
          lastName: ''
        })

      })
      .then(res => res.json())
      .then(data => {
        
        //console.log(state.username);
        fetch("http://localhost:5000/users/username/" + state.username)
          .then(res => res.json())
          .then((data) => {
            setUser(
              {

                userNow: "Auth",
                username: data[0].username,
                fname: data[0].firstName,
                lname: data[0].lastName
              }
            )
          

            history.push('/');
          })
          .catch(err => console.log(`Error ${err}`));
      })
      .catch(err => console.log(`Error:  ${err}`))
   
alert(`Welcome ${state.firstName} to the website`);



  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
                  

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email Address"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(event) => handleEmailChange(event)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => handlePasswordChange(event)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(event) => onSubmit()}
              
            >
              Login
            </Button>
            <Grid container>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>


  );
}

export default Login;