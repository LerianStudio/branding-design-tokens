"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Bell,
  Search,
  Plus,
  LineChart,
  PieChart,
  Home
} from "lucide-react"
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

// Lerian color palette using CSS custom properties
const lerianColors = {
  yellow: 'hsl(var(--lerian-yellow))',
  green: 'hsl(var(--lerian-green))',
  red: 'hsl(var(--lerian-red))',
  blue: 'hsl(var(--lerian-blue))',
  black: 'hsl(var(--lerian-black))',
  grayDark: 'hsl(var(--lerian-gray-dark))',
  grayMedium: 'hsl(var(--lerian-gray-medium))',
  gray: 'hsl(var(--lerian-gray))',
  grayLight: 'hsl(var(--lerian-gray-light))',
}

// Get computed font family from CSS variable
const getBodyFontFamily = () => {
  if (typeof window !== 'undefined') {
    const computedStyle = getComputedStyle(document.documentElement)
    const fontFamily = computedStyle.getPropertyValue('--font-body')
    return fontFamily || 'Inter, sans-serif'
  }
  return 'Inter, sans-serif'
}

// Chart options with Lerian styling
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          family: getBodyFontFamily(),
          size: 11,
        },
        color: lerianColors.black,
      },
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: lerianColors.grayLight,
      },
      ticks: {
        font: {
          family: getBodyFontFamily(),
          size: 10,
        },
        color: lerianColors.grayDark,
      },
    },
    y: {
      grid: {
        color: lerianColors.grayLight,
      },
      ticks: {
        font: {
          family: getBodyFontFamily(),
          size: 10,
        },
        color: lerianColors.grayDark,
      },
    },
  },
}

// Chart type options
type ChartType = 'line' | 'bar' | 'pie' | 'doughnut'

// Chart data configurations
const chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const revenueValues = [45000, 52000, 48000, 61000, 55000, 67000, 73000, 69000, 82000, 78000, 85000, 92000]

// Line Chart Data
const lineChartData = {
  labels: chartLabels,
  datasets: [
    {
      label: 'Revenue',
      data: revenueValues,
      borderColor: lerianColors.yellow,
      backgroundColor: lerianColors.yellow + '20',
      borderWidth: 3,
      fill: true,
    },
  ],
}

// Bar Chart Data
const barChartData = {
  labels: chartLabels,
  datasets: [
    {
      label: 'Revenue',
      data: revenueValues,
      backgroundColor: [
        lerianColors.yellow + '80',
        lerianColors.blue + '80',
        lerianColors.green + '80',
        lerianColors.red + '80',
        lerianColors.yellow + '80',
        lerianColors.blue + '80',
        lerianColors.green + '80',
        lerianColors.red + '80',
        lerianColors.yellow + '80',
        lerianColors.blue + '80',
        lerianColors.green + '80',
        lerianColors.red + '80',
      ],
      borderColor: [
        lerianColors.yellow,
        lerianColors.blue,
        lerianColors.green,
        lerianColors.red,
        lerianColors.yellow,
        lerianColors.blue,
        lerianColors.green,
        lerianColors.red,
        lerianColors.yellow,
        lerianColors.blue,
        lerianColors.green,
        lerianColors.red,
      ],
      borderWidth: 2,
    },
  ],
}

// Pie Chart Data (quarterly summary)
const pieChartData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Quarterly Revenue',
      data: [145000, 183000, 224000, 255000],
      backgroundColor: [
        lerianColors.yellow,
        lerianColors.blue,
        lerianColors.green,
        lerianColors.red,
      ],
      borderColor: lerianColors.black,
      borderWidth: 2,
    },
  ],
}

// Doughnut Chart Data (same as pie but different style)
const doughnutChartData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Quarterly Revenue',
      data: [145000, 183000, 224000, 255000],
      backgroundColor: [
        lerianColors.yellow,
        lerianColors.blue,
        lerianColors.green,
        lerianColors.red,
      ],
      borderColor: lerianColors.black,
      borderWidth: 2,
      cutout: '60%',
    },
  ],
}

const stats = [
  {
    title: "Total Revenue",
    value: "$54,231",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-lerian-green"
  },
  {
    title: "Active Users",
    value: "2,543",
    change: "+8.1%", 
    trend: "up",
    icon: Users,
    color: "text-lerian-blue"
  },
  {
    title: "Transactions",
    value: "12,234",
    change: "-2.4%",
    trend: "down", 
    icon: Activity,
    color: "text-lerian-red"
  },
  {
    title: "Growth Rate",
    value: "23.1%",
    change: "+4.3%",
    trend: "up",
    icon: TrendingUp,
    color: "text-lerian-yellow"
  }
]

const recentTransactions = [
  {
    id: "1",
    user: "John Doe",
    email: "john@example.com",
    amount: "$1,234.56",
    status: "completed",
    time: "2 min ago"
  },
  {
    id: "2", 
    user: "Sarah Wilson",
    email: "sarah@example.com",
    amount: "$856.23",
    status: "pending",
    time: "5 min ago"
  },
  {
    id: "3",
    user: "Mike Johnson", 
    email: "mike@example.com",
    amount: "$2,105.78",
    status: "completed",
    time: "12 min ago"
  },
  {
    id: "4",
    user: "Emily Brown",
    email: "emily@example.com", 
    amount: "$634.90",
    status: "failed",
    time: "25 min ago"
  }
]

export default function DashboardPage() {
  const [chartType, setChartType] = useState<ChartType>('line')

  // Chart type configurations
  const chartTypes = [
    { 
      key: 'line' as ChartType, 
      label: 'Line Chart', 
      icon: LineChart,
      description: 'Monthly trend'
    },
    { 
      key: 'bar' as ChartType, 
      label: 'Bar Chart', 
      icon: BarChart3,
      description: 'Monthly comparison'
    },
    { 
      key: 'pie' as ChartType, 
      label: 'Pie Chart', 
      icon: PieChart,
      description: 'Quarterly breakdown'
    },
    { 
      key: 'doughnut' as ChartType, 
      label: 'Doughnut Chart', 
      icon: PieChart,
      description: 'Quarterly distribution'
    },
  ]

  // Get current chart data and options
  const getCurrentChartData = () => {
    switch (chartType) {
      case 'line':
        return lineChartData
      case 'bar':
        return barChartData
      case 'pie':
        return pieChartData
      case 'doughnut':
        return doughnutChartData
      default:
        return lineChartData
    }
  }

  const getCurrentChartOptions = () => {
    if (chartType === 'pie' || chartType === 'doughnut') {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom' as const,
            labels: {
              font: {
                family: 'IBM Plex Serif',
                size: 11,
              },
              color: lerianColors.black,
              padding: 20,
            },
          },
          title: {
            display: false,
          },
        },
      }
    }
    return chartOptions
  }

  // Render the appropriate chart component
  const renderChart = () => {
    const data = getCurrentChartData()
    const options = getCurrentChartOptions()

    switch (chartType) {
      case 'line':
        return <Line data={data} options={options} />
      case 'bar':
        return <Bar data={data} options={options} />
      case 'pie':
        return <Pie data={data} options={options} />
      case 'doughnut':
        return <Doughnut data={data} options={options} />
      default:
        return <Line data={data} options={options} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-1">
                  <Home className="h-3 w-3" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blocks">Blocks</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <Heading level={1} className="mb-2">
              Dashboard
            </Heading>
            <Text variant="lead" className="text-muted-foreground">
              Welcome back! Here&apos;s what&apos;s happening with your financial platform.
            </Text>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => alert('Search functionality would be implemented here in a real application.')}>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm" onClick={() => alert('Notifications functionality would be implemented here in a real application.')}>
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button size="sm" onClick={() => alert('New transaction functionality would be implemented here in a real application.')}>
              <Plus className="h-4 w-4 mr-2" />
              New Transaction
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight
            
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-body font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-heading font-semibold">
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendIcon className={`h-3 w-3 ${stat.trend === "up" ? "text-lerian-green" : "text-lerian-red"}`} />
                    <span className={stat.trend === "up" ? "text-lerian-green" : "text-lerian-red"}>
                      {stat.change}
                    </span>
                    <span>from last month</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          {/* Chart Card */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle className="font-heading">Revenue Overview</CardTitle>
                  <CardDescription className="font-body">
                    {chartType === 'pie' || chartType === 'doughnut' 
                      ? 'Quarterly revenue breakdown' 
                      : 'Monthly revenue trend for the past 12 months'}
                  </CardDescription>
                </div>
              </div>
              
              {/* Chart Type Selection Buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                {chartTypes.map((type) => {
                  const Icon = type.icon
                  const isActive = chartType === type.key
                  
                  return (
                    <Button
                      key={type.key}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      onClick={() => setChartType(type.key)}
                      className={`flex items-center gap-2 ${
                        isActive 
                          ? "bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90" 
                          : "hover:bg-lerian-yellow/10"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{type.label}</span>
                      <span className="sm:hidden">{type.key.charAt(0).toUpperCase() + type.key.slice(1)}</span>
                    </Button>
                  )
                })}
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                {renderChart()}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-heading">Recent Transactions</CardTitle>
                  <CardDescription className="font-body">
                    Latest payment activities
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="text-xs">
                      {transaction.user.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <Text variant="small" className="font-medium leading-none">
                        {transaction.user}
                      </Text>
                      <Text variant="small" className="font-medium">
                        {transaction.amount}
                      </Text>
                    </div>
                    <div className="flex items-center justify-between">
                      <Text variant="caption" className="text-muted-foreground">
                        {transaction.email}
                      </Text>
                      <Badge 
                        variant={
                          transaction.status === "completed" ? "default" :
                          transaction.status === "pending" ? "secondary" : 
                          "destructive"
                        }
                        className={
                          transaction.status === "completed" ? "bg-lerian-green text-lerian-black" : ""
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full mt-4" onClick={() => alert('View all transactions functionality would be implemented here in a real application.')}>
                View All Transactions
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Heading level={3} className="mb-4">
            Quick Actions
          </Heading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-6 flex flex-col items-center gap-2 hover:bg-lerian-yellow hover:text-lerian-black transition-colors" onClick={() => alert('Process payment functionality would be implemented here in a real application.')}>
              <DollarSign className="h-8 w-8 text-primary" />
              <span className="font-heading font-semibold">Process Payment</span>
              <span className="text-xs text-muted-foreground text-center">
                Create a new payment transaction
              </span>
            </Button>
            
            <Button variant="outline" className="h-auto p-6 flex flex-col items-center gap-2 hover:bg-lerian-blue hover:text-white transition-colors" onClick={() => alert('Add user functionality would be implemented here in a real application.')}>
              <Users className="h-8 w-8 text-primary" />
              <span className="font-heading font-semibold">Add User</span>
              <span className="text-xs text-muted-foreground text-center">
                Invite new team member
              </span>
            </Button>
            
            <Button variant="outline" className="h-auto p-6 flex flex-col items-center gap-2 hover:bg-lerian-green hover:text-white transition-colors" onClick={() => alert('View reports functionality would be implemented here in a real application.')}>
              <BarChart3 className="h-8 w-8 text-primary" />
              <span className="font-heading font-semibold">View Reports</span>
              <span className="text-xs text-muted-foreground text-center">
                Access detailed analytics
              </span>
            </Button>
            
            <Button variant="outline" className="h-auto p-6 flex flex-col items-center gap-2 hover:bg-gray-100 hover:text-gray-900 transition-colors" onClick={() => alert('System status functionality would be implemented here in a real application.')}>
              <Activity className="h-8 w-8 text-primary" />
              <span className="font-heading font-semibold">System Status</span>
              <span className="text-xs text-muted-foreground text-center">
                Monitor platform health
              </span>
            </Button>
          </div>
        </div>

        {/* Additional Dashboard Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Portfolio Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Portfolio Performance
              </CardTitle>
              <CardDescription>
                Asset allocation and performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Stocks</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-lerian-yellow h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Bonds</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-lerian-blue h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Crypto</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-lerian-green h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Cash</span>
                    <span className="font-medium">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Value</span>
                    <span className="text-lg font-bold text-lerian-green">$2,458,750</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>Monthly Change</span>
                    <span className="text-lerian-green flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +8.2%
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Recent Alerts
              </CardTitle>
              <CardDescription>
                Important notifications and system alerts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">High Risk Transaction Detected</p>
                    <p className="text-xs text-muted-foreground">Transaction #TXN-2024-0156 requires manual review</p>
                    <p className="text-xs text-muted-foreground">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Account Verification Pending</p>
                    <p className="text-xs text-muted-foreground">User john.doe@example.com requires KYC verification</p>
                    <p className="text-xs text-muted-foreground">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">System Backup Completed</p>
                    <p className="text-xs text-muted-foreground">Daily backup process completed successfully</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New Integration Available</p>
                    <p className="text-xs text-muted-foreground">Stripe Connect integration is now available</p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View All Alerts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status Overview */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Activity className="h-5 w-5" />
                System Status Overview
              </CardTitle>
              <CardDescription>
                Real-time status of all Midaz services and components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">API Gateway</p>
                    <p className="text-xs text-muted-foreground">Operational</p>
                    <p className="text-xs text-green-600">99.9% uptime</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">Transaction Engine</p>
                    <p className="text-xs text-muted-foreground">Operational</p>
                    <p className="text-xs text-green-600">99.8% uptime</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">Reporting Service</p>
                    <p className="text-xs text-muted-foreground">Degraded</p>
                    <p className="text-xs text-yellow-600">97.2% uptime</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">Authentication</p>
                    <p className="text-xs text-muted-foreground">Operational</p>
                    <p className="text-xs text-green-600">100% uptime</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Overall System Health</span>
                  <Badge className="bg-lerian-green text-white">Healthy</Badge>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  All critical services are operational. Minor degradation in reporting service under investigation.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}