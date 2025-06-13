"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Heading, Text } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import { Home, Settings, Users, BarChart3, CreditCard, FileText, LogOut, Menu, PanelLeft, Image } from "lucide-react"
import { useState } from "react"

export default function LayoutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-16">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-lerian-yellow text-lerian-black font-medium">
            Layout Components
          </Badge>
          <Heading level={1} className="mb-4">
            Layout & Structure
          </Heading>
          <Text variant="lead" className="max-w-2xl mx-auto">
            Advanced layout components for creating responsive, resizable, and well-structured 
            interfaces in your Midaz plugins.
          </Text>
        </div>

        <div className="space-y-8">
          {/* Aspect Ratio Component */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Aspect Ratio</CardTitle>
              <CardDescription className="font-body">
                Maintain consistent aspect ratios for images and content containers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <Label className="font-body font-medium">16:9 Video Format</Label>
                  <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Image className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <Text variant="small" className="text-muted-foreground">
                        Video Content
                      </Text>
                    </div>
                  </AspectRatio>
                </div>

                <div className="space-y-3">
                  <Label className="font-body font-medium">1:1 Square</Label>
                  <AspectRatio ratio={1} className="bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Image className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <Text variant="small" className="text-muted-foreground">
                        Profile Image
                      </Text>
                    </div>
                  </AspectRatio>
                </div>

                <div className="space-y-3">
                  <Label className="font-body font-medium">4:3 Classic</Label>
                  <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Image className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <Text variant="small" className="text-muted-foreground">
                        Document Preview
                      </Text>
                    </div>
                  </AspectRatio>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="font-body font-medium">21:9 Ultrawide Banner</Label>
                <AspectRatio ratio={21 / 9} className="bg-gradient-to-r from-lerian-yellow to-lerian-blue rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Heading level={4} className="text-lerian-black mb-2">
                      Financial Dashboard Banner
                    </Heading>
                    <Text variant="small" className="text-lerian-black/80">
                      Perfect for wide promotional content
                    </Text>
                  </div>
                </AspectRatio>
              </div>
            </CardContent>
          </Card>

          {/* Resizable Panels */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Resizable Panels</CardTitle>
              <CardDescription className="font-body">
                Create flexible layouts with user-adjustable panel sizes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] border rounded-lg overflow-hidden">
                <ResizablePanelGroup direction="horizontal" className="h-full">
                  <ResizablePanel defaultSize={25} minSize={20}>
                    <div className="p-4 h-full bg-muted/20">
                      <Heading level={4} className="mb-4">
                        Navigation
                      </Heading>
                      <div className="space-y-2">
                        <Button variant="ghost" size="sm" className="w-full justify-start font-body">
                          <Home className="mr-2 h-4 w-4" />
                          Dashboard
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start font-body">
                          <Users className="mr-2 h-4 w-4" />
                          Accounts
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start font-body">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Transactions
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start font-body">
                          <BarChart3 className="mr-2 h-4 w-4" />
                          Reports
                        </Button>
                      </div>
                    </div>
                  </ResizablePanel>
                  
                  <ResizableHandle withHandle />
                  
                  <ResizablePanel defaultSize={50}>
                    <div className="p-4 h-full">
                      <Heading level={4} className="mb-4">
                        Main Content Area
                      </Heading>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <Card>
                            <CardContent className="p-4">
                              <Text variant="small" className="text-muted-foreground">Total Balance</Text>
                              <Text className="text-2xl font-heading font-semibold">$124,567.89</Text>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <Text variant="small" className="text-muted-foreground">Monthly Growth</Text>
                              <Text className="text-2xl font-heading font-semibold text-lerian-green">+12.5%</Text>
                            </CardContent>
                          </Card>
                        </div>
                        <Card>
                          <CardContent className="p-4">
                            <Text variant="small" className="text-muted-foreground mb-2">Recent Activity</Text>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Payment received</span>
                                <span className="text-lerian-green">+$2,500.00</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Subscription fee</span>
                                <span className="text-lerian-red">-$99.00</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </ResizablePanel>
                  
                  <ResizableHandle withHandle />
                  
                  <ResizablePanel defaultSize={25} minSize={20}>
                    <div className="p-4 h-full bg-muted/20">
                      <Heading level={4} className="mb-4">
                        Details Panel
                      </Heading>
                      <div className="space-y-4">
                        <div>
                          <Label className="font-body font-medium">Account Status</Label>
                          <Badge className="bg-lerian-green text-lerian-black">Active</Badge>
                        </div>
                        <div>
                          <Label className="font-body font-medium">Last Login</Label>
                          <Text variant="small" className="text-muted-foreground">2 hours ago</Text>
                        </div>
                        <div>
                          <Label className="font-body font-medium">Security Level</Label>
                          <Text variant="small" className="text-muted-foreground">High</Text>
                        </div>
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </div>
              <Text variant="small" className="text-muted-foreground mt-2">
                Drag the handles to resize panels. Great for creating flexible dashboard layouts.
              </Text>
            </CardContent>
          </Card>

          {/* Sidebar Component */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Sidebar Navigation</CardTitle>
              <CardDescription className="font-body">
                Modern sidebar component with collapsible sections and responsive behavior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg overflow-hidden">
                <SidebarProvider>
                  <div className="flex h-[400px]">
                    <Sidebar>
                      <SidebarHeader>
                        <div className="flex items-center gap-2 px-4 py-2">
                          <div className="h-8 w-8 rounded bg-lerian-yellow flex items-center justify-center">
                            <Text className="font-heading font-bold text-lerian-black text-sm">M</Text>
                          </div>
                          <Heading level={4} className="font-heading">Midaz</Heading>
                        </div>
                      </SidebarHeader>
                      
                      <SidebarContent>
                        <SidebarGroup>
                          <SidebarGroupLabel>Platform</SidebarGroupLabel>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <Home className="h-4 w-4" />
                                  <span>Dashboard</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <Users className="h-4 w-4" />
                                  <span>Accounts</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <CreditCard className="h-4 w-4" />
                                  <span>Transactions</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            </SidebarMenu>
                          </SidebarGroupContent>
                        </SidebarGroup>
                        
                        <SidebarGroup>
                          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
                          <SidebarGroupContent>
                            <SidebarMenu>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <BarChart3 className="h-4 w-4" />
                                  <span>Reports</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                              <SidebarMenuItem>
                                <SidebarMenuButton>
                                  <FileText className="h-4 w-4" />
                                  <span>Statements</span>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            </SidebarMenu>
                          </SidebarGroupContent>
                        </SidebarGroup>
                      </SidebarContent>
                      
                      <SidebarFooter>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <Settings className="h-4 w-4" />
                              <span>Settings</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton>
                              <LogOut className="h-4 w-4" />
                              <span>Sign Out</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarFooter>
                    </Sidebar>
                    
                    <main className="flex-1 p-6 bg-background">
                      <div className="flex items-center gap-2 mb-4">
                        <SidebarTrigger />
                        <Heading level={3} className="font-heading">
                          Main Application Area
                        </Heading>
                      </div>
                      <Text className="text-muted-foreground mb-4">
                        This is the main content area. Click the sidebar trigger to toggle the sidebar.
                      </Text>
                      <div className="space-y-4">
                        <Card>
                          <CardContent className="p-4">
                            <Text variant="small" className="text-muted-foreground">Welcome back!</Text>
                            <Text className="font-heading text-lg">Your financial dashboard is ready.</Text>
                          </CardContent>
                        </Card>
                      </div>
                    </main>
                  </div>
                </SidebarProvider>
              </div>
              <Text variant="small" className="text-muted-foreground mt-2">
                Modern sidebar with collapsible groups and responsive behavior. Perfect for admin dashboards.
              </Text>
            </CardContent>
          </Card>

          {/* Layout Usage Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Layout Best Practices</CardTitle>
              <CardDescription className="font-body">
                Guidelines for using layout components in Midaz plugin development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Heading level={4} className="text-lerian-green">✓ Recommended Patterns</Heading>
                  <ul className="space-y-2 text-sm font-body">
                    <li>• Use aspect ratios for consistent image/video display</li>
                    <li>• Implement resizable panels for dashboard flexibility</li>
                    <li>• Use sidebar for main navigation in admin interfaces</li>
                    <li>• Maintain minimum panel sizes for usability</li>
                    <li>• Consider mobile responsiveness for all layouts</li>
                    <li>• Use semantic HTML structure within panels</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <Heading level={4} className="text-lerian-red">✗ Anti-patterns</Heading>
                  <ul className="space-y-2 text-sm font-body">
                    <li>• Don't make panels too small to be functional</li>
                    <li>• Avoid complex nested resizable structures</li>
                    <li>• Don't forget keyboard navigation for sidebars</li>
                    <li>• Avoid fixed aspect ratios for dynamic content</li>
                    <li>• Don't overcomplicate sidebar menu structures</li>
                    <li>• Avoid layouts that break on mobile devices</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}