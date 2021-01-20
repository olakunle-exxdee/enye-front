import "./App.scss";
import Profile from "./components/Profile";
import { ProfileContextProvider } from "./UsersContext";

function App() {
  return (
    <ProfileContextProvider>
      <div className="app">
        <Profile />
      </div>
    </ProfileContextProvider>
  );
}

export default App;
