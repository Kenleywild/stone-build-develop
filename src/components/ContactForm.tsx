import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    // Load Buildertrend script
    const script = document.createElement("script");
    script.src = "https://buildertrend.net/leads/contactforms/js/btClientContactForm.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

        <iframe
          src="https://buildertrend.net/leads/contactforms/ContactFormFrame.aspx?builderID=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJidWlsZGVySWQiOjExMjQ0Nn0.JFL6siLZ8jhattU_Ouzuq_GwCb_nzup7QxHW953kFn8"
          scrolling="no"
          id="btIframe"
          style={{
            background: "transparent",
            border: "0px",
            margin: "0 auto",
            width: "100%",
            minHeight: "900px",
          }}
          title="Contact Form"
        />
      </div>
    </section>
  );
};

export default ContactForm;
