import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Wrench, 
  Building, 
  Heart, 
  Snowflake, 
  Activity,
  Users,
  Award,
  Calendar,
  DollarSign
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle booking submission
    console.log("Booking submitted:", bookingForm);
  };

  const services = [
    {
      icon: <Snowflake className="h-8 w-8 text-primary" />,
      title: "HVAC Systems",
      description: "Complete installation, maintenance, and repair of heating, ventilation, and air conditioning systems for residential and commercial properties.",
      features: ["Installation", "Maintenance", "Emergency Repairs", "Energy Efficiency Audits"]
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Refrigeration",
      description: "Professional refrigeration services for commercial kitchens, cold storage, and industrial refrigeration systems.",
      features: ["Commercial Refrigeration", "Cold Storage Solutions", "Industrial Systems", "Temperature Monitoring"]
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Medical Gas Pipelines",
      description: "Specialized medical gas pipeline systems for healthcare facilities, ensuring safety and regulatory compliance.",
      features: ["Pipeline Installation", "Safety Inspections", "Regulatory Compliance", "Emergency Maintenance"]
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Preventive Maintenance",
      description: "Comprehensive maintenance plans to ensure optimal performance and extend the life of your systems.",
      features: ["Annual Plans", "Regular Inspections", "Performance Optimization", "Cost Savings"]
    }
  ];

  const pricingPlans = [
    {
      title: "Residential",
      price: "$300",
      period: "Annual Maintenance",
      description: "Perfect for homeowners who want reliable HVAC service",
      features: [
        "Annual system inspection",
        "Filter replacement",
        "Basic cleaning and tuning",
        "Priority booking",
        "15% discount on repairs"
      ],
      popular: false
    },
    {
      title: "Commercial",
      price: "$800",
      period: "Annual Maintenance",
      description: "Comprehensive service for business facilities",
      features: [
        "Quarterly inspections",
        "Filter replacements",
        "Deep system cleaning",
        "Energy efficiency reports",
        "24/7 emergency support",
        "20% discount on repairs"
      ],
      popular: true
    },
    {
      title: "Medical Gas Inspection",
      price: "$250",
      period: "Per Visit",
      description: "Specialized inspection for healthcare facilities",
      features: [
        "Complete pipeline inspection",
        "Pressure testing",
        "Safety compliance check",
        "Detailed report",
        "Regulatory documentation"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Hospital Administrator",
      content: "A/C Clinic installed our medical gas pipeline system flawlessly. Their attention to safety regulations and professional service exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      content: "Their commercial refrigeration maintenance has saved us thousands in potential downtime. Highly professional and always available when we need them.",
      rating: 5
    },
    {
      name: "Jennifer Williams",
      role: "Homeowner",
      content: "The annual maintenance plan is excellent value. Our HVAC system runs perfectly, and their emergency service is outstanding.",
      rating: 5
    }
  ];

  const team = [
    {
      name: "James Kalimba",
      role: "CEO & Founder",
      image: "/api/placeholder/150/150",
      experience: "15+ years in HVAC industry"
    },
    {
      name: "Grace Uwimana",
      role: "CFO",
      image: "/api/placeholder/150/150",
      experience: "10+ years in financial management"
    },
    {
      name: "David Nkurunziza",
      role: "CTO",
      image: "/api/placeholder/150/150",
      experience: "12+ years in technical operations"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  Trusted HVAC Solutions Since 2009
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional <span className="text-primary">HVAC</span> & Medical Gas Solutions
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Expert installation, maintenance, and emergency repair services for residential, commercial, 
                  and healthcare facilities. Available 24/7 with guaranteed quality and compliance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Service Now
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  Call for Emergency
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-gray-600">Professional HVAC Installation</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8" />
                  <div>
                    <div className="font-bold">Licensed & Insured</div>
                    <div className="text-sm opacity-90">Fully Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About A/C Clinic</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are Rwanda's leading HVAC and medical gas pipeline specialists, committed to excellence, 
              safety, and customer satisfaction in every project we undertake.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional HVAC, refrigeration, and medical gas pipeline solutions that ensure 
                  comfort, safety, and regulatory compliance for our clients across Rwanda.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Safety First</div>
                      <div className="text-gray-600">Adherence to all safety regulations and best practices</div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Quality Excellence</div>
                      <div className="text-gray-600">Precision and attention to detail in every project</div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Customer Satisfaction</div>
                      <div className="text-gray-600">24/7 support and responsive service delivery</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-gray-600">Expert Technicians</div>
              </Card>
              <Card className="text-center p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Compliance Rate</div>
              </Card>
              <Card className="text-center p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900">< 2hr</div>
                <div className="text-gray-600">Emergency Response</div>
              </Card>
              <Card className="text-center p-6">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900">30%</div>
                <div className="text-gray-600">Cost Savings</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive HVAC, refrigeration, and medical gas pipeline services for residential, 
              commercial, and healthcare facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear, upfront pricing with no hidden fees. Choose the plan that best fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative h-full ${plan.popular ? 'border-primary border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">{plan.price}</div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Service</h2>
              <p className="text-xl text-gray-600">
                Schedule your HVAC, refrigeration, or medical gas pipeline service today.
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      placeholder="+250 788 123 456"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type</Label>
                    <Select onValueChange={(value) => setBookingForm({...bookingForm, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hvac-installation">HVAC Installation</SelectItem>
                        <SelectItem value="hvac-maintenance">HVAC Maintenance</SelectItem>
                        <SelectItem value="hvac-repair">HVAC Repair</SelectItem>
                        <SelectItem value="refrigeration">Refrigeration Service</SelectItem>
                        <SelectItem value="medical-gas">Medical Gas Pipeline</SelectItem>
                        <SelectItem value="emergency">Emergency Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select onValueChange={(value) => setBookingForm({...bookingForm, time: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="emergency">Emergency (ASAP)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    value={bookingForm.message}
                    onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                    placeholder="Please describe your service needs, location details, or any specific requirements..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Calendar className="h-5 w-5 mr-2" />
                  Submit Booking Request
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading A/C Clinic to excellence in HVAC and medical gas solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-gray-600 mt-2">{member.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to experience professional HVAC service? Contact us today for consultation, 
              emergency service, or to schedule your maintenance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Our Office</h3>
                    <p className="text-gray-600">KG 123 Street, Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+250 788 123 456</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Service</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@acclinic.rw</p>
                    <p className="text-sm text-gray-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 8:00 AM - 4:00 PM</p>
                    <p className="text-sm text-primary font-medium">Emergency service available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500 mt-2">KG 123 Street, Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}