import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PropietariosPage from "./pages/PropietariosPage";
import NuevoPropietarioPage from "./pages/NuevoPropietarioPage";
import EditarPropietarioPage from "./pages/EditarPropietarioPage";
import InquilinosPage from "./pages/InquilinosPage";
import NuevoInquilinoPage from "./pages/NuevoInquilinoPage";
import EditarInquilinoPage from "./pages/EditarInquilinoPage";
import InmueblesPage from "./pages/InmueblesPage";
import NuevoInmueblePage from "./pages/NuevoInmueblePage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "propietarios", Component: PropietariosPage },
      { path: "propietarios/nuevo", Component: NuevoPropietarioPage },
      { path: "propietarios/:id/editar", Component: EditarPropietarioPage },
      { path: "inquilinos", Component: InquilinosPage },
      { path: "inquilinos/nuevo", Component: NuevoInquilinoPage },
      { path: "inquilinos/:id/editar", Component: EditarInquilinoPage },
      { path: "inmuebles", Component: InmueblesPage },
      { path: "inmuebles/nuevo", Component: NuevoInmueblePage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
