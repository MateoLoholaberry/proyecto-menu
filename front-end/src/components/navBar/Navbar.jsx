import { useState } from "react";
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
    Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "../search/Search";

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
        { name: "Home", link: "/" },
        { name: "Recetas", link: "/recipeList" },
        { name: "Acerca de", link: "#" },
        { name: "Contacto", link: "#" },
    ];

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <AppBar color="default" position="sticky" elevation={0}>
                <StyledToolBar>
                    <Box flex={{ xs: 25, md: 1 }}>
                        <Link underline="none" href="/">
                            <Typography
                                variant="h4"
                                color={"tomato"}
                                sx={{
                                    fontFamily: "Splash, cursive",
                                    textAlign: { xs: "center", md: "start" },
                                }}
                            >
                                La cocina de José
                            </Typography>
                        </Link>
                    </Box>

                    <MenuBox
                        flex={1}
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                underline="none"
                                color={"gray"}
                            >
                                <Typography variant="body2">
                                    {item.name}
                                </Typography>
                            </Link>
                        ))}
                    </MenuBox>

                    <Box flex={1} alignSelf={"start"}>
                        <Search />
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
                                <ListItemButton key={item.name} variant="body2">
                                    {item.name}
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
                    Recetas artesanales
                </Typography>
                <Typography
                    variant="h5"
                    mr={1}
                    sx={{ fontFamily: "Splash, cursive" }}
                    align="center"
                    color={"tomato"}
                >
                    Hecho en casa
                </Typography>
            </Box>
        </>
    );
};
