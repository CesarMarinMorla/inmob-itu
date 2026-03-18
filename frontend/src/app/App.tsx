import { RouterProvider } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import { router } from "./routes";
import { theme } from "./theme";

export default function App(props: any) {
  // Filter out Figma-specific props that are not supported by MUI ThemeProvider
  const { 'data-fg-d3bl0': _fg, 'data-fgid-d3bl0': _fgid, ...cleanProps } = props;
  
  return (
    <ThemeProvider theme={theme} {...cleanProps}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}