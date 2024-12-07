import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Job = () => {
  const navigate = useNavigate();

  const { id } = useParams(); // Get the job ID from the URL

  const [job, setJobs] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const api = await axios.get(`http://localhost:5000/jobs/${id}`);

        if (api.status < 200 && api.status >= 300) {
          throw new Error("Failed to fetch jobs");
        }
        // const jobData = api.data.find((job) => job.id === id); // Find job by ID when using local file (not api)
        const jobData = api.data;
        setJobs(jobData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchJobs();
  }, [id]);

  const handleDelete = async () => {
    try {
      const api = await axios.delete(`http://localhost:5000/jobs/${id}`);
      if (api.status < 200 && api.status >= 300) {
        throw new Error("Failed to fetch jobs");
      }
      navigate("/jobs");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
          </Link>
        </div>
      </section>

      {job ? (
        <section className="bg-indigo-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
              <main className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                  <div className="text-gray-500 mb-4">{job.type}</div>
                  <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                  <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                    <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                    <p className="text-orange-700"> {job.location}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-indigo-800 text-lg font-bold mb-6">
                    Job Description
                  </h3>

                  <p className="mb-4">{job.description}</p>

                  <h3 className="text-indigo-800 text-lg font-bold mb-2">
                    Salary
                  </h3>

                  <p className="mb-4"> {job.salary} / Year</p>
                </div>
              </main>

              <aside className="md:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6">Company Info</h3>

                  <h2 className="text-2xl"> {job.company.name}</h2>

                  <p className="my-2">{job.company.description}</p>

                  <hr className="my-4" />

                  <h3 className="text-xl">Contact Email:</h3>

                  <p className="my-2 bg-indigo-100 p-2 font-bold">
                    {job.company.contactEmail}
                  </p>

                  <h3 className="text-xl">Contact Phone:</h3>

                  <p className="my-2 bg-indigo-100 p-2 font-bold">
                    {job.company.contactPhone}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                  <Link
                    to={`/edit-job/${job.id}`}
                    state={{ job: job }}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >
                    Edit Job
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >
                    Delete Job
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      ) : (
        <span>Loading...</span>
      )}
    </>
  );
};
