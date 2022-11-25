import React, { createElement } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthProvider from "../providers/auth";
import MainPage from "../pages/main";
import MyPage from "../pages/my-page";
import SignUpPage from "../pages/sign-up";
import SignInPage from "../pages/sign-in";
import ProductDetailPage from "../pages/product-detail";
import ProductPurchasePage from "../pages/product-purchase-page";
import PointRegistraionCheckPage from "../pages/point-registration-check";


import AdminMainPage from "../pages/admin/main";
import AdminManageCouponsPage from "../pages/admin/manage-coupons";
import AdminCreateCouponPage from "../pages/admin/create-coupon";
import AdminCouponDetail from "../pages/admin/coupon-detail";
import AdminCreateProductPage from "./../pages/admin/create-product";
import AdminManageProductPage from "../pages/admin/manage-products";
import AdminProductDetail from "../pages/admin/product-detail";
import AdminProductModification from "../pages/admin/product-modification";

const storageName = "db";

const initialDb = {
  users: [],
  admins: [
    {
      id: "admin5495",
      email: "admin5495@admin",
      name: "adminYun",
      password: "ytk5495"
    }
  ],
  coupons: [],
  products: []
};
if (window.localStorage.getItem(storageName) == null) {
  window.localStorage.setItem(storageName, JSON.stringify(initialDb));
}

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev
      }),
    children
  );

const App = () => {
  return (
    <AppProvider contexts={[AuthProvider]}>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="my-page/:id" element={<MyPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="/point-restration-check/:id" element={<PointRegistraionCheckPage/>} />
        <Route path={`product-detail/:id`} element={<ProductDetailPage />} />
        <Route path={`product-purchase/:id`} element={<ProductPurchasePage />} />
        <Route path="admin" element={<AdminMainPage />} />
        <Route
          path="admin/manage-coupons"
          element={<AdminManageCouponsPage />}
        />
        <Route path="admin/create-coupon" element={<AdminCreateCouponPage />} />
        <Route
          path={`admin/coupon-detail/:id`}
          element={<AdminCouponDetail />}
        />
        <Route
          path={"admin/create-product"}
          element={<AdminCreateProductPage />}
        />
        <Route
          path={"admin/manage-product"}
          element={<AdminManageProductPage />}
        />
        <Route
          path={`admin/product-detail/:id`}
          element={<AdminProductDetail />}
        />
        <Route
          path={`admin/product-detail/:id/modification`}
          element={<AdminProductModification />}
        />
      </Routes>
    </AppProvider>
  );
};

export default App;
