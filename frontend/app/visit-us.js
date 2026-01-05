import Logo from "./components/Logo";

export default function VisitUsPage() {
  const googleMapLink =
    "https://www.google.com/maps/search/?api=1&query=6.52202,7.52456";

  return (
    <main style={{ padding: "24px", textAlign: "center" }}>
      {/* Logo */}
      <Logo size={80} />

      <h1>Visit Us</h1>
      <p>We are located in Enugu, Nigeria. Find us below:</p>

      {/* Address */}
      <p>
        <a
          href={googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00A99D", textDecoration: "underline" }}
        >
          67–68 Abbey Monastery Layout, Nike, Abakpa, Enugu, Nigeria
        </a>
      </p>

      {/* Embedded Mini Map */}
      <div style={{ marginTop: "12px", borderRadius: "8px", overflow: "hidden" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.8548315519117!2d7.52456!3d6.52202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e6aaee7a02c7f%3A0x0!2sAbbey%20Monastery%20Layout%2C%20Nike%2C%20Abakpa%2C%20Enugu!5e0!3m2!1sen!2sng!4v1701926829382!5m2!1sen!2sng"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info */}
      <section style={{ marginTop: "24px" }}>
        <h2>Contact Us</h2>
        <p>Phone: 07031682147</p>
        <p>WhatsApp: 08083148630</p>
        <p>Email: quantumchristopher2@gmail.com</p>
      </section>
    </main>
  );
}