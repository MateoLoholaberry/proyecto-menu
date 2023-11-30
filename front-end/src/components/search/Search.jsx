import { Box, Grid, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostsCard } from "../post/PostsCard";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxHeight: "80vh",
    overflow: "auto",
};

export const Search = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [postSearch, setPostSearch] = useState([]);
    const [lookup, setLookup] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/blogs/`
                );
                setPostSearch(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <TextField
                sx={{ display: { xs: "none", md: "flex" } }}
                fullWidth
                color="warning"
                label="Buscar"
                variant="standard"
                onClick={handleOpen}
            ></TextField>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {lookup.length > 0 ? (
                        ""
                    ) : (
                        <Typography variant="h6" mb={2}>
                            ¡Busca cualquier receta!
                        </Typography>
                    )}
                    <TextField
                        sx={{ display: { xs: "none", md: "flex" } }}
                        fullWidth
                        color="warning"
                        label="Buscar"
                        variant="standard"
                        onChange={(e) => setLookup(e.target.value)}
                    ></TextField>

                    {lookup.length > 0
                        ? postSearch
                              .filter((post) =>
                                  post.title.toLowerCase().includes(lookup)
                              )
                              .map((postResult) => (
                                  <Grid key={postResult.id} item sm={6}>
                                      <PostsCard
                                          myDirection={"flex"}
                                          title={postResult.title}
                                          excerpt={postResult.excerpt}
                                          image={`${postResult.image}`}
                                          blogHref={`/details/${postResult.slug}`}
                                      />
                                  </Grid>
                              ))
                        : ""}
                </Box>
            </Modal>
        </>
    );
};
