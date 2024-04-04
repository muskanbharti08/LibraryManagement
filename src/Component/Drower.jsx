import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import WidgetsIcon from '@mui/icons-material/Widgets';
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { NavLink } from 'react-router-dom';
export default function Drower() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

let a = "/"
let b = "/service"
let c = "/auther";
let d = "/blog"


  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'service', 'AutherCheckList', 'Blog'].map((text, index) => (
          
          <NavLink to ={text==="Home"?a:text==="service"?b:text==="AutherCheckList"?c:text==="Blog"?d:"/"}>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <HomeIcon /> : null}
                {index  === 1 ?  <MiscellaneousServicesIcon/> : null}
                {index  === 2 ?   <MiscellaneousServicesIcon />:null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>

          </NavLink>
        ))}
      </List>
     
      {/* <List>
        {['FAQ', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? < MiscellaneousServicesIcon/> : <Diversity2Icon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><h1 className="text-black"><WidgetsIcon/></h1></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}