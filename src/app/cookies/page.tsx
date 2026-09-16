import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/legal-layout';

export const metadata: Metadata = {
  title: 'Cookie Policy — BayleafX Atelier',
  description:
    'Complete transparency regarding cookies, browser storage technologies, and tracking disclosures across the BayleafX digital atelier.',
  alternates: {
    canonical: 'https://bayleafx.com/cookies',
  },
};

const TOC_ITEMS = [
  { id: 'overview', label: '1. Overview & Privacy-First Philosophy' },
  { id: 'what-are-cookies', label: '2. What are Cookies & Web Storage?' },
  { id: 'cookie-audit', label: '3. Technical Audit & Inventory' },
  { id: 'categories', label: '4. Cookie Classification & Status' },
  { id: 'self-hosted', label: '5. Self-Hosted Infrastructure Assets' },
  { id: 'third-party-edge', label: '6. Edge Security & Cloud Providers' },
  { id: 'management', label: '7. How to Manage & Disable Cookies' },
  { id: 'updates', label: '8. Updates to This Policy' },
  { id: 'contact', label: '9. Inquiries & Contact' },
];

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Complete architectural disclosure regarding cookies, local storage mechanisms, and tracking technologies utilized across our digital platform."
      lastUpdated="March 10, 2026"
      activeRoute="/cookies"
      tocItems={TOC_ITEMS}
    >
      <div className="rounded-xl border border-white/10 bg-[#121212] p-5 text-xs sm:text-sm text-[#D0CDC8] space-y-2">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[#52B788] font-bold">
          Zero-Tracker Architecture Statement
        </p>
        <p className="leading-relaxed">
          BayleafX does not deploy commercial advertising pixels, third-party marketing cookies, or behavioral data trackers. Our web architecture is engineered to provide an extraordinary digital experience without invasive client tracking.
        </p>
      </div>
      <section id="overview" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">01 //</span>
          Overview & Privacy-First Philosophy
        </h2>
        <p>
          This Cookie Policy explains how <strong>[COMPANY LEGAL NAME]</strong> (&ldquo;BayleafX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) treats cookies, local browser storage, and related web technologies when you visit our website at <code className="text-[#F5F2ED] bg-white/[0.06] px-1 font-mono text-xs">https://bayleafx.com</code>.
        </p>
        <p>
          We believe high-performance engineering and user privacy go hand in hand. We minimize data storage to the absolute lowest threshold required to deliver responsive, secure web traffic.
        </p>
      </section>
      <section id="what-are-cookies" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">02 //</span>
          What are Cookies & Web Storage?
        </h2>
        <p>
          Cookies are small text strings placed on your device by websites you visit. They are widely used to maintain security, enable core website functionality, or gather statistical analytics.
        </p>
        <p>
          Modern web applications may also use related browser storage mechanisms, such as <code>localStorage</code>, <code>sessionStorage</code>, and in-memory application state, to preserve interface preferences (such as dark mode states or mobile drawer toggles).
        </p>
      </section>
      <section id="cookie-audit" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">03 //</span>
          Technical Codebase Audit & Inventory
        </h2>
        <p>
          Based on our technical audit of the production application codebase:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#A8A5A0]">
          <li>
            <strong className="text-[#F5F2ED]">No Marketing / Advertising Cookies:</strong> We do not load third-party ad tags (such as Google Tag Manager marketing pixels, Facebook Pixel, LinkedIn Insight Tag, TikTok Pixel, or retargeting networks).
          </li>
          <li>
            <strong className="text-[#F5F2ED]">No First-Party Persistent Tracking Cookies:</strong> BayleafX does not place first-party tracking identifiers to monitor your browsing behavior across external websites.
          </li>
          <li>
            <strong className="text-[#F5F2ED]">Transient In-Memory State Only:</strong> Interactive elements (such as service category filters, mobile navigation toggles, and contact form completion status) are held transiently in React client memory during your active page session and discarded upon reload.
          </li>
        </ul>
      </section>
      <section id="categories" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">04 //</span>
          Cookie Classification & Current Status
        </h2>
        <p>
          The table below discloses the classification of cookie technologies and their factual deployment status on this website:
        </p>

        <div className="overflow-x-auto my-4 rounded-lg border border-white/10 bg-[#121212]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-white/10 bg-white/[0.02] font-mono uppercase tracking-wider text-[#F5F2ED]">
              <tr>
                <th className="p-3 sm:p-4">Category</th>
                <th className="p-3 sm:p-4">Purpose</th>
                <th className="p-3 sm:p-4">Status on BayleafX</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-[#A8A5A0]">
              <tr>
                <td className="p-3 sm:p-4 font-medium text-[#F5F2ED]">Strictly Necessary / Edge Security</td>
                <td className="p-3 sm:p-4">Bot protection, DDoS mitigation, rate limiting, and edge routing handled by cloud CDN infrastructure.</td>
                <td className="p-3 sm:p-4 font-mono text-[#52B788] font-bold">Active as needed by Edge CDN</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-[#F5F2ED]">Functional & Preferences</td>
                <td className="p-3 sm:p-4">Remembering language choices or visual display themes across sessions.</td>
                <td className="p-3 sm:p-4 font-mono text-[#9E9B95]">Transient Session Memory Only</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-[#F5F2ED]">Analytics & Performance</td>
                <td className="p-3 sm:p-4">Aggregated visitor count, bounce rates, and traffic origin tracking.</td>
                <td className="p-3 sm:p-4 font-mono text-[#6E6B66]">Not Deployed on this Site</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-[#F5F2ED]">Advertising & Behavioral Profiling</td>
                <td className="p-3 sm:p-4">Tracking users across websites to serve personalized ad campaigns.</td>
                <td className="p-3 sm:p-4 font-mono text-[#6E6B66]">Strictly Prohibited & Not Deployed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section id="self-hosted" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">05 //</span>
          Self-Hosted Infrastructure Assets
        </h2>
        <p>
          Unlike conventional websites that make external HTTP calls to third-party CDNs to fetch fonts and scripts (which may allow those third parties to log visitor IP addresses or set tracking cookies), BayleafX builds and compiles its assets locally:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Typography:</strong> All font files (Outfit, Inter, JetBrains Mono) are compiled into the Next.js bundle and hosted directly from our own domain. No client requests are routed to Google Font servers at runtime.</li>
          <li><strong>Icons & Scripts:</strong> Lucide Icons and animation routines execute entirely within the client bundle without calling remote tracking endpoints.</li>
        </ul>
      </section>
      <section id="third-party-edge" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">06 //</span>
          Edge Security & Cloud Providers
        </h2>
        <p>
          Our application may be served through enterprise edge infrastructure providers (such as <strong>[E.G., VERCEL / CLOUDFLARE]</strong>). These providers may set strictly essential security cookies (such as <code className="text-[#F5F2ED] bg-white/[0.06] px-1 font-mono text-xs">__cf_bm</code> or equivalent cryptographic challenge tokens) to distinguish legitimate human visitors from malicious bot networks and prevent Distributed Denial of Service (DDoS) assaults.
        </p>
        <p className="text-xs text-[#A8A5A0]">
          These security cookies do not store personally identifiable profiles and expire automatically within transient intervals (typically 30 minutes to 24 hours).
        </p>
      </section>
      <section id="management" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">07 //</span>
          How to Manage & Disable Cookies
        </h2>
        <p>
          You have full control over cookie permissions through your web browser. You can configure your browser to block all cookies, accept only first-party cookies, or purge cookies whenever you close your browser window:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and Security &rarr; Third-Party Cookies.</li>
          <li><strong>Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Prevent cross-site tracking / Block all cookies.</li>
          <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy & Security &rarr; Enhanced Tracking Protection.</li>
          <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions &rarr; Manage and delete cookies.</li>
        </ul>
        <p className="text-xs text-[#6E6B66]">
          Note that because BayleafX does not depend on invasive cookies, disabling non-essential cookies will not impair your ability to browse our website or submit project inquiries.
        </p>
      </section>
      <section id="updates" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">08 //</span>
          Updates to This Policy
        </h2>
        <p>
          We may update this Cookie Policy if we introduce new operational integrations, analytics instrumentation, or infrastructure changes. Any modifications will be posted to this page with an updated &ldquo;Last Updated&rdquo; date.
        </p>
      </section>
      <section id="contact" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">09 //</span>
          Inquiries & Contact Information
        </h2>
        <p>
          If you have questions regarding our cookie practices or zero-tracker architecture, please contact our technical governance team:
        </p>

        <div className="rounded-xl border border-white/10 bg-[#121212] p-6 space-y-3 font-mono text-xs text-[#A8A5A0]">
          <div><strong className="text-[#F5F2ED]">Legal Entity:</strong> [COMPANY LEGAL NAME]</div>
          <div><strong className="text-[#F5F2ED]">Technical Governance:</strong> Web Architecture & Security Team</div>
          <div><strong className="text-[#F5F2ED]">Inquiries Email:</strong> bayleafxtechnologies@gmail.com</div>
          <div><strong className="text-[#F5F2ED]">Registered Address:</strong> [BUSINESS ADDRESS]</div>
        </div>
      </section>
    </LegalLayout>
  );
}
