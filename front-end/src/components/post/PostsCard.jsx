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
import burger from "../../assets/img/burger.jpg";

export const PostsCard = ({ myDirection, title, excerpt, blogHref, image }) => {
    return (
        <Box mt={3}>
            <Link href={blogHref} sx={{ textDecoration: "none" }}>
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
                            image={image}
                            sx={{
                                maxWidth: 400,
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
                                variant="h5"
                                gutterBottom
                                align="center"
                            >
                                {title}
                            </Typography>
                            <Typography variant="h7" color="text.secondary">
                                {excerpt}
                            </Typography>
                            <CardActions sx={{ justifyContent: "end" }}>
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
