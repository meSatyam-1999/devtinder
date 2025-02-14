import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  //redux store connections data showing on UI using useSelector
  const connections = useSelector((store) => store.connections);
  //save the connections data inside redux store
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      //save the connections data inside redux store
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  //condition if connection data not found then show nothing on UI
  if (!connections) return;

  //if no. of connection is equal to zero then show a custom message on header
  if (connections.length === 0)
    return (
      <h1 className="text-3xl font-semibold flex justify-center my-15">
        No Connection Found.
      </h1>
    );
  return (
    <div>
      <h1 className="text-3xl font-semibold flex justify-center my-15">
        My Connections
      </h1>

      {connections.map((connection) => {
        const { firstName, lastName, age, photoUrl, about, gender } =
          connection;

        return (
            <>
          <div className="card card-side w-140 h-40 m-6 bg-base-300 shadow-s md:mx-[33%]">
            <figure>
              <img
                src={photoUrl}
                alt="Connection Photo"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title ml-2">{firstName + " " + lastName}</h2>
              <h3 className="ml-2">⚥ {age} ,   {gender}</h3>
              <p className="my-3">📌 {about}</p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
          </>
        );
      })}
    </div>
  );
};

export default Connections;
