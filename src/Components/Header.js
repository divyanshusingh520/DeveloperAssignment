

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
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"
import { MyContext } from './Mycontext';
import { useContext } from 'react';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [ 'Login', 'Signin',"Cart"];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const{cart,setCart,searchQuery, setSearchQuery}=useContext(MyContext)
  
  // Step 3: Handle changes to the search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
      
        
      {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`/${item.toLowerCase()}`}>
                <ListItemText primary={item} />
              
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
       
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              HOME
            </Link>
          </Typography>
          <Toolbar>
         
         <input
           type="text"
           placeholder="Search Products"
           value={searchQuery}
           onChange={handleSearchChange}
           style={{ marginLeft: '20px' }}
         />
       </Toolbar>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          
        
      
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'white', textDecoration: "none" }}>
                {item === "Cart" ? (
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/${item.toLowerCase()}`}
                  >
                    {`${item} (${cart.length})`} {/* Display cart items count */}
                  </Link>
                ) : (
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

