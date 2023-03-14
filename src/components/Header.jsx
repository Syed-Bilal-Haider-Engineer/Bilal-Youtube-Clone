import React, { useState } from "react";
import { Avatar, Box, styled, TextField } from "@mui/material";
import youtubelogo from "./assests/youtubelogo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import awaterimg from "./assests/awater.jpg";
import { useNavigate, Link } from "react-router-dom";

const CustomTextField = styled(TextField)({
  color: "text.primery",
  width: "100%",
  fontFamily: "Roboto",
  fontWeight: "500",
  borderRadius: "5px",
  "& label.Mui-focused": {
    color: "text.primery",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "transparent",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "text.primery",
    },
    fontSize: { xs: "12px", md: "14px" },
  },
});

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          position: "sticky",
          top: "0px",
          backgroundColor: "white",
          zIndex: 100,
        }}
      >
        <Box
          sx={{
            width: "10%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img
              src={youtubelogo}
              alt="youtubelogo"
              style={{ width: "90px", height: "28px" }}
            />
          </Link>
        </Box>
        <Box sx={{ width: "40%" }}>
          <Box
            sx={{
              width: "100%",
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
              style={{ width: "100%", border: "none", outline: "none", fontSize:"15px"}}
            />
            <SearchIcon
              sx={{
                float: "right",
                cursor: "pointer",
                backgroundColor: "#F0F0F0",
                padding: "7px",
                borderLeft: "1px solid lightgray",
                width:'50px',
                borderRadius:'0px 25px 25px 0px',
                fontWeight:"300"
              }}
              onClick={onhandleSubmit}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "13%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <VideoCallOutlinedIcon  />
       
          <NotificationsNoneOutlinedIcon />
          <Avatar alt="Remy Sharp" src={awaterimg} />
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
