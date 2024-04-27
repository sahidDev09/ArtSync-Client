import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/mycrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [user?.email]);

  return (
    <div>
      <h1>My craft page</h1>
    </div>
  );
};

export default MyCrafts;
