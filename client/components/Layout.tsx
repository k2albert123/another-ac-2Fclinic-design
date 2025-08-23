import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact", href: "/#contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        {/* Top Contact Bar */}
        <div className="bg-primary text-primary-foreground py-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+250 788 123 456</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@acclinic.rw</span>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="hidden sm:inline">Follow Us:</span>
                <div className="flex space-x-2">
                  <Facebook className="h-4 w-4 cursor-pointer hover:opacity-80" />
                  <Twitter className="h-4 w-4 cursor-pointer hover:opacity-80" />
                  <Instagram className="h-4 w-4 cursor-pointer hover:opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">AC</div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">
                  A/C Clinic
                </div>
                <div className="text-xs text-gray-600">
                  HVAC & Medical Gas Solutions
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Button size="sm">Book Now</Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary" : "text-gray-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Button size="sm" className="w-full">
                    Book Now
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold text-xl">AC</div>
                </div>
                <div>
                  <div className="text-xl font-bold">A/C Clinic</div>
                  <div className="text-sm text-gray-400">
                    HVAC & Medical Gas Solutions
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trusted HVAC, refrigeration, and medical gas pipeline solutions
                with 24/7 support. Professional, reliable, and compliant with
                all safety regulations.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    HVAC Installation
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    Refrigeration Services
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    Medical Gas Pipelines
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    Preventive Maintenance
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    Emergency Repairs
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-white transition-colors"
                  >
                    Customer Portal
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>KG 123 St, Kigali, Rwanda</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+250 788 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@acclinic.rw</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2024 A/C Clinic. All rights reserved. | Designed for
              professional HVAC and medical gas solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
