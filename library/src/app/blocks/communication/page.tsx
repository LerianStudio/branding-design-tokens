"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heading, Text } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { Progress } from "@/components/ui/progress"
import { 
  Bell,
  MessageSquare,
  Send,
  Phone,
  Video,
  MoreHorizontal,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
  Settings,
  Paperclip,
  Smile,
  PhoneCall,
  MessageCircle,
  Mail,
  Headphones
} from "lucide-react"

const notifications = [
  {
    id: "1",
    type: "transaction",
    title: "Payment Received",
    message: "You received $1,250.00 from John Doe",
    time: "2 minutes ago",
    unread: true,
    priority: "normal",
    icon: CheckCircle,
    color: "text-lerian-green"
  },
  {
    id: "2", 
    type: "alert",
    title: "Security Alert",
    message: "New login detected from unknown device",
    time: "15 minutes ago",
    unread: true,
    priority: "high",
    icon: AlertTriangle,
    color: "text-lerian-red"
  },
  {
    id: "3",
    type: "info",
    title: "System Maintenance",
    message: "Scheduled maintenance tonight from 2-4 AM EST",
    time: "1 hour ago",
    unread: false,
    priority: "low",
    icon: Info,
    color: "text-lerian-blue"
  },
  {
    id: "4",
    type: "transaction",
    title: "Wire Transfer Completed",
    message: "Wire transfer of $5,000.00 has been processed",
    time: "3 hours ago", 
    unread: false,
    priority: "normal",
    icon: CheckCircle,
    color: "text-lerian-green"
  }
]

const chatMessages = [
  {
    id: "1",
    sender: "Support Agent",
    avatar: "/sindarian-waving.png",
    message: "Hello! I'm here to help you with your banking needs. How can I assist you today?",
    time: "10:32 AM",
    isBot: true
  },
  {
    id: "2",
    sender: "You",
    avatar: null,
    message: "Hi, I'm having trouble with a recent transaction. It shows as pending but should have completed.",
    time: "10:33 AM",
    isBot: false
  },
  {
    id: "3",
    sender: "Support Agent", 
    avatar: "/sindarian-thinking.png",
    message: "I'd be happy to help you check on that transaction. Can you please provide the transaction ID?",
    time: "10:34 AM",
    isBot: true
  },
  {
    id: "4",
    sender: "You",
    avatar: null,
    message: "Sure, it's TXN-123456789",
    time: "10:35 AM",
    isBot: false
  },
  {
    id: "5",
    sender: "Support Agent",
    avatar: "/sindarian-working.png", 
    message: "Let me look that up for you. I can see the transaction is currently being processed by our banking partner. It should complete within the next 2 hours.",
    time: "10:36 AM",
    isBot: true
  }
]

const alertTypes = [
  {
    type: "success",
    title: "Transaction Successful",
    message: "Your payment of $1,250.00 has been processed successfully.",
    icon: CheckCircle,
    color: "bg-lerian-green/10 border-lerian-green text-lerian-green"
  },
  {
    type: "warning", 
    title: "Account Verification Required",
    message: "Please verify your account to continue using all features.",
    icon: AlertTriangle,
    color: "bg-lerian-yellow/10 border-lerian-yellow text-lerian-yellow"
  },
  {
    type: "error",
    title: "Payment Failed",
    message: "Your payment could not be processed. Please try again.",
    icon: X,
    color: "bg-lerian-red/10 border-lerian-red text-lerian-red"
  },
  {
    type: "info",
    title: "New Feature Available",
    message: "Check out our new analytics dashboard for better insights.",
    icon: Info,
    color: "bg-lerian-blue/10 border-lerian-blue text-lerian-blue"
  }
]

const supportChannels = [
  {
    name: "Live Chat",
    description: "Get instant help from our support team",
    icon: MessageCircle,
    status: "Online",
    responseTime: "< 2 minutes",
    available: true
  },
  {
    name: "Phone Support",
    description: "Speak directly with a banking specialist", 
    icon: PhoneCall,
    status: "Available",
    responseTime: "< 5 minutes",
    available: true
  },
  {
    name: "Email Support",
    description: "Send us a detailed message about your issue",
    icon: Mail,
    status: "Available",
    responseTime: "< 4 hours",
    available: true
  },
  {
    name: "Video Call",
    description: "Schedule a face-to-face consultation",
    icon: Video,
    status: "By Appointment", 
    responseTime: "Next available",
    available: false
  }
]

export default function CommunicationPage() {
  const [message, setMessage] = useState("")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-16">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-lerian-yellow text-lerian-black font-medium">
            Communication
          </Badge>
          <Heading level={1} className="mb-4">
            Communication Components
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Chat interfaces, notifications, alerts, and support components for 
            seamless customer communication.
          </Text>
        </div>

        <div className="space-y-8">
          {/* Notifications Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Bell className="h-5 w-5 text-lerian-yellow" />
                Notification Center
              </CardTitle>
              <CardDescription className="font-body">
                Real-time notifications for banking activities and system alerts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Text variant="small" className="font-medium">Recent Notifications</Text>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      Mark All Read
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {notifications.map((notification) => {
                    const Icon = notification.icon
                    return (
                      <div
                        key={notification.id}
                        className={`p-4 rounded-lg border-l-4 ${
                          notification.unread ? 'bg-muted/20 border-l-lerian-yellow' : 'bg-muted/10 border-l-gray-200'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Icon className={`h-5 w-5 mt-0.5 ${notification.color}`} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <Text variant="small" className="font-medium">
                                {notification.title}
                              </Text>
                              <div className="flex items-center gap-2">
                                {notification.unread && (
                                  <div className="w-2 h-2 bg-lerian-yellow rounded-full" />
                                )}
                                <Text variant="caption" className="text-muted-foreground">
                                  {notification.time}
                                </Text>
                              </div>
                            </div>
                            <Text variant="small" className="text-muted-foreground">
                              {notification.message}
                            </Text>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chat Interface */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-lerian-blue" />
                Customer Support Chat
              </CardTitle>
              <CardDescription className="font-body">
                Live chat interface for customer support interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg h-96 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b bg-muted/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/sindarian-happy.png" alt="Support Agent" />
                      <AvatarFallback className="bg-lerian-yellow text-lerian-black">SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <Text variant="small" className="font-medium">Lerian Support</Text>
                      <Text variant="caption" className="text-lerian-green">Online</Text>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 ${
                        msg.isBot ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      {msg.isBot && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={msg.avatar || ""} alt={msg.sender} />
                          <AvatarFallback className="bg-lerian-yellow text-lerian-black">
                            SA
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                          msg.isBot
                            ? 'bg-muted text-foreground'
                            : 'bg-lerian-yellow text-lerian-black'
                        }`}
                      >
                        <Text variant="small">{msg.message}</Text>
                        <Text variant="caption" className="block mt-1 opacity-70">
                          {msg.time}
                        </Text>
                      </div>
                      {!msg.isBot && (
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-lerian-blue text-white">
                            You
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="pr-20"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Smile className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Button size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Alert Components */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Alert Components</CardTitle>
              <CardDescription className="font-body">
                Different alert styles for various message types and priorities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alertTypes.map((alert) => {
                  const Icon = alert.icon
                  return (
                    <div
                      key={alert.type}
                      className={`p-4 rounded-lg border-l-4 ${alert.color}`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="h-5 w-5 mt-0.5" />
                        <div className="flex-1">
                          <Text variant="small" className="font-medium mb-1">
                            {alert.title}
                          </Text>
                          <Text variant="small" className="opacity-90">
                            {alert.message}
                          </Text>
                        </div>
                        <Button variant="ghost" size="sm" className="h-auto p-1">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Support Channels */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading flex items-center gap-2">
                <Headphones className="h-5 w-5 text-lerian-green" />
                Support Channels
              </CardTitle>
              <CardDescription className="font-body">
                Multiple ways for customers to get help and support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supportChannels.map((channel) => {
                  const Icon = channel.icon
                  return (
                    <div
                      key={channel.name}
                      className={`p-6 border rounded-lg ${
                        channel.available ? 'hover:shadow-md transition-shadow' : 'opacity-60'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-lerian-yellow/10">
                          <Icon className="h-6 w-6 text-lerian-yellow" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Heading level={4}>{channel.name}</Heading>
                            <Badge 
                              variant={channel.available ? "default" : "secondary"}
                              className={channel.available ? "bg-lerian-green text-lerian-black" : ""}
                            >
                              {channel.status}
                            </Badge>
                          </div>
                          <Text variant="small" className="text-muted-foreground mb-3">
                            {channel.description}
                          </Text>
                          <div className="flex items-center justify-between">
                            <Text variant="caption">
                              Response time: {channel.responseTime}
                            </Text>
                            <Button 
                              size="sm" 
                              disabled={!channel.available}
                              variant={channel.available ? "default" : "outline"}
                            >
                              {channel.available ? "Start Chat" : "Unavailable"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Progress Indicators */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Progress Indicators</CardTitle>
              <CardDescription className="font-body">
                Visual feedback for ongoing processes and operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Text variant="small" className="font-medium">Account Verification</Text>
                    <Text variant="small" className="text-muted-foreground">75%</Text>
                  </div>
                  <Progress value={75} className="h-2" />
                  <Text variant="caption" className="text-muted-foreground">
                    3 of 4 steps completed
                  </Text>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Text variant="small" className="font-medium">Transaction Processing</Text>
                    <Text variant="small" className="text-muted-foreground">45%</Text>
                  </div>
                  <Progress value={45} className="h-2" />
                  <Text variant="caption" className="text-muted-foreground">
                    Estimated completion: 2 minutes
                  </Text>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Text variant="small" className="font-medium">Document Upload</Text>
                    <Text variant="small" className="text-lerian-green">Complete</Text>
                  </div>
                  <Progress value={100} className="h-2" />
                  <Text variant="caption" className="text-muted-foreground">
                    All documents uploaded successfully
                  </Text>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}