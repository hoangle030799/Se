import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

const ServiceManage = (props) => {
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
                    <Tabs className="mr-2">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="service">Create Service</TabsTrigger>
                            <TabsTrigger value="addUser">Create User To Service</TabsTrigger>
                        </TabsList>
                        <TabsContent value="service">
                            <span className="text-xl font-semibold ml-3">Add new Service</span>
                            <div className="flex gap-5 mx-3 mt-3">
                                <div className="flex flex-col gap-5">
                                    <Input type="text" placeholder="Service title" />
                                    <Input type="text" placeholder="Service price" />
                                    <Button className="w-fit h-fit px-6 py-1">Destructive</Button>
                                </div>
                                <Textarea placeholder="Service's title" />
                            </div>
                            <div className="list-reservation w-6/7 ml-5 mt-5 mr-10 ">
                                <Table>
                                    <TableCaption>A List Services</TableCaption>
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
                        </TabsContent>
                        <TabsContent value="addUser">
                        <span className="text-xl font-semibold ml-3">Add new user to service</span>
                            <div className="flex gap-5 mx-3 mt-3">
                                <div className="flex flex-col gap-5">
                                    <Input type="text" placeholder="UserName" />
                                    <Input type="text" placeholder="Phone" />
                                    <Input type="text" placeholder="Price" />
                                    <Button className="w-fit h-fit px-6 py-1">Destructive</Button>
                                </div>
                                <Textarea placeholder="Service's title" />
                            </div>
                            <div className="list-reservation w-6/7 ml-5 mt-5 mr-10 ">
                                <Table>
                                    <TableCaption>A List Services</TableCaption>
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
                        </TabsContent>
                    </Tabs>
                    {/* <div className="createService">
                        <Accordion type="single" collapsible className="w-6/7 ml-5 mt-5 mr-10">
                            <AccordionItem value="item">
                                <AccordionTrigger><h2>Create Service</h2></AccordionTrigger>
                                <AccordionContent className="flex flex-col mt-3 mx-2">
                                    <div className="flex gap-5">
                                        <div className="flex flex-col gap-5">
                                            <Input type="text" placeholder="Service title" />
                                            <Input type="text" placeholder="Service price" />
                                            <Button className="w-fit h-fit px-6 py-1">Destructive</Button>
                                        </div>
                                        <Textarea placeholder="Service's title" />
                                    </div>
                                    <div className="list-reservation w-6/7 ml-5 mt-5 mr-10 ">
                                        <Table>
                                            <TableCaption>A List Services</TableCaption>
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
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default ServiceManage