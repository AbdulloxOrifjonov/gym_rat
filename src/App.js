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
import Members from "./Pages/owner/OwnerMembers";
import AddMember from "./Pages/owner/OwnerAddMember";
import Staff from "./Pages/owner/OwnerStaff";
import Market from "./Pages/owner/OwnerMarket";
import Cart from "./Pages/owner/OwnerCart";
import AddMembership from "./Pages/owner/OwnerAddMembership";
import Register from "./Pages/auth/Register";
import CardPage from "./Pages/owner/OwnerCardPage";
import Memberships from "./Pages/owner/OwnerMemberships";
import Payment from "./Pages/owner/OwnerPayment";
import Profile from "./Pages/owner/OwnerProfile";
import AddOwner from "./Pages/admin/AddOwner";
import OwnerGyms from "./Pages/owner/OwnerGyms";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/owner/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/member/login" element={<MemberLogin />} />
        <Route element={<BasicLayout allowedRole={"admin"} />}>
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="admin/add/owner" element={<AddOwner />} />
        </Route>
        <Route path="member" element={<RequaireAuth allowedRole={"member"} />}>
          <Route element={<BasicLayout allowedRole={"member"} />}>
            <Route path="dashboard" element={<MemberDashboard />} />
          </Route>
        </Route>
        <Route path="owner">
          <Route element={<BasicLayout allowedRole={"owner"} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="checkIn" element={<CheckIn />} />
            <Route path="members" element={<Members />} />
            <Route path="add/member" element={<AddMember />} />
            <Route path="staff" element={<Staff />} />
            <Route path="market" element={<Market />} />
            <Route path="staffs" element={<Staff />} />
            <Route path="market" element={<Market />} />
            <Route path="cart" element={<Cart />} />
            <Route path="add/membership" element={<AddMembership />} />
            <Route path="product/:id" element={<CardPage />} />
            <Route path="memberships" element={<Memberships />} />
            <Route path="payment" element={<Payment />} />
            <Route path="profile" element={<Profile />} />
            <Route path="gyms" element={<OwnerGyms />} />
          </Route>
        </Route>
        <Route path="staff" element={<RequaireAuth allowedRole={"staff"} />}>
          <Route element={<BasicLayout allowedRole={"staff"} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="checkIn" element={<CheckIn />} />
            <Route path="members" element={<Members />} />
            <Route path="add/member" element={<AddMember />} />
            <Route path="market" element={<Market />} />
            <Route path="add/membership" element={<AddMembership />} />
            <Route path="memberships" element={<Memberships />} />
            <Route path="`payment`" element={<Payment />} />
          </Route>
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}
export default App;
