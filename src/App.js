import "./App.css";
import { Route } from "react-router-dom";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
function App() {
  return (
    <div className="App">
      <Route path="/" component={MultiStepForm} />
    </div>
  );
}

export default App;
