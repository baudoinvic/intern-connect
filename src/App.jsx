
import React from "react";
import {
  Route,
  BrowserRouter as BrowserRouter,
  Routes,
} from "react-router-dom";
import AdminDashboard from "./components/Admin/AdminDashboard";
import InstitutionsPage from "./components/Admin/InstitutionsPage";
import InternshipListing from "./components/Admin/InternshipListing";
import UsersPage from "./components/Admin/UsersPage";
import CoordinatorDashboard from "./components/Coordinator/CoordinatorDashboard";
import Students from "./components/Coordinator/Students";
import InternshipOpportunitiesPage from "./components/Coordinator/opportunities";
import HeroSection from "./components/HeroSection/HeroSection";
import CompaniesDashboard from "./components/Company/CompaniesDashboard";
import LoginPage from "./components/Login/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./components/Signup/SignupPage";
import Applications from "./components/Student/Applications";
import CurrentInternship from "./components/Student/CurrentInternship";
import Listings from "./components/Student/Listings";
import StudentDashboard from "./components/Student/StudentDashboard";
import AboutPage from "./components/HeroSection/About";
import RevenueChart from "./components/Admin/Chart";
import Interns from "./components/Company/Interns";
import Dash from "./components/Company/Dash";
import Application from "./components/Company/Application";
import Pending from "./components/Company/Pending";
import Reports from "./components/Admin/Reports";
import Postnewinternship from "./components/Company/Postnewinternship";
import Create from "./components/Admin/Create";
import Apply from "./components/Student/Apply";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <LoginPage />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <SignupPage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutPage />
            </>
          }
        />

        {/* Dashboard Routes (Without Navbar) */}

        <Route path="/admin/*" element={<Admin />} />
        {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/RevenueChart" element={<RevenueChart />} />
        <Route path="admin/Reports" element={<Reports />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/coordinator-dashboard"
          element={<CoordinatorDashboard />}
        />
        <Route path="/company" element={<CompaniesDashboard />} />

        {/* Admin Routes (Without Navbar) */}
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/institutions" element={<InstitutionsPage />} />
        <Route path="/admin/internships" element={<InternshipListing />} />

        {/* Student Routes (Without Navbar) */}
        <Route path="/student/listings" element={<Listings />} />
        <Route path="/student/current" element={<CurrentInternship />} />
        <Route path="/student/applications" element={<Applications />} />
        <Route path="/apply/:id" element={<Apply />} />

        {/*Company (Without Navbar) */}
        <Route path="company/interns" element={<Interns />} />
        <Route path="company/Dash" element={<Dash />} />
        <Route path="company/application" element={<Application />} />
        <Route path="company/pending" element={<Pending />} />
        <Route path="/internship" element={<Postnewinternship />} />

        {/* Coordinator Routes (Without Navbar) */}
        <Route path="/coordinator/students" element={<Students />} />
        <Route
          path="/coordinator/opportunities"
          element={<InternshipOpportunitiesPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
