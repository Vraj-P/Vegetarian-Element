import React, { useState, useEffect } from "react";
import '../../styles/navbar.css'
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Toolbar, IconButton, makeStyles, Drawer, Link, MenuItem, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Recipies",
    href: "/",
  }
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#000000",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0
    },
  },
  menuButton: {
    fontFamily: "Impact",
    fontWeight: 700,
    size: "18px",
    color: "rgba(255, 255, 255, 0.918)",
    textShadow: "4px 4px 3px rgb(212, 175, 55)",
    WebkitTextStroke: "0.75px black",
    marginLeft: "38px"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Impact",
    fontWeight: 700,
    size: "20px",
    color: "rgba(255, 255, 255, 0.918)",
    textShadow: "4px 4px 3px rgb(212, 175, 55)",
    WebkitTextStroke: "1px black"
  },
  drawerContainer: {
    backgroundColor: "#000000",
    height: "100%",
    padding: "20px 30px",
    fontFamily: "Impact",
    fontWeight: 700,
    size: "18px",
    color: "rgba(255, 255, 255, 0.918)",
    textShadow: "4px 4px 3px rgb(212, 175, 55)",
    WebkitTextStroke: "0.5px black"
  },
  menuIcon: {
    color: "rgb(212, 175, 55)"
  }
}));

export default function Navbar() {
  const { header, menuButton, toolbar, drawerContainer, menuIcon } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900 
        ? setState((prevState) => ({ ...prevState, mobileView: true })) 
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return(
        <Link {...{
          component: RouterLink,
          to: href,
          color: "inherit",
          style: { textDecoration: "none" },
          key: label,
        }}>
          <MenuItem>{label}</MenuItem>
        </Link>
      )
    });
  }

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    }

    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    }

    return(
      <Toolbar>
        <IconButton {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}>
          <MenuIcon className={menuIcon}/>
        </IconButton>
        <Drawer {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}>
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div className="drawerMenuLogo">
          Vegetarian Element
        </div>
      </Toolbar>
    )
  }

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        Vegetarian Element
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const getMenuButtons = () => {
    return headersData.map(({label, href}) => {
      return(
        <Button {...{
          key: label,
          color: "inherit",
          to: href,
          component: RouterLink,
          className: menuButton,
        }}>
          {label}
        </Button>
      )
    });
  }

  return(
    <header className="sticky">
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}