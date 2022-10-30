import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components";
import { AuthContextProvider } from "./context/AuthContext";
import {
  Account,
  HelpCenter,
  Home,
  LandingPage,
  SignIn,
  SignUp,
  Bookmark,
} from "./pages";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                {" "}
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookmark"
            element={
              <ProtectedRoute>
                {" "}
                <Bookmark />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                {" "}
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-center"
            element={
              <ProtectedRoute>
                {" "}
                <HelpCenter />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
