import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components";
import { AuthContextProvider } from "./context/AuthContext";
import { Home, LandingPage, SignIn, SignUp } from "./pages";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                {" "}
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
