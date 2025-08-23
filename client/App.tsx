import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />

          {/* User Dashboard Routes */}
          <Route path="/dashboard" element={
            <PlaceholderPage
              title="User Dashboard"
              description="Your personal dashboard to manage bookings, payments, and profile information."
              features={[
                "View booking history and status",
                "Track technician assignments",
                "Download invoices and receipts",
                "Schedule new services",
                "Update profile information"
              ]}
            />
          } />
          <Route path="/bookings" element={
            <PlaceholderPage
              title="My Bookings"
              description="View and manage all your service bookings with A/C Clinic."
              features={[
                "View upcoming appointments",
                "Reschedule or cancel bookings",
                "Track service progress",
                "Rate completed services"
              ]}
            />
          } />
          <Route path="/payments" element={
            <PlaceholderPage
              title="Payments & Invoices"
              description="Manage your payment history and download invoices."
              features={[
                "View payment history",
                "Download PDF invoices",
                "Set up automatic payments",
                "View outstanding balances"
              ]}
            />
          } />
          <Route path="/profile" element={
            <PlaceholderPage
              title="Profile Settings"
              description="Update your personal information and account preferences."
              features={[
                "Edit contact information",
                "Change password",
                "Upload profile photo",
                "Notification preferences"
              ]}
            />
          } />

          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={
            <PlaceholderPage
              title="Admin Dashboard"
              description="Administrative control panel for managing A/C Clinic operations."
              features={[
                "View system overview and analytics",
                "Monitor real-time bookings",
                "Track revenue and payments",
                "Manage user accounts and technicians"
              ]}
            />
          } />

          {/* Booking Flow Routes */}
          <Route path="/booking-confirmation" element={
            <PlaceholderPage
              title="Booking Confirmation"
              description="Review and confirm your service booking details."
              features={[
                "Booking summary and details",
                "Payment options and pricing",
                "Service date and time confirmation",
                "Invoice generation"
              ]}
            />
          } />
          <Route path="/payment" element={
            <PlaceholderPage
              title="Secure Payment"
              description="Complete your payment using our secure payment gateway."
              features={[
                "Credit/Debit card payments",
                "Mobile money integration",
                "PayPal support",
                "Receipt generation"
              ]}
            />
          } />

          {/* Additional Pages */}
          <Route path="/terms" element={
            <PlaceholderPage
              title="Terms of Service"
              description="Terms and conditions for using A/C Clinic services."
            />
          } />
          <Route path="/privacy" element={
            <PlaceholderPage
              title="Privacy Policy"
              description="How we collect, use, and protect your personal information."
            />
          } />
          <Route path="/faq" element={
            <PlaceholderPage
              title="Frequently Asked Questions"
              description="Find answers to common questions about our services."
              features={[
                "Service-related questions",
                "Pricing and payment information",
                "Emergency service procedures",
                "Maintenance scheduling"
              ]}
            />
          } />

          {/* Catch-all route must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
