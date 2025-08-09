// app/page.tsx or any client-side component
"use client";

import Login from "./login/page";

// import React, { useEffect, useState } from "react";

// export default function CheckUser() {
//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/check-user/")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Check User Result</h1>
//       {data ? (
//         <pre className="bg-gray-100 p-4 rounded">
//           {JSON.stringify(data, null, 2)}
//         </pre>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
export default function App() {
  return (
    <>
      <Login />
    </>
  );
}
