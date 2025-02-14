/* eslint-disable react/prop-types */

import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "./../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  //update the store
  const dispatch = useDispatch();

  const saveProfile = async () => {
    //Clear errors on screen if we encounter something
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      //update the store
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      {/* Edit profile component */}
      <div className="flex justify-center my-10 gap-6">
        <div className="flex justify-center ">
          <div className="card card-border bg-base-300 w-96">
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold justify-center">
                Edit Profile
              </h2>
              {/* Edit first name */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="*First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>
              {/* Edit last name */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="*Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>
              {/* Edit photo */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo URL</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="https://....."
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </fieldset>
              {/* Edit age */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Age</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="*Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>
              {/* Edit gender */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="*Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset>
              {/* Edit about */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">About</legend>
                <input
                  type="text"
                  className="input"
                  placeholder="*About You"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </fieldset>

              <div className="card-actions justify-center">
                <button
                  onClick={saveProfile}
                  className="btn bg-[#D91656] mt-2 w-full"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, photoUrl, age, gender, about }}
        />
      </div>
      {/* Toast Component */}
      {showToast && (
        <div className="toast-top toast-center toast">
        <div className="alert alert-success">
          <span className="font-semibold text-black">
            Profile update successfully..!
          </span>
        </div>
      </div>
      )}
    </>
  );
};

export default EditProfile;
