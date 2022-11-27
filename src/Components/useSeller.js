import { useEffect, useState } from "react";

export const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [sellerLoading, setSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://backend-laptop-mart.vercel.app/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);
          setSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, sellerLoading];
};