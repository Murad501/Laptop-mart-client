import { useEffect, useState } from "react";

export const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
        console.log(email)
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
            if(data.token){
                localStorage.setItem('access-token', data.token)
                setToken(data.token)
            }
        });
    }
  }, [email]);
  return [token];
};

