
Conversation opened. 1 unread message.

Skip to content
Using BITS Pilani University Mail with screen readers

1 of 2,344
(no subject)
Inbox

SURYABHA MUKHOPADHYAY .
3:59 PM (3 minutes ago)
to me

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";

import Menu from '@mui/material/Menu';

import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import MenuItem from '@mui/material/MenuItem';
import { Photo } from '@mui/icons-material';
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog sx={{display:"flex",justifyContent:"right",marginBottom:"40vh"}} onClose={handleClose} open={open}>
      <DialogTitle sx={{display:"flex",flexDirection:'column',alignItems:"center" }}>          <Avatar alt="Remy Sharp" src={props.photo}  /></DialogTitle>
      <List sx={{ pt: 0}}>
        <ListItem sx={{display:"flex",flexDirection:'column',alignItems:"center" }}>
          <ListItemText>{props.username}</ListItemText>
        </ListItem>
        <ListItem sx={{display:"flex",flexDirection:'column',alignItems:"center" }}
        >
          <ListItemText>{props.email}</ListItemText>
        </ListItem>
        <ListItem sx={{display:"flex",flexDirection:'column',alignItems:"center"}}>
          <ListItemText>LiteCoin balance:{props.balance}</ListItemText>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function SearchAppBar({username,email,photo,balance}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [query, setQuery] =React.useState();
  const [topic, setTopic] =React.useState();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
           

      <AppBar position="static" sx={{backgroundColor:'#0f1A43'}}>
        <Toolbar sx={{justifyContent:'left'}}>
        <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon  />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Box sx={{ display:{ xs:'none',md:"flex"},width:'100%',justifyContent:'space-evenly'}}className="frosted">
        <Button sx={{color:'white'}}>Home</Button>
        <Button>Chat</Button>
        <Button>My Account</Button>
        <Button>My Bids</Button>
        <Button>More</Button>
      
     
      
     
   </Box>
      <Box sx={{display:'flex',width:'100%',justifyContent:'right',}}>
         <Search>
      <StyledInputBase
              placeholder={username}
              inputProps={{ 'aria-label': 'search' }}
              onInput={(search)=>setQuery(search.target.value)}
            />
            <Button type='submit' onClick={()=>{setTopic(query)}} sx={{backgroundColor:"white",maxWidth:"50px",minWidth:"30px"}} >
             <SearchIcon />
             </Button>
          </Search>
          <div>
      <Typography variant="subtitle1" component="div">
        {/* Selected: {selectedValue} */}
      </Typography>
      <br />
      <div style={{ 
      display:"flex",
      alignItems:'center',
        height:"30%",
      
      backgroundRepeat: 'no-repeat',
     // Set width and height to see the background
      borderRadius:"50%"
    }} variant="outlined" onClick={handleClickOpen}>
               <Avatar alt="Remy Sharp" src={photo}  />
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        photo={photo}
        username={username}
        email={email}
        balance={balance}
      />
    </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}

