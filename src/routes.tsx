import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Landing from "./pages/Landing";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/signup" component={SignupPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
    </BrowserRouter>
  );
}