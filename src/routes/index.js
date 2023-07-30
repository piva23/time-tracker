import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from '../layout/index';
import authProtectedRoutes from './allRoutes';
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import CreateTaskPage from "./pages/CreateTask";
import Reports from "./components/Reports";
import PrivateRoute from "./components/PrivateRoute";


const Index = () => {
    return (
        <React.Fragment>



                    <Route>
                        {authProtectedRoutes.map((route, idx) => (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>{route.component}</Layout>
                                }
                                key={idx}
                                exact={true}
                            />
                        ))}
                    </Route>
        </React.Fragment>
    );
};

export default Index;