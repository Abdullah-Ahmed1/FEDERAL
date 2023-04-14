import './App.css'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import AboutUs from './pages/AboutUs'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from './pages/Login';
import Register from './pages/Register';
import Helmets from './pages/Helmets';
import Jackets from './pages/Jackets';
import Suits from './pages/Suits';
import { NavItems } from './utils/NavItems';
import Boots from './pages/Boots'
import LoginIcon from '@mui/icons-material/Login';
import Badge from '@mui/material/Badge';
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['HOME', 'BOOTS', 'HELMETS','SUITS','GLOVES'];

export default function Main(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Federal
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box  sx = {{backgroundColor:"#f0f0f0",minHeight:"85.5vh"}}>
      <CssBaseline />

      <AppBar  sx  = {{backgroundColor:"#222222",minHeight:"105px"}}>
        <Toolbar sx = {{width:"90%"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' ,margin:"20px 0px 0px 100px"} }}
          >
            <Link to = '/' style={{color:"white",textDecoration:"none"}}>
            Federal
          </Link> 
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' },marginTop:"30px"}}>
          <SearchIcon sx = {{marginRight:"25px"}}/>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon/>
          </Badge>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Divider light/> */}
      <Box component='nav' sx = {{backgroundColor:"#222222",display:{xs :"none",lg : 'flex'},marginTop:"106px",height:"70px",width:"100%"}}>
        <div style={{margin:"auto"}}>
          <ul style={{listStyle:"none"}}>
            {
            NavItems.map((item,index)=>{
              return(
                <Link to={item.link} key={index} style={{textDecoration:"none",color :"white"}}>
                  <li style={item.style}>{item.name}</li>
                </Link>
              )
            })
            }
             <Link to ={'/login'} style ={{textDecoration:"none"}}>
             <li style={{color:"white",display:"inline",padding:"20px 50px",fontSize:"14px",fontWeight:"bold"}}>LOGIN</li> 
             </Link> 
            
          </ul>
        </div>
      </Box>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        {/* <Toolbar /> */}
        <Routes>
         <Route  path='/'  element={<Home/>} />
         <Route  path='/store'  element={<Store/>} />
         <Route  path='/about'  element={<AboutUs/>} />
         <Route  path='/login'  element={<Login/>} />
         <Route  path='/register'  element={<Register/>} />
         <Route  path='/helmets'  element={<Helmets/>} />
         <Route  path='/jackets'  element={<Jackets/>} />
         <Route  path='/suits'  element={<Suits/>} /> 
         <Route  path='/boots'  element={<Boots/>} />
       </Routes>
      </Box>
      
     </Box>
     
  );
}
