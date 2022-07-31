import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Form from "./pages/form/Form";
const App = () => {
  return (
    <div className="app">
      <Homepage />
    </div>
  );
};

export default App;
