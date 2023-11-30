import { styled, Box, Typography, Stack, Link } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export const Category = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/category/`
                );
                setCategory(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const StyledCard = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "100%",
        overflow: "hidden",
        width: "100px",
        [theme.breakpoints.up("md")]: {
            height: 100,
        },
        [theme.breakpoints.down("md")]: {
            height: 100,
        },
        cursor: "pointer",
        "&:hover": {
            opacity: 0.8,
            boxSizing: "borderBox",
            transition: "all 0.45s ease",
        },
    }));

    const StyledTypography = styled(Typography)({
        textAlign: "center",
        color: "black",
        fontSize: 20,
        width: "100%",
    });

    const CardBox = styled(Box)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    });

    return (
        <Stack
            direction={"row"}
            spacing={4}
            mt={4}
            mx={2}
            sx={{
                overflow: "auto",
                justifyContent: { xs: "start", md: "center" },
            }}
        >
            {category.map((cat) => (
                <Link
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    underline="none"
                >
                    <CardBox>
                        <StyledCard
                            sx={{ backgroundImage: `url(${cat.image})` }}
                        ></StyledCard>
                        <StyledTypography>{cat.name}</StyledTypography>
                    </CardBox>
                </Link>
            ))}
        </Stack>
    );
};
