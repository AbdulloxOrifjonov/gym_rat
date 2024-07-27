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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/member/login" element={<MemberLogin />} />
        <Route path="/gym" element={<BasicLayout />}>
          <Route path="admin" element={<RequaireAuth allowedRole={"admin"} />}>
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
          <Route path="member" element={<RequaireAuth allowedRole={"member"} />}>
            <Route path="dashboard" element={<MemberDashboard />} />
          </Route>
          <Route path="owner" element={<RequaireAuth allowedRole={"owner"} />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="staff" element={<RequaireAuth allowedRole={"staff"} />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
