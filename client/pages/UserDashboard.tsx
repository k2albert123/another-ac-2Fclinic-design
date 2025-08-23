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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Edit,
  Plus,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  FileText,
  Settings,
  Bell,
  Star,
  Wrench,
  Building,
  Heart,
  Snowflake,
  Camera,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data - in real app this would come from API
  const user = {
    name: "Jennifer Williams",
    email: "jennifer.williams@email.com",
    phone: "+250 788 123 456",
    address: "KG 567 St, Kigali, Rwanda",
    joinDate: "2023-06-15",
    totalBookings: 12,
    pendingServices: 2,
    totalPaid: 1850,
    nextService: "2024-01-20",
  };

  const recentBookings = [
    {
      id: "BK-234",
      service: "Residential HVAC Maintenance",
      date: "2024-01-20",
      time: "09:00 AM",
      status: "confirmed",
      technician: "John Mukamana",
      amount: 300,
      address: "KG 567 St, Kigali",
    },
    {
      id: "BK-233",
      service: "Air Conditioning Repair",
      date: "2024-01-15",
      time: "14:00 PM",
      status: "completed",
      technician: "David Nkurunziza",
      amount: 150,
      address: "KG 567 St, Kigali",
    },
    {
      id: "BK-232",
      service: "System Inspection",
      date: "2024-01-10",
      time: "11:00 AM",
      status: "completed",
      technician: "Sarah Uwimana",
      amount: 100,
      address: "KG 567 St, Kigali",
    },
    {
      id: "BK-231",
      service: "Emergency Repair",
      date: "2024-01-05",
      time: "16:00 PM",
      status: "completed",
      technician: "John Mukamana",
      amount: 400,
      address: "KG 567 St, Kigali",
    },
  ];

  const payments = [
    {
      id: "PAY-001",
      bookingId: "BK-233",
      amount: 150,
      date: "2024-01-15",
      method: "Credit Card",
      status: "paid",
      description: "Air Conditioning Repair",
    },
    {
      id: "PAY-002",
      bookingId: "BK-232",
      amount: 100,
      date: "2024-01-10",
      method: "Mobile Money",
      status: "paid",
      description: "System Inspection",
    },
    {
      id: "PAY-003",
      bookingId: "BK-231",
      amount: 400,
      date: "2024-01-05",
      method: "Bank Transfer",
      status: "paid",
      description: "Emergency Repair",
    },
    {
      id: "PAY-004",
      bookingId: "BK-234",
      amount: 300,
      date: "2024-01-20",
      method: "Pending",
      status: "pending",
      description: "Residential HVAC Maintenance",
    },
  ];

  const [profileForm, setProfileForm] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-blue-100 text-blue-800">Confirmed</Badge>;
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPaymentStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleReschedule = (bookingId: string) => {
    // TODO: Implement reschedule functionality
    console.log("Reschedule booking:", bookingId);
  };

  const handleCancel = (bookingId: string) => {
    // TODO: Implement cancel functionality
    console.log("Cancel booking:", bookingId);
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle profile update
    console.log("Profile update:", profileForm);
  };

  const handleDownloadInvoice = (paymentId: string) => {
    // TODO: Implement invoice download
    console.log("Download invoice:", paymentId);
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
                  Welcome back, {user.name.split(" ")[0]}!
                </h1>
                <p className="text-gray-600 mt-1">
                  Manage your A/C Clinic services and account
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Link to="/#booking">
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Book New Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Bookings
                    </CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {user.totalBookings}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Since {new Date(user.joinDate).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Pending Services
                    </CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {user.pendingServices}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Next: {new Date(user.nextService).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Paid
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${user.totalPaid}</div>
                    <p className="text-xs text-muted-foreground">
                      Lifetime value
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Member Since
                    </CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {Math.floor(
                        (new Date().getTime() -
                          new Date(user.joinDate).getTime()) /
                          (1000 * 60 * 60 * 24 * 30),
                      )}
                      mo
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Valued customer
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>
                      Most commonly used functions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <Link to="/#booking">
                        <Button className="w-full h-20 flex flex-col">
                          <Plus className="h-6 w-6 mb-2" />
                          <span>Book Service</span>
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full h-20 flex flex-col"
                        onClick={() => setActiveTab("payments")}
                      >
                        <CreditCard className="h-6 w-6 mb-2" />
                        <span>Make Payment</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full h-20 flex flex-col"
                        onClick={() => setActiveTab("bookings")}
                      >
                        <Calendar className="h-6 w-6 mb-2" />
                        <span>View Bookings</span>
                      </Button>
                      <Link to="/#contact">
                        <Button
                          variant="outline"
                          className="w-full h-20 flex flex-col"
                        >
                          <Phone className="h-6 w-6 mb-2" />
                          <span>Contact Support</span>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Services</CardTitle>
                    <CardDescription>
                      Your next scheduled appointments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings
                        .filter((b) => b.status === "confirmed")
                        .map((booking) => (
                          <div
                            key={booking.id}
                            className="flex items-center justify-between p-4 border rounded-lg"
                          >
                            <div>
                              <p className="font-medium">{booking.service}</p>
                              <p className="text-sm text-gray-600">
                                {booking.date} at {booking.time}
                              </p>
                              <p className="text-xs text-gray-500">
                                Technician: {booking.technician}
                              </p>
                            </div>
                            <div className="text-right">
                              {getStatusBadge(booking.status)}
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>
                    Your latest bookings and payments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.slice(0, 3).map((booking) => (
                      <div
                        key={booking.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            {booking.service.includes("HVAC") && (
                              <Snowflake className="h-5 w-5 text-primary" />
                            )}
                            {booking.service.includes("Refrigeration") && (
                              <Building className="h-5 w-5 text-primary" />
                            )}
                            {booking.service.includes("Medical") && (
                              <Heart className="h-5 w-5 text-primary" />
                            )}
                            {!booking.service.includes("HVAC") &&
                              !booking.service.includes("Refrigeration") &&
                              !booking.service.includes("Medical") && (
                                <Wrench className="h-5 w-5 text-primary" />
                              )}
                          </div>
                          <div>
                            <p className="font-medium">{booking.service}</p>
                            <p className="text-sm text-gray-600">
                              {booking.date} • ${booking.amount}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(booking.status)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>My Bookings</span>
                    <Link to="/#booking">
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        New Booking
                      </Button>
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    View and manage all your service bookings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-semibold text-lg">
                                {booking.service}
                              </h3>
                              {getStatusBadge(booking.status)}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  {booking.date} at {booking.time}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <User className="h-4 w-4" />
                                <span>Technician: {booking.technician}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>{booking.address}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <DollarSign className="h-4 w-4" />
                                <span>${booking.amount}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            {booking.status === "confirmed" && (
                              <>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleReschedule(booking.id)}
                                >
                                  <Edit className="h-4 w-4 mr-1" />
                                  Reschedule
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleCancel(booking.id)}
                                >
                                  Cancel
                                </Button>
                              </>
                            )}
                            {booking.status === "completed" && (
                              <Button variant="outline" size="sm">
                                <Star className="h-4 w-4 mr-1" />
                                Rate Service
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payments Tab */}
            <TabsContent value="payments" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Summary</CardTitle>
                    <CardDescription>
                      Your payment history overview
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Total Paid</span>
                        <span className="font-bold text-green-600">
                          $
                          {payments
                            .filter((p) => p.status === "paid")
                            .reduce((sum, p) => sum + p.amount, 0)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Pending Payments</span>
                        <span className="font-bold text-yellow-600">
                          $
                          {payments
                            .filter((p) => p.status === "pending")
                            .reduce((sum, p) => sum + p.amount, 0)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Total Transactions</span>
                        <span className="font-bold">{payments.length}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Outstanding Balance</CardTitle>
                    <CardDescription>Payments due</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {payments.filter((p) => p.status === "pending").length >
                    0 ? (
                      <div className="space-y-4">
                        {payments
                          .filter((p) => p.status === "pending")
                          .map((payment) => (
                            <div
                              key={payment.id}
                              className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                            >
                              <div>
                                <p className="font-medium">
                                  {payment.description}
                                </p>
                                <p className="text-sm text-gray-600">
                                  ${payment.amount}
                                </p>
                              </div>
                              <Button size="sm">Pay Now</Button>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <p className="text-gray-600">
                          All payments are up to date!
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>
                    All your transactions and invoices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {payments.map((payment) => (
                      <div
                        key={payment.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <CreditCard className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{payment.description}</p>
                            <p className="text-sm text-gray-600">
                              {payment.date} • {payment.method} •{" "}
                              {payment.bookingId}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <p className="font-bold">${payment.amount}</p>
                            {getPaymentStatusBadge(payment.status)}
                          </div>
                          {payment.status === "paid" && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDownloadInvoice(payment.id)}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              Invoice
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your personal details
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileUpdate} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={profileForm.name}
                            onChange={(e) =>
                              setProfileForm({
                                ...profileForm,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profileForm.email}
                            onChange={(e) =>
                              setProfileForm({
                                ...profileForm,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={profileForm.phone}
                            onChange={(e) =>
                              setProfileForm({
                                ...profileForm,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            value={profileForm.address}
                            onChange={(e) =>
                              setProfileForm({
                                ...profileForm,
                                address: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold mb-4">
                          Change Password
                        </h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="currentPassword">
                              Current Password
                            </Label>
                            <Input
                              id="currentPassword"
                              type="password"
                              value={profileForm.currentPassword}
                              onChange={(e) =>
                                setProfileForm({
                                  ...profileForm,
                                  currentPassword: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="newPassword">New Password</Label>
                              <Input
                                id="newPassword"
                                type="password"
                                value={profileForm.newPassword}
                                onChange={(e) =>
                                  setProfileForm({
                                    ...profileForm,
                                    newPassword: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="confirmPassword">
                                Confirm Password
                              </Label>
                              <Input
                                id="confirmPassword"
                                type="password"
                                value={profileForm.confirmPassword}
                                onChange={(e) =>
                                  setProfileForm({
                                    ...profileForm,
                                    confirmPassword: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button type="submit" className="w-full">
                        Update Profile
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Photo</CardTitle>
                      <CardDescription>
                        Upload your profile picture
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                        <User className="h-12 w-12 text-primary" />
                      </div>
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-2" />
                        Upload Photo
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Email Notifications</span>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">SMS Notifications</span>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Privacy Settings</span>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
