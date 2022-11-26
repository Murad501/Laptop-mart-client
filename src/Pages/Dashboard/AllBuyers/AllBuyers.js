import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: () =>
      fetch("http://localhost:5000/buyers").then((res) => res.json()),
  });

  console.log(buyers);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/buyer/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast.success("buyer deleted successfully");
        }
      });
  };

  return (
    <div>
      {buyers.length ? (
        <>
          <h1 className="text-3xl font-bold text-center my-10">All buyers</h1>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="border">
                  <th className="bg-white text-black"></th>
                  <th className="bg-white text-black text-center">Name</th>
                  <th className="bg-white text-black text-center">Email</th>
                  <th className="bg-white text-black text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {buyers.map((buyer, idx) => (
                  <tr className="border" key={buyer._id}>
                    <th className="py-1 text-center">{idx + 1}</th>
                    <td className="py-1 text-center">{buyer.name}</td>
                    <td className="py-1 text-center">{buyer.email}</td>
                    <td className="mx-auto py-1 text-center">
                      <button
                        onClick={() => handleDelete(buyer._id)}
                        className="btn bg-red-600 text-white border-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h1 className="text-3xl font-bold text-center my-20">
          No buyers found
        </h1>
      )}
    </div>
  );
};

export default AllBuyers;
