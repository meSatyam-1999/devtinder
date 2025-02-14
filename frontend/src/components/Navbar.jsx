import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/devtinder.png";
import { Link, useNavigate } from "react-router-dom";
import  axios from 'axios';
import { BASE_URL } from './../utils/constants';
import { removeUser } from "../utils/userSlice";

const Navbar = () => {

  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async() => {
    try{
      await axios.post(BASE_URL + "/logout", {}, {withCredentials: true});
      dispatch(removeUser());
      return navigate("/login");
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      <div className="navbar bg-[#D91656] shadow-sm">
        <div className="flex-1">
            <div className="flex">
            <img src={Logo} alt="Logo" className="w-15 h-15" />
          <Link to="/" className="btn btn-ghost text-3xl font-bold text-white mt-3">
            DevTinder
          </Link>
          </div>
        </div>
        {user && (<div className="flex gap-2">
          <div className="wlcm-msg mt-2 text-white">Welcome, <b>{user.firstName}</b></div>
          {/* <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto bg-white text-black"
          /> */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
             <div className="w-10 rounded-full avatar-online">
                <img
                  alt="User Photo"
                  src={user.photoUrl}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
