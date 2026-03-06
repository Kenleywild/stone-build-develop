import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  project_type: z.string().trim().max(100).optional(),
  budget: z.string().trim().max(50).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "ADU / Guest House",
  "Room Addition",
  "Full Home Renovation",
  "New Construction",
  "Commercial Build-Out",
  "Other",
];

const budgetRanges = [
  "Under $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000 – $500,000",
  "$500,000+",
  "Not sure yet",
];

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    project_type: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);

      const { error } = await supabase.from("leads").insert({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        project_type: validatedData.project_type || null,
        budget: validatedData.budget || null,
        message: validatedData.message,
      });

      if (error) throw error;

      toast({
        title: "Request Submitted",
        description: "We'll be in touch within 24 hours to discuss your project.",
      });

      setFormData({ name: "", email: "", phone: "", project_type: "", budget: "", message: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again or call us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "border-0 border-b border-transparent bg-transparent px-0 text-sm md:text-base focus-visible:ring-0 focus-visible:border-foreground rounded-none h-10 md:h-11";

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container-narrow px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5 md:space-y-8">
          {/* Name */}
          <div className="border-b border-border pb-4 md:pb-6">
            <label className="block text-sm md:text-base font-medium text-foreground mb-1.5 md:mb-2">
              Name*
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First & Last Name"
              className={inputClass}
            />
            {errors.name && (
              <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="border-b border-border pb-4 md:pb-6">
            <label className="block text-sm md:text-base font-medium text-foreground mb-1.5 md:mb-2">
              Email Address*
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClass}
            />
            {errors.email && (
              <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="border-b border-border pb-4 md:pb-6">
            <label className="block text-sm md:text-base font-medium text-foreground mb-1.5 md:mb-2">
              Phone Number*
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(949) 508-6763"
              className={inputClass}
            />
            {errors.phone && (
              <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.phone}</p>
            )}
          </div>

          {/* Project Type */}
          <div className="border-b border-border pb-4 md:pb-6">
            <label className="block text-sm md:text-base font-medium text-foreground mb-1.5 md:mb-2">
              Project Type
            </label>
            <select
              name="project_type"
              value={formData.project_type}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-transparent px-0 text-sm md:text-base focus:ring-0 focus:border-foreground rounded-none h-10 md:h-11 text-foreground appearance-none cursor-pointer"
            >
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div className="border-b border-border pb-4 md:pb-6">
            <label className="block text-sm md:text-base font-medium text-foreground mb-1.5 md:mb-2">
              Estimated Budget
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b border-transparent px-0 text-sm md:text-base focus:ring-0 focus:border-foreground rounded-none h-10 md:h-11 text-foreground appearance-none cursor-pointer"
            >
              <option value="">Select a budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="border-b border-border pb-4 md:pb-6">
            <label className="block text-sm md:text-base font-medium text-foreground mb-1.5 md:mb-2">
              Tell Us About Your Project*
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project goals..."
              rows={3}
              className="border-0 border-b border-transparent bg-transparent px-0 text-sm md:text-base focus-visible:ring-0 focus-visible:border-foreground rounded-none resize-none min-h-[80px] md:min-h-[100px]"
            />
            {errors.message && (
              <p className="text-xs md:text-sm text-destructive mt-1.5">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-2 md:pt-4 text-center">
            <Button
              type="submit"
              variant="outline"
              size="lg"
              className="w-full md:w-auto px-8 md:px-12 h-11 md:h-12 text-sm md:text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
