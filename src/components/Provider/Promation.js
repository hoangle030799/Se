import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import ProviderBtn from "./ProviderBtn";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "../ui/dialog"
import { Trash2 } from 'lucide-react';
const Promotions = (props) => {
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
            <ProviderBtn />
            <div className="content w-full h-full relative">
                <div className="curren-content absolute flex flex-col gap-5">
                    <div className="createPromation">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="w-fit h-fit px-6 py-1 mt-5 ml-5">Add new promation</Button>
                            </DialogTrigger>
                            <DialogContent className="2xl">
                                <DialogHeader>
                                    <DialogTitle>Add new promation</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label className="text-right">
                                        Title
                                        </Label>
                                        <Input
                                            id="title"
                                            className="col-span-3"
                                            placeholder = "Title"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label className="text-right">
                                            Time
                                        </Label>
                                        <Input
                                            id="time"
                                            className="col-span-3"
                                            placeholder = "Time"
                                        />
                                    </div>
                                </div>
                                <div className="selectService">
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="+ Add Services" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">Light</SelectItem>
                                            <SelectItem value="dark">Dark</SelectItem>
                                            <SelectItem value="system">System</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="listPromations">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[100px]">Name</TableHead>
                                                <TableHead>Cost</TableHead>
                                                <TableHead>Price after reduction/sale off</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {invoices.map((invoice) => (
                                                <TableRow key={invoice.invoice}>
                                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                                    <TableCell className="text-right"><Trash2 /></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="list-promations w-6/7 ml-5 mt-5 mr-10 ">
                        <Table>
                            <TableCaption>A List Promations</TableCaption>
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
export default Promotions