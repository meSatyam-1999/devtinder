import axios from "axios";
import UserCard from "../components/UserCard";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      console.log("API Response:", res.data); 
      dispatch(addFeed(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    feed && (
    <div className="flex justify-center my-15">
      <UserCard user={feed[0]}  />
    </div>
    )
  );
};

export default Feed;
