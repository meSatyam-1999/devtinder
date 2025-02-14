
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try{
      const res = await axios.post(BASE_URL + "/login",{
        emailId,
        password,
      },{ withCredentials: true });
      dispatch(addUser(res.data)); // for storing login data inside redux store
      return navigate("/");  //after login user go to this page 
    }
    catch(err){
      setError(err?.response?.data || "Username or Password not found..!!")
    }
  };

  return (
    <div className="flex justify-center my-15">
      <div className="card card-border bg-base-300 w-96 h-110">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl font-bold">Login</h2>
          {/* Adding input box */}
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="text"
                value={emailId}
                className="input bg-amber-50 text-black"
                placeholder="email"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>

            <fieldset className="fieldset mt-4">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                value={password}
                className="input bg-amber-50 text-black"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="mt-2">
                New User?{" "}
                <Link to="/register" className="font-bold">
                  Register
                </Link>
              </span>
            </fieldset>
          </div>
          <p className="text-red-500 font-semibold">{error}</p>
          <div className="card-actions justify-center">
            <button
              className="btn bg-[#D91656] w-full mb-4"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
