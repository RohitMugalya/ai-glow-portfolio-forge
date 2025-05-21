
import { useState } from "react";
import { Check, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  const contactCards = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "alex@aideveloper.com",
      link: "mailto:alex@aideveloper.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-secondary/50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactCards.map((card, index) => (
            <Card key={index} className="glass-morphism hover-card animate-fade-in">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                  {card.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{card.title}</h3>
                {card.link ? (
                  <a 
                    href={card.link} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {card.value}
                  </a>
                ) : (
                  <span className="text-muted-foreground">{card.value}</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto glass-morphism rounded-xl p-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          
          {isSubmitted ? (
            <div className="bg-green-500/20 p-6 rounded-lg flex items-center justify-center text-center">
              <div>
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="glass-morphism"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="glass-morphism"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can I help you" 
                  required 
                  className="glass-morphism"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  rows={6} 
                  required 
                  className="glass-morphism"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
