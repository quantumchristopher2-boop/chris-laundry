import ServiceList from "./components/ServiceList";
import Logo from "./components/Logo";

export default function HomePage() {
  return (
    <main style={{ padding: "24px", textAlign: "center" }}>
      {/* Logo */}
      <Logo size={100} />

      <h1>Chris Laundry</h1>
      <p>Premium laundry service with pickup and delivery in Enugu, Nigeria.</p>

      {/* Services */}
      <ServiceList />

      {/* Pay on Delivery */}
      <section style={{ marginTop: "32px" }}>
        <h2>Pay on Delivery</h2>
        <p>No online payment required. Pay when your laundry is delivered.</p>
      </section>
    </main>
  );
}