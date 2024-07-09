import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"

const ClientBtn = (props) => {
    const navigate = useNavigate()
    return(
        <div className="title flex h-10">
                <span className="w-1/4 ml-5 mt-1 text-2xl font-semibold">Account Features</span>
                <div className="group-btn w-3/4 flex justify-center">
                    <Button variant="ghost" onClick={() => { navigate('/Profile') }}>My Profile</Button>
                    <Button variant="ghost" onClick={() => { navigate('/Reservation') }}>Reservation Manage</Button>
                    <Button variant="ghost" onClick={() => { navigate('/FavoriteService') }}>Favorite Service</Button>
                    <Button variant="ghost">Provider Contact</Button>
                    <Button variant="ghost">Notification</Button>
                </div>
            </div>
    )
}
export default ClientBtn