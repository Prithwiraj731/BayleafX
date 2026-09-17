import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/legal-layout';

export const metadata: Metadata = {
  title: 'Privacy Policy | BayleafX Technologies',
  description:
    'Comprehensive privacy policy detailing how BayleafX Technologies collects, handles, and protects personal data from visitors and clients.',
  alternates: {
    canonical: 'https://www.bayleafx.com/privacy',
  },
};

const TOC_ITEMS = [
  { id: 'overview', label: '1. Overview & Data Controller' },
  { id: 'data-collected', label: '2. Information We Collect' },
  { id: 'how-we-use', label: '3. How We Use Your Information' },
  { id: 'what-we-never-do', label: '4. What We Never Do' },
  { id: 'third-parties', label: '5. Third-Party Providers' },
  { id: 'security', label: '6. Data Security & Encryption' },
  { id: 'retention', label: '7. Data Retention' },
  { id: 'user-rights', label: '8. Your Rights & Data Deletion' },
  { id: 'cookies', label: '9. Cookies & Tracking' },
  { id: 'children', label: '10. Children’s Privacy' },
  { id: 'contact', label: '11. Privacy Inquiries & Contact' },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="This Privacy Policy explains how BayleafX Technologies collects, uses, and protects your information when you visit our website or contact us."
      lastUpdated="September 2026"
      activeRoute="/privacy"
      tocItems={TOC_ITEMS}
    >
      <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-5 text-xs sm:text-sm text-slate-700 space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[#1B4332] font-bold">
          Privacy Commitment
        </p>
        <p className="leading-relaxed">
          BayleafX Technologies operates as an independent design and software engineering studio. We do not sell your personal data, monetize visitor traffic, or deploy intrusive cross-site advertising trackers. Any information you provide is used exclusively to evaluate project requirements, communicate with you, and deliver our services.
        </p>
      </div>

      <section id="overview" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">01 //</span>
          Overview &amp; Data Controller
        </h2>
        <p className="text-slate-600 leading-relaxed">
          This Privacy Policy applies to the website, communication channels, and inquiry interfaces operated by <strong className="text-slate-900">BayleafX Technologies</strong> (&ldquo;BayleafX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) accessible via <code className="text-[#1B4332] bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded font-mono text-xs">https://www.bayleafx.com</code>.
        </p>
        <p className="text-slate-600 leading-relaxed">
          For the purposes of data protection regulations (including the EU GDPR and applicable international data privacy standards), <strong className="text-slate-900">BayleafX Technologies</strong> acts as the Data Controller for personal data submitted through this website.
        </p>
      </section>

      <section id="data-collected" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">02 //</span>
          Information We Collect
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We collect only the minimal information necessary to respond to your inquiries and deliver quality software development services:
        </p>

        <h3 className="font-sans text-base font-bold text-slate-900 mt-4">A. Information You Voluntarily Provide</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900">Contact Details:</strong> Your name, business email address, and optional phone number.</li>
          <li><strong className="text-slate-900">Project Briefs:</strong> Information regarding your software project, target deadlines, design preferences, and estimated budget.</li>
          <li><strong className="text-slate-900">Direct Messages:</strong> Any correspondence sent directly to <code className="text-[#1B4332] bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded font-mono text-xs">bayleafxtechnologies@gmail.com</code>.</li>
        </ul>

        <h3 className="font-sans text-base font-bold text-slate-900 mt-4">B. Technical Logs Collected Automatically</h3>
        <p className="text-slate-600 leading-relaxed">
          When you browse our website, our hosting network automatically records standard technical logs to serve pages safely and protect against malicious traffic:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>IP address and approximate regional geolocation.</li>
          <li>Browser type, operating system, and device screen resolution.</li>
          <li>Referring URLs, pages requested, and server response codes.</li>
        </ul>
      </section>

      <section id="how-we-use" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">03 //</span>
          How We Use Your Information
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We use personal information exclusively for direct, legitimate business operations:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900">Responding to Inquiries:</strong> Reviewing project briefs and replying with custom technical assessments and quotes within 24 hours.</li>
          <li><strong className="text-slate-900">Delivering Client Services:</strong> Executing design prototypes, code repositories, staging previews, and production launches.</li>
          <li><strong className="text-slate-900">Security &amp; Abuse Prevention:</strong> Monitoring server uptime, preventing spam form submissions, and mitigating distributed attacks.</li>
          <li><strong className="text-slate-900">Legal Compliance:</strong> Maintaining standard commercial billing and tax records required by law.</li>
        </ul>
      </section>

      <section id="what-we-never-do" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">04 //</span>
          What We Never Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-900">No Selling or Renting Data</h4>
            <p className="text-xs text-slate-600">We never sell, rent, or trade your contact details or project information to data brokers or marketers.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-900">No Invasive Ad Trackers</h4>
            <p className="text-xs text-slate-600">We do not use third-party advertising tracking pixels or cross-site fingerprinting scripts on our website.</p>
          </div>
        </div>
      </section>

      <section id="third-parties" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">05 //</span>
          Third-Party Service Providers
        </h2>
        <p className="text-slate-600 leading-relaxed">
          To maintain high reliability, our platform utilizes established enterprise infrastructure:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900">Hosting &amp; Edge Delivery:</strong> Vercel Inc. — hosts our Next.js web application, provides SSL encryption, and delivers edge caching worldwide.</li>
          <li><strong className="text-slate-900">Communications:</strong> Google Workspace — provides secure email routing for direct client messages sent to <code className="text-[#1B4332] bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded font-mono text-xs">bayleafxtechnologies@gmail.com</code>.</li>
        </ul>
      </section>

      <section id="security" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">06 //</span>
          Data Security &amp; Encryption
        </h2>
        <p className="text-slate-600 leading-relaxed">
          All traffic between your browser and our website is protected by modern Transport Layer Security (TLS 1.3) encryption. We follow industry best practices for secure headers, access controls, and repository safeguards to prevent unauthorized data access.
        </p>
      </section>

      <section id="retention" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">07 //</span>
          Data Retention Policy
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We retain personal data only for as long as needed to fulfill the purposes outlined in this policy:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong className="text-slate-900">General Inquiries:</strong> Retained for up to 24 months to maintain context if you contact us again, or deleted immediately upon your request.</li>
          <li><strong className="text-slate-900">Client Project Data:</strong> Commercial invoices and project delivery records are kept in accordance with statutory business and accounting requirements.</li>
          <li><strong className="text-slate-900">Server Logs:</strong> Automated edge server diagnostic logs are rotated and discarded automatically within 30 to 90 days.</li>
        </ul>
      </section>

      <section id="user-rights" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">08 //</span>
          Your Rights &amp; Data Deletion
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Regardless of your physical location, we respect your fundamental privacy rights:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <h4 className="font-sans text-xs uppercase tracking-wider text-[#1B4332] font-bold mb-1">Right to Access</h4>
            <p className="text-xs text-slate-600">You can request a copy of any personal information we have stored about you.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <h4 className="font-sans text-xs uppercase tracking-wider text-[#1B4332] font-bold mb-1">Right to Deletion</h4>
            <p className="text-xs text-slate-600">You can request complete deletion of your contact information and messages from our active systems.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <h4 className="font-sans text-xs uppercase tracking-wider text-[#1B4332] font-bold mb-1">Right to Correction</h4>
            <p className="text-xs text-slate-600">You can request correction of any outdated or inaccurate contact details.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <h4 className="font-sans text-xs uppercase tracking-wider text-[#1B4332] font-bold mb-1">Zero Cost</h4>
            <p className="text-xs text-slate-600">All verified privacy requests are handled free of charge within 30 days of receipt.</p>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed">
          To exercise any of these rights, email us directly at <code className="text-[#1B4332] bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded font-mono text-xs">bayleafxtechnologies@gmail.com</code> with the subject line &ldquo;Privacy Request&rdquo;.
        </p>
      </section>

      <section id="cookies" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">09 //</span>
          Cookies &amp; Tracking Disclosure
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Our website uses only essential session and security mechanisms necessary to serve web requests and prevent DDoS attacks. For comprehensive details, please read our dedicated <a href="/cookies" className="text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-2">Cookie Policy</a>.
        </p>
      </section>

      <section id="children" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">10 //</span>
          Children’s Privacy
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Our services are intended exclusively for businesses, entrepreneurs, and professional organizations. We do not knowingly collect personal information from individuals under 18 years of age.
        </p>
      </section>

      <section id="contact" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">11 //</span>
          Privacy Inquiries &amp; Contact
        </h2>
        <p className="text-slate-600 leading-relaxed">
          For any questions, concerns, or requests regarding this Privacy Policy, please contact our team:
        </p>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2.5 font-sans text-xs sm:text-sm text-slate-700">
          <div><strong className="text-slate-900">Legal Entity:</strong> BayleafX Technologies</div>
          <div><strong className="text-slate-900">Official Website:</strong> https://www.bayleafx.com</div>
          <div><strong className="text-slate-900">Privacy Desk Email:</strong> bayleafxtechnologies@gmail.com</div>
          <div><strong className="text-slate-900">Response Window:</strong> Within 24–48 hours</div>
        </div>
      </section>
    </LegalLayout>
  );
}
