import "./App.css";
import { UserForm } from "./Components/UserForm";
import UsersList from "./Components/UsersList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "./Components/ErrorPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="user/:id" element={<UserForm />} />
          <Route path="add-user" element={<UserForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
