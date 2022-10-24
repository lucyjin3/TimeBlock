import React from 'react';
import { Typography, Grid, Button, Dialog, DialogTitle } from '@mui/material';
import '../styles/App.css';
import logo from '../assets/TimeBlock.png';
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
// import { useDispatch } from "react-redux"; commented so no warnings - implement soon
// import { ActionCreators } from "./actions"; commented so no warnings - implement soon


const Home = () => {
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openSignup, setOpenSignup] = React.useState(false);

    // const dispatch = useDispatch(); commented so no warnings - implement soon

    const handleOpenLogin = () => {
        setOpenLogin(true);
    }

    const handleCloseLogin = () => {
        setOpenLogin(false);
    }

    const handleOpenSignup = () => {
        setOpenSignup(true);
    }

    const handleCloseSignup = () => {
        setOpenSignup(false);
    }

    return (
        <div className="App">
            <Grid container spacing={3}>
                <Grid item xs={12} style={{height: "40px"}} /> 
                <Grid item xs={12} sm={3} md={2} lg={2} align="center">
                    <img src={logo} alt="logo" style={{marginLeft: "10px", width: "120px", boxShadow: "0px 0px 25px 20px rgba(0,0,0,0.97)"}} />
                </Grid>
                <Grid item xs={6} sm={6} md={8} lg={8}>
                    <Button
                        variant="contained"
                        style={{color: "#8C52FF", backgroundColor: "#ffffff", fontWeight: "bold", textTransform: "none", marginLeft: "10px", borderRadius: "25px", paddingLeft: "30px", paddingRight: "30px", float: "right"}}
                        onClick={handleOpenLogin}
                        sx={{ marginTop: { xs: '20px', sm: '0px', md: '0px', lg: '0px', xl: '0px' } }}>
                        Log In
                    </Button>
                    <Dialog open={openLogin} onClose={handleCloseLogin}>
                        <DialogTitle style={{ fontWeight: 'bold', color: '#8C52FF'}} align="center">
                            Log In
                        </DialogTitle>
                        <Login></Login>
                    </Dialog>
                </Grid>
                <Grid item xs={6} sm={3} md={2} lg={2}>
                    <Button 
                        variant="outlined" 
                        style={{color: "#ffffff", backgroundColor: "#8C52FF", marginLeft: "10px", fontWeight: "bold", textTransform: "none", borderRadius: "25px", paddingLeft: "30px", paddingRight: "30px", float: "left"}}
                        onClick={handleOpenSignup}
                        sx={{ marginTop: { xs: '20px', sm: '0px', md: '0px', lg: '0px', xl: '0px' } }}>
                        Sign Up
                    </Button>
                    <Dialog open={openSignup} onClose={handleCloseSignup}>
                        <DialogTitle style={{ fontWeight: 'bold', color: '#8C52FF'}} align="center">
                            Sign Up
                        </DialogTitle>
                        <Signup></Signup>
                    </Dialog>
                </Grid>

                <Grid item xs={12} stlye={{height: "10px"}} />

                <Grid item xs={12} sm={12} md={6} lg={6} container>
                <Grid item xs={12} style={{height: "250px"}} />

                <Grid item xs={1} sm={1} md={1} lg={2} />
                <Grid item xs={11} sm={11} md={11} lg={10} align="left">
                    <Typography variant="h4" style={{color: "#eeeeee", fontWeight: "bold"}}>Welcome to TimeBlock</Typography>
                </Grid>
                
                <Grid item xs={12} style={{height: "15px"}} />

                <Grid item xs={1} sm={1} md={1} lg={2}/>
                <Grid item xs={11} sm={11} md={11} lg={10} align="left">
                    <Typography variant="h5" style={{color: "#8C52FF"}}>The best way to keep track of your day</Typography>
                </Grid>

                <Grid item xs={12} style={{height: "50px"}} />

                <Grid item xs={1} sm={1} md={1} lg={2} />
                <Grid item xs={11} sm={11} md={11} lg={10} align="left">
                    {
                        // Go to dashboard
                    }
                    <Link className="get-started-button" to={"/dashboard"} style={{backgroundColor: "#8C52FF", textDecoration: "none", color: "#ffffff", fontWeight: "500", textTransform: "none", borderRadius: "25px", paddingLeft: "30px", paddingRight: "30px", paddingTop: "10px", paddingBottom: "10px", fontFamily: "Roboto"}}>Get Started</Link>
                </Grid>
                <Grid item xs={12} style={{height: "420px"}} />
                </Grid>
                <Grid item xs={0} sm={0} md={6} lg={6} sx={{display: {xs: 'none', sm: 'none', md: 'block', lg: 'block'}}} container style={{height: "650px"}}>
                <Grid item xs={12} style={{height: "100px"}} />
                </Grid>
                <Grid item xs={12} container>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;