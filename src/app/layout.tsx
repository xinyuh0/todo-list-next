import './globals.css'

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="transition-colors font-mono text-slate-950 bg-white">
        {children}
      </body>
    </html>
  )
}
