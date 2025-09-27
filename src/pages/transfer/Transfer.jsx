// import { Link } from "react-router-dom";
// import React from "react";
// import { useState } from "react";

// const Transfer = () => {
//   const [activeRow, setActiveRow] = useState(null);

//   const handleClick = (rowIndex) => {
//     setActiveRow(activeRow === rowIndex ? null : rowIndex);
//   };
//   return (
//     <section className="p-6 flex flex-col gap-11">
//       <div className="flex flex-col gap-6">
//         <div className="flex gap-3.5">
//           <img src="/Send-Transfer-Money.svg" alt="" />
//           <span>Transfer Money</span>
//         </div>
//         <div className="Money-transfer gap-5 hidden md:flex items-center">
//           <div className="flex gap-2.5">
//             <span className="bg-[#2948FF] text-[#FFFFFF] w-[24px] h-[24px] flex items-center justify-center rounded-[50%]">
//               1
//             </span>
//             <span>Find People</span>
//           </div>
//           <div className=" border-t border-dashed border-[#4F5665] w-[85px]"></div>
//           <div className="flex gap-2.5">
//             <span className="bg-[#4F5665] text-[#FFFFFF] w-[24px] h-[24px] flex items-center justify-center rounded-[50%]">
//               2
//             </span>
//             <span>Set Nominal</span>
//           </div>
//           <div className=" border-t border-dashed border-[#4F5665] w-[85px]"></div>
//           <div className="flex gap-2.5">
//             <span className="bg-[#4F5665] text-[#FFFFFF] w-[24px] h-[24px] flex items-center justify-center rounded-[50%]">
//               3
//             </span>
//             <span>Finish</span>
//           </div>
//         </div>
//       </div>
//       <div className="shadow p-9 flex flex-col gap-8">
//         <div className="flex justify-between flex-col md:flex-row gap-6">
//           <div className="flex flex-col gap-2">
//             <div>Find People</div>
//             <div>8 Result Found For Ghaluh</div>
//           </div>
//           <div className="input-search flex items-center border border-solid border-[#E8E8E8] rounded-lg overflow-hidden bg-white">
//             <input
//               type="text"
//               id="search"
//               placeholder="Enter Your Search"
//               className="flex-1 p-3 outline-none border-none bg-transparent"
//             />
//             <button
//               type="button"
//               className="bg-none border-none p-[12px] cursor-pointer flex items-end justify-center order-2"
//             >
//               <img
//                 src="Search.svg"
//                 alt="Search"
//                 className="w-[20px] h-[20px]"
//               />
//             </button>
//           </div>
//         </div>
//         <div className="overflow-x-scroll flex flex-col gap-5">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]">
//                   Profile
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
//                   Phone
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
//                   Favorite
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {[1, 2, 3].map((_, index) => (
//                 <tr key={index}>
//                   <Link to={"/transfer_detail"}>
//                     <td className="px-6 py-4 whitespace-nowrap w-20">
//                       <img
//                         src="/Ex-Profile.svg"
//                         className="h-10 w-10 object-cover cursor-pointer"
//                       />
//                     </td>
//                   </Link>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 min-w-[200px]  cursor-pointer">
//                     <Link to={"/transfer_detail"}>Ghaluh</Link>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 min-w-[150px]">
//                     (239) 555-0108
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap w-36">
//                     <div className="flex gap-2">
//                       <button
//                         type="button"
//                         onClick={() => handleClick(index)}
//                         className={`flex items-center justify-center w-10 h-10 p-2 rounded-[5px] cursor-pointer ${
//                           activeRow === index ? "bg-yellow-400" : "bg-gray-100"
//                         }`}
//                       >
//                         <img src="/Start.svg" alt="" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="pagination flex justify-between flex-col">
//             <div>Show 1 History of 100 History</div>
//             <div className="flex gap-7">
//               <a href="#">Prev</a>
//               <a href="#">1</a>
//               <a href="#">2</a>
//               <a href="#">3</a>
//               <a href="#">4</a>
//               <a href="#">5</a>
//               <a href="#">Next</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Transfer;

// Yang digunakan untuk saat ini
import { useSearchParams } from "react-router-dom";

const Transfer = () => {
  const allUsers = [
    { id: 1, name: "Ghaluh", phone: "(239) 555-0108", img: "/Ex-Profile.svg" },
    { id: 2, name: "Bambang", phone: "(239) 666-0378", img: "/Ex-Profile.svg" },
    { id: 3, name: "Tejo", phone: "(239) 222-7495", img: "/Ex-Profile.svg" },
    { id: 4, name: "Nani", phone: "(239) 333-7482", img: "/Ex-Profile.svg" },
    { id: 5, name: "Mei", phone: "(239) 333-4729", img: "/Ex-Profile.svg" },
    { id: 6, name: "Dewi", phone: "(239) 444-1223", img: "/Ex-Profile.svg" },
    { id: 7, name: "Agus", phone: "(239) 999-8877", img: "/Ex-Profile.svg" },
    { id: 8, name: "Rina", phone: "(239) 111-2233", img: "/Ex-Profile.svg" },
    { id: 9, name: "Joko", phone: "(239) 222-3344", img: "/Ex-Profile.svg" },
    { id: 10, name: "Tono", phone: "(239) 333-4455", img: "/Ex-Profile.svg" },
    { id: 11, name: "Siti", phone: "(239) 444-5566", img: "/Ex-Profile.svg" },
    { id: 12, name: "Bayu", phone: "(239) 555-6677", img: "/Ex-Profile.svg" },
    { id: 13, name: "Ani", phone: "(239) 666-7788", img: "/Ex-Profile.svg" },
    { id: 14, name: "Putra", phone: "(239) 777-8899", img: "/Ex-Profile.svg" },
    { id: 15, name: "Lina", phone: "(239) 888-9900", img: "/Ex-Profile.svg" },
    { id: 16, name: "Doni", phone: "(239) 111-4455", img: "/Ex-Profile.svg" },
    { id: 17, name: "Maya", phone: "(239) 222-5566", img: "/Ex-Profile.svg" },
    { id: 18, name: "Tari", phone: "(239) 333-6677", img: "/Ex-Profile.svg" },
    { id: 19, name: "Yoga", phone: "(239) 444-7788", img: "/Ex-Profile.svg" },
    { id: 20, name: "Budi", phone: "(239) 555-8899", img: "/Ex-Profile.svg" },
    { id: 21, name: "Wati", phone: "(239) 666-9900", img: "/Ex-Profile.svg" },
    { id: 22, name: "Eka", phone: "(239) 111-7788", img: "/Ex-Profile.svg" },
    { id: 23, name: "Farah", phone: "(239) 222-8899", img: "/Ex-Profile.svg" },
    { id: 24, name: "Rudi", phone: "(239) 333-9901", img: "/Ex-Profile.svg" },
    { id: 25, name: "Lukman", phone: "(239) 444-1011", img: "/Ex-Profile.svg" },
    { id: 26, name: "Nisa", phone: "(239) 555-1213", img: "/Ex-Profile.svg" },
    { id: 27, name: "Hendra", phone: "(239) 666-1415", img: "/Ex-Profile.svg" },
    { id: 28, name: "Ayu", phone: "(239) 777-1617", img: "/Ex-Profile.svg" },
    { id: 29, name: "Citra", phone: "(239) 888-1819", img: "/Ex-Profile.svg" },
    { id: 30, name: "Riko", phone: "(239) 999-2021", img: "/Ex-Profile.svg" },
    { id: 31, name: "Dian", phone: "(239) 111-2222", img: "/Ex-Profile.svg" },
    { id: 32, name: "Gita", phone: "(239) 333-4444", img: "/Ex-Profile.svg" },
    { id: 33, name: "Hana", phone: "(239) 555-6666", img: "/Ex-Profile.svg" },
    { id: 34, name: "Fajar", phone: "(239) 777-8888", img: "/Ex-Profile.svg" },
    { id: 35, name: "Indra", phone: "(239) 999-0000", img: "/Ex-Profile.svg" },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  // Ambil nilai langsung dari URL
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "5", 10);

  // Helper untuk update URL
  const updateParams = (newParams) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (!value || value === "1" || value === "5") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    setSearchParams(params);
  };

  // Filter
  const filteredUsers = allUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.phone.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPage = Math.ceil(filteredUsers.length / limit);
  const start = (page - 1) * limit;
  const currentUsers = filteredUsers.slice(start, start + limit);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(totalPage, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <section className="p-6 flex flex-col gap-11 shadow">
      {/* Search */}
      <div className="flex justify-between flex-col md:flex-row gap-6">
        <div className="flex flex-col gap-2">
          <div>Find People</div>
          <div>{filteredUsers.length} Result Found</div>
        </div>
        <div className="input-search flex items-center border border-solid border-[#E8E8E8] rounded-lg overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search by Name or Phone"
            value={search}
            onChange={(e) => updateParams({ search: e.target.value, page: 1 })}
            className="flex-1 p-3 outline-none border-none bg-transparent"
          />

          {search && (
            <button
              type="button"
              onClick={() => updateParams({ search: "", page: 1 })}
              className="p-[12px] text-gray-400 hover:text-black"
            >
              ✕
            </button>
          )}

          <button type="button" className="p-[12px]">
            <img src="Search.svg" alt="Search" className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-scroll flex flex-col gap-5">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3">Profile</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Favorite</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4">
                    <img
                      src={user.img}
                      alt={user.name}
                      className="h-10 w-10 object-cover rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 text-center">{user.name}</td>
                  <td className="px-6 py-4 text-center">{user.phone}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="w-10 h-10 p-2 rounded-[5px]">
                      <img src="/Start.svg" alt="Favorite" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => updateParams({ page: Math.max(page - 1, 1) })}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer "
        >
          Prev
        </button>

        {getPageNumbers().map((num) => (
          <button
            key={num}
            onClick={() => updateParams({ page: num })}
            className={`px-3 py-1 border rounded cursor-pointer ${
              page === num ? "bg-blue-500 text-white" : ""
            }`}
          >
            {num}
          </button>
        ))}

        {getPageNumbers().slice(-1)[0] < totalPage && (
          <>
            <span className="px-2">...</span>
            <button
              onClick={() => updateParams({ page: totalPage })}
              className={`px-3 py-1 border rounded cursor-pointer  ${
                page === totalPage ? "bg-blue-500 text-white" : ""
              }`}
            >
              {totalPage}
            </button>
          </>
        )}

        <button
          onClick={() => updateParams({ page: Math.min(page + 1, totalPage) })}
          disabled={page === totalPage}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Transfer;
