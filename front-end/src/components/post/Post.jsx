import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { PostsCard } from "./PostsCard";
import { useState, useEffect } from "react";
import axios from "axios";

export const Post = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/lastPosts/`
                );
                setBlog(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/PopularPost/`
                );
                setPost(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box>
            <Typography variant="h4" align="center">
                Últimas recetas
            </Typography>
            <Grid
                container
                columnSpacing={{ xs: 0, sm: 1, md: 1 }}
                direction={"column"}
            >
                {blog.map((post) => (
                    <Grid key={post.id} item xs>
                        <PostsCard
                            myDirection={"flex"}
                            title={post.title}
                            excerpt={post.excerpt}
                            image={`${import.meta.env.VITE_API_URL}/${
                                post.image
                            }`}
                            blogHref={`/details/${post.slug}`}
                        />
                    </Grid>
                ))}
            </Grid>

            <Typography
                variant="h4"
                bgcolor={"black"}
                color={"White"}
                align="center"
                mt={4}
            >
                Más populares
            </Typography>

            <Grid container spacing={2} direction={"row"}>
                {post.map((p) => (
                    <Grid key={p.id} item sm={6}>
                        <PostsCard
                            myDirection={"block"}
                            title={p.title}
                            excerpt={p.excerpt}
                            image={`${import.meta.env.VITE_API_URL}/${p.image}`}
                            blogHref={`/details/${p.slug}`}
                        />
                    </Grid>
                ))}
            </Grid>
            <Stack my={3} justifyContent="center" alignItems="center">
                <Pagination count={10} color="warning" />
            </Stack>
        </Box>
    );
};
