import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/legal-layout';

export const metadata: Metadata = {
  title: 'Cookie Policy | BayleafX Technologies',
  description:
    'Information regarding cookies, browser storage, and privacy-first tracking policies on the BayleafX Technologies website.',
  alternates: {
    canonical: 'https://www.bayleafx.com/cookies',
  },
};

const TOC_ITEMS = [
  { id: 'overview', label: '1. Overview & Privacy Philosophy' },
  { id: 'what-are-cookies', label: '2. What Are Cookies?' },
  { id: 'cookies-we-use', label: '3. Cookies We Use' },
  { id: 'marketing-trackers', label: '4. No Ad or Marketing Cookies' },
  { id: 'self-hosted-fonts', label: '5. Self-Hosted Typography' },
  { id: 'manage-cookies', label: '6. How to Control Cookies' },
  { id: 'updates', label: '7. Policy Updates' },
  { id: 'contact', label: '8. Contact Information' },
];

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Complete transparency regarding cookies, browser storage, and security mechanisms used across our website."
      lastUpdated="September 2026"
      activeRoute="/cookies"
      tocItems={TOC_ITEMS}
    >
      <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-5 text-xs sm:text-sm text-slate-700 space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[#1B4332] font-bold">
          Zero-Tracker Guarantee
        </p>
        <p className="leading-relaxed">
          BayleafX Technologies is built with a privacy-first mindset. We do not use commercial advertising cookies, cross-site social media tracking pixels, or third-party marketing beacons. Our website uses only essential infrastructure cookies strictly necessary to keep our site secure, fast, and operational.
        </p>
      </div>

      <section id="overview" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">01 //</span>
          Overview &amp; Privacy Philosophy
        </h2>
        <p className="text-slate-600 leading-relaxed">
          This Cookie Policy explains how <strong className="text-slate-900">BayleafX Technologies</strong> (&ldquo;BayleafX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) treats cookies and browser storage technologies when you visit our website at <code className="text-[#1B4332] bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded font-mono text-xs">https://www.bayleafx.com</code>.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We believe premium software engineering and respect for user privacy go hand in hand. We minimize data storage to the absolute minimum required to deliver a responsive, secure digital experience.
        </p>
      </section>

      <section id="what-are-cookies" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">02 //</span>
          What Are Cookies?
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Cookies are small text files stored in your web browser by websites you visit. They are standard across modern websites and are used to remember user preferences, ensure secure connections, prevent cyberattacks, and help pages load quickly.
        </p>
      </section>

      <section id="cookies-we-use" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">03 //</span>
          Cookies We Use (Strictly Essential)
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We only deploy cookies that are strictly necessary for the technical operation and defense of our website:
        </p>
        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden my-3">
          <div className="p-4 border-b border-slate-100 bg-slate-50/70">
            <h4 className="font-sans text-xs uppercase tracking-wider font-bold text-slate-900">Essential Infrastructure Cookies</h4>
          </div>
          <div className="p-5 space-y-3 text-xs sm:text-sm text-slate-600">
            <div>
              <strong className="text-slate-900">Provider:</strong> Vercel Inc. (Global Edge Network)
            </div>
            <div>
              <strong className="text-slate-900">Purpose:</strong> Security routing, DDoS protection, bot filtering, and server load balancing.
            </div>
            <div>
              <strong className="text-slate-900">Lifespan:</strong> Session-only or up to 24 hours (temporary).
            </div>
            <div>
              <strong className="text-slate-900">Data Stored:</strong> Anonymous cryptographic identifiers for request verification. No personal identity data is stored.
            </div>
          </div>
        </div>
      </section>

      <section id="marketing-trackers" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">04 //</span>
          No Ad or Marketing Cookies
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We do not deploy any of the following intrusive tracking mechanisms on our website:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900">No Advertising Pixels:</strong> We do not use Meta (Facebook) Pixel, TikTok Pixel, Google Ads remarketing pixels, or LinkedIn Insight Tags.</li>
          <li><strong className="text-slate-900">No Cross-Site Profiling:</strong> We do not track what you browse on other websites or sell behavioral data to data brokers.</li>
          <li><strong className="text-slate-900">No Third-Party Cookies:</strong> We do not allow third-party advertisers to place tracking cookies on your device through our site.</li>
        </ul>
      </section>

      <section id="self-hosted-fonts" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">05 //</span>
          Self-Hosted Typography
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Our fonts (Outfit, Inter, and JetBrains Mono) are optimized and self-hosted locally within our Next.js project at build time. When you visit our website, your browser makes zero external connections to Google Fonts servers, preserving your privacy and speeding up page load times.
        </p>
      </section>

      <section id="manage-cookies" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">06 //</span>
          How to Control Cookies
        </h2>
        <p className="text-slate-600 leading-relaxed">
          You have full control over cookies through your web browser settings. You can choose to block or delete cookies at any time:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900">Google Chrome:</strong> Settings ➔ Privacy and security ➔ Third-party cookies.</li>
          <li><strong className="text-slate-900">Apple Safari:</strong> Settings ➔ Privacy ➔ Manage Website Data.</li>
          <li><strong className="text-slate-900">Mozilla Firefox:</strong> Settings ➔ Privacy &amp; Security ➔ Cookies and Site Data.</li>
          <li><strong className="text-slate-900">Microsoft Edge:</strong> Settings ➔ Cookies and site permissions.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          Please note that disabling strictly essential security cookies may affect your browser’s ability to load pages securely.
        </p>
      </section>

      <section id="updates" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">07 //</span>
          Policy Updates
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We may update this Cookie Policy periodically to reflect changes in our infrastructure or legal requirements. Any modifications will be posted directly to this page with an updated &ldquo;Last Updated&rdquo; date.
        </p>
      </section>

      <section id="contact" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">08 //</span>
          Contact Information
        </h2>
        <p className="text-slate-600 leading-relaxed">
          If you have any questions regarding our cookie practices, please contact us:
        </p>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2.5 font-sans text-xs sm:text-sm text-slate-700">
          <div><strong className="text-slate-900">Company:</strong> BayleafX Technologies</div>
          <div><strong className="text-slate-900">Official Website:</strong> https://www.bayleafx.com</div>
          <div><strong className="text-slate-900">Inquiries Email:</strong> bayleafxtechnologies@gmail.com</div>
        </div>
      </section>
    </LegalLayout>
  );
}
