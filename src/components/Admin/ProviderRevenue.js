import SideBar from "./SideBar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { TrendingUp } from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../ui/chart"

import avt from '../../asset/image/111.jpg'

const ProviderRevenue = (props) => {
    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
        },
        mobile: {
            label: "Mobile",
            color: "hsl(var(--chart-2))",
        },
    }
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
                    <div className="RevenueChart w-6/7 ml-5 mr-10 flex gap-10 ">
                        <div className="Chart w-[50%] ml-16">
                            <Card>
                                <CardContent>
                                    <ChartContainer config={chartConfig} className="max-h-[200px]">
                                        <BarChart accessibilityLayer data={chartData}>
                                            <CartesianGrid vertical={false} />
                                            <XAxis
                                                dataKey="month"
                                                tickLine={false}
                                                tickMargin={10}
                                                axisLine={false}
                                                tickFormatter={(value) => value.slice(0, 3)}
                                            />
                                            <ChartTooltip
                                                cursor={false}
                                                content={<ChartTooltipContent indicator="dashed" />}
                                            />
                                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                                        </BarChart>
                                    </ChartContainer>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="Revenue">
                            <span className="text-3xl font-normal">Total Revenue: </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProviderRevenue