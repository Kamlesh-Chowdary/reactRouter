import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const githubInfo = useLoaderData();
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kamlesh-chowdary")
  //       .then((data) => data.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <div>
      <p className="text-3xl font-bold text-gray-700 p-4 text-center">
        Github Followers: {githubInfo.followers}
      </p>
      <div className="flex justify-center items-center">
        <img
          src={githubInfo.avatar_url}
          alt="githubInfo profile pic"
          width={300}
          className="p-4"
        />
      </div>
    </div>
  );
};

export default Github;
