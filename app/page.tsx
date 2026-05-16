export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] border border-[#30363d] text-[#58a6ff] uppercase tracking-widest">
          Stripe Dispute Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Losing Money to<br />
          <span className="text-[#58a6ff]">Payment Disputes</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor every Stripe dispute in real-time, never miss a response deadline, and win more chargebacks with AI-powered evidence suggestions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Tracking — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { stat: 'Real-time', label: 'Dispute Alerts' },
            { stat: 'AI', label: 'Evidence Suggestions' },
            { stat: 'Auto', label: 'Deadline Tracking' },
            { stat: '<1%', label: 'Chargeback Target' },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Connect unlimited Stripe accounts',
              'Real-time dispute webhook notifications',
              'Response deadline countdown & alerts',
              'AI evidence suggestions by dispute reason',
              'Chargeback ratio dashboard & alerts',
              'Email reminders before deadlines',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it connect to my Stripe account?',
              a: 'You provide a restricted Stripe API key with read access to disputes. We also set up a webhook endpoint so you get instant notifications the moment a dispute is opened.'
            },
            {
              q: 'How does the AI evidence suggestion work?',
              a: 'Based on the dispute reason code (e.g. "product not received", "fraudulent"), we surface the exact evidence Stripe recommends and prompt you to upload the right documents before the deadline.'
            },
            {
              q: 'What happens if I miss a dispute deadline?',
              a: 'We send email reminders at 7 days, 3 days, and 24 hours before each deadline. The dashboard also shows a live countdown so you always know which disputes need immediate attention.'
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Stripe Dispute Tracker · $19/mo · All rights reserved
      </footer>
    </main>
  )
}
