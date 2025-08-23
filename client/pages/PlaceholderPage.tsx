import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  features?: string[];
}

export default function PlaceholderPage({
  title,
  description,
  features = [],
}: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8">
              <CardHeader className="space-y-4">
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Construction className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold">{title}</CardTitle>
                <CardDescription className="text-lg">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {features.length > 0 && (
                  <div className="text-left">
                    <h3 className="font-semibold text-lg mb-3">
                      Coming Soon Features:
                    </h3>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-4">
                    This page is currently under development. In the meantime,
                    you can:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/">
                      <Button variant="outline" className="w-full sm:w-auto">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                      </Button>
                    </Link>
                    <Link to="/#contact">
                      <Button className="w-full sm:w-auto">
                        Contact Us for More Info
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500">
                  <p>
                    Need immediate assistance? Call us at{" "}
                    <strong>+250 788 123 456</strong>
                  </p>
                  <p className="mt-1">24/7 Emergency Service Available</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
