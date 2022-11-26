import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: () =>
      fetch("http://localhost:5000/sellers").then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/seller/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount){
            refetch()
            toast.success('Seller deleted successfully')
        }
    })
  }

  const handleVerify = id => {
    fetch(`http://localhost:5000/seller/${id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
            refetch()
            toast.success('Seller verified successfully')
        
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">All Sellers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="border">
              <th className="bg-white text-black"></th>
              <th className="bg-white text-black text-center">Name</th>
              <th className="bg-white text-black text-center">Email</th>
              <th className="bg-white text-black text-center">Action</th>
              <th className="bg-white text-black text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, idx) => 
              <tr className="border" key={seller._id}>
                <th className="py-1 text-center">{idx + 1}</th>
                <td className="py-1 text-center">{seller.name}</td>
                <td className="py-1 text-center">{seller.email}</td>
                <td className="mx-auto py-1 text-center"><button onClick={()=>handleDelete(seller._id)} className="btn bg-red-600 text-white border-none">Delete</button></td>
                {
                    seller.verified ? 
                    <td className="mx-auto py-1 text-center text-primary font-bold">Verified</td>
                    :
                    <td className="mx-auto py-1 text-center"><button onClick={()=>handleVerify(seller._id)} className="btn btn-primary text-white border-none">Verify</button></td>
                }
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
