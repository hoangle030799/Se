import { useNavigate } from "react-router-dom";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import {
    CircleUser,
    AppWindow,
    Shapes,
    HandCoins,
    Banknote,
    PanelRightOpen
} from 'lucide-react';

const SideBar = () => {
    const navigate = useNavigate()
    return (
        <Sheet>
            <SheetTrigger><PanelRightOpen style={{color : "#a8a4a4"}}/></SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>
                        <span className="text-3xl font-black mb-3">LOGO</span>
                    </SheetTitle>
                    <SheetDescription>
                        <nav className="grid items-start px-2 p-5 text-lg font-medium lg:px-4">
                            <a
                                // href="/admin/ManageUser"
                                onClick={()=> navigate('/admin/ManageUser')}
                                className="flex items-center px-3 py-2 text-slate-500 hover:text-slate-700"
                            >
                                <CircleUser className="h-4 w-4" />
                                My Profile
                            </a>
                            <a
                                // href="#"
                                onClick={()=> navigate('/admin/Reservation')}
                                className="flex items-center px-3 py-2 text-slate-500 hover:text-slate-700"
                            >
                                <AppWindow className="h-4 w-4" /> 
                                Reservation
                            </a>
                            <a
                                // href="#"
                                onClick={()=> navigate('/admin/Category')}
                                className="flex items-center px-3 py-2 text-slate-500 hover:text-slate-700"
                            >
                                <Shapes  className="h-4 w-4" /> 
                                Category And Service
                            </a>
                            <a
                                href="#"
                                className="flex items-center px-3 py-2 text-slate-500 hover:text-slate-700"
                            >
                                <HandCoins   className="h-4 w-4" /> 
                                Provider's Revenue
                            </a>
                            <a
                                href="#"
                                className="flex items-center px-3 py-2 text-slate-500 hover:text-slate-700"
                            >
                                <Banknote   className="h-4 w-4" /> 
                                Provider's Invoice
                            </a>
                        </nav>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
export default SideBar
