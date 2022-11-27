import { useEffect, useState } from "react";

export const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [buyerLoading, setBuyerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://backend-laptop-mart.vercel.app/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsBuyer(data.isBuyer);
          console.log(data.isBuyer)
          setBuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, buyerLoading];
};