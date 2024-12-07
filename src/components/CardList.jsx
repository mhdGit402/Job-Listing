// Approach 1
import { Card } from "./Card";
import { Link } from "react-router-dom";

export const CardList = () => {
  return (
    <>
      <Card>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            Browse our React jobs and start your career today
          </p>
          <Link
            to="/jobs"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs
          </Link>
        </div>
        <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">For Employers</h2>
          <p className="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <Link
            to="/add-job"
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          >
            Add Job
          </Link>
        </div>
      </Card>
    </>
  );
};

// // Approach 2
// import { Card } from "./Card";

// export const CardList = () => {
//   return (
//     <>
//       <Card
//         title="For Developers"
//         description="Browse our React jobs and start your career today"
//         buttonText="Browse Jobs"
//         customClass="bg-gray-100"
//       />

//       <Card
//         title="For Employers"
//         description="List your job to find the perfect developer for the role"
//         buttonText="Add Job"
//         customClass="bg-indigo-100"
//       />
//     </>
//   );
// };
