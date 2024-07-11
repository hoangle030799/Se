import { Button } from "../ui/button"
import { Input } from "../ui/input"
import ProviderBtn from "./ProviderBtn";
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
import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Label, Pie, PieChart } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../ui/chart"



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
    const chartData = [
        { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
        { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
        { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
        { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
        { browser: "other", visitors: 190, fill: "var(--color-other)" },
    ]
    const chartConfig = {
        visitors: {
            label: "Visitors",
        },
        chrome: {
            label: "Chrome",
            color: "hsl(var(--chart-1))",
        },
        safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
        },
        firefox: {
            label: "Firefox",
            color: "hsl(var(--chart-3))",
        },
        edge: {
            label: "Edge",
            color: "hsl(var(--chart-4))",
        },
        other: {
            label: "Other",
            color: "hsl(var(--chart-5))",
        },
    }
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])

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
                                    <Button className="w-fit h-fit px-6 py-1">+ Create</Button>
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
                            <div className="flex justify-between mx-3 mt-3">
                                <div className="flex flex-col gap-5">
                                    <Input type="text" placeholder="UserName" />
                                    <Input type="text" placeholder="Phone" />
                                    <Input type="text" placeholder="Price" />
                                    <Button className="w-fit h-fit px-6 py-1">+ Create</Button>
                                </div>
                                <div className="chart flex gap-20">
                                    <div className="userRatioChart">
                                        <Card className="flex flex-col">
                                            <CardHeader className="items-center pb-0 pt-2">
                                                <CardTitle>Pie Chart - Donut with Text</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex-1 pb-0">
                                                <ChartContainer
                                                    config={chartConfig}
                                                    className="mx-auto aspect-square max-h-[200px]"
                                                >
                                                    <PieChart>
                                                        <ChartTooltip
                                                            cursor={false}
                                                            content={<ChartTooltipContent hideLabel />}
                                                        />
                                                        <Pie
                                                            data={chartData}
                                                            dataKey="visitors"
                                                            nameKey="browser"
                                                            innerRadius={60}
                                                            strokeWidth={5}
                                                        >
                                                            <Label
                                                                content={({ viewBox }) => {
                                                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                                        return (
                                                                            <text
                                                                                x={viewBox.cx}
                                                                                y={viewBox.cy}
                                                                                textAnchor="middle"
                                                                                dominantBaseline="middle"
                                                                            >
                                                                                <tspan
                                                                                    x={viewBox.cx}
                                                                                    y={viewBox.cy}
                                                                                    className="fill-foreground text-3xl font-bold"
                                                                                >
                                                                                    {totalVisitors.toLocaleString()}
                                                                                </tspan>
                                                                                <tspan
                                                                                    x={viewBox.cx}
                                                                                    y={(viewBox.cy || 0) + 24}
                                                                                    className="fill-muted-foreground"
                                                                                >
                                                                                    Visitors
                                                                                </tspan>
                                                                            </text>
                                                                        )
                                                                    }
                                                                }}
                                                            />
                                                        </Pie>
                                                    </PieChart>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="revenueRatioChart">
                                        <Card className="flex flex-col">
                                            <CardHeader className="items-center pb-0 pt-2">
                                                <CardTitle>Pie Chart - Donut with Text</CardTitle>
                                            </CardHeader>
                                            <CardContent className="flex-1 pb-0">
                                                <ChartContainer
                                                    config={chartConfig}
                                                    className="mx-auto aspect-square max-h-[200px]"
                                                >
                                                    <PieChart>
                                                        <ChartTooltip
                                                            cursor={false}
                                                            content={<ChartTooltipContent hideLabel />}
                                                        />
                                                        <Pie
                                                            data={chartData}
                                                            dataKey="visitors"
                                                            nameKey="browser"
                                                            innerRadius={60}
                                                            strokeWidth={5}
                                                        >
                                                            <Label
                                                                content={({ viewBox }) => {
                                                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                                                        return (
                                                                            <text
                                                                                x={viewBox.cx}
                                                                                y={viewBox.cy}
                                                                                textAnchor="middle"
                                                                                dominantBaseline="middle"
                                                                            >
                                                                                <tspan
                                                                                    x={viewBox.cx}
                                                                                    y={viewBox.cy}
                                                                                    className="fill-foreground text-3xl font-bold"
                                                                                >
                                                                                    {totalVisitors.toLocaleString()}
                                                                                </tspan>
                                                                                <tspan
                                                                                    x={viewBox.cx}
                                                                                    y={(viewBox.cy || 0) + 24}
                                                                                    className="fill-muted-foreground"
                                                                                >
                                                                                    Visitors
                                                                                </tspan>
                                                                            </text>
                                                                        )
                                                                    }
                                                                }}
                                                            />
                                                        </Pie>
                                                    </PieChart>
                                                </ChartContainer>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                            <div className="list-reservation w-6/7 ml-5 mt-5 mr-10 ">
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
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default ServiceManage