
import { Route, Routes } from "react-router-dom";
import Main from "./components/main/main";
import HomeMain from "./components/mainContent/homeMain";
import LogIn from "./components/Auth/Login";
import Profile from "./components/Client/Profile";
import ReservationManage from "./components/Client/ReservationManage";
import FavoriteService from "./components/Client/FavoriteService";
import ProviderContact from "./components/Client/ProviderContact";
import Notification from "./components/Client/Notification";
import ProviderProfile from "./components/Provider/ProviderProfile";
import ServiceManage from "./components/Provider/ServiceManage";
import Reservation from "./components/Provider/Reservation";
import Invoice from "./components/Provider/Invoice";
import Promotions from "./components/Provider/Promation";
import PrNotification from "./components/Provider/PrNotification";
import ManageUser from "./components/Admin/ManageUser";
import Dashboard from "./components/Admin/SideBar";
import SheetDemo from "./components/Admin/SideBar";
import AdReservation from "./components/Admin/AdReservation";
import CategoryAndService from "./components/Admin/CategoryAndService";
import ProviderRevenue from "./components/Admin/ProviderRevenue";
import ProviderInvoice from "./components/Admin/ProviderInvoice";

const Layout = () => {
    return (
        <div className="App">
            <Routes>
                <>
                    <Route path="/" element={<Main><HomeMain /></Main>} />
                    <Route path="/Login" element={<Main><LogIn /></Main>} />
                    <Route path="/client/Profile" element={<Main><Profile /></Main>} />
                    <Route path="/client/Reservation" element={<Main><ReservationManage /></Main>} />
                    <Route path="/client/FavoriteService" element={<Main><FavoriteService /></Main>} />
                    <Route path="/client/ProviderContact" element={<Main><ProviderContact /></Main>} />
                    <Route path="/client/Notification" element={<Main><Notification /></Main>} />
                </>
                <>
                    <Route path="/provider/Profile" element={<Main><ProviderProfile /></Main>} />
                    <Route path="/provider/ServiceManage" element={<Main><ServiceManage /></Main>} />
                    <Route path="/provider/Reservation" element={<Main><Reservation /></Main>} />
                    <Route path="/provider/Invoice" element={<Main><Invoice /></Main>} />
                    <Route path="/provider/Promotions" element={<Main><Promotions /></Main>} />
                    <Route path="/provider/Notification" element={<Main><PrNotification /></Main>} />
                </>
                <>
                <Route path="/admin/ManageUser" element={<Main><ManageUser /></Main>} />
                <Route path="/admin/Reservation" element={<Main><AdReservation /></Main>} />
                <Route path="/admin/Category" element={<Main><CategoryAndService /></Main>} />
                <Route path="/admin/ProviderRevenue" element={<Main><ProviderRevenue /></Main>} />
                <Route path="/admin/ProviderInvoice" element={<Main><ProviderInvoice /></Main>} />
                </>
            </Routes>
        </div>
    )
}
export default Layout