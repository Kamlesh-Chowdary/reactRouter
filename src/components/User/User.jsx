import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const userId = useParams();

  return (
    <div className="text-center text-2xl bg-stone-700 text-white p-9">
      User Id : {userId.id}
    </div>
  );
};

export default User;
