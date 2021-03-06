import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
    </Nav>    
    <Nav pullRight>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">
        <i className="fa fa-home"></i>Home</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/search">
        <NavItem eventKey={ 2 } href="/search"> 
        <i className="fa fa-search"></i> Search</NavItem>
      </LinkContainer>
      <LinkContainer to="/application">
        <NavItem eventKey={ 3 } href="/application"> 
        <i className="fa fa-user"></i> Application</NavItem>
      </LinkContainer>
      <LinkContainer to="/ratings">
        <NavItem eventKey={ 4 } href="/ratings"> 
        <i className="fa fa-star"></i>Rating</NavItem>
      </LinkContainer>
      <LinkContainer to="/support">
        <NavItem eventKey={ 5 } href="/support">
        <i className="fa fa-question"></i>Support</NavItem>
      </LinkContainer>
      <NavDropdown eventKey={ 6 } title={ userName() } id="basic-nav-dropdown">
        <LinkContainer to="/account"> 
	  <MenuItem eventKey={ 6.1 } href="/account">My Account</MenuItem>
	 </LinkContainer>
        <MenuItem eventKey={ 6.2 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);
