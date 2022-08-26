import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import AssociateInvesment from '../components/AssociateInvesment'
import AssociateDashboard from './AssociateDashboard';
import AssociateProfile from './AssociateProfile';
import AssociateWorkReport from './AssociateWorkReport';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function AssociateMenu() {
  const [menu,setMenu]=React.useState(1);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const menuHandler=(id)=>{
  console.log(id);
  setMenu(id);
}
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Creazione CRM
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem key="dashboard" disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(1)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <DashboardRoundedIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>

            <ListItem key="invesment" disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(2)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <CurrencyRupeeRoundedIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Invesment"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>


            <ListItem key="profile" disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(3)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <AccountCircleRoundedIcon /> 
                </ListItemIcon>
                <ListItemText primary={"My Profile"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>

            <ListItem key="Work Report" disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(4)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <ReceiptLongIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Work Report"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>

            <ListItem key="logout" disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(5)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <LogoutSharpIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Logout"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {
          menu==1?<AssociateDashboard></AssociateDashboard>:menu==2?<AssociateInvesment/>:menu==3?<AssociateProfile/>:<AssociateWorkReport/>
        }
      </Box>
    </Box>
  );
}
