import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Form from "./pages/form/Form";
const App = () => {
  return (
    <main className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/registration" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
