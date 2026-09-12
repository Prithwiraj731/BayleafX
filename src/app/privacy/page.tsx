import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/legal-layout';

export const metadata: Metadata = {
  title: 'Privacy Policy — BayleafX Atelier',
  description:
    'Detailed breakdown of how BayleafX collects, uses, protects, and handles personal data submitted through our direct inquiry forms and digital atelier.',
  alternates: {
    canonical: 'https://bayleafx.com/privacy',
  },
};

const TOC_ITEMS = [
  { id: 'overview', label: '1. Overview & Data Controller' },
  { id: 'data-collected', label: '2. Information We Collect' },
  { id: 'how-we-use', label: '3. Purpose & Legal Basis' },
  { id: 'storage-security', label: '4. Storage & Security' },
  { id: 'third-parties', label: '5. Third-Party Processors' },
  { id: 'cookies-tracking', label: '6. Cookies & Tracking Disclosure' },
  { id: 'data-retention', label: '7. Data Retention Policy' },
  { id: 'user-rights', label: '8. User Rights & Data Deletion' },
  { id: 'children', label: '9. Children’s Privacy' },
  { id: 'transfers', label: '10. International Transfers' },
  { id: 'contact', label: '11. Privacy Contact & Inquiries' },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="This Privacy Policy outlines how BayleafX Atelier processes, stores, and protects personal data provided by visitors, prospective clients, and partners."
      lastUpdated="March 10, 2026"
      activeRoute="/privacy"
      tocItems={TOC_ITEMS}
    >
      {/* Notice Callout */}
      <div className="rounded-xl border border-[#2D6A4F]/40 bg-[#2D6A4F]/[0.08] p-5 text-xs sm:text-sm text-[#F5F7F5] space-y-2">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[#52B788] font-bold">
          Operational Disclosure Notice
        </p>
        <p className="text-[#D0CDC8] leading-relaxed">
          BayleafX operates strictly as a professional engineering and design atelier. We do not sell personal data, monetize visitor traffic, or deploy cross-site tracking advertising networks. Data provided to us is used solely to evaluate technical specifications, prepare architectural proposals, and conduct professional engagements.
        </p>
      </div>

      {/* Section 1 */}
      <section id="overview" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">01 //</span>
          Overview & Data Controller
        </h2>
        <p>
          This Privacy Policy applies to the digital presence, software demonstrations, and inquiry forms operated by <strong>[COMPANY LEGAL NAME]</strong> (&ldquo;BayleafX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) located at <strong>[BUSINESS ADDRESS]</strong>.
        </p>
        <p>
          For the purposes of applicable data protection regulations, including the European General Data Protection Regulation (GDPR) and relevant state and international privacy statutes, <strong>[COMPANY LEGAL NAME]</strong> acts as the Data Controller for information submitted through this website.
        </p>
      </section>

      {/* Section 2 */}
      <section id="data-collected" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">02 //</span>
          Information We Collect
        </h2>
        <p>
          We only collect personal information that is directly relevant to initiating architectural evaluations, client communications, and providing engineering consultations.
        </p>
        
        <h3 className="font-display text-base font-bold text-[#F5F2ED] mt-4">A. Information You Voluntarily Provide</h3>
        <p>
          When you interact with our direct inquiry form or communicate with us via email, you may provide:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Identity Data:</strong> Full name and professional title.</li>
          <li><strong>Contact Data:</strong> Work email address and optional telephone number.</li>
          <li><strong>Project Specifications:</strong> Target deployment horizon (e.g. Immediate, 1–3 Months, Exploring), architectural requirements, technical stack details, and budget parameters.</li>
          <li><strong>Correspondence:</strong> Any feedback, technical inquiries, or materials transmitted directly to <code className="text-[#F5F2ED] bg-white/[0.06] px-1.5 py-0.5 rounded font-mono text-xs">hello@bayleafx.com</code>.</li>
        </ul>

        <h3 className="font-display text-base font-bold text-[#F5F2ED] mt-4">B. Information Collected Automatically</h3>
        <p>
          When you navigate our website, our hosting infrastructure automatically collects technical diagnostic logs necessary to deliver web traffic securely:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Device & Network Data:</strong> Internet Protocol (IP) address, operating system, browser type and version, language preferences, and referral URL.</li>
          <li><strong>Server Access Logs:</strong> HTTP status codes, request timestamps, and bytes transferred.</li>
        </ul>

        <h3 className="font-display text-base font-bold text-[#F5F2ED] mt-4">C. What We Do NOT Collect</h3>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li>We do <strong>not</strong> collect account passwords or biometric identity data (there is no user registration system on this site).</li>
          <li>We do <strong>not</strong> process credit card numbers or payment credentials on this website.</li>
          <li>We do <strong>not</strong> collect sensitive personal data such as race, religious beliefs, health status, or political affiliations.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="how-we-use" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">03 //</span>
          Purpose & Legal Basis for Processing
        </h2>
        <p>
          We process personal data solely based on legitimate, transparent legal grounds:
        </p>
        <div className="overflow-x-auto my-4 rounded-lg border border-white/10 bg-[#121212]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-white/10 bg-white/[0.02] font-mono uppercase tracking-wider text-[#F5F2ED]">
              <tr>
                <th className="p-3 sm:p-4">Purpose</th>
                <th className="p-3 sm:p-4">Data Categories</th>
                <th className="p-3 sm:p-4">Legal Ground (GDPR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-[#A8A5A0]">
              <tr>
                <td className="p-3 sm:p-4 font-medium text-[#F5F2ED]">Responding to architectural inquiries & project sizing</td>
                <td className="p-3 sm:p-4">Name, email, project specifications</td>
                <td className="p-3 sm:p-4">Steps prior to entering into a contract (Art. 6(1)(b))</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-[#F5F2ED]">Drafting proposals, Statements of Work (SOW) & Mutual NDAs</td>
                <td className="p-3 sm:p-4">Contact details, organizational information</td>
                <td className="p-3 sm:p-4">Performance of contract negotiations (Art. 6(1)(b))</td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-medium text-[#F5F2ED]">Network security, DDoS mitigation & uptime monitoring</td>
                <td className="p-3 sm:p-4">IP address, server diagnostic logs</td>
                <td className="p-3 sm:p-4">Legitimate interest in cyberdefense (Art. 6(1)(f))</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4 */}
      <section id="storage-security" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">04 //</span>
          Storage & Security Measures
        </h2>
        <p>
          We employ defense-in-depth security controls commensurate with high-grade engineering standards:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Encryption in Transit:</strong> All data transmitted to and from our site is enforced through modern Transport Layer Security (TLS 1.3 / HTTPS).</li>
          <li><strong>Access Segregation:</strong> Project inquiries are restricted strictly to authorized technical architects and directors.</li>
          <li><strong>Zero Client Log Exposition:</strong> Web server diagnostic telemetry is isolated and never publicly readable.</li>
        </ul>
        <p className="text-xs text-[#6E6B66]">
          While no Internet transmission is 100% infallible, we continuously monitor and patch vulnerabilities to protect your data against unauthorized access, destruction, or alteration.
        </p>
      </section>

      {/* Section 5 */}
      <section id="third-parties" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">05 //</span>
          Third-Party Processors & Infrastructure
        </h2>
        <p>
          We do not sell, license, or trade your personal data. We utilize selected third-party service providers solely to maintain operational uptime and deliver secure communications:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Hosting & Edge Delivery:</strong> [E.G., VERCEL INC. / CLOUDFLARE INC. / AWS] — provides containerized edge routing, SSL termination, and content delivery.</li>
          <li><strong>Corporate Communications:</strong> [E.G., GOOGLE WORKSPACE / RESEND] — manages email infrastructure for incoming inquiries directed to <code className="text-[#F5F2ED] bg-white/[0.06] px-1 font-mono text-xs">hello@bayleafx.com</code>.</li>
        </ul>
        <p>
          All service providers are bound by strict data processing agreements ensuring confidentiality and regulatory compliance.
        </p>
      </section>

      {/* Section 6 */}
      <section id="cookies-tracking" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">06 //</span>
          Cookies & Tracking Disclosure
        </h2>
        <p>
          Our application is designed with privacy-first engineering:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>No Marketing Trackers:</strong> We do not deploy advertising pixels (such as Meta Pixel, LinkedIn Insight Tag, or TikTok trackers).</li>
          <li><strong>Self-Hosted Typography:</strong> Fonts (Outfit, Inter, JetBrains Mono) are compiled and self-hosted through Next.js at build time. No external font server connections are initiated during your session.</li>
          <li><strong>Essential Infrastructure Only:</strong> Edge networking providers may utilize temporary security cookies (e.g. bot protection) strictly necessary to serve the web request.</li>
        </ul>
        <p>
          For comprehensive details on how browser storage and essential cookies operate, please consult our dedicated <a href="/cookies" className="text-[#52B788] hover:underline font-semibold">Cookie Policy</a>.
        </p>
      </section>

      {/* Section 7 */}
      <section id="data-retention" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">07 //</span>
          Data Retention Policy
        </h2>
        <p>
          We retain personal data only for as long as necessary to satisfy the commercial purposes outlined in this policy:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Inquiry Records:</strong> If an inquiry does not result in an ongoing commercial contract, records are purged or anonymized within <strong>[DATA RETENTION PERIOD, E.G., 24 MONTHS]</strong> unless a longer retention period is required by law.</li>
          <li><strong>Client Contractual Data:</strong> When an active Statement of Work is executed, commercial records and deliverables are retained in accordance with statutory accounting and contractual warranty obligations.</li>
          <li><strong>Server Access Logs:</strong> Ephemeral server diagnostics are automatically rotated and discarded within <strong>[E.G., 30 TO 90 DAYS]</strong>.</li>
        </ul>
      </section>

      {/* Section 8 */}
      <section id="user-rights" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">08 //</span>
          User Rights & Account / Data Deletion
        </h2>
        <p>
          Depending on your jurisdiction (including the EU/EEA, UK, California, and other jurisdictions), you possess statutory rights regarding your personal information:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="rounded-lg border border-white/10 bg-[#121212] p-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#52B788] font-bold mb-1">Right of Access & Rectification</h4>
            <p className="text-xs text-[#A8A5A0]">You may request a copy of the personal data we hold about you and correct any inaccurate information.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-[#121212] p-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#52B788] font-bold mb-1">Right to Erasure (Deletion)</h4>
            <p className="text-xs text-[#A8A5A0]">You may request complete deletion of your inquiry data from our internal records at any time.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-[#121212] p-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#52B788] font-bold mb-1">Right to Restrict Processing</h4>
            <p className="text-xs text-[#A8A5A0]">You may request that we suspend processing while a dispute or verification is resolved.</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-[#121212] p-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#52B788] font-bold mb-1">Right to Portability</h4>
            <p className="text-xs text-[#A8A5A0]">You may request the structured digital export of your submitted communication data.</p>
          </div>
        </div>
        <p>
          <strong>How to Exercise Your Rights:</strong> Submit an explicit request to <code className="text-[#F5F2ED] bg-white/[0.06] px-1 font-mono text-xs">hello@bayleafx.com</code> or our designated legal desk at <strong>[SUPPORT EMAIL]</strong>. We respond to all verified statutory privacy requests within thirty (30) calendar days at zero cost to you.
        </p>
      </section>

      {/* Section 9 */}
      <section id="children" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">09 //</span>
          Children’s Privacy
        </h2>
        <p>
          Our services are exclusively tailored for businesses, enterprise organizations, and commercial entities. We do not direct services to, nor knowingly collect personal data from, individuals under the age of 18 (or the age of majority in your jurisdiction). If you suspect that a minor has provided information through our inquiry form, please contact us immediately to have it purged.
        </p>
      </section>

      {/* Section 10 */}
      <section id="transfers" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">10 //</span>
          International Data Transfers
        </h2>
        <p>
          As an international engineering consultancy, our digital infrastructure and partners operate globally in <strong>[OPERATIONAL JURISDICTIONS, E.G., UNITED STATES, UNITED KINGDOM, AND EUROPEAN ECONOMIC AREA]</strong>.
        </p>
        <p>
          Where personal data is transferred across national borders, we ensure adequate protective mechanisms are deployed, including European Commission Standard Contractual Clauses (SCCs) and UK International Data Transfer Addendums where required by applicable law.
        </p>
      </section>

      {/* Section 11 */}
      <section id="contact" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">11 //</span>
          Privacy Contact & Inquiries
        </h2>
        <p>
          For any questions, concerns, or requests regarding this Privacy Policy or our data management procedures, please contact our legal governance team:
        </p>

        <div className="rounded-xl border border-white/10 bg-[#121212] p-6 space-y-3 font-mono text-xs text-[#A8A5A0]">
          <div><strong className="text-[#F5F2ED]">Legal Entity:</strong> [COMPANY LEGAL NAME]</div>
          <div><strong className="text-[#F5F2ED]">Attention:</strong> Privacy Governance Officer / Legal Desk</div>
          <div><strong className="text-[#F5F2ED]">Official Inquiries Email:</strong> hello@bayleafx.com / [SUPPORT EMAIL]</div>
          <div><strong className="text-[#F5F2ED]">Registered Business Address:</strong> [BUSINESS ADDRESS]</div>
          <div><strong className="text-[#F5F2ED]">Governing Jurisdiction:</strong> [GOVERNING JURISDICTION]</div>
        </div>
      </section>
    </LegalLayout>
  );
}
