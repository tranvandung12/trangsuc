/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoutes, PuclicRoutes } from './router';
import NotFound from './pages/error/notFound';
const isAuth = false; // Đặt biến này thành true nếu người dùng đã đăng nhập

const RenderRouter = () => {
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
                            <Navigate to="/login" replace /> // Chuyển hướng đến trang chủ nếu người dùng không đăng nhập
                        )
                    }
                />
            ))}
              <Route
                path="/admin"
                element={
                    isAuth ? (
                        <AdminDashboard /> // Hiển thị trang admin nếu người dùng đã đăng nhập
                    ) : (
                        <Navigate to="/login" replace /> // Chuyển hướng đến trang đăng nhập nếu người dùng chưa đăng nhập
                    )
                }
            />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

export default RenderRouter;