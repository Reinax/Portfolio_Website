import React from 'react'
import './Global.css';
import { List } from '@mui/joy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ListItemButton } from '@mui/material';

function Contact() {
  let width = window.innerWidth;
    if(width > 782){
    return (
      <div className='Container'>
        <div className='ContactList'>
          <List orientation='horizontal'>
            <ListItemButton href='https://www.linkedin.com/in/bradleywinson/'>
              <LinkedInIcon sx={{fontSize: 300}}/>
            </ListItemButton>
            <ListItemButton href='https://github.com/Reinax?tab=repositories'>
              <GitHubIcon sx={{fontSize: 300}}/>
            </ListItemButton>
          </List>
        </div>
      </div>
    )
    }
    else {
      return (
      <div className='Container'>
      <div className='ContactList'>
        <List orientation='vertical'>
          <ListItemButton href='https://www.linkedin.com/in/bradleywinson/'>
            <LinkedInIcon sx={{fontSize: 250}}/>
          </ListItemButton>
          <ListItemButton href='https://github.com/Reinax?tab=repositories'>
            <GitHubIcon sx={{fontSize: 250}}/>
          </ListItemButton>
        </List>
      </div>
      </div>
      )
    }
}

export default Contact
