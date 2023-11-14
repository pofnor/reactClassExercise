import { useState } from 'react';
import { sessions } from '../data/sessionDB';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const drawerWidth = 200;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  function totalSession (sessions) {
    const sessionNumbers = []
    for (const i in sessions) {
      sessionNumbers.push(sessions[i].session)
    }

    const totalLink = Math.max(...sessionNumbers)
    const result = []
    for (let i = 0; i < totalLink; i++) {
      result.push({
        to: '/session/' + (i + 1),
        linkname: 'Session ' + (i + 1)
      })
    }
    return result
  }

  const Links = totalSession(sessions)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        My React Class
      </Typography>
      <Divider />
      <List>
        <ListItem key='Home' disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link className='navbar-link' to="/">
              <HomeIcon />
            </Link>
          </ListItemButton>        
        </ListItem>
        <ListItem key='Search' disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link className='navbar-link' to="/search">
              <SearchIcon />
            </Link>
          </ListItemButton>        
        </ListItem>
        {Links.map(link => {
          return(
            <ListItem key={link.linkname} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <Link className='navbar-link' to={link.to}>{link.linkname}</Link>
              </ListItemButton>        
            </ListItem>
          )
        })}
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
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
          >
            My React Class
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>   
            <Button key='Home' sx={{ color: '#fff' }}>
              <Link className='navbar-link' to="/">
                <HomeIcon />
              </Link>
            </Button>
            <Button key='search' sx={{ color: '#fff' }}>
              <Link className='navbar-link' to="/search">
              <SearchIcon/>
              </Link>
            </Button>
            {Links.map(link => {
              return (
                <Button key={link.linkname} sx={{ color: '#fff' }}>
                  <Link className='navbar-link' to={link.to}>{link.linkname}</Link>
                </Button>
              )
            })}            
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>      
    </Box>
  );
}

export default NavBar;
