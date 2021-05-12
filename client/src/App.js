import {useState, useEffect} from "react"
import {Route} from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx"
// import SignUp from "./components/SignUp/Signup.jsx"
// import Login from "./components/Login/Login.jsx"
import TripList from "./components/TripList/TripList.jsx"
import TripDetails from "./components/TripDetails/TripDetails.jsx"
import Home from "./components/Home/Home.jsx"
import {verifyUser} from "./services/auth.js"
import {useHistory} from "react-router-dom"
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  let history = useHistory()

  useEffect(() => {
    verify()
    // eslint-disable-next-line
  }, [])

  async function verify() {
    let user = await verifyUser()
    setCurrentUser(user)

    if (user) {
      history.push("/trips")
    } else {
      return false
    }
  }

  async function logout() {
    await localStorage.clear()
    history.push("/")
    setCurrentUser(null)
  }

  return (
    <div className="App">
      <Nav currentUser={currentUser} logout={logout}/>
      {/* <Route path="/signup">
        <SignUp/>
      </Route> */}
      {/* <Route path="/login">
        <Login verify={verify}/>
      </Route> */}
      <Route path="/trips/:id">
        <TripDetails currentUser={currentUser}/>
      </Route>
      <Route path="/my-trips/:id">
        <TripList currentUser={currentUser}/>
      </Route>
      <Route exact path="/trips">
        <TripList/>
      </Route>
      <Route exact path="/">
        <Home verify={verify}/>
        {/* <Login verify={verify}/> */}
      </Route>
    </div>
  );
}

export default App;
