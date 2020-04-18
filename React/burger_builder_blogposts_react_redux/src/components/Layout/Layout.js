import React from "react";
import classes from "./Layout.module.css";
import { Navbar, Icon } from "react-materialize";
import { NavLink } from 'react-router-dom'

const layout = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar
          alignLinks="right"
          brand={
            <a className="brand-logo center" href="/">
              <Icon>fastfood</Icon>Burger
            </a>
          }
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          <NavLink to="/">Build Burger!</NavLink>
          <NavLink to="/about">About</NavLink>
        </Navbar>
        <main className={classes.Content}>{props.children}</main>
      </div>
    </React.Fragment>
  );
};

export default layout;
