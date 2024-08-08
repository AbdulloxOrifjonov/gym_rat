/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/auth/Login";
import AdminLogin from "./Pages/auth/AdminLogin";
import MemberLogin from "./Pages/auth/MemberLogin";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import RequaireAuth from "./components/RequaireAuth";
import MemberDashboard from "./Pages/member/MemberDashboard";
import Dashboard from "./Pages/common/Dashboard";
import BasicLayout from "./MainLayout/BasicLayout";
import CheckIn from "./Pages/common/CheckIn";
import Members from "./Pages/common/Members";
import AddMember from "./Pages/common/AddMember";
import Staff from "./Pages/owner/Staff";
import Market from "./Pages/common/Market";
import Cart from "./Pages/common/Cart";
import AddMembership from "./Pages/common/AddMembership";
import Register from "./Pages/auth/Register";
import CardPage from "./Pages/common/CardPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/member/login" element={<MemberLogin />} />
        <Route path="admin" element={<RequaireAuth allowedRole={"admin"} />}>
          <Route element={<BasicLayout allowedRole={"admin"} />}>
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>
        <Route path="member" element={<RequaireAuth allowedRole={"member"} />}>
          <Route element={<BasicLayout allowedRole={"member"} />}>
            <Route path="dashboard" element={<MemberDashboard />} />
          </Route>
        </Route>
        <Route path="owner" element={<RequaireAuth allowedRole={"owner"} />}>
          <Route element={<BasicLayout allowedRole={"owner"} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="checkIn" element={<CheckIn />} />
            <Route path="members" element={<Members />} />
            <Route path="add/member" element={<AddMember />} />
            <Route path="staffs" element={<Staff />} />
            <Route path="market" element={<Market />} />
            <Route path="cart" element={<Cart />} />
            <Route path="add/membership" element={<AddMembership />} />
            <Route path="product/:id" element={<CardPage />} />
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
          </Route>
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}
export default App;
