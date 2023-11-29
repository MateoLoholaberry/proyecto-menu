import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Post } from "../post/Post";
import { Rightbar } from "../rightBar/Rightbar";
import { Hero } from "../hero/Hero";
import { Category } from "../categoryList/Category";

export const Main = () => {
    return (
        <>
            <Hero />
            <Category />
            <Container>
                <Stack direction={"row"} spacing={1} mt={3}>
                    <Box flex={3}>
                        <Post></Post>
                    </Box>
                    <Box flex={1} display={{ xs: "none", md: "block" }}>
                        <Rightbar />
                    </Box>
                </Stack>
            </Container>
        </>
    );
};
