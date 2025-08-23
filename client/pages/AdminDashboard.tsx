import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Calendar,
  DollarSign,
  Wrench,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Phone,
  Bell,
  BarChart3,
  PieChart,
  Activity,
  Settings,
  UserPlus,
  BookOpen,
  CreditCard,
  Building,
  Heart,
  Snowflake,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  // Mock data - in real app this would come from API
  const stats = {
    totalUsers: 2847,
    totalBookings: 1456,
    totalRevenue: 145800,
    activeTechnicians: 25,
    monthlyGrowth: 12.5,
    pendingBookings: 23,
    todayBookings: 8,
    urgentIssues: 3,
  };

  const recentBookings = [
    {
      id: "BK-001",
      customer: "Dr. Sarah Johnson",
      service: "Medical Gas Pipeline Inspection",
      amount: 250,
      status: "confirmed",
      date: "2024-01-15",
      technician: "David Nkurunziza",
    },
    {
      id: "BK-002",
      customer: "Michael Chen",
      service: "Commercial Refrigeration Maintenance",
      amount: 800,
      status: "in-progress",
      date: "2024-01-15",
      technician: "John Mukamana",
    },
    {
      id: "BK-003",
      customer: "Jennifer Williams",
      service: "Residential HVAC Repair",
      amount: 150,
      status: "pending",
      date: "2024-01-16",
      technician: "Unassigned",
    },
    {
      id: "BK-004",
      customer: "Rwanda Hospital",
      service: "Emergency Medical Gas Repair",
      amount: 500,
      status: "urgent",
      date: "2024-01-15",
      technician: "David Nkurunziza",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "booking",
      message: "New emergency booking from Rwanda Hospital",
      time: "5 minutes ago",
      urgent: true,
    },
    {
      id: 2,
      type: "payment",
      message: "Payment failed for booking BK-001",
      time: "1 hour ago",
      urgent: true,
    },
    {
      id: 3,
      type: "technician",
      message: "John Mukamana completed 5 services today",
      time: "2 hours ago",
      urgent: false,
    },
    {
      id: 4,
      type: "system",
      message: "Monthly maintenance reports are ready",
      time: "3 hours ago",
      urgent: false,
    },
  ];

  const serviceTypes = [
    {
      name: "HVAC Systems",
      count: 567,
      icon: <Snowflake className="h-5 w-5" />,
      color: "bg-blue-500",
    },
    {
      name: "Refrigeration",
      count: 423,
      icon: <Building className="h-5 w-5" />,
      color: "bg-green-500",
    },
    {
      name: "Medical Gas",
      count: 234,
      icon: <Heart className="h-5 w-5" />,
      color: "bg-red-500",
    },
    {
      name: "Maintenance",
      count: 232,
      icon: <Wrench className="h-5 w-5" />,
      color: "bg-yellow-500",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800">Confirmed</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "urgent":
        return <Badge className="bg-red-100 text-red-800">Urgent</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600 mt-1">
                  Welcome back! Here's what's happening at A/C Clinic today.
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications ({notifications.filter((n) => n.urgent).length})
                </Button>
                <Button size="sm">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add New Booking
                </Button>
              </div>
            </div>
          </div>

          {/* Key Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Users
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.totalUsers.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Bookings
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.totalBookings.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-blue-600">{stats.todayBookings}</span>{" "}
                  scheduled today
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Monthly Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${stats.totalRevenue.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">
                    +{stats.monthlyGrowth}%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Technicians
                </CardTitle>
                <Wrench className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.activeTechnicians}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-yellow-600">
                    {stats.pendingBookings}
                  </span>{" "}
                  pending assignments
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>
                    Access frequently used administrative functions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link to="/admin/bookings">
                      <Button
                        variant="outline"
                        className="w-full h-20 flex flex-col"
                      >
                        <Calendar className="h-6 w-6 mb-2" />
                        <span className="text-sm">Manage Bookings</span>
                      </Button>
                    </Link>
                    <Link to="/admin/users">
                      <Button
                        variant="outline"
                        className="w-full h-20 flex flex-col"
                      >
                        <Users className="h-6 w-6 mb-2" />
                        <span className="text-sm">User Management</span>
                      </Button>
                    </Link>
                    <Link to="/admin/payments">
                      <Button
                        variant="outline"
                        className="w-full h-20 flex flex-col"
                      >
                        <CreditCard className="h-6 w-6 mb-2" />
                        <span className="text-sm">Payments</span>
                      </Button>
                    </Link>
                    <Link to="/admin/technicians">
                      <Button
                        variant="outline"
                        className="w-full h-20 flex flex-col"
                      >
                        <Wrench className="h-6 w-6 mb-2" />
                        <span className="text-sm">Technicians</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Bookings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Recent Bookings
                    </span>
                    <Link to="/admin/bookings">
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    Latest service bookings and their current status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <div>
                              <p className="font-medium">{booking.customer}</p>
                              <p className="text-sm text-gray-600">
                                {booking.service}
                              </p>
                              <p className="text-xs text-gray-500">
                                {booking.date} • {booking.technician}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <p className="font-bold">${booking.amount}</p>
                            {getStatusBadge(booking.status)}
                          </div>
                          {booking.status === "urgent" && (
                            <Button
                              size="sm"
                              className="bg-red-600 hover:bg-red-700"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              Call
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Service Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 mr-2" />
                    Service Performance
                  </CardTitle>
                  <CardDescription>
                    Breakdown of services by type and volume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {serviceTypes.map((service) => (
                      <div
                        key={service.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg ${service.color} text-white`}
                          >
                            {service.icon}
                          </div>
                          <div>
                            <p className="font-medium">{service.name}</p>
                            <p className="text-sm text-gray-600">
                              {service.count} bookings
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Progress
                            value={(service.count / 1456) * 100}
                            className="w-20 mb-1"
                          />
                          <p className="text-xs text-gray-500">
                            {Math.round((service.count / 1456) * 100)}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Urgent Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                    Urgent Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notifications
                      .filter((n) => n.urgent)
                      .map((notification) => (
                        <div
                          key={notification.id}
                          className="p-3 bg-red-50 border border-red-200 rounded-lg"
                        >
                          <p className="text-sm font-medium text-red-800">
                            {notification.message}
                          </p>
                          <p className="text-xs text-red-600 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex items-start space-x-3"
                      >
                        <div
                          className={`p-1 rounded-full ${notification.urgent ? "bg-red-100" : "bg-blue-100"}`}
                        >
                          {notification.type === "booking" && (
                            <Calendar className="h-3 w-3 text-blue-600" />
                          )}
                          {notification.type === "payment" && (
                            <DollarSign className="h-3 w-3 text-green-600" />
                          )}
                          {notification.type === "technician" && (
                            <Wrench className="h-3 w-3 text-purple-600" />
                          )}
                          {notification.type === "system" && (
                            <Settings className="h-3 w-3 text-gray-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{notification.message}</p>
                          <p className="text-xs text-gray-500">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* System Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    System Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Payment Gateway</span>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Booking System</span>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Email Service</span>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SMS Gateway</span>
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm text-yellow-600">
                          Maintenance
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
