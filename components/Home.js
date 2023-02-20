import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Rating from "@mui/material/Rating";

const Home = () => {
  const [value, setValue] = useState(2);
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Box sx={{ width: "86%", margin: "auto" }}>
        <Typography variant="h4">Stay in New York</Typography>
        <Box
          sx={{
            display: "flex",
            direction: "column",
            justifyContent: "flex-start",
            marginTop: "12px",
          }}
        >
          <ArrowBackIcon />
          <Typography variant="h9" sx={{ marginLeft: "15px" }}>
            Back to search
          </Typography>
        </Box>
      </Box>
      <div style={{ marginTop: "15px" }}>
        <Box sx={cardStyle}>
          {[1, 2, 3, 4].map((cards, index) => {
            return (
              <Box key={index}>
                <Box
                  sx={{
                    margin: "18px",
                  }}
                >
                  <Card elevation={0} sx={cardBox}>
                    <CardMedia
                      sx={{ height: 200, borderRadius: "16px" }}
                      image="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
                      title="green iguana"
                    />
                    <CardContent sx={{ padding: "0px" }}>
                      <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                        sx={Heading}
                      >
                        Charming studio 10 Miles to well Beaches!
                      </Typography>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ marginTop: "20px", fontWeight: "bold" }}
                        >
                          $12/nights
                        </Typography>
                      </Box>

                      <Box sx={{ marginTop: "12px" }}>
                        <Rating name="read-only" value={value} readOnly />
                      </Box>
                    </CardContent>
                    <CardActions sx={cardButton}>
                      <Button
                        style={{
                          color: "#fff",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Box>
            );
          })}
        </Box>
      </div>
    </Box>
  );
};

export default Home;

const cardStyle = {
  display: "flex",
  flexWrap: "wrap",
  margin: "auto",
  width: "88%",
  margin: "auto",
  border: "none",
  justifyContent: "space-between",
};

const cardButton = {
  backgroundColor: "#e91c4f",
  textAlign: "center",
  marginTop: "10px",
};

const cardBox = {
  width: 300,
  "& .mui-style-hkdbh3-MuiPaper-root-MuiCard-root": {
    border: "0px",
  },
};

const Heading = {
  fontWeight: "bold",
  marginTop: "20px",
  "&:hover": {
    color: "red !important ",
  },
};
