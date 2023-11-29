import React, { useState } from "react";
import {
    AppBar,
    Typography,
    Toolbar,
    Box,
    styled,
    TextField,
    Drawer,
    ListItem,
    List,
    ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
    const StyledToolBar = styled(Toolbar)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    });

    const MenuBox = styled(Box)({
        display: "flex",
        gap: 30,
        cursor: "pointer",
    });

    const menuItems = [
        { Name: "Home", Link: "#" },
        { Name: "Recipes", Link: "#" },
        { Name: "About Us", Link: "#" },
        { Name: "Subscribe", Link: "#" },
    ];

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <AppBar color="default" position="sticky" elevation={0}>
                <StyledToolBar>
                    <Box flex={{ xs: 25, md: 1 }}>
                        <Typography
                            variant="h4"
                            color={"tomato"}
                            sx={{
                                fontFamily: "Splash, cursive",
                                textAlign: { xs: "center", md: "start" },
                            }}
                        >
                            Codingstrade
                        </Typography>
                    </Box>

                    <MenuBox
                        flex={1}
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        {menuItems.map((item) => (
                            <Typography key={item.Name} variant="body2">
                                {item.Name}
                            </Typography>
                        ))}
                    </MenuBox>

                    <Box flex={1}>
                        <TextField
                            sx={{ display: { xs: "none", md: "flex" } }}
                            fullWidth
                            color="warning"
                            label="Search"
                            variant="standard"
                        ></TextField>
                        <MenuIcon
                            sx={{
                                display: { xs: "flex", md: "none" },
                                cursor: "pointer",
                                alignSelf: "end",
                            }}
                            onClick={() => setOpenMenu(!openMenu)}
                        />
                    </Box>
                </StyledToolBar>

                <Drawer
                    anchor={"top"}
                    open={openMenu}
                    onClose={() => setOpenMenu(!openMenu)}
                >
                    <List>
                        <ListItem>
                            {menuItems.map((item) => (
                                <ListItemButton key={item.Name} variant="body2">
                                    {item.Name}
                                </ListItemButton>
                            ))}
                        </ListItem>
                    </List>
                    <TextField
                        sx={{
                            display: { xs: "flex", md: "none" },
                            margin: "0.5rem",
                        }}
                        color="warning"
                        label="Search"
                        variant="outlined"
                    />
                </Drawer>
            </AppBar>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: { xs: "column", md: "row" },
                    margin: "1rem 0",
                }}
            >
                <Typography variant="h5" mr={3} align="center">
                    Simple recepies made for coders
                </Typography>
                <Typography
                    variant="h5"
                    mr={1}
                    sx={{ fontFamily: "Splash, cursive" }}
                    align="center"
                    color={"tomato"}
                >
                    Simple recepies made for coders
                </Typography>
            </Box>
        </>
    );
};
