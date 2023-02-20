import { Typography } from "@mui/material";
import React from "react";
// import tw from "tailwind-styled-components";
import Box from "@mui/material/Box";
function Footer() {
  return (
    <Box sx={footer}>
      <Typography>Book IT - 2019-2021, All Rights Reserved k</Typography>
    </Box>
  );
}

export default Footer;
// const FooterContainer = tw.div`
// // /*fixed bottom-0 left-0 w-full*/
// `;
const footer = {
  padding: "10px",
  backgroundColor: "#fff",
  borderTop: "1px solid #eaeaea",
  boxShadow:
    "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%) ",
  textAlign: "center",
};
