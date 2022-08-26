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
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import CustomerInvesments from '../components/CustomerInvesments'
import AdminDashboard from './AdminDashboard';
import CustomerProfile from './CustomerProfile';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import WorkIcon from '@mui/icons-material/Work';
import PaymentsIcon from '@mui/icons-material/Payments';

import ManageAssociate from '../components/Admin/ManageAssociate';
import ManageCustomer from '../components/Admin/ManageCustomer';
import ManageDesignation from '../components/Admin/ManageDesignation';
import ManageEmployee from '../components/Admin/ManageEmployee';
import ManageSalary from '../components/Admin/ManageSalary';
import Payout from '../components/Admin/Payout';



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

export default function MiniDrawer() {
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
            <ListItem key="dashboard"selected={menu === 1} disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(1)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <DashboardRoundedIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>

            <ListItem key="Customer" selected={menu === 2} disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(2)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <SupervisedUserCircleIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Customer"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>


            <ListItem key="Employee" selected={menu === 3} disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(3)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <PeopleOutlineIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Employee"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>

            <ListItem key="Associate" selected={menu === 4} disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(4)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <AdminPanelSettingsIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Manage Associate"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>
            
            <ListItem key="Salary" selected={menu === 5} disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(5)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <CurrencyExchangeIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Salary"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>

            <ListItem key="Designation" selected={menu === 6} disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(6)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <WorkIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Designation"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>

            <ListItem key="Payout" selected={menu === 7} disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(7)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <PaymentsIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Payout"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>

            <ListItem key="logout" selected={menu === 8} disablePadding sx={{ display: 'block' }} onClick={()=>menuHandler(8)}>
              <ListItemButton sx={{ minHeight: 48,justifyContent: open ? 'initial' : 'center',px: 2.5, }}  >
                <ListItemIcon sx={{ minWidth: 0,mr: open ? 3 : 'auto',justifyContent: 'center',}}>
                   <LogoutSharpIcon /> 
                </ListItemIcon>
                <ListItemText primary={"Logout"} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>


        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {
           menu==1?<AdminDashboard/>:menu==2?<ManageCustomer/>:menu==3?<ManageEmployee/>:menu==4?<ManageAssociate/>:menu==5?<ManageSalary/>:menu==6?<ManageDesignation/>:menu==7?<Payout/>:<p>log out</p>
        }
      </Box>
    </Box>
  );
}
