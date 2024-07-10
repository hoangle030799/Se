import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import ClientBtn from "./ClientBtn";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"

const ProviderContact = (props) => {
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
            <ClientBtn />
            <div className="content w-full h-full relative">
                <div className="curren-content absolute flex flex-col gap-5">
                    <div className="provider-list">
                        <Accordion type="single" collapsible className="w-6/7 ml-5 mt-5 mr-10">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Provider</AccordionTrigger>
                                <AccordionContent>
                                    <Table>
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
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="ct-provider flex flex-col">
                        <div className="flex ml-5">
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
                            </div>
                        </div>
                        <div className="group-infor flex justify-between w-full items-center gap-5 mt-5">
                            <div className="ml-5"> 
                                <Label htmlFor="userName">User Name</Label>
                                <Input type="userName" id="userName" placeholder="userName" />
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>
                            <div className="mr-5">
                                <Label htmlFor="phone">Phone</Label>
                                <Input type="phone" id="phone" placeholder="phone" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProviderContact