import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import Fractal from "./pages/fractal/Fractal"

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />
    },

    {
        path: "/fractals/:slug",
        element: <Fractal />
    }

])