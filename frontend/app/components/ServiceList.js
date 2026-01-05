import { services } from "../config/services";

export default function ServiceList() {
  return (
    <section style={{ marginTop: "24px" }}>
      <h2>Our Services</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {services.map((service) => (
          <li
            key={service.id}
            style={{
              marginBottom: "12px",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <strong>{service.name}</strong> <br />
            Category: {service.category} <br />
            Price: ${service.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </section>
  );
}