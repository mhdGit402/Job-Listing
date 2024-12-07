import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const EditJob = () => {
  const navigate = useNavigate();

  const lo = useLocation();
  const { job } = lo.state || {}; // Destructure job from state

  const [type, setType] = useState(job.type);
  const [title, setTitle] = useState(job.title);
  const [description, setDescription] = useState(job.description);
  const [location, setLocation] = useState(job.location);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [companyContactEmail, setCompanyContactEmail] = useState(
    job.company.contactEmail
  );
  const [companyContactPhone, setCompanyContactPhone] = useState(
    job.company.contactPhone
  );

  const handleType = (event) => {
    setType(event.target.value); // Update state with input value
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleSalary = (event) => {
    setSalary(event.target.value);
  };

  const handleCompanyName = (event) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyDescription = (event) => {
    setCompanyDescription(event.target.value);
  };

  const handleCompanyContactEmail = (event) => {
    setCompanyContactEmail(event.target.value);
  };

  const handleCompanyContactPhone = (event) => {
    setCompanyContactPhone(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedJob = {
      type,
      title,
      description,
      location,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: companyContactEmail,
        contactPhone: companyContactPhone,
      },
    };

    const updateJob = async () => {
      try {
        const api = await axios.put(
          `http://localhost:5000/jobs/${job.id}`,
          updatedJob
        );

        if (api.status < 200 && api.status >= 300) {
          throw new Error("Failed to fetch jobs");
        }
        const response = api.data;
        navigate(`/jobs/${response.id}`);
      } catch (err) {
        console.log(err);
      }
    };
    updateJob();
  };

  return (
    <div>
      {job ? (
        <>
          <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
              <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form onSubmit={handleUpdate}>
                  <h2 className="text-3xl text-center font-semibold mb-6">
                    Update Job
                  </h2>

                  <div className="mb-4">
                    <label
                      htmlFor="type"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Job Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="border rounded w-full py-2 px-3"
                      required
                      value={type} // Controlled input
                      onChange={handleType} // Event handler for changes
                    >
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Remote">Remote</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      Job Listing Name
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="border rounded w-full py-2 px-3 mb-2"
                      placeholder="eg. Beautiful Apartment In Miami"
                      required
                      value={title} // Controlled input
                      onChange={handleTitle} // Event handler for changes
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="border rounded w-full py-2 px-3"
                      rows="4"
                      placeholder="Add any job duties, expectations, requirements, etc"
                      value={description} // Controlled input
                      onChange={handleDescription} // Event handler for changes
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="type"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Salary
                    </label>
                    <select
                      id="salary"
                      name="salary"
                      className="border rounded w-full py-2 px-3"
                      required
                      value={salary} // Controlled input
                      onChange={handleSalary} // Event handler for changes
                    >
                      <option value="Under $50K">Under $50K</option>
                      <option value="$50K - $60K">$50K - $60K</option>
                      <option value="$60K - $70K">$60K - $70K</option>
                      <option value="$70K - $80K">$70K - $80K</option>
                      <option value="$80K - $90K">$80K - $90K</option>
                      <option value="$90K - $100K">$90K - $100K</option>
                      <option value="$100K - $125K">$100K - $125K</option>
                      <option value="$125K - $150K">$125K - $150K</option>
                      <option value="$150K - $175K">$150K - $175K</option>
                      <option value="$175K - $200K">$175K - $200K</option>
                      <option value="Over $200K">Over $200K</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="border rounded w-full py-2 px-3 mb-2"
                      placeholder="Company Location"
                      required
                      value={location} // Controlled input
                      onChange={handleLocation} // Event handler for changes
                    />
                  </div>

                  <h3 className="text-2xl mb-5">Company Info</h3>

                  <div className="mb-4">
                    <label
                      htmlFor="company"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="border rounded w-full py-2 px-3"
                      placeholder="Company Name"
                      value={companyName} // Controlled input
                      onChange={handleCompanyName} // Event handler for changes
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="company_description"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Company Description
                    </label>
                    <textarea
                      id="company_description"
                      name="company_description"
                      className="border rounded w-full py-2 px-3"
                      rows="4"
                      placeholder="What does your company do?"
                      value={companyDescription} // Controlled input
                      onChange={handleCompanyDescription} // Event handler for changes
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="contact_email"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="contact_email"
                      name="contact_email"
                      className="border rounded w-full py-2 px-3"
                      placeholder="Email address for applicants"
                      required
                      value={companyContactEmail} // Controlled input
                      onChange={handleCompanyContactEmail} // Event handler for changes
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="contact_phone"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      id="contact_phone"
                      name="contact_phone"
                      className="border rounded w-full py-2 px-3"
                      placeholder="Optional phone for applicants"
                      value={companyContactPhone} // Controlled input
                      onChange={handleCompanyContactPhone} // Event handler for changes
                    />
                  </div>

                  <div>
                    <button
                      className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Update Job
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </>
      ) : (
        <p>No job data available.</p>
      )}
    </div>
  );
};
