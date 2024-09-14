/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/auth/Login";
import AdminLogin from "./Pages/auth/AdminLogin";
import MemberLogin from "./Pages/auth/MemberLogin";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import RequaireAuth from "./components/RequaireAuth";
import MemberDashboard from "./Pages/member/MemberDashboard";
import Dashboard from "./Pages/owner/OwnerDashboard";
import BasicLayout from "./MainLayout/BasicLayout";
import CheckIn from "./Pages/owner/OwnerCheckIn";
import Members from "./Pages/staff/Members";
import AddMember from "./Pages/staff/AddMember";
import Staff from "./Pages/owner/OwnerStaff";
import Market from "./Pages/owner/OwnerMarket";
import Cart from "./Pages/owner/OwnerCart";
import AddMembership from "./Pages/staff/AddMembership";
import Register from "./Pages/auth/Register";
import CardPage from "./Pages/owner/OwnerCardPage";
import Memberships from "./Pages/staff/Memberships";
import Payment from "./Pages/owner/OwnerPayment";
import Profile from "./Pages/owner/OwnerProfile";
import AddOwner from "./Pages/admin/AddOwner";
import OwnerGyms from "./Pages/owner/OwnerGyms";
import CartQuantity from "./components/Cart/CartQuantity";
import CartItem from "./components/Cart/CartItem";
import OwnerBarProduct from "./Pages/owner/OwnerBarProduct";
import OwnerBarProductCategories from "./Pages/owner/OwnerBarProductCategories";
import OwnerAboutGym from "./Pages/owner/OwnerAboutGym";
import OwnerAddProduct from "./Pages/owner/OwnerAddProduct";
import Hero from "./Pages/hero/Hero";
import AboutOwner from "./Pages/admin/AboutOwner";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/member/login" element={<MemberLogin />} />
        <Route path="admin" element={<RequaireAuth allowedRole={"admin"} />}>
          <Route element={<BasicLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="add/employer" element={<AddOwner />} />
            <Route path="dashboard/employer/:id" element={<AboutOwner />} />
          </Route>
        </Route>
        <Route path="member" element={<RequaireAuth allowedRole={"member"} />}>
          <Route element={<BasicLayout allowedRole={"member"} />}>
            <Route path="dashboard" element={<MemberDashboard />} />
          </Route>
        </Route>
        <Route path="employer" element={<RequaireAuth allowedRole={"employer"} />}>
          <Route element={<BasicLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="checkIn" element={<CheckIn />} />

            <Route path="staff" element={<Staff />} />
            <Route path="market" element={<OwnerAddProduct />} />
            <Route path="cart" element={<CartQuantity />} />
            <Route path="staffs" element={<Staff />} />
            <Route path="market" element={<Market />} />
            <Route path="cartItems" element={<CartItem />} />
            <Route path="bar/product" element={<OwnerBarProduct />} />
            <Route path="bar/product/categories" element={<OwnerBarProductCategories />} />
            <Route path="cart" element={<Cart />} />

            <Route path="product/:id" element={<CardPage />} />

            <Route path="payment" element={<Payment />} />
            <Route path="profile" element={<Profile />} />
            <Route path="gyms" element={<OwnerGyms />} />
            <Route path="about/gym" element={<OwnerAboutGym />} />
          </Route>
        </Route>
        <Route path="employee" element={<RequaireAuth allowedRole={"employee"} />}>
          <Route element={<BasicLayout allowedRole={"staff"} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="checkIn" element={<CheckIn />} />
            <Route path="members" element={<Members />} />
            <Route path="add/member" element={<AddMember />} />
            <Route path="market" element={<Market />} />
            <Route path="add/membership" element={<AddMembership />} />
            <Route path="memberships" element={<Memberships />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}
export default App;
