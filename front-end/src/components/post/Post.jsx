import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import { PostsCard } from "./PostsCard";

export const Post = () => {
    return (
        <Box>
            <Typography variant="h4" align="center">
                Latest Recipies
            </Typography>
            <Grid
                container
                columnSpacing={{ xs: 0, sm: 1, md: 1 }}
                direction={"column"}
            >
                <Grid item xs>
                    <PostsCard myDirection={"flex"} />
                </Grid>
                <Grid item xs>
                    <PostsCard myDirection={"flex"} />
                </Grid>
                <Grid item xs>
                    <PostsCard myDirection={"flex"} />
                </Grid>
                <Grid item xs>
                    <PostsCard myDirection={"flex"} />
                </Grid>
            </Grid>

            <Typography
                variant="h4"
                bgcolor={"black"}
                color={"White"}
                align="center"
                mt={4}
            >
                Most Popular
            </Typography>

            <Grid container spacing={2} direction={"row"}>
                <Grid item sm={6}>
                    <PostsCard myDirection={"block"} />
                </Grid>
                <Grid item sm={6}>
                    <PostsCard myDirection={"block"} />
                </Grid>
                <Grid item sm={6}>
                    <PostsCard myDirection={"block"} />
                </Grid>
                <Grid item sm={6}>
                    <PostsCard myDirection={"block"} />
                </Grid>
            </Grid>
            <Stack my={3} justifyContent="center" alignItems="center">
                <Pagination count={10} color="warning" />
            </Stack>
        </Box>
    );
};
