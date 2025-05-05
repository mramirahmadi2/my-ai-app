import AppRoutes from "./router/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import 'preline/preline';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
