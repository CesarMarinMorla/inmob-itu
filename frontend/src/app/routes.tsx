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
import EditarInmueblePage from "./pages/EditarInmueblePage";
import ContratosPage from "./pages/ContratosPage";
import NuevoContratoPage from "./pages/NuevoContratoPage";
import EditarContratoPage from "./pages/EditarContratoPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import AdminRoute from "./components/AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: AdminRoute,
    children: [
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
          { path: "inmuebles/:tipo/:id/editar", Component: EditarInmueblePage },
          { path: "contratos", Component: ContratosPage },
          { path: "contratos/nuevo", Component: NuevoContratoPage },
          { path: "contratos/:id/editar", Component: EditarContratoPage },
          { path: "*", Component: NotFoundPage },
        ],
      },
    ],
  },
]);
