import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone must be less than 20 characters"),
  address: z.string().trim().max(255, "Address must be less than 255 characters").optional(),
  projectType: z.string().trim().max(100, "Project type must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "We'll be in touch within 24 hours to discuss your project.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        projectType: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Let's Transform <span className="font-medium">Your</span><br />
            Living Space.
          </h2>
          <p className="body-base text-muted-foreground mb-2">
            Connect with our team using the form below to request a consultation.
          </p>
          <p className="text-sm text-muted-foreground/70">
            *We always keep your information private and we never share your information with anyone outside of our organization.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          {/* Name */}
          <div className="border-b border-border pb-6">
            <label className="block text-base font-medium text-foreground mb-2">
              Name*
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Please enter your First & Last Name"
              className="border-0 border-b border-transparent bg-transparent px-0 text-base focus-visible:ring-0 focus-visible:border-foreground rounded-none"
            />
            {errors.name && <p className="text-sm text-destructive mt-2">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="border-b border-border pb-6">
            <label className="block text-base font-medium text-foreground mb-2">
              Email Address*
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Please provide the best email for electronic communication."
              className="border-0 border-b border-transparent bg-transparent px-0 text-base focus-visible:ring-0 focus-visible:border-foreground rounded-none"
            />
            {errors.email && <p className="text-sm text-destructive mt-2">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="border-b border-border pb-6">
            <label className="block text-base font-medium text-foreground mb-2">
              Phone Number*
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Please provide best phone number for call and text communication."
              className="border-0 border-b border-transparent bg-transparent px-0 text-base focus-visible:ring-0 focus-visible:border-foreground rounded-none"
            />
            {errors.phone && <p className="text-sm text-destructive mt-2">{errors.phone}</p>}
          </div>

          {/* Project Address */}
          <div className="border-b border-border pb-6">
            <label className="block text-base font-medium text-foreground mb-2">
              Project Address
            </label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Please provide your project address."
              className="border-0 border-b border-transparent bg-transparent px-0 text-base focus-visible:ring-0 focus-visible:border-foreground rounded-none"
            />
          </div>

          {/* Project Type */}
          <div className="border-b border-border pb-6">
            <label className="block text-base font-medium text-foreground mb-2">
              Project Type
            </label>
            <Input
              type="text"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              placeholder="e.g., Kitchen Remodel, New Construction, ADU"
              className="border-0 border-b border-transparent bg-transparent px-0 text-base focus-visible:ring-0 focus-visible:border-foreground rounded-none"
            />
          </div>

          {/* Message */}
          <div className="border-b border-border pb-6">
            <label className="block text-base font-medium text-foreground mb-2">
              Tell Us About Your Project*
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your project goals and any specific requirements."
              rows={4}
              className="border-0 border-b border-transparent bg-transparent px-0 text-base focus-visible:ring-0 focus-visible:border-foreground rounded-none resize-none"
            />
            {errors.message && <p className="text-sm text-destructive mt-2">{errors.message}</p>}
          </div>

          {/* Submit */}
          <div className="pt-4 text-center">
            <Button 
              type="submit" 
              variant="outline" 
              size="lg" 
              className="px-12"
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
