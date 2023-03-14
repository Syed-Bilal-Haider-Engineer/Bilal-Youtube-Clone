import React, { useState } from "react";
import Hidden from "@mui/material/Hidden";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import awaterimg from "../components/assests/awater.jpg";
import List from "@mui/material/List";
import { Avatar, Box, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { IconButton, Paper, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../components/assests/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
const array = [
  {
    name: "Market",
    link1: "/",
  },
  // {
  //   name: "Swap",
  //   link1: "/swap",
  // },
  // {
  //   name: "Trade",
  //   link1: "/trade",
  // },
  // {
  //   name: "Order Cencel",
  //   link1: "/OrderCancel",
  // },
];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#000",
    justifyContent: "flex-start",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

export default function Header({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const styledactivelink = ({ isActive }) => {
    return {
      textDecoration: "none",

      textTransform: "capitalize",
      padding: "10px",
      borderRadius: "5px",
      width: "80%",
      fontSize: "20px",
      marginLeft: "10px",
      color: isActive ? "#000" : "#000 ",
      fontFamily: "IBM Plex Sans",
      display: "flex",
      gap: "20px",
      alignItems: "center",
      background: isActive ? "#fff" : "",
    };
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {children}
      <br />

      <Box
        sx={{
          display: "flex",
          width: "100px",
          height: "50px",
          mx: "auto",
          borderRadius: "10px",
          mt: "50px",
        }}
      >
        <img
          src={logo}
          alt=""
          srcset=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </Box>
      <List sx={{ mt: 5 }}>
        {array.map(({ icon, link1, name }, index) => {
          return (
            <Box key={index}>
              {/* <NavLink to={link1} style={styledactivelink}>
                {icon}

                <Typography
                  sx={{
                    fontFamily: "IBM Plex Sans",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {name}
                </Typography>
              </NavLink> */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  // flexDirection:"column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <VideoCallOutlinedIcon />

                <NotificationsNoneOutlinedIcon />
                <Avatar alt="Remy Sharp" src={awaterimg} />
              </Box>
            </Box>
          );
        })}
      </List>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mt="0px"
      >
        <Box sx={{ width: "100%" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="0px"
            backgroundColor="red"
            sx={{
              backgroundColor: "background.secondary",
              boxShadow: "0px 0px 7px  rgba(0, 0, 0, 0.25)",
            }}
          >
            <Hidden lgUp>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      backgroundColor: "#fff",
                      p: 1,
                    }}
                  >
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                      <MenuIcon
                        sx={{
                          fontSize: "25px",
                          cursor: "pointer",

                          color: "#000",
                        }}
                      />
                    </IconButton>

                    <Box sx={{ width: "80%" }}>
                      <Box
                        sx={{
                          width: "90%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid black",
                          borderRadius: "25px",
                          pl: 2,
                        }}
                      >
                        <input
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          type="text"
                          placeholder="search"
                          style={{
                            width: "100%",
                            border: "none",
                            outline: "none",
                            fontSize: "15px",
                          }}
                        />
                        <SearchIcon
                          sx={{
                            float: "right",
                            cursor: "pointer",
                            backgroundColor: "#F0F0F0",
                            padding: "7px",
                            borderLeft: "1px solid lightgray",
                            width: "50px",
                            borderRadius: "0px 25px 25px 0px",
                            fontWeight: "300",
                          }}
                          onClick={onhandleSubmit}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Paper>
                    <SwipeableDrawer
                      classes={{ paper: classes.paper }}
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      <Box
                        sx={{
                          height: "100vh",
                          width: "100%",
                          background: "#F0F0F0",
                        }}
                      >
                        {list(anchor)}
                      </Box>
                    </SwipeableDrawer>
                  </Paper>
                </React.Fragment>
              ))}
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
}
