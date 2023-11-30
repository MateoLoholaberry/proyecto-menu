import {
    Box,
    CardMedia,
    Container,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { Category } from "../categoryList/Category";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircleIcon from "@mui/icons-material/Circle";
import { Suggestions } from "../suggestions/Suggestions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const DetailsPage = () => {
    const [blogDetails, setBlogDetails] = useState([]);
    const [postIngridients, setPostIngridients] = useState("");

    let { slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/blogs/${slug}`
                );
                setBlogDetails(res.data);
                setPostIngridients(res.data.ingridients);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Category />
            <Typography variant="h3" align="center" mt={4}>
                {blogDetails.title}
            </Typography>
            <Typography variant="body2" align="center" color={"GrayText"} p={2}>
                {blogDetails.excerpt}
            </Typography>
            <Typography variant="body1" align="center" m={2}>
                {blogDetails.content}
            </Typography>
            <Box display={"flex"} justifyContent={"center"}>
                <CardMedia
                    sx={{ maxHeight: "500px", maxWidth: "500px" }}
                    component={"img"}
                    image={blogDetails.image}
                    alt={blogDetails.title}
                />
            </Box>
            <Typography variant="h4" align="center" mt={4}>
                Ingridients
            </Typography>
            <List>
                {postIngridients.split("\n").map((ingridient) => (
                    <ListItemButton key={ingridient}>
                        <ListItemIcon>
                            <CircleIcon sx={{ color: "#000" }} />
                        </ListItemIcon>
                        <ListItemText primary={ingridient} />
                    </ListItemButton>
                ))}
            </List>
            <Typography variant="body1" align="center" m={2}>
                {blogDetails.contentTwo}
            </Typography>
        </Container>
    );
};
