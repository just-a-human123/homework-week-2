import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CreatePlayList from "./page/createPlaylist";
import Login from "./page/login";
import { useSelector } from "react-redux";
import SearchConcert from "./page/cityConcert/songkick";
import ResponsiveAppBar from "./Component/Navbar/navbar";
import UserProfilePage from "./page/userProfile/userProfile";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path={"/create-playlist"}>
            <ResponsiveAppBar />
            {isLogin ? <CreatePlayList /> : <Redirect to={"/"} />}
          </Route>
          <Route path="/search-concert">
            <ResponsiveAppBar />
            <SearchConcert />
          </Route>
          <Route path="/user-profile">
            <ResponsiveAppBar />
            <UserProfilePage />
          </Route>
          <Route path={"/"}>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
