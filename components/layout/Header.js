import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={navbarSX}>
        <Toolbar sx={toolbar}>
          <Box sx={{ flexGrow: 1 }}>
            <Image
              src="/images/bookit_logo.png"
              alt="BookIT"
              width={150}
              height={150}
              style={{ cursor: "pointer" }}
            />
          </Box>

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          <Button variant="contained" sx={boxSX}>
            <typhography>Login</typhography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
const boxSX = {
  backgroundColor: "#e91c4f !important",
  "&:hover": {
    border: "none",
    color: "black",
    backgroundColor: "#e91c4f57 !important",
  },
};

const navbarSX = {
  backgroundColor: "#fff !important",
  color: "red",
  borderBottom: "1px solid #eaeaea !important",
};

const toolbar = {
  width: "89%",
  margin: "auto",
  justifyContent: "center",
};
