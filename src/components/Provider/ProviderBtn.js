import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"

const ProviderBtn = (props) => {
    const navigate = useNavigate()
    return(
        <div className="title flex h-10">
                <span className="w-1/4 ml-5 mt-1 text-2xl font-semibold">Account Features</span>
                <div className="group-btn w-3/4 flex justify-center">
                    <Button variant="ghost" onClick={() => { navigate('/provider/Profile') }}>My Profile</Button>
                    <Button variant="ghost" onClick={() => { navigate('/provider/ServiceManage') }}>Service Manage</Button>
                    <Button variant="ghost" onClick={() => { navigate('/provider/Reservation') }}>Reservation</Button>
                    <Button variant="ghost" onClick={() => {navigate('/provider/Invoice')}}>Invoice</Button>
                    <Button variant="ghost" onClick={() => {navigate('/provider/Promotions')}}>Promotions</Button>
                    <Button variant="ghost" onClick={() => {navigate('/provider/Notification')}}>Notification</Button>
                </div>
            </div>
    )
}
export default ProviderBtn