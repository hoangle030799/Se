import './header.css'
import { LogOut } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

    const navigate = useNavigate()

    return (
        <div className="header flex justify-between items-center px-20">
            <div className="left" onClick={() => {navigate('/')}}>
                Logo
            </div>
            <div className="right flex gap-10">
                <button onClick={() => { navigate('/Login') }}><LogIn/></button>
                <button><LogOut/></button>
            </div>
        </div>
    )
}
export default Header