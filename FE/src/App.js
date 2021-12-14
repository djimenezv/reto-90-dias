import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import {getUserProfile} from './services/user';
import { connect} from 'react-redux';
import { loadProfile } from './state/actions/profile';
import Header from './components/Header/Header';

function App({loadProfile, state}) {

  useEffect(() => {
    const init = async () => {
      const userProfile = await getUserProfile();
      loadProfile(userProfile);
    }
    init();
  },[]);
  
  return (
    <div className="App">
        <Header></Header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToState = {
    loadProfile
}

export default connect(
  mapStateToProps,
  mapDispatchToState
)(App);
