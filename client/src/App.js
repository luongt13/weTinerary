import {useState, useEffect} from "react"
import {Route} from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx"
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
  }

  async function logout() {
    await localStorage.clear()
    history.push("/")
    setCurrentUser(null)
  }

  return (
    <div className="App">
      <Nav currentUser={currentUser} logout={logout}/>
      <Route path="/trips/:id">
        <TripDetails currentUser={currentUser}/>
      </Route>
      <Route path="/my-trips/:id">
        <TripList currentUser={currentUser}/>
      </Route>
      <Route exact path="/trips">
        <TripList currentUser={currentUser}/>
      </Route>
      <Route exact path="/">
        <Home verify={verify} currentUser={currentUser}/>
      </Route>
    </div>
  );
}

export default App;