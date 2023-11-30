import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostsCard } from "../post/PostsCard";

export const RecipeList = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/blogs/`
                );
                setBlog(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container
            sx={{
                marginBottom: "2rem",
            }}
        >
            <Typography variant="h4" align="center">
                Todas las recetas
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
                            image={post.image}
                            blogHref={`/details/${post.slug}`}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
