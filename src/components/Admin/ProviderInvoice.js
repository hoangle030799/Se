import SideBar from "./SideBar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { ImagePlus } from 'lucide-react';
import avt from '../../asset/image/111.jpg'

const ProviderInvoice = (props) => {
    const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV002",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        }
    ]
    return (
        <div className="profile-container">
            <div className="title flex h-10 ml-2 gap-5">
                <SideBar />
                <div className="flex gap-5">
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/shadcn.png" />
                        <AvatarFallback>Avatar</AvatarFallback>
                    </Avatar>
                    <div className="title-1-left flex flex-col mt-5 ">
                        <span className="text-3xl font-medium">USER NAME</span>
                        <span className="text-xl">Role</span>
                    </div>
                </div>
                <div className="report flex gap-20 ml-72 mt-5 text-xl font-normal">
                    <div className="totalRevenue">
                        Total Revenue:
                    </div>
                    <div className="monthlyGoal">
                        Monthly Goal:
                    </div>
                </div>
                {/* <span className="w-1/4 ml-5 mt-1 text-2xl font-semibold">Account Features</span> */}
            </div>
            <div className="content w-full h-full relative">
                <div className="curren-content-1 absolute flex flex-col gap-5">
                    <div className="selectProvider w-4/5 mx-auto mt-3 flex items-center px-3 gap-14">
                        <Select className="">
                            <SelectTrigger className="w-[45%]">
                                <SelectValue placeholder="Provider" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex gap-5">
                            <Avatar>
                                <AvatarImage
                                    src="https://github.com/shadcn.png" />
                                <AvatarFallback>Avatar</AvatarFallback>
                            </Avatar>
                            <div className="title-1-left flex flex-col mt-5 ">
                                <span className="text-3xl font-medium">USER NAME</span>
                                <span className="text-xl">Phone</span>
                                <span className="text-xl">Category Service</span>
                            </div>
                        </div>
                    </div>
                    <div className="listProvider w-6/7 ml-5 mr-10 ">
                        <Table>
                            <TableCaption>A Invoice</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.invoice}>
                                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                        <TableCell>{invoice.paymentStatus}</TableCell>
                                        <TableCell>{invoice.paymentMethod}</TableCell>
                                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProviderInvoice