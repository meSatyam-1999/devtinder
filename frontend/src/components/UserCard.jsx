/* eslint-disable react/prop-types */


const UserCard = ({ user } ) => {

  
  const {firstName, lastName, age, gender, photoUrl, about } = user;

  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure className="px-6 pt-6">
          <img
            src= {photoUrl}
            alt="feed user photo"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && <h3>Age: {age}</h3>}
          {gender && <h3>Gender: {gender}</h3>}
          <p>
            {about}
          </p>
          <div className="card-actions mt-4">
            <button className="btn bg-[#D91656] px-9">Ignore</button>
            <button className="btn bg-[#00D390] text-black px-6">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
