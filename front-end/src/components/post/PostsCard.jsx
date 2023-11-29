import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    Typography,
} from "@mui/material";
import React from "react";
import burger from "../../assets/img/burger.jpg";

export const PostsCard = ({ myDirection }) => {
    return (
        <Box mt={3}>
            <Link href="#" sx={{ textDecoration: "none" }}>
                <Card>
                    <Box
                        sx={{
                            display: {
                                xs: "block",
                                sm: `${myDirection}`,
                                md: `${myDirection}`,
                            },
                            flexDirection: "row",
                        }}
                    >
                        <CardMedia
                            component={"img"}
                            height="300"
                            image={burger}
                            alt="Burger image"
                            sx={{
                                maxWidth: "500px",
                                cursor: "pointer",
                                "&:hover": {
                                    opacity: 0.8,
                                    boxSizing: "border-box",
                                    transition: `all 0.5s ease`,
                                },
                            }}
                        ></CardMedia>
                        <CardContent>
                            <Typography
                                variant="h4"
                                gutterBottom
                                align="center"
                            >
                                Yummi Burger
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sapiente culpa fugit harum,
                                omnis, beatae facilis ab eius sint et quos.
                            </Typography>
                            <CardActions>
                                <Button size="small" sx={{ color: "tomato" }}>
                                    Share
                                </Button>
                                <Button size="small" sx={{ color: "tomato" }}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Box>
                </Card>
            </Link>
        </Box>
    );
};
