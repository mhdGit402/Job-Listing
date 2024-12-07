import { Layout } from "./components/Layout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Jobs } from "./pages/Jobs.jsx";
import { Job } from "./pages/Job.jsx";
import { AddJob } from "./pages/AddJob.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { EditJob } from "./pages/EditJob.jsx";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/edit-job/:id" element={<EditJob />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};
