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
        <Box
            sx={{
                bgcolor: "tomato",
                height: "15vh",
                display: "flex",
            }}
        >
            <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                flexGrow={1}
            >
                <MenuBox
                    sx={{ display: { xs: "none", md: "flex" } }}
                    flex={1}
                    justifyContent={"center"}
                    align="center"
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
                <Box flex={1} color={"white"} fontSize={"1.1rem"}>
                    <Typography
                        display={"flex"}
                        justifyContent={"center"}
                        align="center"
                    >
                        @2023 Mateo Loholaberry | Proyecto con react y
                        djangoRestFramework
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};
