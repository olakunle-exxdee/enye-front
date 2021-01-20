import React from "react";

import { MdPayment, MdPhone } from "react-icons/md";

const ProfileDetails = ({ data }) => {
  return (
    <div className="profile-details-grid">
      {data.map((item) => {
        const {
          Email,
          Gender,
          FirstName,
          LastName,
          PhoneNumber,
          PaymentMethod,
        } = item;

        return (
          <div key={Email} className="profile-details">
            <div className="name">
              <h3>{FirstName}</h3>
              <h3>{LastName}</h3>
            </div>
            <div className="number">
              <p className="payment">
                <MdPhone /> {PhoneNumber}
              </p>
              <p className="payment">
                <MdPayment />
                {PaymentMethod.toUpperCase()}
              </p>
            </div>
            <div className="gender">
              <p className="text">{Gender}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileDetails;
