import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import "../style/landing.css"
import Dumbgram from "../assets/DumbGram.png"
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
// import TextField from "@mui/material/TextField";
import {Form} from "react-bootstrap"
// import {grey} from '@mui/material/colors'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#212121',
    border: '2px solid #000',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
    
  };

export default function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const[show, setShow] = React.useState(false)
  const handleRegisterOpen= () => setShow(true)
  const handleRegisterClose= () => setShow(false)

  return (
      <div className='landing'>
        <Modal
        open={open}
        onClose={handleClose}
      >
        <Box className='boxModal' sx={style}>
          <Typography variant="h6" component="h2">
            <h4 style={{color: "white"}}>Login</h4>
          </Typography>
          <Form className="px-3">
            <Form.Group className="modalInput" controlId="inputregister">
                <Form.Control
                className="mb-4"
                type="email"
                placeholder="Email"
                name="email"
                />
                <Form.Control
                className="mb-4"
                type="password"
                placeholder="Password"
                name="password"
                />
            </Form.Group>
        <Button sx={{px: 4, width: 300}} className='loginBut' variant="outlined">SIGN IN</Button>
          <Typography style={{color: "white"}} sx={{ mt: 2 }}>
            <p>Don't have an account ? Klik Here</p>
          </Typography>
          </Form>
        </Box>
        </Modal>
        <Modal
        open={show}
        onClose={handleRegisterClose}
      >
        <Box className='boxModal' sx={style}>
          <Typography variant="h6" component="h2">
            <h4 style={{color: "white"}}>Login</h4>
          </Typography>
          <Form className="px-3">
            <Form.Group className="modalInput" controlId="inputregister">
                <Form.Control
                className="mb-4"
                type="email"
                placeholder="Email"
                name="email"
                />
                <Form.Control
                className="mb-4"
                type="text"
                placeholder="Name"
                name="Name"
                />
                <Form.Control
                className="mb-4"
                type="text"
                placeholder="Username"
                name="Username"
                />
                <Form.Control
                className="mb-4"
                type="password"
                placeholder="Password"
                name="password"
                />
            </Form.Group>
        <Button sx={{px: 4, width: 300}} className='loginBut' variant="outlined">SIGN IN</Button>
          <Typography style={{color: "white"}} sx={{ mt: 2 }}>
            <p>Don't have an account ? Klik Here</p>
          </Typography>
          </Form>
        </Box>
            </Modal>
            <Box className='left'>
                <img src={Dumbgram} alt="Dumbgram" />
                <h2 >Share your best photos or videos</h2 >
                <p>Join now, share your creations with another people and enjoy other creations.</p>
                <div>
                <Button className='login' onClick={handleOpen} variant="outlined">Login</Button>
                <Button className='register' onClick={handleRegisterOpen}>Register</Button>
                    
                </div>
            </Box>

            <Grid className='right' container component="main">
                <Box sx={{ width: 500, minHeight: 500 }}>
                    <Masonry columns={3} spacing={2}>
                        {itemData.map((item, index) => (
                        <div key={index}>
                            <img
                            src={`${item.img}?w=162&auto=format`}
                            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: 'block',
                                width: '100%',
                            }}
                            />
                        </div>
                        ))}
                    </Masonry>
                </Box>
            </Grid>
    </div>
  );
}


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
      title: 'Snacks',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
      title: 'Tower',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
      title: 'Tree',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];