import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Modern-Porfolio" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
