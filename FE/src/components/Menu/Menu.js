import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import './Menu.css';

const Menu = () => {

    const [dialogOpen, setDialogOpen] = useState(false);

    return(
        <div className="menu">
            <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}> 
                <MenuIcon  role="open-menu" />
            </Button>
            <Dialog fullScreen open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <List>
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