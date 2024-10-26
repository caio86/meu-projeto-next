
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>teste de produtos</h1>
      {children}
    </>
  );
}
