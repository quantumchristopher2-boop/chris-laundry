import ServiceList from "./components/ServiceList";

export default function HomePage() {
  return (
    <main style={{ padding: "24px" }}>
      <h1>Chris Laundry</h1>
      <p>Premium laundry service with pickup and delivery in Enugu, Nigeria.</p>

      {/* Services */}
      <ServiceList />

      <section style={{ marginTop: "32px" }}>
        <h2>Pay on Delivery</h2>
        <p>No online payment required. Pay when your laundry is delivered.</p>
      </section>

      <section style={{ marginTop: "32px" }}>
        <h2>Location</h2>
        <p>67–68 Abbey Monastery Layout, Nike, Abakpa, Enugu, Nigeria</p>
      </section>
    </main>
  );
}