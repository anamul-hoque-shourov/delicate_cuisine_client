import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecipeAdd from "../pages/RecipeAdd";
import MyRecipes from "../pages/MyRecipes";
import PrivateRoute from "./PrivateRoute";
import RecipeDetails from "../pages/RecipeDetails";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch("http://localhost:3000/recipes"),
                hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>
            },
            {
                path: "/recipes",
                Component: Recipes,
                loader: () => fetch("http://localhost:3000/recipes"),
                hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            },
            {
                path: "/recipeAdd",
                element: <PrivateRoute><RecipeAdd /></PrivateRoute>,
            },
            {
                path: "/myRecipes",
                element: <PrivateRoute><MyRecipes /></PrivateRoute>,
                loader: () => fetch("http://localhost:3000/recipes"),
                hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>
            },
            {
                path: "/recipes/:id",
                element: <PrivateRoute><RecipeDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/recipes/${params.id}`),
                hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>
            }
        ]
    }
]);