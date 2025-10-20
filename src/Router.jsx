import { createBrowserRouter } from "react-router";
import HomeLayout from "./Layout/HomeLayout";
import Home from "./Pages/Home";
import Category from "./Pages/CategoryNews";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthLayout from './Layout/AuthLayout/AuthLayout';
import NewsDetails from "./Pages/NewsDetails";
import PrivetRoute from "./provider/PrivetRoute";
import Loading from "./Pages/Loading";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <HomeLayout></HomeLayout>,
        children : [
            {
                path : '',
                element : <Home></Home>
            },
            {
                path : '/category/:id',
                element : <Category/>,
                loader : ()=>fetch('/news.json'),
                hydrateFallbackElement : <Loading/>
            }
        ]
    },
    {
        path : '/auth',
        element : <AuthLayout></AuthLayout>,
        children : [
            {
                path : '/auth/login',
                element : <Login></Login>
            },
            {
                path : '/auth/register',
                element : <Register/>
            }
        ]
    },
    {
        path : '/news-details/:id',
        element : <PrivetRoute>
            <NewsDetails/>
        </PrivetRoute>,
        loader : ()=>fetch('/news.json'),
        hydrateFallbackElement : <Loading></Loading>
    },
    {
        path : '/*',
        element : <h2>Error</h2>
    }
])


