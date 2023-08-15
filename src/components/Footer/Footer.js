/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 07/02/2022 - 14:59:42
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 07/02/2022
 * - Author          :
 * - Modification    :
 **/
import { Box, Grid, Typography } from "@material-ui/core";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

const Footer = () => (
  <>
    <Grid
      container
      justifyContent="center"
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "350px",
        marginTop: "20px",
        backgroundColor: "#0f3360",
        color: "white",
        fontWeight: "bold",
        padding: "80px"
      }}
    >
      <Grid item xs={12} md={6} sx={{ mb: { xs: 1 } }}>
        <Typography
          variant="h4"
          component="h2"
          style={{ color: "#e94560", marginBottom: "10px" }}
        >
          Ecommerce
        </Typography>
        <Typography variant="subtitle2" style={{ width: "90%" }}>
        The content, images, logos, and intellectual property on this website are protected by copyright and other applicable laws. Any unauthorized use, reproduction, or distribution of the materials on this website is strictly prohibited without the express written consent of our site.
        </Typography>
      </Grid>
      <Grid item xs={6} md={6}>
        <Typography variant="h5" component="h1">
          Contact Us
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle2" component="h3">
            123 Jalan Gadgets Avenue,Georgetown,10300 Penang, Malaysia{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Email: shop@gmail.com{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            phone: +60123456789{" "}
          </Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <FacebookRoundedIcon sx={{ mr: 1 }} />{" "}
            <YouTubeIcon sx={{ mr: 1 }} /> <InstagramIcon sx={{ mr: 1 }} />{" "}
            <TwitterIcon sx={{ mr: 1 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  </>
);

export default Footer;
