

// import React from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import AdminDashboard from "./components/Admin/AdminDashboard";
// import InstitutionsPage from "./components/Admin/InstitutionsPage";
// import InternshipListing from "./components/Admin/InternshipListing";
// import UsersPage from "./components/Admin/UsersPage";
// import CoordinatorDashboard from "./components/Coordinator/CoordinatorDashboard";
// import Students from "./components/Coordinator/Students";
// import InternshipOpportunitiesPage from "./components/Coordinator/opportunities";
// import HeroSection from "./components/HeroSection/HeroSection";
// import CompaniesDashboard from "./components/Institutions/CompaniesDashboard";
// import LoginPage from "./components/Login/LoginPage";
// import Navbar from "./components/Navbar/Navbar";
// import SignupPage from "./components/Signup/SignupPage";
// import Applications from "./components/Student/Applications";
// import CurrentInternship from "./components/Student/CurrentInternship";
// import Listings from "./components/Student/Listings";
// import StudentDashboard from "./components/Student/StudentDashboard";
// import AboutPage from "./components/HeroSection/About";


// const MainLayout = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
//       <Navbar />
//       {children}
//     </div>
//   );
// };

// // Layout for dashboard pages (without main navbar)
// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
//       {children}
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Routes with main navbar */}
//         <Route
//           path="/"
//           element={
//             <MainLayout>
//               <HeroSection />
//             </MainLayout>
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <MainLayout>
//               <LoginPage />
//             </MainLayout>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <MainLayout>
//               <AboutPage />
//             </MainLayout>
//           }
//         />

//         <Route
//           path="/signup"
//           element={
//             <MainLayout>
//               <SignupPage />
//             </MainLayout>
//           }
//         />
          
//         {/* Dashboard routes without main navbar */}
//         <Route
//           path="/admin-dashboard"
//           element={
//             <DashboardLayout>
//               <AdminDashboard />
//             </DashboardLayout>
//           }
//         />
//         <Route
//           path="/student-dashboard"
//           element={
//             <DashboardLayout>
//               <StudentDashboard />
//             </DashboardLayout>
//           }
//         />
//         <Route
//           path="/company-dashboard"
//           element={
//             <DashboardLayout>
//               <CompaniesDashboard />
//             </DashboardLayout>
//           }
//         />
//         <Route
//           path="/coordinator-dashboard"
//           element={
//             <DashboardLayout>
//               <CoordinatorDashboard />
//             </DashboardLayout>
//           }
//         />
//         <Route
//           path="admin/users"
//           element={
//             <DashboardLayout>
//               <UsersPage />
//             </DashboardLayout>
//           }
//           />
//           <Route
//           path="admin/institutions"
//           element={
//             <DashboardLayout>
//               <InstitutionsPage />
//             </DashboardLayout>
//           }
//           />
//           <Route
//           path="admin/internships"
//           element={
//             <DashboardLayout>
//               <InternshipListing />
//             </DashboardLayout>
//           }
//           />
//           <Route
//           path="student/listings"
//           element={
//             <DashboardLayout>
//               <Listings />
//             </DashboardLayout>
//           }
//           />
//           <Route
//           path="student/current"
//           element={
//             <DashboardLayout>
//               <CurrentInternship />
//             </DashboardLayout>
//           }
//           />
//           <Route
//           path="student/applications"
//           element={
//             <DashboardLayout>
//               <Applications />
//             </DashboardLayout>
//           }
//           />
//           <Route
//           path="coordinator/students"
//           element={
//             <DashboardLayout>
//               <Students />
//             </DashboardLayout>
//           }
//           />
//           <Route
//           path="coordinator/opportunities"
//           element={
//             <DashboardLayout>
//               <InternshipOpportunitiesPage />
//             </DashboardLayout>
//           }
//           />
//            <Route
//           path="/companies"
//           element={
//             <DashboardLayout>
//               <CompaniesDashboard />
//             </DashboardLayout>
//           }
//           />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



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
import CompaniesDashboard from "./components/Institutions/CompaniesDashboard";
import LoginPage from "./components/Login/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./components/Signup/SignupPage";
import Applications from "./components/Student/Applications";
import CurrentInternship from "./components/Student/CurrentInternship";
import Listings from "./components/Student/Listings";
import StudentDashboard from "./components/Student/StudentDashboard";
import AboutPage from "./components/HeroSection/About";
import RevenueChart from "./components/Admin/Chart";


function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar will be displayed on all pages */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Dashboard Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/RevenueChart" element={<RevenueChart />} />
        <Route
          path="/coordinator-dashboard"
          element={<CoordinatorDashboard />}
        />
        <Route path="/companies" element={<CompaniesDashboard />} />

        {/* Admin Routes */}
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/institutions" element={<InstitutionsPage />} />
        <Route path="/admin/internships" element={<InternshipListing />} />

        {/* Student Routes */}
        <Route path="/student/listings" element={<Listings />} />
        <Route path="/student/current" element={<CurrentInternship />} />
        <Route path="/student/applications" element={<Applications />} />

        {/* Coordinator Routes */}
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
