import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Callback from "./Callback.tsx";
import Authenticated from "./pages/Authenticated.tsx";
import Home from "./pages/Home.tsx";
import manager from "./core/UserManager.ts";
import SilentSignout from "./components/SilentSignout.tsx";
import Events from "./pages/Events.tsx";
import Sidebar from "./components/Navbars/Sidebar.tsx";
import Wishlists from "./pages/Wishlists.tsx";
import Gifted from "./pages/Gifted.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="bg-dark-900 h-full text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callback" element={<Callback />} />
          <Route element={<Sidebar />}>
            <Route path="/authenticated" element={<Authenticated />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gifted" element={<Gifted />} />
            <Route path="/wishlists" element={<Wishlists />} />
          </Route>
          <Route
            path={manager.settings.post_logout_redirect_uri}
            element={<SilentSignout />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
