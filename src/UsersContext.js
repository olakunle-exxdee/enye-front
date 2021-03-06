import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProfileContext = createContext();

export const ProfileContextProvider = (props) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.enye.tech/v1/challenge/records")
      .then((response) => {
        if (response.data) {
          setData(response.data);
        } else {
          setData([]);
        }

        console.log(response.data.records);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  const filterGender = (gender) => {
    const newItem =
      data && data.records.profiles.filter((item) => item.Gender === gender);
    setData(newItem);
  };

  return (
    <ProfileContext.Provider value={{ data, loading, error, filterGender }}>
      {props.children}
    </ProfileContext.Provider>
  );
};
