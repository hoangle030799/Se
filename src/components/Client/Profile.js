import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Pencil } from 'lucide-react';
import ClientBtn from "./ClientBtn";
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const Profile = (props) => {
    return (
        <div className="profile-container">
            <ClientBtn />
            <div className="content w-full h-full relative">
                <div className="curren-content absolute flex flex-col gap-5">
                    <div className="ct flex">
                        <Avatar style={{ width: '80px !important', height: '80px !important' }}>
                            <AvatarImage
                                src="https://github.com/shadcn.png" />
                            <AvatarFallback>Avatar</AvatarFallback>
                        </Avatar>
                        <div className="title-1 flex mt-3 ml-5 justify-between w-full mr-3">
                            <div className="title-1-left flex flex-col ">
                                <span className="text-3xl font-medium">USER NAME</span>
                                <span className="text-xl">Role</span>
                            </div>
                            <div className="title-1-right">
                                <Button variant="secondary">Edit<Pencil /></Button>
                            </div>
                        </div>
                    </div>
                    <div className="ct w-full flex justify-between">
                        <div className="ct-left m-3">
                            <span className="text-xl font-semibold">Personal Information</span>
                            <div className="flex justify-between w-full items-center gap-40 ">
                                <div>
                                    <Label htmlFor="userName">User Name</Label>
                                    <Input type="userName" id="userName" placeholder="userName" />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" placeholder="Email" />
                                </div>
                                <div>
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input type="phone" id="phone" placeholder="phone" />
                                </div>
                            </div>
                        </div>
                        <div className="ct-right m-3">
                            <Button variant="secondary">Edit<Pencil /></Button>
                        </div>
                    </div>
                    <div className="ct w-full flex justify-between">
                    <div className="ct-left m-3">
                            <span className="text-xl font-semibold">Address</span>
                            <div className="flex justify-between w-full items-center gap-40 ">
                                <div>
                                    <Label htmlFor="Country">Country</Label>
                                    <Input type="Country" id="Country" placeholder="Country" />
                                </div>
                                <div>
                                    <Label htmlFor="City/State">City/State</Label>
                                    <Input type="City/State" id="City/State" placeholder="City/State" />
                                </div>
                                <div>
                                    <Label htmlFor="code">Postal Code</Label>
                                    <Input type="code" id="code" placeholder="Postal Code" />
                                </div>
                            </div>
                        </div>
                        <div className="ct-right m-3">
                            <Button variant="secondary">Edit<Pencil /></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile