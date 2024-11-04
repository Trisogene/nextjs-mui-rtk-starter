"use client";
import { darkTheme } from "@/conf/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";

const Page = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default Page;
