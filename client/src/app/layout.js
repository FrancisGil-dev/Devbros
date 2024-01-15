
import './globals.css';



export const metadata = {
  title: 'DevBros || Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}