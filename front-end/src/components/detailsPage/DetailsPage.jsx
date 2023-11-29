import {
    Box,
    CardMedia,
    Container,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";
import burger from "../../assets/img/burger1.jpg";
import { Category } from "../categoryList/Category";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const DetailsPage = () => {
    return (
        <Container>
            <Category />
            <Typography variant="h3" align="center" mt={4}>
                Title of recipe
            </Typography>
            <Typography variant="body2" align="center" color={"GrayText"} p={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                exercitationem minus aspernatur vero mollitia.
            </Typography>
            <Typography variant="body1" align="center" m={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                exercitationem minus aspernatur vero mollitia. Voluptates ipsum
                neque id magni amet quam vitae tempora, distinctio ullam,
                voluptate odit. Alias, fugiat pariatur!
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
                <CardMedia
                    sx={{ height: "500px", width: "500px" }}
                    component={"img"}
                    image={burger}
                    alt="burger"
                />
            </Box>
            <Typography variant="body1" align="center" m={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                exercitationem minus aspernatur vero mollitia. Voluptates ipsum
                neque id magni amet quam vitae tempora, distinctio ullam,
                voluptate odit. Alias, fugiat pariatur!
            </Typography>
            <Typography variant="h4" align="center" mt={4}>
                Ingridients
            </Typography>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary="Meat" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cheese" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tomatoes" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary="Lettuce" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary="Eggs" />
                </ListItemButton>
            </List>
            <Typography variant="body1" align="center" m={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                exercitationem minus aspernatur vero mollitia. Voluptates ipsum
                neque id magni amet quam vitae tempora, distinctio ullam,
                voluptate odit. Alias, fugiat pariatur!
            </Typography>
            <Typography
                variant="h5"
                color={"white"}
                bgcolor={"black"}
                align="center"
                mt={4}
            >
                You may also like
            </Typography>
        </Container>
    );
};
