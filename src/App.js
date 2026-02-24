import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";


import Portfolio from "./pages/Portfolio";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import AddSubmission from "./pages/AddSubmission";
import SubmissionDetails from "./pages/SubmissionDetails";
import Progress from "./pages/Progress"; 
import Projects from "./pages/Projects"; 
import Achievements from "./pages/Achievements"; 
import Settings from "./pages/Settings"; 

// Student Project Detail Pages
import AIChatbot from "./pages/AIChatbot";
import PortfolioProject from "./pages/PortfolioProject";
import ELearning from "./pages/ELearning";
import HealthTracker from "./pages/HealthTracker";

// ⭐ ADMIN PAGE
import ManageStudents from "./pages/ManageStudents";
import ManageCourses from "./pages/ManageCourses";
import AssignTasks from "./pages/AssignTasks";
import Reports from "./pages/Reports";
import ManageProjects from "./pages/ManageProjects";
import ProjectKanban from "./pages/ProjectKanban";
import ProjectTimeline from "./pages/ProjectTimeline";
import AdminFeedback from "./pages/AdminFeedback";
import AdminSettings from "./pages/AdminSettings";






function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />


        {/* Dashboards */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* ⭐ ADMIN ROUTES */}
        <Route path="/admin/manage-students" element={<ManageStudents />} />
        <Route path="/admin/manage-courses" element={<ManageCourses />} />
        <Route path="/admin/assign-tasks" element={<AssignTasks />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/manage-projects" element={<ManageProjects />} />
        <Route path="/admin/project-kanban" element={<ProjectKanban />} />
        <Route path="/admin/project-timeline" element={<ProjectTimeline />} />
        <Route path="/admin/feedback" element={<AdminFeedback />} />
        <Route path="/admin/settings" element={<AdminSettings />} />



        



        
        {/* Student Pages */}
        <Route path="/student/portfolio" element={<Portfolio />} />
        <Route path="/student/courses" element={<Courses />} />
        <Route path="/student/assignments" element={<Assignments />} />

        <Route path="/student/assignments/:code/submit" element={<AddSubmission />} />
        <Route path="/submission-details/:code" element={<SubmissionDetails />} />

        <Route path="/student/progress" element={<Progress />} /> 
        <Route path="/student/achievements" element={<Achievements />} /> 
        <Route path="/student/settings" element={<Settings />} />

        {/* Projects */}
        <Route path="/student/projects" element={<Projects />} />
        <Route path="/student/projects/chatbot" element={<AIChatbot />} />
        <Route path="/student/projects/portfolio" element={<PortfolioProject />} />
        <Route path="/student/projects/elearning" element={<ELearning />} />
        <Route path="/student/projects/health" element={<HealthTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
