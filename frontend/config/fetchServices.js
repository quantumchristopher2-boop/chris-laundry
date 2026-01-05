export async function fetchServices() {
  const response = await fetch("/config/services.json");
  const data = await response.json();
  return data;
}