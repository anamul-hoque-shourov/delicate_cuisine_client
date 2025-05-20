import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecipeAdd from "../pages/RecipeAdd";
import MyRecipes from "../pages/MyRecipes";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/recipes",
                Component: Recipes,
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
                Component: RecipeAdd,
            },
            {
                path: "/myRecipes",
                Component: MyRecipes,
            },
        ]
    }
]);