import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home, Missions } from "../pages";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import { Loading, Menu } from "../components";
import { Suspense, lazy } from "react";

const Gallery = lazy(() => import("../pages/Gallery"));

const Rotas = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Rotas />}>
            <Route path="/" element={<Home />} />
            <Route path="/missoes" element={<Missions />} />
            <Route
              path="/galeria"
              element={
                <Suspense fallback={<Loading/>}>
                  <Gallery />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
