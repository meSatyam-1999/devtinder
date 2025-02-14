
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Body from "./Body";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Connections from "./pages/Connections";
import Requests from "./pages/Requests";

function App() {
  return (
    <div>
      <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
            </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
