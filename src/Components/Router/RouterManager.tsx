import { Routes, Route } from "react-router-dom";
import * as PathManager from "./PathManager";
export const RouterManager = () => {
  return (
    <div className="MainContainer">
      <PathManager.Header />
      <Routes>
        <Route path="/" element={<PathManager.LazyHome />} />
        <Route path="/commands" element={<PathManager.Commands />} />
        <Route path="/developer" element={<PathManager.Developer />} />
        <Route path="/about" element={<PathManager.About />} />
        <Route path="/invite" element={<PathManager.Invite />} />
        <Route path="/support" element={<PathManager.Support />} />
        <Route path="/loading" element={<PathManager.Loading />} />
        <Route path="*" element={<PathManager.Error404 />} />
      </Routes>
      <PathManager.Footer />
    </div>
  );
};
