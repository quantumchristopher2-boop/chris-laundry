import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { fetchServices } from "../config/services";

export default function OrderPage() {
  const [services, setServices] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [pickup, setPickup] = useState(true);
  const [delivery, setDelivery] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadServices() {
      const data = await fetchServices();
      setServices(data);
      if (data.length > 0) setSelectedService(data[0].id);
    }
    loadServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "orders"), {
        customerName,
        phone,
        email,
        serviceId: selectedService,
        quantity,
        pickup,
        delivery,
        status: "pending",
        timestamp: serverTimestamp(),
      });
      setMessage("✅ Order submitted successfully!");
      setCustomerName("");
      setPhone("");
      setEmail("");
      setSelectedService(services[0].id);
      setQuantity(1);
      setPickup(true);
      setDelivery(false);
    } catch (error) {
      console.error("Error submitting order:", error);
      setMessage("❌ Failed to submit order. Try again.");
    }
  };

  const currentService = services.find((s) => s.id === selectedService) || {};

  return (
    <main style={{ padding: "24px", maxWidth: "480px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>Place Your Order</h1>
      {message && <p style={{ textAlign: "center", fontWeight: "bold" }}>{message}</p>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <input type="text" placeholder="Full Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} />
        <input type="email" placeholder="Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} />

        <div style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #ccc", borderRadius: "8px", padding: "8px" }}>
          <img src={currentService.image} alt={currentService.name} width="60" height="60" style={{ borderRadius: "8px" }} />
          <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} style={{ flex: 1, padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - ${service.price.toFixed(2)}
              </option>
            ))}
          </select>
        </div>

        <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label><input type="checkbox" checked={pickup} onChange={() => setPickup(!pickup)} /> Pickup</label>
          <label><input type="checkbox" checked={delivery} onChange={() => setDelivery(!delivery)} /> Delivery</label>
        </div>

        <button type="submit" style={{ padding: "14px", backgroundColor: "#00A99D", color: "#fff", borderRadius: "8px", fontWeight: "bold", fontSize: "16px", cursor: "pointer" }}>
          Submit Order
        </button>
      </form>
    </main>
  );
}