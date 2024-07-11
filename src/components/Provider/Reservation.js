import { Button } from "../ui/button"
import ProviderBtn from "./ProviderBtn";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
import { Textarea } from "../ui/textarea"
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

const Reservation = (props) => {
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
                    <div className="createService">
                        <Accordion type="single" collapsible className="w-6/7 ml-5 mt-5 mr-10">
                            <AccordionItem value="item">
                                <AccordionTrigger><h2>Add new Reservation</h2></AccordionTrigger>
                                <AccordionContent className="flex gap-5 mt-3 mx-2">
                                    <div className="flex flex-col gap-5">
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Service" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="light">Light</SelectItem>
                                                <SelectItem value="dark">Dark</SelectItem>
                                                <SelectItem value="system">System</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="User for service" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="light">Light</SelectItem>
                                                <SelectItem value="dark">Dark</SelectItem>
                                                <SelectItem value="system">System</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Button className="w-fit h-fit px-6 py-1">Destructive</Button>
                                    </div>
                                    <Textarea placeholder="Description" />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="list-reservation w-6/7 ml-5 mt-5 mr-10 ">
                        <Table>
                            <TableCaption>A List Reservation</TableCaption>
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
export default Reservation