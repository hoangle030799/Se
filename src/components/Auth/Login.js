import { Input } from "../../components/ui/input"
import { Button } from "../ui/button"
import loginImage from '../../asset/image/LoginImage.png'

const LogIn = (props) => {
    return (
        <div className="Login-container flex item-center justify-center h-full">
            <div className="content-left my-5 w-2/5">
                <img src={loginImage} className="w-full h-full"/>
            </div>
            <div className="content-right bg-stone-50 flex flex-col gap-2 item-center justify-center my-5 w-2/5 px-10">
                <span className="flex justify-center text-3xl font-black mb-3">LOGO</span>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <span>Forgot password?</span>
                <Button>Login</Button>
                <span className="mt-3">Not a member? <a style={{color: 'red'}}>Signup Now</a></span>
            </div>
        </div>
    )
}
export default LogIn