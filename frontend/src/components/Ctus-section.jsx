
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail, Phone,  MessageSquare, } from "lucide-react"
import { Link } from "react-router-dom";

export function CtusSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Explore
            <span className="gradient-text text-green-500"> Jharkhand?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of travelers who have discovered the magic of Jharkhand through our AI-powered platform. Your
            adventure awaits!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
             <Link
              to="/signup"
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Jharkhand
            </Link>
           {/* <p className="mt-6 text-gray-500">
                         Already have an account?{" "}
                         <Link
                           to="/signin"
                           className="text-indigo-600 hover:text-indigo-700 font-medium"
                         >
                           Sign in here
                         </Link>
                       </p> */}
          </div>
           <p className="mt-6 text-gray-500">
                         Already have an account?{" "}
                         <Link
                           to="/signin"
                           className="text-indigo-600 hover:text-indigo-700 font-medium"
                         >
                           Sign in here
                         </Link>
                       </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">Get in touch for any queries</p>
              <p className="text-primary font-semibold">hello@jharkhandgo.com</p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak with our travel experts</p>
              <p className="text-primary font-semibold">+91 98765 43210</p>
            </CardContent>
          </Card>

         <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
  <CardContent className="p-8">
    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <MessageSquare className="w-8 h-8 text-primary" />
      {/* Or you can use <Smartphone className="w-8 h-8 text-primary" /> */}
    </div>
    <h3 className="text-xl font-bold text-card-foreground mb-2">WhatsApp Us</h3>
    <p className="text-muted-foreground mb-4">Quick replies on WhatsApp</p>
    <p className="text-primary font-semibold">+91 98765 43210</p>
  </CardContent>
</Card>

        </div>
      </div>
    </section>
  )
}