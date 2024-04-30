import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Login from "./components/Authentication/Login.jsx";
import Register from "./components/Authentication/Register.jsx";
import ArtsCrafts from "./components/Arts&Crafts.jsx";
import { HelmetProvider } from "react-helmet-async";
import PrivateRoutes from "./Private/PrivateRoutes.jsx";
import AddArts from "./components/AddArts.jsx";
import MyCrafts from "./MyCrafts/MyCrafts.jsx";
import UpdateCraft from "./MyCrafts/UpdateCraft.jsx";
import CardDetails from "./components/CardDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/artsCrafts",
        element: <ArtsCrafts></ArtsCrafts>,
      },
      {
        path: "/addarts",
        element: (
          <PrivateRoutes>
            <AddArts></AddArts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mycraft",
        element: (
          <PrivateRoutes>
            <MyCrafts></MyCrafts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updatedata/:id",
        element: (
          <PrivateRoutes>
            <UpdateCraft></UpdateCraft>
          </PrivateRoutes>
        ),
      },

      {
        path: "/mycraft/:id",
        element: (
          <PrivateRoutes>
            <CardDetails></CardDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://art-sync-server.vercel.app/updatecraft/${params.id}`),
      },

      {
        
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}>{Children}</RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
