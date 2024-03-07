/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoutes, PuclicRoutes } from './router';
import NotFound from './pages/error/notFound';

const isAuth = false;

export const RenderRouter = () => {
    return (
        <Routes>
            {PuclicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        <route.layout>
                            <route.component />
                        </route.layout>
           
                    }
                />
            ))}
            {PrivateRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        isAuth ? (
                            <route.layout>
                                <route.component />
                            </route.layout> 
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />
            ))}
            <Route path="/*" element={<NotFound />} />
        </Routes>
        

        
    );
};

export default function App() {
    return <RenderRouter />;
}
