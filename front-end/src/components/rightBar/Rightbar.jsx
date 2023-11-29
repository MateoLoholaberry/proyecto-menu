import React from "react";
import { Box, CardMedia, Link, Typography } from "@mui/material";
import chef from "../../assets/img/chef.jpg";

export const Rightbar = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" align="center">
                Hey I am Brenda
            </Typography>
            <CardMedia
                component={"img"}
                height="300"
                image={chef}
                alt="Burger image"
                sx={{
                    width: "400px",
                    cursor: "pointer",
                    "&:hover": {
                        opacity: 0.8,
                        boxSizing: "border-box",
                        transition: `all 0.5s ease`,
                    },
                }}
            ></CardMedia>
            <Typography align="left" variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                architecto quae iure sed aliquid expedita necessitatibus
                consequatur a deserunt explicabo ad veniam tempora recusandae,
                porro exercitationem dolorum aperiam quam ex.
            </Typography>
            <Typography align="left" variant="body1">
                {""}Lorem ipsum dolor sit amet consectetur adipisicing elit.{""}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Link mr={1} href="#" color={"tomato"} underline="none">
                    Read more
                </Link>
            </Box>
        </Box>
    );
};
