import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Characters } from "./pages/Characters";
import { Character } from "./pages/Character";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="characters">
          <Route index element={<Characters />} />
          <Route path=":charId" element={<Character />} />
        </Route>
        <Route path="*" element={<h1> Page not found </h1>} />
      </Routes>
    </>
  );
};
