export const metadata = {
  title: "Chris Laundry",
  description: "Premium laundry service with pickup and delivery in Enugu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}