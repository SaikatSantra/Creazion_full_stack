import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import AllAssociate from '../associate/AllAssociate';
import AssociateNewForm from '../associate/AssociateNewForm';
import AssociateRequest from '../associate/AssociateRequest';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ManageAssociate = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={3} sm={12} lg={3}>
          <Item>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="All Associate" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <PlaylistAddIcon />
          </ListItemIcon>
          <ListItemText primary="Add New" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <PersonAddAlt1Icon />
          </ListItemIcon>
          <ListItemText primary="Request" />
        </ListItemButton>
      </List>
      
    </Box>
          </Item>
        </Grid>
        <Grid  xs={12} sm={12} md={9} lg={9}>
          <Item>
            <Box>
                {selectedIndex==0?<AllAssociate/>:selectedIndex==1?<AssociateNewForm/>:<AssociateRequest/>}
            </Box>
          </Item>
        </Grid>
      </Grid>


    </Box>
    );
}

export default ManageAssociate;
