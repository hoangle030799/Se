import SideBar from "./SideBar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
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

const CategoryAndService = (props) => {
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
                    <div className="createProvider">
                        <Accordion type="single" collapsible className="w-6/7 ml-5 mt-5 mr-10">
                            <AccordionItem value="item">
                                <AccordionTrigger><h2>Add new Reservation</h2></AccordionTrigger>
                                <AccordionContent className="flex gap-5 mt-3 mx-2">
                                    <div className="flex flex-col gap-5 w-2/5">
                                        <Input type="text" placeholder="Name" />
                                        <Input type="text" placeholder="Phone" />
                                        <Input type="text" placeholder="Service Category" />
                                        <Button className="w-fit h-fit px-6 py-1">+ Create</Button>
                                    </div>
                                    <ImagePlus />
                                    <div className="previewImage flex justify-center items-center w-1/2">
                                        Preview Image
                                        {/* <img className="max-w-full max-h-full" src={avt}/> */}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="listProvider w-6/7 ml-5 mt-5 mr-10 ">
                        <Table>
                            <TableCaption>A List User</TableCaption>
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
export default CategoryAndService