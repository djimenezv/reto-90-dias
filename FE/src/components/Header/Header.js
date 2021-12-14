import React from 'react';
import {connect} from 'react-redux';
import { getProfile } from '../../state/selectors/profile';
import Menu from '../Menu/Menu';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Header = ({userProfile}) => {
    return(
        <div className='header'>
            <AppBar sx={{ position: 'relative' }} >
                <Toolbar>
                    <Menu></Menu>
                    <img src={userProfile.picture} alt={userProfile.displayName}></img>
                </Toolbar>
            </AppBar>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        userProfile : getProfile(state)
    }
}

export default connect(mapStateToProps)(Header);

