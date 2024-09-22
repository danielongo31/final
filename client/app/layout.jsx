
export const metadata = {
  title: 'Ebenezer Lérida',
  description: 'Daniel Fernando Salinas',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
};