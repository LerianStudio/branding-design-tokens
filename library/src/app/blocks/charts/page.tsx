"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Heading, Text } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { TrendingUp, TrendingDown, BarChart3, PieChart, LineChart } from "lucide-react"
import { Area, AreaChart, Bar, BarChart, Pie, PieChart as RechartsPieChart, XAxis, YAxis } from "recharts"

// Sample financial data
const monthlyRevenueData = [
  { month: "Jan", revenue: 45000, expenses: 25000 },
  { month: "Feb", revenue: 52000, expenses: 28000 },
  { month: "Mar", revenue: 48000, expenses: 26000 },
  { month: "Apr", revenue: 61000, expenses: 32000 },
  { month: "May", revenue: 55000, expenses: 30000 },
  { month: "Jun", revenue: 67000, expenses: 35000 },
]

const quarterlyData = [
  { quarter: "Q1 2024", value: 145000, fill: "var(--color-q1)" },
  { quarter: "Q2 2024", value: 183000, fill: "var(--color-q2)" },
  { quarter: "Q3 2024", value: 224000, fill: "var(--color-q3)" },
  { quarter: "Q4 2024", value: 255000, fill: "var(--color-q4)" },
]

const transactionTypeData = [
  { type: "transfers", count: 1240, fill: "var(--color-transfers)" },
  { type: "payments", count: 890, fill: "var(--color-payments)" },
  { type: "withdrawals", count: 650, fill: "var(--color-withdrawals)" },
  { type: "deposits", count: 1560, fill: "var(--color-deposits)" },
]

const dailyTransactionsData = [
  { day: "Mon", transactions: 186 },
  { day: "Tue", transactions: 305 },
  { day: "Wed", transactions: 237 },
  { day: "Thu", transactions: 423 },
  { day: "Fri", transactions: 562 },
  { day: "Sat", transactions: 345 },
  { day: "Sun", transactions: 189 },
]

// Chart configurations using Lerian colors
const revenueChartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--lerian-yellow))",
  },
  expenses: {
    label: "Expenses", 
    color: "hsl(var(--lerian-red))",
  },
} satisfies ChartConfig

const quarterlyChartConfig = {
  value: {
    label: "Revenue",
  },
  q1: {
    label: "Q1 2024",
    color: "hsl(var(--lerian-yellow))",
  },
  q2: {
    label: "Q2 2024", 
    color: "hsl(var(--lerian-blue))",
  },
  q3: {
    label: "Q3 2024",
    color: "hsl(var(--lerian-green))",
  },
  q4: {
    label: "Q4 2024",
    color: "hsl(var(--lerian-red))",
  },
} satisfies ChartConfig

const transactionChartConfig = {
  transfers: {
    label: "Transfers",
    color: "hsl(var(--lerian-yellow))",
  },
  payments: {
    label: "Payments",
    color: "hsl(var(--lerian-blue))",
  },
  withdrawals: {
    label: "Withdrawals", 
    color: "hsl(var(--lerian-red))",
  },
  deposits: {
    label: "Deposits",
    color: "hsl(var(--lerian-green))",
  },
} satisfies ChartConfig

const dailyChartConfig = {
  transactions: {
    label: "Transactions",
    color: "hsl(var(--lerian-blue))",
  },
} satisfies ChartConfig

export default function ChartsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blocks">Blocks</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Charts</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mb-12">
          <Badge className="mb-6 bg-lerian-yellow text-lerian-black font-medium">
            Data Visualization
          </Badge>
          <Heading level={1} className="mb-4">
            Chart Components
          </Heading>
          <Text variant="lead" className="max-w-2xl">
            Beautiful, responsive charts built with Recharts and customized with Lerian branding.
            Perfect for financial dashboards and data visualization in Midaz plugins.
          </Text>
        </div>

        <div className="space-y-8">
          {/* Area Chart */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-heading flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    Revenue vs Expenses
                  </CardTitle>
                  <CardDescription className="font-body">
                    Monthly revenue and expense comparison using area chart
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-lerian-green" />
                  <span className="text-lerian-green">+12.5% from last month</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer config={revenueChartConfig} className="h-[500px] w-full">
                <AreaChart data={monthlyRevenueData}>
                  <XAxis 
                    dataKey="month" 
                    tickLine={false}
                    axisLine={false}
                    className="font-body"
                  />
                  <YAxis 
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                    className="font-body"
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    formatter={(value) => [`$${value.toLocaleString()}`, '']}
                  />
                  <Area
                    dataKey="expenses"
                    type="natural"
                    fill="var(--color-expenses)"
                    fillOpacity={0.4}
                    stroke="var(--color-expenses)"
                    strokeWidth={2}
                  />
                  <Area
                    dataKey="revenue"
                    type="natural"
                    fill="var(--color-revenue)"
                    fillOpacity={0.4}
                    stroke="var(--color-revenue)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Daily Transaction Volume
              </CardTitle>
              <CardDescription className="font-body">
                Transaction count by day of the week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={dailyChartConfig} className="h-[400px] w-full">
                <BarChart data={dailyTransactionsData}>
                  <XAxis 
                    dataKey="day" 
                    tickLine={false}
                    axisLine={false}
                    className="font-body"
                  />
                  <YAxis 
                    tickLine={false}
                    axisLine={false}
                    className="font-body"
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="transactions"
                    fill="var(--color-transactions)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Quarterly Revenue
                </CardTitle>
                <CardDescription className="font-body">
                  Revenue distribution across quarters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={quarterlyChartConfig} className="h-[400px] w-full">
                  <RechartsPieChart>
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      formatter={(value) => [`$${value.toLocaleString()}`, '']}
                    />
                    <Pie
                      data={quarterlyData}
                      dataKey="value"
                      nameKey="quarter"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="var(--color-value)"
                    />
                  </RechartsPieChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Donut Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Transaction Types
                </CardTitle>
                <CardDescription className="font-body">
                  Breakdown of transaction types this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={transactionChartConfig} className="h-[400px] w-full">
                  <RechartsPieChart>
                    <ChartTooltip 
                      content={<ChartTooltipContent />}
                      formatter={(value, name) => [value, transactionChartConfig[name as keyof typeof transactionChartConfig]?.label || name]}
                    />
                    <Pie
                      data={transactionTypeData}
                      dataKey="count"
                      nameKey="type"
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      fill="var(--color-type)"
                    />
                  </RechartsPieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Chart Usage Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Chart Implementation Guidelines</CardTitle>
              <CardDescription className="font-body">
                Best practices for using charts in Midaz plugin development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Heading level={4} className="text-lerian-green flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Best Practices
                  </Heading>
                  <ul className="space-y-2 text-sm font-body">
                    <li>• Use consistent Lerian color palette across all charts</li>
                    <li>• Include proper tooltips for data clarity</li>
                    <li>• Format currency values with appropriate locale</li>
                    <li>• Provide alternative text for accessibility</li>
                    <li>• Use responsive containers for mobile compatibility</li>
                    <li>• Include loading states for async data</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <Heading level={4} className="text-lerian-red flex items-center gap-2">
                    <TrendingDown className="h-4 w-4" />
                    Common Pitfalls
                  </Heading>
                  <ul className="space-y-2 text-sm font-body">
                    <li>• Don't use too many colors in a single chart</li>
                    <li>• Avoid cluttered axes with too many tick marks</li>
                    <li>• Don't forget error handling for missing data</li>
                    <li>• Avoid charts that are too complex for mobile</li>
                    <li>• Don't use misleading scales or axis ranges</li>
                    <li>• Avoid animations that are too distracting</li>
                  </ul>
                </div>
              </div>

              <div className="border-t pt-6">
                <Heading level={4} className="mb-4">Integration with Midaz</Heading>
                <Text variant="small" className="text-muted-foreground mb-4">
                  All chart components are designed to work seamlessly with Midaz financial data APIs:
                </Text>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <pre className="text-xs overflow-x-auto font-mono">
{`// Example: Connecting to Midaz transaction data
const chartData = await midaz.transactions.getAggregated({
  groupBy: 'day',
  dateRange: { start: '2024-01-01', end: '2024-12-31' },
  metrics: ['count', 'volume']
})

<ChartContainer config={chartConfig}>
  <BarChart data={chartData}>
    <Bar dataKey="count" fill="var(--color-transactions)" />
  </BarChart>
</ChartContainer>`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}