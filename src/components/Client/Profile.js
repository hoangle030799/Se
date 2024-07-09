import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const Profile = (props) => {
    return (
        <div className="profile-container">
            <div className="title flex h-10">
                <span className="w-1/4 ml-5 mt-1 text-2xl font-semibold">Account Features</span>
                <div className="group-btn w-3/4 flex justify-center">
                    <Button variant="ghost">My Profile</Button>
                    <Button variant="ghost">Reservation Manage</Button>
                    <Button variant="ghost">Favorite Service</Button>
                    <Button variant="ghost">Provider Contact</Button>
                    <Button variant="ghost">Notification</Button>
                </div>
            </div>
            <div className="content w-full h-full relative">
                <div className="curren-content absolute flex flex-col gap-5">
                    <div className="ct">
                        <Avatar style={{width: '80px !important', height: '80px !important'}}>
                            <AvatarImage 
                            src="https://github.com/shadcn.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="ct">asdasd</div>
                    <div className="ct">asdasd</div>
                </div>
            </div>
        </div>
    )
}
export default Profile