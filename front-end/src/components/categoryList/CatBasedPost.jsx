import { Container, Grid, Pagination, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostsCard } from "../post/PostsCard";
import { useParams } from "react-router-dom";

export const CatBasedPost = () => {
    const [blog, setBlog] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${
                        import.meta.env.VITE_API_URL
                    }/api/categoryBasedBlogs/${id}`
                );
                setBlog(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Typography variant="h4" align="center">
                Categoría
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

            <Stack my={3} justifyContent="center" alignItems="center">
                <Pagination count={10} color="warning" />
            </Stack>
        </Container>
    );
};
