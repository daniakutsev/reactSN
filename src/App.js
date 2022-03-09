import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/Profile/ProfilePage";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {addPost} from "./redux/state";

const App = (props) => {

    return (

        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <Navbar/>

                <div className="wrapper-content">
                    <Routes>
                        <Route path="profile"
                               element={<ProfilePage state={props.state.profilePage} addPost={addPost}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='news' element={<News/>}/>
                        <Route path='music' element={<Music/>}/>
                        <Route path='settings' element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
