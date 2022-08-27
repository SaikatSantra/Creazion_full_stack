import React from "react";
import CustomerOffer from "./CustomerOffer";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import MovingTwoToneIcon from '@mui/icons-material/MovingTwoTone';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function CustomerDashboard() {
  return (
    <div>
      <Box
        className="red"
        sx={{ flexGrow: 1 }}
        style={{ marginBottom: "30px" }}
      >
        <Grid container spacing={2}>
          <CustomerOffer />
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid xs={12} md={4} sm={4}>
            <Item className="massage-box">
              <Typography variant="h5" color="initial">
                Hello,Jhon
              </Typography>
              <Typography variant="h4" color="initial">
                Good Morning
              </Typography>
              <div className="card-icon-wrapper sun">
                <i className="material-icons">
                  <WbSunnyTwoToneIcon />
                </i>
              </div>
            </Item>
          </Grid>

          <Grid xs={12} md={4} sm={4}>
            <Item className="massage-box">
              <Typography variant="h5" color="initial">
                Total Invesment
              </Typography>
              <Typography variant="h4" color="initial">
                563465436
              </Typography>
              <div className="card-icon-wrapper money">
                <i className="material-icons">
                  <CurrencyRupeeTwoToneIcon />
                </i>
              </div>
            </Item>
          </Grid>

          <Grid xs={12} md={4} sm={4}>
            <Item className="massage-box">
              <Typography variant="h5" color="initial">
                Total Profit
              </Typography>
              <Typography variant="h4" color="initial">
                1234636
              </Typography>
              <div className="card-icon-wrapper moving">
                <i className="material-icons">
                  <MovingTwoToneIcon />
                </i>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12} md={4} sm={4}>
            <Item>Want to BA Model</Item>
          </Grid>
          <Grid xs={12} md={4} sm={4}>
            <Item>Join CSP </Item>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <a href="#">Know More</a>
          </Grid>

          <Grid xs={12} md={4} sm={4}>
            <Item>BRANCH Open</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
