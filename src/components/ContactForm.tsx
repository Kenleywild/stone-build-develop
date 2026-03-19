import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      project_type: form.project_type || null,
      budget: form.budget || null,
      message: form.message,
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("Thank you! We'll be in touch soon.");
      setForm({ name: "", email: "", phone: "", project_type: "", budget: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-2xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground mb-3 md:mb-4">
            Let's Transform <span className="font-medium">Your</span>
            <br />
            Living Space.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-2">
            Connect with our team using the form below to request a consultation.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground/70 leading-relaxed">
            *We always keep your information private and we never share your
            information with anyone outside of our organization.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
              <Input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone *</label>
              <Input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email *</label>
            <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="project_type" className="text-sm font-medium text-foreground">Project Type</label>
              <select
                id="project_type"
                name="project_type"
                value={form.project_type}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select a type</option>
                <option value="Kitchen Remodel">Kitchen Remodel</option>
                <option value="Bathroom Remodel">Bathroom Remodel</option>
                <option value="Addition">Addition</option>
                <option value="Whole Home Renovation">Whole Home Renovation</option>
                <option value="New Construction">New Construction</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="budget" className="text-sm font-medium text-foreground">Budget Range</label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select a range</option>
                <option value="Under $50k">Under $50k</option>
                <option value="$50k - $100k">$50k - $100k</option>
                <option value="$100k - $250k">$100k - $250k</option>
                <option value="$250k+">$250k+</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Tell us about your project *</label>
            <Textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="Describe your vision, timeline, and any details you'd like us to know..." rows={5} />
          </div>

          <Button type="submit" variant="dark" size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Request a Consultation"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
