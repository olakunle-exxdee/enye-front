import React, { useEffect, useContext, useState } from "react";
import { ProfileContext } from "../UsersContext";
import FilterProfile from "./FilterProfile";
import Pagination from "./Pagination";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  const { data, loading, error } = useContext(ProfileContext);

  const [paginate, setPaginate] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);
  const [input, setInput] = useState("");
  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const customPages =
    paginate && paginate.slice(indexOfFirstPage, indexOfLastPage);

  const perPage = (item) => setCurrentPage(item);
  const leng = paginate && paginate.length;
  const allCategories = [
    ...new Set(data && data.records.profiles.map((item) => item.Gender)),
  ];

  useEffect(() => {
    data && setPaginate(data.records.profiles);
  }, [data]);

  const filterGender = (gender) => {
    const newItem =
      paginate &&
      data.records.profiles.filter((item) => item.Gender === gender);

    setPaginate(newItem);
  };

  if (loading) {
    return <h1>Loading......</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  const filterItem =
    data &&
    paginate.filter((item) => {
      if (input.toLowerCase().includes(item.FirstName.toLowerCase())) {
        return item;
      }
      return item;
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.includes() === "") {
      return <h1>HHH</h1>;
    }
    setPaginate(filterItem);
  };

  return (
    <div className="">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-input" type="submit">
            Search
          </button>
        </form>
      </div>
      <FilterProfile categories={allCategories} filterGender={filterGender} />
      {paginate && <ProfileDetails data={customPages} />}
      <Pagination
        totalPages={leng}
        postPerPage={postPerPage}
        perPage={perPage}
      />
    </div>
  );
};

export default Profile;
