import React from "react";

const FilterProfile = ({ categories, filterGender }) => {
  return (
    <div className="btn-wrapper">
      {categories &&
        categories.map((item) => {
          return (
            <div key={item} className="btn-container">
              <button className="btn" onClick={() => filterGender(item)}>
                {item}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default FilterProfile;
