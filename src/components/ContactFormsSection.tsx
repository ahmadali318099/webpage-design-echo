
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import DemoRequestForm from './DemoRequestForm';
import SalesContactForm from './SalesContactForm';

const ContactFormsSection = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-xl border-gh-gray-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold text-gh-gray-800">Book A Demo</CardTitle>
              <CardDescription className="text-gh-gray-600 pt-2">
                We'll show you the platform and answer your questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DemoRequestForm />
            </CardContent>
          </Card>

          <Card className="shadow-xl border-gh-gray-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold text-gh-gray-800">Talk To Sales</CardTitle>
              <CardDescription className="text-gh-gray-600 pt-2">
                For teams with complex workflows or custom needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SalesContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactFormsSection;

