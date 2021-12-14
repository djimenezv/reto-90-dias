import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import './Menu.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => {

    const [dialogOpen, setDialogOpen] = useState(false);

    return(
        <div className="menu">
            <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}> 
                <MenuIcon  role="open-menu" />
            </Button>
            <Dialog className="menu__dialog" fullScreen open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <AppBar sx={{ position: 'relative' }} >
                <Toolbar>
                    <Button variant="contained" color="primary" onClick={() => setDialogOpen(false)}> 
                        <CloseIcon  role="close" />
                    </Button>
                </Toolbar>
            </AppBar>
                <List className="menu__items">
                    <ListItem autoFocus button >
                        <ListItemText primary="Mis Retos" />
                    </ListItem>                
                    <ListItem autoFocus button >
                        <ListItemText primary="Crear Reto" />
                    </ListItem>
                    <ListItem autoFocus button >
                        <ListItemText primary="Salir" />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
}

export default Menu;