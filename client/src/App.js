import {useState, useEffect} from "react"
import {Route} from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx"
import SignUp from "./components/SignUp/Signup.jsx"
import Login from "./components/Login/Login.jsx"
import TripList from "./components/TripList/TripList.jsx"
import TripDetails from "./components/TripDetails/TripDetails.jsx"
import CreateTrip from "./components/CreateTrip/CreateTrip.jsx"
import CreateDay from "./components/CreateDay/CreateDay.jsx"
import {verifyUser} from "./services/auth.js"
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    verify()
  }, [])

  async function verify() {
    let user = await verifyUser()
    setCurrentUser(user)
  }

  return (
    <div className="App">
      <Nav currentUser={currentUser}/>
      <Route path="/signup">
        <SignUp/>
      </Route>
      <Route path="/login">
        <Login verify={verify}/>
      </Route>
      <Route path="/trips/:id">
        <TripDetails/>
      </Route>
      {/* <Route path="/create-day/:id">
        <CreateDay/>
      </Route> */}
      <Route path="/create-trip">
        <CreateTrip/>
      </Route>
      <Route path="/my-trips">
        <TripList/>
      </Route>
      <Route exact path="/">
        <TripList/>
      </Route>
    </div>
  );
}

export default App;
