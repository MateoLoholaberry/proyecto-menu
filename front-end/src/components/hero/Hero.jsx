import { Grid, Container, styled, Box, Typography } from "@mui/material";
import burger from "../../assets/img/burger1.jpg";
import meat from "../../assets/img/meat.jpg";
import drinks from "../../assets/img/drinks.jpg";
import salad from "../../assets/img/salad.jpg";

export const Hero = () => {
    const StyledCard = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        [theme.breakpoints.up("md")]: {
            height: 400,
        },
        [theme.breakpoints.down("md")]: {
            height: 200,
        },
        "&:hover": {
            opacity: 0.8,
            boxSizing: "borderBox",
            transition: "all 0.45s ease",
        },
    }));

    const StyledTypography = styled(Typography)({
        textAlign: "center",
        color: "white",
        background: "tomato",
        fontSize: 20,
        width: "100%",
    });

    const StyledWrapper = styled(Box)({
        display: "flex",
        background: "transparent",
        alignItems: "end",
        margin: -10,
        width: "80%",
    });

    return (
        <Container>
            <Grid container direction={"row"} spacing={2}>
                <Grid item xs={6} md={3}>
                    <StyledCard sx={{ backgroundImage: `url(${burger})` }}>
                        <StyledWrapper>
                            <StyledTypography>Hamburguesas</StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
                <Grid item xs={6} md={3}>
                    <StyledCard sx={{ backgroundImage: `url(${meat})` }}>
                        <StyledWrapper>
                            <StyledTypography>Carnes</StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
                <Grid item xs={6} md={3}>
                    <StyledCard sx={{ backgroundImage: `url(${salad})` }}>
                        <StyledWrapper>
                            <StyledTypography>Ensalada</StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
                <Grid item xs={6} md={3}>
                    <StyledCard sx={{ backgroundImage: `url(${drinks})` }}>
                        <StyledWrapper>
                            <StyledTypography>Bebidas</StyledTypography>
                        </StyledWrapper>
                    </StyledCard>
                </Grid>
            </Grid>
        </Container>
    );
};
