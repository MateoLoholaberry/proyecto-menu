import { styled, Box, Typography, Stack } from "@mui/material";
import appetizer from "../../assets/img/appetizer.jpg";
import breakfast from "../../assets/img/breakfast.jpg";
import breakfast2 from "../../assets/img/breakfast2.jpg";
import dessert from "../../assets/img/dessert.jpg";
import dinner from "../../assets/img/dinner.jpg";
import vegan from "../../assets/img/vegan.jpg";
import nachos from "../../assets/img/nachos.jpg";

export const Category = () => {
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
            <CardBox>
                <StyledCard
                    sx={{ backgroundImage: `url(${appetizer})` }}
                ></StyledCard>
                <StyledTypography>Appetizer</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard
                    sx={{ backgroundImage: `url(${breakfast})` }}
                ></StyledCard>
                <StyledTypography>Breakfast</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard
                    sx={{ backgroundImage: `url(${nachos})` }}
                ></StyledCard>
                <StyledTypography>Nachos</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard
                    sx={{ backgroundImage: `url(${dessert})` }}
                ></StyledCard>
                <StyledTypography>Dessert</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard
                    sx={{ backgroundImage: `url(${dinner})` }}
                ></StyledCard>
                <StyledTypography>Dinner</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard
                    sx={{ backgroundImage: `url(${breakfast2})` }}
                ></StyledCard>
                <StyledTypography>Healthy</StyledTypography>
            </CardBox>
            <CardBox>
                <StyledCard
                    sx={{ backgroundImage: `url(${vegan})` }}
                ></StyledCard>
                <StyledTypography>Vegan</StyledTypography>
            </CardBox>
        </Stack>
    );
};
