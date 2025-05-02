import './SaleManagerDashboard.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Toolbar from '@mui/material/Toolbar';
import logo from './assets/logo.svg';
import Root from "@/features/profile/saleManagerDashboard/Root/Root.tsx";
import LangSelect from "@/features/profile/saleManagerDashboard/components/LangSelect.tsx";
import IconProfile from './assets/IconProfile.svg'
import HomeLogo from './assets/HomeLogo.svg'
import letterLogo from './assets/letterLogo.svg'
import ProfileLogoBlack from './assets/ProfileLogoBlack.svg'
import {ClientProfileTop, Sidebar} from "@/features/profile/imports/components.ts";

const drawerWidth = 240;

type HeaderProps = {
    window?: () => Window;
};

function SaleManagerDashboard(props: HeaderProps) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('');

  const menuItems = [
    { text: 'Profile settings', icon: IconProfile },
    { text: 'Dashboard', icon: HomeLogo },
    { text: 'User management', icon: ProfileLogoBlack },
    { text: 'Support', icon: letterLogo },
  ];

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawerContent = (
    <Box sx={{ position: 'relative' }}>
      <IconButton
        onClick={handleDrawerClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
          display: { sm: 'none' }
        }}
      >
        <CloseIcon />
      </IconButton>

      <Toolbar sx={{ mt: { xs: 4, sm: 0 } }}>
        <img src={logo} alt="Logo" />
      </Toolbar>

      <Divider />

      <List>
        {menuItems.map(({ text, icon }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                setActiveItem(text);
                handleDrawerClose(); // Закриває меню після кліку
              }}
              sx={{
                backgroundColor: activeItem === text ? '#ED805B' : 'transparent',
                color: activeItem === text ? 'white' : 'inherit',
                '&:hover': {
                  backgroundColor: activeItem === text ? 'darkred' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon sx={{ color: activeItem === text ? 'white' : 'inherit' }}>
                <img src={icon} alt={text} style={{ width: 24, height: 24 }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* Бокове меню */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar menu"
      >
        {/* Mobile Drawer */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          onTransitionEnd={handleDrawerTransitionEnd}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              position: 'relative',
            },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Desktop Drawer */}
        <Sidebar />
      </Box>

      {/* Хедер і контент */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%' }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
              display: "none"
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Кнопка меню на мобілці */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Центр логотип */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box component="img" src={logo} alt="Logo" sx={{ height: 32 }} />
            </Box>

            {/* Праворуч: мова */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LangSelect />
            </Box>
          </Toolbar>
        </AppBar>

        {/* Основний контент */}
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, mt: '64px', width: '100%' }}
        >
          <ClientProfileTop>
              Dashboard
          </ClientProfileTop>

          <Root />
        </Box>
      </Box>
    </Box>
  );
}

SaleManagerDashboard.propTypes = {
  window: PropTypes.func,
};

export default SaleManagerDashboard;
