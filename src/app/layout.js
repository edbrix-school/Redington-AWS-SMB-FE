
import "./globals.css";
import 'primereact/resources/themes/lara-light-blue/theme.css';   
import 'primereact/resources/primereact.min.css';                
import 'primeicons/primeicons.css';

export const metadata = {
  title: "Redington-AWS-SMB",
   description: "Welcome to Redington-AWS-SMB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
