import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getContactTransfer } from "../../store/transferSlice";
import { useEffect } from "react";
import { API_URL } from "../../utils";
import { Send } from "lucide-react";

const Transfer = () => {
  const dispatch = useDispatch();

  const { contactData } = useSelector((state) => state.transfer);

  const [searchParams, setSearchParams] = useSearchParams();

  // First render get all data
  useEffect(() => {
    dispatch(getContactTransfer());
  }, [dispatch]);

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
  const filteredUsers = contactData?.users?.filter(
    (u) =>
      u.fullname.toLowerCase().includes(search.toLowerCase()) ||
      u.phone.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPage = Math.ceil(filteredUsers?.length / limit);
  const start = (page - 1) * limit;
  const currentUsers = filteredUsers?.slice(start, start + limit);

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
          <div>{filteredUsers?.length} Result Found</div>
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
              <th className="px-6 py-3">Sends</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers?.length > 0 ? (
              currentUsers?.map((user) => (
                <tr key={user.user_id}>
                  <td className="px-6 py-4 justify-center flex">
                    <img
                      src={`${API_URL}/img/${user?.profile_picture}`}
                      alt={user.fullname}
                      className="h-20 w-20 rounded-lg object-cover "
                    />
                  </td>
                  <td className="px-6 py-4 text-center">{user.fullname}</td>
                  <td className="px-6 py-4 text-center">{user.phone}</td>
                  <td className="px-6 py-4 text-center flex items-center justify-center">
                    <button className="w-20 h-20 p-2 rounded-[5px]">
                      <img src="/Start.svg" alt="Favorite" />
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center ">
                    <Link
                      to="transfer-detail"
                      state={{
                        userId: user.user_id,
                        name: user.fullname,
                        phone: user.phone,
                        photo: user.profile_picture,
                      }}
                    >
                      <Send size={30} className="text-blue-700 " />
                    </Link>
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
