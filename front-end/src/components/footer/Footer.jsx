import styled from "@emotion/styled";
import { Box, Container, Stack, Typography } from "@mui/material";

export const Footer = () => {
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

    return (
        <Box sx={{ bgcolor: "tomato", height: "120px" }}>
            <Container>
                <Stack
                    direction={"row"}
                    justifyContent="center"
                    alignItems={"center"}
                >
                    <MenuBox
                        sx={{ display: { xs: "none", md: "flex" } }}
                        mt={2}
                        flex={1}
                    >
                        {menuItems.map((item) => (
                            <Typography
                                key={item.Name}
                                variant="body2"
                                color={"white"}
                                fontSize={"1.1rem"}
                            >
                                {item.Name}
                            </Typography>
                        ))}
                    </MenuBox>
                    <Box flex={1} mt={2} color={"white"} fontSize={"1.1rem"}>
                        <Typography display={"flex"} justifyContent={"center"}>
                            @2023 Mateo Loholaberry | Proyecto con react y
                            djangoRestFramework
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};
