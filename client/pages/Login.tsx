import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle login
    console.log("Login:", loginForm);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle registration
    console.log("Register:", registerForm);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle forgot password
    console.log("Forgot password");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to A/C Clinic</h1>
              <p className="text-gray-600">Access your account or create a new one</p>
            </div>

            <Card className="shadow-lg">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Account Access</CardTitle>
                <CardDescription className="text-center">
                  Login to manage your bookings or register for a new account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>

                  {/* Login Tab */}
                  <TabsContent value="login" className="space-y-6">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="login-email"
                            type="email"
                            placeholder="your@email.com"
                            className="pl-10"
                            value={loginForm.email}
                            onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-10 pr-10"
                            value={loginForm.password}
                            onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="remember" className="rounded" />
                          <label htmlFor="remember" className="text-sm text-gray-600">
                            Remember me
                          </label>
                        </div>
                        <button
                          type="button"
                          className="text-sm text-primary hover:underline"
                          onClick={handleForgotPassword}
                        >
                          Forgot password?
                        </button>
                      </div>

                      <Button type="submit" className="w-full">
                        Sign In
                      </Button>
                    </form>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                          <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                          />
                          <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                          />
                          <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                          />
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="w-full">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                        Twitter
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Register Tab */}
                  <TabsContent value="register" className="space-y-6">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="register-name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="register-name"
                            type="text"
                            placeholder="Your full name"
                            className="pl-10"
                            value={registerForm.name}
                            onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="your@email.com"
                            className="pl-10"
                            value={registerForm.email}
                            onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="register-phone"
                            type="tel"
                            placeholder="+250 788 123 456"
                            className="pl-10"
                            value={registerForm.phone}
                            onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="register-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            className="pl-10 pr-10"
                            value={registerForm.password}
                            onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-confirm-password">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="register-confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="pl-10 pr-10"
                            value={registerForm.confirmPassword}
                            onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <input type="checkbox" id="terms" className="rounded mt-1" required />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                          I agree to the{" "}
                          <Link to="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <Button type="submit" className="w-full">
                        Create Account
                      </Button>
                    </form>

                    <div className="text-center text-sm text-gray-600">
                      By registering, you'll be able to:
                      <ul className="mt-2 space-y-1">
                        <li>• Track your service bookings</li>
                        <li>• Access payment history and invoices</li>
                        <li>• Schedule maintenance appointments</li>
                        <li>• Receive priority customer support</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="text-center text-sm text-gray-600 mt-6">
                  Need help? <Link to="/#contact" className="text-primary hover:underline">Contact our support team</Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
