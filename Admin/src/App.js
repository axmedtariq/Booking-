import React, { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/single";
import New from "./pages/new/New";
import NewHotel from "./pages/NewHotel/newHotel";
import NewRoom from "./pages/newRoom/newRoom";
import { userInputs, productInputs } from "./formSource";
import "./style/dark.scss";
import { DarkModecontext } from "./context/darkModecontext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";

function App() {
  const { darkMode } = useContext(DarkModecontext);

  function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/users/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route index element={<List columns={userColumns} />} />
                  <Route path=":userId" element={<Single />} />
                  <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
                </Routes>
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route index element={<List columns={hotelColumns} />} />
                  <Route path=":productId" element={<Single />} />
                  <Route path="new" element={<NewHotel />} />
                </Routes>
              </ProtectedRoute>
            }
          />
          <Route
            path="/room/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route index element={<List columns={roomColumns} />} />
                  <Route path=":productId" element={<Single />} />
                  <Route path="new" element={<NewRoom />} />
                </Routes>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;