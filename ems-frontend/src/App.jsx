
import './App.css'
import ListRoomComponent from "./components/ListRoomComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RoomComponent from "./components/RoomComponent.jsx";
import AdminUserComponent from './components/AdminUserComponent'
import LandingPage from './components/LandingPage'
import ListUsersComponent from './components/ListUsersComponent'

function App() {


  return (
    <>

      <BrowserRouter>
      <HeaderComponent/>
          <Routes>

              {/* // localhost:3000 */}
              <Route path="/" element={<LandingPage />} />

              {/* // http://localhost:3000/rooms */}
              <Route path='/rooms' element = {<ListRoomComponent/>}></Route>

              {/* // http://localhost:3000/add-room */}
              <Route path='/add-room' element = {<RoomComponent/>}> </Route>

              {/* // http://localhost:3000/edit-room/1 */}
              <Route path ='edit-room/:id' element = {<RoomComponent/>}> </Route>

              {/* // localhost:3000/users */}
              <Route path = '/users' element = {<ListUsersComponent />}></Route>

              <Route path = '/add-user' element = {<AdminUserComponent />}></Route>

              <Route path="/edit-user/:id" element = {<AdminUserComponent />}></Route>
          </Routes>

      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
