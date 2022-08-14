import Login from "./Login";
import Register from "./Register";
import Layout from "./pages/Layout";
import LinkPage from "./pages/LinkPage";
import Unauthorized from "./pages/Unauthorized";
import Editor from "./pages/Editor";
import Admin from "./pages/Admin";
import Lounge from "./pages/Lounge";
import Home from "./pages/Home";
import Missing from "./pages/Missing";
import RequiredAuth from "./pages/RequiredAuth";
import { Routes, Route } from "react-router-dom";
import PersistLogin from "./pages/PersistLogin";

function App() {
  return (
    <>
      {/* <Register /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="linkpage" element={<LinkPage />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* we want to protect these routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequiredAuth allowedRoles={[3]} />}>
              <Route path="/" element={<Home />} />
            </Route>

            <Route element={<RequiredAuth allowedRoles={[2]} />}>
              <Route path="editor" element={<Editor />} />
            </Route>

            <Route element={<RequiredAuth allowedRoles={[1]} />}>
              <Route path="admin" element={<Admin />} />
            </Route>

            <Route element={<RequiredAuth allowedRoles={[1, 2]} />}>
              <Route path="lounge" element={<Lounge />} />
            </Route>
          </Route>
          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
