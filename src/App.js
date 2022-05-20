import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProfileCreationFreelancer from "./pages/ProfileCreationFreelancer/ProfileCreationFreelancer";
import FreelancerProfile from "./pages/FreelancerProfile/FreelancerProfile";
import ProfileCreationClient from "./pages/ProfileCreationClient/ProfileCreationClient";
import ClientProfile from "./pages/ClientProfile/ClientProfile";
import SearchJobs from "./pages/SearchJobs/SearchJobs";
import JobApplications from "./pages/JobApplications/JobApplications";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/profilecreationFreelancer"
          exact
          element={<ProfileCreationFreelancer />}
        />
        <Route
          path="/profilecreationClient"
          exact
          element={<ProfileCreationClient />}
        />
        <Route path="/freelancer/:id" exact element={<FreelancerProfile />} />
        <Route path="/client/:id" exact element={<ClientProfile />} />
        <Route path="/searchJobs" exact element={<SearchJobs />} />
        <Route path="/searchFreelancers" exact />
        <Route
          path="/jobApplications/:id"
          exact
          element={<JobApplications />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
