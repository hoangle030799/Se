
import { Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import HomeMain from "./components/mainContent/homeMain";
import LogIn from "./components/Auth/Login";
import Profile from "./components/Client/Profile";
import ReservationManage from "./components/Client/ReservationManage";
import FavoriteService from "./components/Client/FavoriteService";

const Layout = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main><HomeMain/></Main>} />
                <Route path="/Login" element={<Main><LogIn /></Main>} />
                <Route path="/Profile" element={<Main><Profile/></Main>} />
                <Route path="/Reservation" element={<Main><ReservationManage/></Main>} />
                <Route path="/FavoriteService" element={<Main><FavoriteService/></Main>} />
            </Routes>
        </div>
    )
}
export default Layout