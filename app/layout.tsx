import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Dispute Tracker — Monitor & Win Payment Disputes',
  description: 'Track Stripe payment disputes, manage response deadlines, get AI evidence suggestions, and monitor chargeback ratios in real-time.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1f96f004-1dd2-472d-9c3b-4e2b31bf8ecc"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
