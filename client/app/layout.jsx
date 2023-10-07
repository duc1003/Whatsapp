import AccountProvider from './context/AccountProvider'
import './globals.css'


export const metadata = {
  title: 'Whatsapp',
  description: 'Whatsapp clone',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <AccountProvider>
        {children}
        </AccountProvider>
      </body>
    </html>
  )
}
