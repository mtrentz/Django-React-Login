import React, { useContext, useState, useEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import AuthContext from "../context/AuthContext";
import useAxios from "../utils/useAxios";

const Home = () => {
  let api = useAxios();

  const { authTokens } = useContext(AuthContext);
  let [data, setData] = useState("empty");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await api
      .get("/user/test/")
      .then((res) => {
        console.log("Get data success");
        setData(res.data.message);
      })
      .catch((err) => {
        console.log("Get data error");
        console.log(err);
      });
  };

  return (
    <div>
      <div>Home Page</div>
      {authTokens ? (
        <div>You are logged in // {data} </div>
      ) : (
        <div>You are not logged in // {data}</div>
      )}
      <LogoutButton />
    </div>
  );
};

export default Home;
