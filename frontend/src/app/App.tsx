import { RouterProvider } from "react-router";
import { ThemeProvider } from "@mui/material/styles";
import { Auth0Provider } from "@auth0/auth0-react";
import { router } from "./routes";
import { theme } from "./theme";

export default function App() {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN || "YOUR_DOMAIN";
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || "YOUR_CLIENT_ID";
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE || "https://api.inmobiliaria.com";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: audience,
      }}
    >
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Auth0Provider>
  );
}