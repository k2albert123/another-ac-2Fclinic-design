import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Ban, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  DollarSign,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  MoreHorizontal,
  Eye,
  Shield,
  ShieldOff
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminUserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);

  // Mock users data - in real app this would come from API
  const users = [
    {
      id: "USR-001",
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@hospital.rw",
      phone: "+250 788 111 222",
      address: "KG 123 St, Kigali",
      status: "active",
      type: "business",
      joinDate: "2023-01-15",
      lastLogin: "2024-01-15",
      totalBookings: 15,
      totalSpent: 3750,
      pendingPayments: 0,
      riskLevel: "low"
    },
    {
      id: "USR-002", 
      name: "Michael Chen",
      email: "michael.chen@restaurant.rw",
      phone: "+250 788 333 444",
      address: "KG 456 St, Kigali",
      status: "active",
      type: "business",
      joinDate: "2023-03-20",
      lastLogin: "2024-01-14",
      totalBookings: 8,
      totalSpent: 6400,
      pendingPayments: 800,
      riskLevel: "medium"
    },
    {
      id: "USR-003",
      name: "Jennifer Williams",
      email: "jennifer.williams@email.com",
      phone: "+250 788 555 666",
      address: "KG 789 St, Kigali",
      status: "active", 
      type: "residential",
      joinDate: "2023-06-15",
      lastLogin: "2024-01-15",
      totalBookings: 12,
      totalSpent: 1850,
      pendingPayments: 300,
      riskLevel: "low"
    },
    {
      id: "USR-004",
      name: "Robert Mukamana",
      email: "robert.mukamana@gmail.com",
      phone: "+250 788 777 888",
      address: "KG 321 St, Gasabo",
      status: "suspended",
      type: "residential",
      joinDate: "2023-09-10",
      lastLogin: "2024-01-10",
      totalBookings: 3,
      totalSpent: 450,
      pendingPayments: 150,
      riskLevel: "high"
    },
    {
      id: "USR-005",
      name: "Marie Uwimana",
      email: "marie.uwimana@company.rw",
      phone: "+250 788 999 000",
      address: "KG 654 St, Nyarugenge",
      status: "inactive",
      type: "business",
      joinDate: "2023-12-01",
      lastLogin: "2024-01-05",
      totalBookings: 1,
      totalSpent: 150,
      pendingPayments: 0,
      riskLevel: "low"
    }
  ];

  const [newUserForm, setNewUserForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    type: "residential",
    notes: ""
  });

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.phone.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>;
      case "suspended":
        return <Badge className="bg-red-100 text-red-800">Suspended</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "business":
        return <Badge variant="outline" className="text-blue-600 border-blue-200">Business</Badge>;
      case "residential":
        return <Badge variant="outline" className="text-green-600 border-green-200">Residential</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "low":
        return <Badge className="bg-green-100 text-green-800">Low Risk</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium Risk</Badge>;
      case "high":
        return <Badge className="bg-red-100 text-red-800">High Risk</Badge>;
      default:
        return <Badge variant="secondary">{risk}</Badge>;
    }
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement add user functionality
    console.log("Add user:", newUserForm);
    setShowAddUser(false);
    setNewUserForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      type: "residential",
      notes: ""
    });
  };

  const handleSuspendUser = (userId: string) => {
    // TODO: Implement suspend user functionality
    console.log("Suspend user:", userId);
  };

  const handleDeleteUser = (userId: string) => {
    // TODO: Implement delete user functionality
    console.log("Delete user:", userId);
  };

  const handleSendMessage = (userId: string) => {
    // TODO: Implement send message functionality
    console.log("Send message to user:", userId);
  };

  const statsCards = [
    {
      title: "Total Users",
      value: users.length.toString(),
      subtitle: `+${users.filter(u => new Date(u.joinDate) > new Date('2024-01-01')).length} this month`,
      icon: <Users className="h-4 w-4" />
    },
    {
      title: "Active Users",
      value: users.filter(u => u.status === "active").length.toString(),
      subtitle: `${Math.round((users.filter(u => u.status === "active").length / users.length) * 100)}% of total`,
      icon: <CheckCircle className="h-4 w-4" />
    },
    {
      title: "Total Revenue",
      value: `$${users.reduce((sum, u) => sum + u.totalSpent, 0).toLocaleString()}`,
      subtitle: `$${users.reduce((sum, u) => sum + u.pendingPayments, 0)} pending`,
      icon: <DollarSign className="h-4 w-4" />
    },
    {
      title: "High Risk Users",
      value: users.filter(u => u.riskLevel === "high").length.toString(),
      subtitle: "Need attention",
      icon: <AlertTriangle className="h-4 w-4" />
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
                <p className="text-gray-600 mt-1">Manage customer accounts, permissions, and activities</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <Link to="/admin">
                  <Button variant="outline" size="sm">
                    ← Back to Dashboard
                  </Button>
                </Link>
                <Dialog open={showAddUser} onOpenChange={setShowAddUser}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add New User
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Add New User</DialogTitle>
                      <DialogDescription>
                        Create a new user account for A/C Clinic services
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleAddUser} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="new-name">Full Name</Label>
                          <Input
                            id="new-name"
                            value={newUserForm.name}
                            onChange={(e) => setNewUserForm({...newUserForm, name: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-email">Email</Label>
                          <Input
                            id="new-email"
                            type="email"
                            value={newUserForm.email}
                            onChange={(e) => setNewUserForm({...newUserForm, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="new-phone">Phone</Label>
                          <Input
                            id="new-phone"
                            value={newUserForm.phone}
                            onChange={(e) => setNewUserForm({...newUserForm, phone: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-type">User Type</Label>
                          <Select onValueChange={(value) => setNewUserForm({...newUserForm, type: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="residential">Residential</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-address">Address</Label>
                        <Input
                          id="new-address"
                          value={newUserForm.address}
                          onChange={(e) => setNewUserForm({...newUserForm, address: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-notes">Notes (Optional)</Label>
                        <Textarea
                          id="new-notes"
                          value={newUserForm.notes}
                          onChange={(e) => setNewUserForm({...newUserForm, notes: e.target.value})}
                          placeholder="Any additional notes about this user..."
                        />
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button type="button" variant="outline" onClick={() => setShowAddUser(false)}>
                          Cancel
                        </Button>
                        <Button type="submit">Create User</Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Filters and Search */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search users by name, email, or phone..."
                      className="pl-10 w-80"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Users Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Users ({filteredUsers.length})</CardTitle>
              <CardDescription>
                Manage user accounts and view their activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="border rounded-lg p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="font-semibold text-lg">{user.name}</h3>
                          {getStatusBadge(user.status)}
                          {getTypeBadge(user.type)}
                          {getRiskBadge(user.riskLevel)}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4" />
                              <span>{user.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4" />
                              <span>{user.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{user.address}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>Joined: {new Date(user.joinDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Activity className="h-4 w-4" />
                              <span>Last login: {new Date(user.lastLogin).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span>ID: {user.id}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Bookings:</span>
                              <span className="font-medium">{user.totalBookings}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Total Spent:</span>
                              <span className="font-medium">${user.totalSpent}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Pending:</span>
                              <span className={`font-medium ${user.pendingPayments > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                ${user.pendingPayments}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleSendMessage(user.id)}>
                          <Mail className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        
                        {user.status === "active" ? (
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="outline" size="sm" className="text-yellow-600 border-yellow-200 hover:bg-yellow-50">
                                <Ban className="h-4 w-4 mr-1" />
                                Suspend
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Suspend User Account</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to suspend {user.name}'s account? They will not be able to book new services or access their dashboard.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleSuspendUser(user.id)}>
                                  Suspend User
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        ) : (
                          <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                            <Shield className="h-4 w-4 mr-1" />
                            Activate
                          </Button>
                        )}
                        
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete User Account</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to permanently delete {user.name}'s account? This action cannot be undone and will remove all their data, bookings, and payment history.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDeleteUser(user.id)} className="bg-red-600 hover:bg-red-700">
                                Delete Permanently
                              </AlertDialogAction>
                            </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredUsers.length === 0 && (
                  <div className="text-center py-8">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No users found matching your criteria</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
