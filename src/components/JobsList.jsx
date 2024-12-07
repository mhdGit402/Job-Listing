import { useState, useEffect } from "react";
import axios from "axios";
import { Jobs } from "./Jobs";

export const JobsList = ({ title = "Browse Jobs", limit = null }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const api = await axios.get("http://localhost:5000/jobs");

        if (api.status < 200 && api.status >= 300) {
          throw new Error("Failed to fetch jobs");
        }
        const response = api.data;
        setJobs(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchJobs();
  }, []);

  // Sort jobs by ID in descending order
  const sortedJobs = jobs.sort((a, b) => b.id - a.id);

  // Determine how many jobs to display based on the limit prop
  const displayedJobs = limit ? sortedJobs.slice(0, limit) : sortedJobs;

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Map of jobs */}
            {displayedJobs.length > 0 ? (
              displayedJobs.map((job) => {
                return <Jobs job={job} key={job.id} />;
              })
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
