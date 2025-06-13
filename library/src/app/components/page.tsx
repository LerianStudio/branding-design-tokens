"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar } from "@/components/ui/calendar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Heading, Text, CodeText } from "@/components/ui/typography"
import { Header } from "@/components/layout/header"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { AlertCircle, CheckCircle, Info, Star, Heart, Zap, Calendar as CalendarIcon, ChevronDown, Menu, MoreHorizontal, Settings, HelpCircle, User } from "lucide-react"

export default function ComponentsPage() {
  const [progress, setProgress] = useState(66)
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-16 space-y-16">
        {/* Breadcrumb Navigation */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="mb-12">
          <Badge variant="secondary" className="mb-6">
            Component Library
          </Badge>
          <Heading level={1} className="mb-4">
            UI Components
          </Heading>
          <Text variant="lead" className="max-w-2xl">
            A comprehensive collection of UI components built with shadcn/ui and customized 
            with Lerian's branding guidelines.
          </Text>
        </div>

        {/* Typography Section */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Typography
            </Heading>
            <Text variant="lead" className="mb-8">
              Lerian uses IBM Plex Serif for headings and Inter for body text.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Headings</CardTitle>
              <CardDescription>
                All headings use the IBM Plex Serif font family in various weights.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Visual Examples */}
              <div>
                <Text variant="small" className="font-medium mb-4">Examples</Text>
                <div className="space-y-4">
                  <Heading level={1}>Heading 1 - Main Page Title</Heading>
                  <Heading level={2}>Heading 2 - Section Title</Heading>
                  <Heading level={3}>Heading 3 - Subsection</Heading>
                  <Heading level={4}>Heading 4 - Component Title</Heading>
                </div>
              </div>
              
              {/* Code Examples */}
              <div>
                <Text variant="small" className="font-medium mb-4">Code Examples</Text>
                <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
                  <CodeText>{'<Heading level={1}>Heading 1</Heading>'}</CodeText>
                  <CodeText>{'<Heading level={2}>Heading 2</Heading>'}</CodeText>
                  <CodeText>{'<Heading level={3}>Heading 3</Heading>'}</CodeText>
                  <CodeText>{'<Heading level={4}>Heading 4</Heading>'}</CodeText>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Body Text</CardTitle>
              <CardDescription>
                Body text uses Inter in various weights and sizes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Text variant="large">Large text for important content</Text>
                <CodeText>{'<Text variant="large">Large text</Text>'}</CodeText>
              </div>
              <div className="space-y-2">
                <Text variant="lead">Lead text for introductions and summaries</Text>
                <CodeText>{'<Text variant="lead">Lead text</Text>'}</CodeText>
              </div>
              <div className="space-y-2">
                <Text>Regular body text for general content</Text>
                <CodeText>{'<Text>Regular body text</Text>'}</CodeText>
              </div>
              <div className="space-y-2">
                <Text variant="small">Small text for secondary information</Text>
                <CodeText>{'<Text variant="small">Small text</Text>'}</CodeText>
              </div>
              <div className="space-y-2">
                <Text variant="caption">Caption text for minimal details</Text>
                <CodeText>{'<Text variant="caption">Caption text</Text>'}</CodeText>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Buttons
            </Heading>
            <Text variant="lead" className="mb-8">
              Button variants using Lerian's color palette for different actions and contexts.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Button Variants</CardTitle>
              <CardDescription>
                Different button styles for various use cases.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Visual Examples */}
              <div>
                <Text variant="small" className="font-medium mb-4">Examples</Text>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
              
              {/* Code Examples */}
              <div>
                <Text variant="small" className="font-medium mb-4">Code Examples</Text>
                <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
                  <CodeText>{'<Button>Primary Button</Button>'}</CodeText>
                  <CodeText>{'<Button variant="secondary">Secondary</Button>'}</CodeText>
                  <CodeText>{'<Button variant="outline">Outline</Button>'}</CodeText>
                  <CodeText>{'<Button variant="ghost">Ghost</Button>'}</CodeText>
                  <CodeText>{'<Button variant="destructive">Destructive</Button>'}</CodeText>
                  <CodeText>{'<Button disabled>Disabled</Button>'}</CodeText>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Button Sizes</CardTitle>
              <CardDescription>
                Different button sizes for various layouts.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Visual Examples */}
              <div>
                <Text variant="small" className="font-medium mb-4">Examples</Text>
                <div className="flex items-center gap-4">
                  <Button size="lg">Large</Button>
                  <Button>Default</Button>
                  <Button size="sm">Small</Button>
                </div>
              </div>
              
              {/* Code Examples */}
              <div>
                <Text variant="small" className="font-medium mb-4">Code Examples</Text>
                <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
                  <CodeText>{'<Button size="lg">Large</Button>'}</CodeText>
                  <CodeText>{'<Button>Default</Button>'}</CodeText>
                  <CodeText>{'<Button size="sm">Small</Button>'}</CodeText>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Form Elements Section */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Form Elements
            </Heading>
            <Text variant="lead" className="mb-8">
              Form components with consistent styling and accessibility features.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Input Fields</CardTitle>
              <CardDescription>
                Various input types with proper labeling and validation states.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="example-input">Text Input</Label>
                  <Input id="example-input" placeholder="Enter text here" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="example-email">Email Input</Label>
                  <Input id="example-email" type="email" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="example-password">Password Input</Label>
                  <Input id="example-password" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="example-select">Select</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                      <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="example-textarea">Textarea</Label>
                <Textarea id="example-textarea" placeholder="Enter your message here..." />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Alerts Section */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Alerts
            </Heading>
            <Text variant="lead" className="mb-8">
              Alert components for different message types and contexts.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Alert Variants</CardTitle>
              <CardDescription>
                Different alert styles for various message types.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert with neutral styling.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  This is an error alert indicating something went wrong.
                </AlertDescription>
              </Alert>

              <Alert className="border-lerian-green text-lerian-green">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  This is a success alert indicating a completed action.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Badges Section */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Badges
            </Heading>
            <Text variant="lead" className="mb-8">
              Badge components for status indicators and labels.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Badge Variants</CardTitle>
              <CardDescription>
                Different badge styles for various contexts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge className="bg-lerian-green text-lerian-black">Success</Badge>
                <Badge className="bg-lerian-yellow text-lerian-black">Warning</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Avatars Section */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Avatars
            </Heading>
            <Text variant="lead" className="mb-8">
              Avatar components for user profile representations.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Avatar Sizes</CardTitle>
              <CardDescription>
                Different avatar sizes for various use cases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs">XS</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">SM</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12">
                  <AvatarFallback>LG</AvatarFallback>
                </Avatar>
                <Avatar className="h-16 w-16">
                  <AvatarFallback>XL</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Color Showcase */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Color Palette
            </Heading>
            <Text variant="lead" className="mb-8">
              Lerian's brand colors and their usage in components.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Brand Colors</CardTitle>
              <CardDescription>
                Primary colors used throughout the design system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 w-full bg-lerian-blue rounded-lg"></div>
                  <div>
                    <Text variant="small" className="font-medium">Lerian Blue</Text>
                    <Text variant="caption" className="text-muted-foreground">#2ED8FE</Text>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 w-full bg-lerian-yellow rounded-lg"></div>
                  <div>
                    <Text variant="small" className="font-medium">Lerian Yellow</Text>
                    <Text variant="caption" className="text-muted-foreground">#FEBD02</Text>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 w-full bg-lerian-green rounded-lg"></div>
                  <div>
                    <Text variant="small" className="font-medium">Lerian Green</Text>
                    <Text variant="caption" className="text-muted-foreground">#50F769</Text>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 w-full bg-lerian-red rounded-lg"></div>
                  <div>
                    <Text variant="small" className="font-medium">Lerian Red</Text>
                    <Text variant="caption" className="text-muted-foreground">#FF6760</Text>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Progress Component */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Progress
            </Heading>
            <Text variant="lead" className="mb-8">
              Progress indicators for loading states and task completion.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Progress Bar</CardTitle>
              <CardDescription>
                Visual progress indicator with customizable value.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Progress value={progress} className="w-full" />
                <Text variant="small">Progress: {progress}%</Text>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                    Decrease
                  </Button>
                  <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                    Increase
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tabs Component */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Tabs
            </Heading>
            <Text variant="lead" className="mb-8">
              Organize content into multiple sections with tabbed navigation.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Tab Navigation</CardTitle>
              <CardDescription>
                Switch between different content sections.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </TabsContent>
                <TabsContent value="password" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Dialog and Modal Components */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Dialogs & Modals
            </Heading>
            <Text variant="lead" className="mb-8">
              Modal dialogs and overlay components for important interactions.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Dialog</CardTitle>
                <CardDescription>
                  Modal dialog overlay for focused interactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="dialog-name" className="text-right">
                          Name
                        </Label>
                        <Input id="dialog-name" defaultValue="Pedro Duarte" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="dialog-username" className="text-right">
                          Username
                        </Label>
                        <Input id="dialog-username" defaultValue="@peduarte" className="col-span-3" />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Sheet</CardTitle>
                <CardDescription>
                  Slide-out panel for additional content and actions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">Open Sheet</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit Profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sheet-name" className="text-right">
                          Name
                        </Label>
                        <Input id="sheet-name" defaultValue="Pedro Duarte" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="sheet-username" className="text-right">
                          Username
                        </Label>
                        <Input id="sheet-username" defaultValue="@peduarte" className="col-span-3" />
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dropdown and Menu Components */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Menus & Dropdowns
            </Heading>
            <Text variant="lead" className="mb-8">
              Various menu and dropdown components for navigation and actions.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Dropdown Menu</CardTitle>
                <CardDescription>
                  Action menu with various options and separators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Settings className="mr-2 h-4 w-4" />
                      Options
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Context Menu</CardTitle>
                <CardDescription>
                  Right-click context menu for additional actions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContextMenu>
                  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                    Right click here
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem>Back</ContextMenuItem>
                    <ContextMenuItem>Forward</ContextMenuItem>
                    <ContextMenuItem>Reload</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skeleton Loading States */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Loading States
            </Heading>
            <Text variant="lead" className="mb-8">
              Skeleton components for loading states and placeholders.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Skeleton</CardTitle>
              <CardDescription>
                Placeholder loading states while content loads.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Calendar Component */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Calendar
            </Heading>
            <Text variant="lead" className="mb-8">
              Date picker and calendar components for date selection.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Date Picker</CardTitle>
              <CardDescription>
                Interactive calendar for date selection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
                <Text variant="small">
                  Selected date: {date?.toLocaleDateString() || "No date selected"}
                </Text>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tooltip Component */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Tooltip
            </Heading>
            <Text variant="lead" className="mb-8">
              Contextual information displayed on hover or focus.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Tooltip Examples</CardTitle>
              <CardDescription>
                Various tooltip implementations for different use cases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TooltipProvider>
                <div className="flex flex-wrap gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Hover for help
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a helpful tooltip message.</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button className="bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90">
                        Account Settings
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Manage your account preferences and security settings.</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge className="cursor-help">
                        Pro Feature
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Available in Professional and Enterprise plans</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </CardContent>
          </Card>
        </section>

        {/* Accordion Component */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Accordion
            </Heading>
            <Text variant="lead" className="mb-8">
              Collapsible sections for organizing content and FAQs.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Frequently Asked Questions</CardTitle>
              <CardDescription>
                Common questions about Midaz plugin development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-heading">How do I integrate with Midaz?</AccordionTrigger>
                  <AccordionContent className="font-body">
                    Midaz provides comprehensive APIs and SDKs for seamless integration. Start by setting up your development environment and following our plugin architecture guidelines.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-heading">What are the system requirements?</AccordionTrigger>
                  <AccordionContent className="font-body">
                    Midaz plugins require Node.js 18+ or Go 1.19+, depending on your chosen stack. Database support includes PostgreSQL, MySQL, and MongoDB.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-heading">How do I handle authentication?</AccordionTrigger>
                  <AccordionContent className="font-body">
                    Midaz provides built-in authentication mechanisms including JWT tokens, OAuth 2.0, and API key management. Use our authentication components for consistent user experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-heading">Can I customize the UI components?</AccordionTrigger>
                  <AccordionContent className="font-body">
                    Yes! All components are built with Tailwind CSS and follow Lerian's design system. You can extend styling while maintaining brand consistency for your specific plugin needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Table Component */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Table
            </Heading>
            <Text variant="lead" className="mb-8">
              Basic table component for displaying structured data.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Transaction Summary</CardTitle>
              <CardDescription>
                Simple table implementation for financial data display.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>Recent financial transactions from the past week.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium font-mono">TXN-001</TableCell>
                    <TableCell>Salary Payment</TableCell>
                    <TableCell><Badge className="bg-lerian-green text-lerian-black">Credit</Badge></TableCell>
                    <TableCell className="text-right font-medium">$3,200.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium font-mono">TXN-002</TableCell>
                    <TableCell>Office Rent</TableCell>
                    <TableCell><Badge variant="destructive">Debit</Badge></TableCell>
                    <TableCell className="text-right font-medium">$1,500.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium font-mono">TXN-003</TableCell>
                    <TableCell>Software License</TableCell>
                    <TableCell><Badge variant="destructive">Debit</Badge></TableCell>
                    <TableCell className="text-right font-medium">$299.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium font-mono">TXN-004</TableCell>
                    <TableCell>Client Payment</TableCell>
                    <TableCell><Badge className="bg-lerian-green text-lerian-black">Credit</Badge></TableCell>
                    <TableCell className="text-right font-medium">$2,800.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Hover Card Component */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Hover Card
            </Heading>
            <Text variant="lead" className="mb-8">
              Enhanced tooltips with rich content and better positioning.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">User Information Cards</CardTitle>
              <CardDescription>
                Hover over elements to see detailed information cards.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link" className="font-body">
                      @midaz
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-lerian-yellow text-lerian-black">M</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <Heading level={4} className="font-heading">Midaz</Heading>
                        <Text variant="small" className="text-muted-foreground font-body">
                          Open-source core banking platform for modern financial applications.
                        </Text>
                        <div className="flex items-center pt-2">
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          <Text variant="caption" className="text-muted-foreground">
                            Joined December 2021
                          </Text>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link" className="font-body">
                      @lerian
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-lerian-blue text-white">L</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <Heading level={4} className="font-heading">Lerian Studio</Heading>
                        <Text variant="small" className="text-muted-foreground font-body">
                          Design system and component library for financial technology applications.
                        </Text>
                        <div className="flex items-center pt-2">
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          <Text variant="caption" className="text-muted-foreground">
                            Joined January 2022
                          </Text>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Collapsible Component */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Collapsible
            </Heading>
            <Text variant="lead" className="mb-8">
              Expandable content sections for better space management.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Plugin Configuration</CardTitle>
              <CardDescription>
                Expandable sections for organizing complex settings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="flex w-full justify-between p-0 font-heading">
                    <span>Database Settings</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 pt-3">
                  <div className="space-y-2">
                    <Label className="font-body">Connection String</Label>
                    <Input placeholder="postgresql://user:pass@localhost/db" className="font-body" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">Pool Size</Label>
                    <Input placeholder="10" type="number" className="font-body" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">Timeout (seconds)</Label>
                    <Input placeholder="30" type="number" className="font-body" />
                  </div>
                </CollapsibleContent>
              </Collapsible>
              
              <Separator />
              
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="flex w-full justify-between p-0 font-heading">
                    <span>API Configuration</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 pt-3">
                  <div className="space-y-2">
                    <Label className="font-body">Base URL</Label>
                    <Input placeholder="https://api.midaz.com" className="font-body" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">API Key</Label>
                    <Input placeholder="your-api-key" type="password" className="font-body" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">Rate Limit (requests/minute)</Label>
                    <Input placeholder="1000" type="number" className="font-body" />
                  </div>
                </CollapsibleContent>
              </Collapsible>
              
              <Separator />
              
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="flex w-full justify-between p-0 font-heading">
                    <span>Security Settings</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 pt-3">
                  <div className="space-y-2">
                    <Label className="font-body">JWT Secret</Label>
                    <Input placeholder="your-jwt-secret" type="password" className="font-body" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">Session Timeout (hours)</Label>
                    <Input placeholder="24" type="number" className="font-body" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body">Encryption Algorithm</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select algorithm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aes256">AES-256</SelectItem>
                        <SelectItem value="aes128">AES-128</SelectItem>
                        <SelectItem value="chacha20">ChaCha20</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </section>

        {/* Drawer Component */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Drawer
            </Heading>
            <Text variant="lead" className="mb-8">
              Mobile-friendly slide-out panels for navigation and content.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Mobile Navigation Drawer</CardTitle>
              <CardDescription>
                Slide-out panel optimized for mobile interactions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="font-body">
                      Open Account Menu
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle className="font-heading">Account Settings</DrawerTitle>
                      <DrawerDescription className="font-body">
                        Manage your Midaz account preferences and security settings.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4 pb-4 space-y-4">
                      <div className="space-y-3">
                        <Button variant="ghost" className="w-full justify-start font-body">
                          <User className="mr-2 h-4 w-4" />
                          Profile Settings
                        </Button>
                        <Button variant="ghost" className="w-full justify-start font-body">
                          <Settings className="mr-2 h-4 w-4" />
                          Account Preferences
                        </Button>
                        <Button variant="ghost" className="w-full justify-start font-body">
                          <Heart className="mr-2 h-4 w-4" />
                          Billing & Payments
                        </Button>
                        <Button variant="ghost" className="w-full justify-start font-body">
                          <Info className="mr-2 h-4 w-4" />
                          Help & Support
                        </Button>
                      </div>
                      <Separator />
                      <Button variant="destructive" className="w-full font-body">
                        Sign Out
                      </Button>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline" className="font-body">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>

                <Drawer>
                  <DrawerTrigger asChild>
                    <Button className="bg-lerian-yellow text-lerian-black hover:bg-lerian-yellow/90 font-body">
                      Transaction Details
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle className="font-heading">Transaction TXN-001</DrawerTitle>
                      <DrawerDescription className="font-body">
                        Payment transaction completed on December 6, 2024
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4 pb-4 space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <Text variant="caption" className="text-muted-foreground">Amount</Text>
                          <Text variant="small" className="font-medium">$1,234.56</Text>
                        </div>
                        <div>
                          <Text variant="caption" className="text-muted-foreground">Status</Text>
                          <Badge className="bg-lerian-green text-lerian-black">Completed</Badge>
                        </div>
                        <div>
                          <Text variant="caption" className="text-muted-foreground">From Account</Text>
                          <Text variant="small" className="font-mono">ACC-123456</Text>
                        </div>
                        <div>
                          <Text variant="caption" className="text-muted-foreground">To Account</Text>
                          <Text variant="small" className="font-mono">ACC-789012</Text>
                        </div>
                        <div>
                          <Text variant="caption" className="text-muted-foreground">Fee</Text>
                          <Text variant="small">$2.50</Text>
                        </div>
                        <div>
                          <Text variant="caption" className="text-muted-foreground">Reference</Text>
                          <Text variant="small" className="font-mono">SAL-2024-001</Text>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <Text variant="caption" className="text-muted-foreground">Description</Text>
                        <Text variant="small">Monthly salary payment for December 2024</Text>
                      </div>
                    </div>
                    <DrawerFooter>
                      <Button className="bg-lerian-blue text-white hover:bg-lerian-blue/90 font-body">
                        View Full Details
                      </Button>
                      <DrawerClose asChild>
                        <Button variant="outline" className="font-body">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Usage Guidelines */}
        <section className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">
              Plugin Development Guidelines
            </Heading>
            <Text variant="lead" className="mb-8">
              Best practices for using these components in your Midaz plugin development.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-lerian-green" />
                  <CardTitle className="font-heading">Do's</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Text variant="small">• Use IBM Plex Serif for all headings</Text>
                <Text variant="small">• Use Inter for body text</Text>
                <Text variant="small">• Maintain Lerian brand consistency</Text>
                <Text variant="small">• Follow Midaz plugin architecture patterns</Text>
                <Text variant="small">• Test components for accessibility</Text>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-lerian-red" />
                  <CardTitle className="font-heading">Don'ts</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Text variant="small">• Don't modify brand colors</Text>
                <Text variant="small">• Don't use more than 3 primary colors together</Text>
                <Text variant="small">• Don't ignore accessibility guidelines</Text>
                <Text variant="small">• Don't mix font families</Text>
                <Text variant="small">• Don't break Midaz integration patterns</Text>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}