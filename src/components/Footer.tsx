import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-16 md:py-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-sans text-sm font-semibold tracking-widest uppercase text-cream">
                Stone Development
              </span>
            </Link>
            <p className="body-sm text-cream/50 max-w-xs">
              Full-service residential and commercial construction delivering exceptional quality, transparency, and craftsmanship.
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/70 mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {["Los Angeles County", "Orange County", "Ventura County", "San Bernardino County"].map(
                (area) => (
                  <li key={area}>
                    <span className="text-sm text-cream/50">{area}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/70 mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-cream/50">
                  1 Jenner Suite 150, Irvine, CA 92618
                </span>
              </li>
              <li>
                <a
                  href="tel:+19495086763"
                  className="text-sm text-cream/50 hover:text-cream transition-colors"
                >
                  (949) 508-6763
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@stonedevelopmentinc.com"
                  className="text-sm text-cream/50 hover:text-cream transition-colors"
                >
                  info@stonedevelopmentinc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            © {currentYear} Stone Development Inc. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            License #1146382 | Licensed, Bonded & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
