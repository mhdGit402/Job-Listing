// Approach 1
export const Card = ({ children }) => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {children}
        </div>
      </div>
    </section>
  );
};
// Approach 2
//     export const Card = ({ title, description, buttonText, customClass }) => {
//   const className = `${customClass} p-6 rounded-lg shadow-md`;
//   return (
//     <section className="py-4">
//       <div className="container-xl lg:container m-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
//           {/* {children} */}
//           <div className={className}>
//             <h2 className="text-2xl font-bold">{title}</h2>
//             <p className="mt-2 mb-4">{description}</p>
//             <a
//               href="/jobs.html"
//               className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
//             >
//               {buttonText}
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
