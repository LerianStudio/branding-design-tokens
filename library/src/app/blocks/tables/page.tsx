"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heading, Text } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { 
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  DollarSign,
  Users,
  CreditCard,
  Building
} from "lucide-react"

// Sample transaction data
const transactions = [
  {
    id: "TXN-001",
    date: "2024-12-06",
    time: "14:32",
    fromAccount: "ACC-123456",
    toAccount: "ACC-789012",
    amount: 1250.00,
    currency: "USD",
    type: "transfer",
    status: "completed",
    description: "Salary payment",
    fee: 2.50,
    reference: "SAL-2024-001"
  },
  {
    id: "TXN-002", 
    date: "2024-12-06",
    time: "13:15",
    fromAccount: "ACC-456789",
    toAccount: "ACC-123456",
    amount: 850.75,
    currency: "USD",
    type: "payment",
    status: "pending",
    description: "Invoice payment",
    fee: 1.25,
    reference: "INV-2024-045"
  },
  {
    id: "TXN-003",
    date: "2024-12-06", 
    time: "11:48",
    fromAccount: "ACC-789012",
    toAccount: "ACC-345678",
    amount: 2100.50,
    currency: "USD",
    type: "wire",
    status: "failed",
    description: "Wire transfer",
    fee: 15.00,
    reference: "WIRE-2024-012"
  },
  {
    id: "TXN-004",
    date: "2024-12-05",
    time: "16:22",
    fromAccount: "ACC-234567",
    toAccount: "ACC-567890",
    amount: 3200.00,
    currency: "USD", 
    type: "transfer",
    status: "completed",
    description: "Business transfer",
    fee: 5.00,
    reference: "BUS-2024-078"
  },
  {
    id: "TXN-005",
    date: "2024-12-05",
    time: "09:30",
    fromAccount: "ACC-345678",
    toAccount: "ACC-123456",
    amount: 750.25,
    currency: "EUR",
    type: "payment",
    status: "completed",
    description: "Service payment",
    fee: 1.50,
    reference: "SVC-2024-156"
  }
]

// Sample account data
const accounts = [
  {
    id: "ACC-123456",
    name: "John Doe",
    type: "checking",
    balance: 15750.25,
    currency: "USD",
    status: "active",
    opened: "2023-01-15",
    lastActivity: "2024-12-06",
    branch: "Downtown Branch",
    email: "john.doe@example.com"
  },
  {
    id: "ACC-789012",
    name: "Sarah Wilson",
    type: "savings", 
    balance: 28450.80,
    currency: "USD",
    status: "active",
    opened: "2022-08-22",
    lastActivity: "2024-12-05",
    branch: "Uptown Branch",
    email: "sarah.wilson@example.com"
  },
  {
    id: "ACC-456789",
    name: "TechCorp Ltd",
    type: "business",
    balance: 125000.00,
    currency: "USD", 
    status: "active",
    opened: "2021-03-10",
    lastActivity: "2024-12-06",
    branch: "Business Center",
    email: "finance@techcorp.com"
  },
  {
    id: "ACC-345678",
    name: "Mike Johnson",
    type: "checking",
    balance: 5230.15,
    currency: "EUR",
    status: "frozen",
    opened: "2023-11-03",
    lastActivity: "2024-11-28",
    branch: "International Branch",
    email: "mike.johnson@example.com"
  }
]

export default function TablesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-lerian-green text-lerian-black"><CheckCircle className="h-3 w-3 mr-1" />Completed</Badge>
      case "pending":
        return <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" />Pending</Badge>
      case "failed":
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Failed</Badge>
      case "active":
        return <Badge className="bg-lerian-green text-lerian-black">Active</Badge>
      case "frozen":
        return <Badge variant="destructive">Frozen</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "transfer":
      case "checking":
        return <DollarSign className="h-4 w-4 text-lerian-blue" />
      case "payment":
        return <CreditCard className="h-4 w-4 text-lerian-yellow" />
      case "wire":
        return <Building className="h-4 w-4 text-lerian-red" />
      case "savings":
        return <Building className="h-4 w-4 text-lerian-green" />
      case "business":
        return <Users className="h-4 w-4 text-lerian-black" />
      default:
        return <DollarSign className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-16">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-lerian-yellow text-lerian-black font-medium">
            Data Tables
          </Badge>
          <Heading level={1} className="mb-4">
            Banking Data Tables
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Comprehensive data table components for financial applications with sorting,
            filtering, and advanced functionality.
          </Text>
        </div>

        <div className="space-y-8">
          {/* Transactions Table */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle className="font-heading">Transaction History</CardTitle>
                  <CardDescription className="font-body">
                    Recent financial transactions with detailed information and status tracking
                  </CardDescription>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search transactions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 w-64"
                    />
                  </div>
                  
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" size="sm" onClick={() => alert('Filter functionality would be implemented here in a real application.')}>
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  
                  <Button variant="outline" size="sm" onClick={() => alert('Export functionality would be implemented here in a real application.')}>
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">
                        <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => alert('Sort by Transaction ID functionality would be implemented here in a real application.')}>
                          Transaction ID
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </th>
                      <th className="text-left p-4 font-medium">
                        <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => alert('Sort by Date & Time functionality would be implemented here in a real application.')}>
                          Date & Time
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </th>
                      <th className="text-left p-4 font-medium">Type</th>
                      <th className="text-left p-4 font-medium">
                        <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => alert('Sort by Amount functionality would be implemented here in a real application.')}>
                          Amount
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </th>
                      <th className="text-left p-4 font-medium">From/To</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Description</th>
                      <th className="w-8"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b hover:bg-muted/20">
                        <td className="p-4">
                          <Text variant="small" className="font-mono font-medium">
                            {transaction.id}
                          </Text>
                        </td>
                        <td className="p-4">
                          <div>
                            <Text variant="small" className="font-medium">
                              {transaction.date}
                            </Text>
                            <Text variant="caption" className="text-muted-foreground">
                              {transaction.time}
                            </Text>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            {getTypeIcon(transaction.type)}
                            <Text variant="small" className="capitalize">
                              {transaction.type}
                            </Text>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <Text variant="small" className="font-medium">
                              {transaction.currency} {transaction.amount.toLocaleString()}
                            </Text>
                            <Text variant="caption" className="text-muted-foreground">
                              Fee: {transaction.currency} {transaction.fee}
                            </Text>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="text-xs space-y-1">
                            <div>From: {transaction.fromAccount}</div>
                            <div>To: {transaction.toAccount}</div>
                          </div>
                        </td>
                        <td className="p-4">
                          {getStatusBadge(transaction.status)}
                        </td>
                        <td className="p-4">
                          <div>
                            <Text variant="small">{transaction.description}</Text>
                            <Text variant="caption" className="text-muted-foreground">
                              Ref: {transaction.reference}
                            </Text>
                          </div>
                        </td>
                        <td className="p-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem onClick={() => alert('View transaction details functionality would be implemented here in a real application.')}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => alert('Edit transaction functionality would be implemented here in a real application.')}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600" onClick={() => alert('Delete transaction functionality would be implemented here in a real application.')}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <Text variant="small" className="text-muted-foreground">
                  Showing 5 of 1,234 transactions
                </Text>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" onClick={(e) => {
                        e.preventDefault()
                        alert('Previous page functionality would be implemented here in a real application.')
                      }} />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive onClick={(e) => {
                        e.preventDefault()
                        alert('Page 1 selected')
                      }}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" onClick={(e) => {
                        e.preventDefault()
                        alert('Page 2 selected')
                      }}>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" onClick={(e) => {
                        e.preventDefault()
                        alert('Page 3 selected')
                      }}>3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" onClick={(e) => {
                        e.preventDefault()
                        alert('Next page functionality would be implemented here in a real application.')
                      }} />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>

          {/* Accounts Table */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Account Management</CardTitle>
              <CardDescription className="font-body">
                Customer accounts with balance information and status management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Account</th>
                      <th className="text-left p-4 font-medium">
                        <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => alert('Sort by Balance functionality would be implemented here in a real application.')}>
                          Balance
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </th>
                      <th className="text-left p-4 font-medium">Type</th>
                      <th className="text-left p-4 font-medium">Status</th>
                      <th className="text-left p-4 font-medium">Last Activity</th>
                      <th className="text-left p-4 font-medium">Branch</th>
                      <th className="w-8"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {accounts.map((account) => (
                      <tr key={account.id} className="border-b hover:bg-muted/20">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {account.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <Text variant="small" className="font-medium">
                                {account.name}
                              </Text>
                              <Text variant="caption" className="text-muted-foreground font-mono">
                                {account.id}
                              </Text>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Text variant="small" className="font-medium text-lg">
                            {account.currency} {account.balance.toLocaleString()}
                          </Text>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            {getTypeIcon(account.type)}
                            <Text variant="small" className="capitalize">
                              {account.type}
                            </Text>
                          </div>
                        </td>
                        <td className="p-4">
                          {getStatusBadge(account.status)}
                        </td>
                        <td className="p-4">
                          <Text variant="small">{account.lastActivity}</Text>
                        </td>
                        <td className="p-4">
                          <Text variant="small">{account.branch}</Text>
                        </td>
                        <td className="p-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem onClick={() => alert('View account functionality would be implemented here in a real application.')}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Account
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => alert('Edit account functionality would be implemented here in a real application.')}>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Account
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => alert('Freeze account functionality would be implemented here in a real application.')}>
                                Freeze Account
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600" onClick={() => alert('Close account functionality would be implemented here in a real application.')}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Close Account
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}