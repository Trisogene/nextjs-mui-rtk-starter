import { Box, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

export const Style = {
  Container,
};
