import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/legal-layout';

export const metadata: Metadata = {
  title: 'Terms of Service | BayleafX Technologies',
  description:
    'Terms and Conditions governing the use of the BayleafX Technologies website and software engineering engagement agreements.',
  alternates: {
    canonical: 'https://www.bayleafx.com/terms',
  },
};

const TOC_ITEMS = [
  { id: 'acceptance', label: '1. Acceptance & Eligibility' },
  { id: 'services-scope', label: '2. Services & Project Scope' },
  { id: 'intellectual-property', label: '3. Intellectual Property Rights' },
  { id: 'client-deliverables', label: '4. Client Ownership & Deliverables' },
  { id: 'client-obligations', label: '5. Client Responsibilities' },
  { id: 'payment-terms', label: '6. Fees & Payment Terms' },
  { id: 'acceptable-use', label: '7. Acceptable Use Policy' },
  { id: 'third-parties', label: '8. Third-Party Services & Hosting' },
  { id: 'warranty', label: '9. Warranty & 30-Day Support' },
  { id: 'liability', label: '10. Limitation of Liability' },
  { id: 'termination', label: '11. Term & Termination' },
  { id: 'governing-law', label: '12. Governing Law' },
  { id: 'contact', label: '13. Contact Information' },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="These Terms of Service govern your access to the BayleafX Technologies website, digital services, and project engagements."
      lastUpdated="September 2026"
      activeRoute="/terms"
      tocItems={TOC_ITEMS}
    >
      <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-5 text-xs sm:text-sm text-slate-700 space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[#1B4332] font-bold">
          Agreement Overview
        </p>
        <p className="leading-relaxed">
          These Terms govern your use of our website and outline our standard project engagement terms. All commercial software development, UI/UX design, and digital marketing projects are further detailed in individual proposals, Statements of Work (SOW), or invoices agreed upon between BayleafX Technologies and our clients.
        </p>
      </div>

      <section id="acceptance" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">01 //</span>
          Acceptance of Terms &amp; Eligibility
        </h2>
        <p className="text-slate-600 leading-relaxed">
          By accessing or using the website at <code className="text-[#1B4332] bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded font-mono text-xs">https://www.bayleafx.com</code> or by engaging <strong className="text-slate-900">BayleafX Technologies</strong> (&ldquo;BayleafX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) for digital services, you agree to comply with and be bound by these Terms of Service.
        </p>
        <p className="text-slate-600 leading-relaxed">
          If you are entering into this agreement on behalf of a company, organization, or other legal entity, you represent and warrant that you have the full legal authority to bind that entity to these Terms.
        </p>
      </section>

      <section id="services-scope" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">02 //</span>
          Services &amp; Project Scope
        </h2>
        <p className="text-slate-600 leading-relaxed">
          BayleafX Technologies provides custom web development, web application engineering, WordPress development, UI/UX design systems, and digital marketing services.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong className="text-slate-900">Inquiry &amp; Proposals:</strong> Submitting an inquiry through our website contact form or email does not automatically create a binding contract. A binding engagement is established once a written proposal, estimate, or Statement of Work is agreed upon and initial deposit payment is received.
          </li>
          <li>
            <strong className="text-slate-900">Scope Changes:</strong> Any request for work or features outside the mutually agreed project specifications will be quoted as a scope expansion or separate sprint milestone.
          </li>
        </ul>
      </section>

      <section id="intellectual-property" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">03 //</span>
          Intellectual Property of BayleafX
        </h2>
        <p className="text-slate-600 leading-relaxed">
          All materials published on this website—including but not limited to the brand identity, logo, typography, design assets, website layout, code components, and copywriting—are the exclusive intellectual property of BayleafX Technologies and are protected by applicable intellectual property and copyright laws.
        </p>
        <p className="text-slate-600 leading-relaxed">
          You may not copy, reproduce, scrape, modify, or distribute any proprietary design elements or content from our website without prior written authorization from BayleafX Technologies.
        </p>
      </section>

      <section id="client-deliverables" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">04 //</span>
          Client Ownership &amp; Deliverables
        </h2>
        <p className="text-slate-600 leading-relaxed">
          For clients partnering with BayleafX on custom development and design engagements:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong className="text-slate-900">Full Ownership Upon Final Payment:</strong> Upon full and final settlement of all agreed fees for a project or milestone, BayleafX transfers full ownership of custom-built source code, bespoke design files (e.g. Figma), and tailored branding assets to the client.
          </li>
          <li>
            <strong className="text-slate-900">Pre-Existing Scaffolding &amp; Open Source:</strong> BayleafX retains ownership of general software libraries, starter scaffolding, and standard design utility tokens. Clients receive a perpetual, non-exclusive, royalty-free license to use, modify, and deploy these components within their custom product.
          </li>
        </ul>
      </section>

      <section id="client-obligations" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">05 //</span>
          Client Responsibilities
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Smooth and rapid project execution requires collaborative communication. Clients agree to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Provide necessary brand assets, text content, media, credentials, and API keys in a timely manner.</li>
          <li>Designate an authorized point of contact for reviewing sprint deliverables and providing written feedback.</li>
          <li>Review and approve project milestones within a reasonable timeframe (typically within 5 business days).</li>
        </ul>
      </section>

      <section id="payment-terms" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">06 //</span>
          Fees &amp; Payment Terms
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Payment structures are clearly documented in each project agreement:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong className="text-slate-900">Milestone Payments:</strong> Standard fixed-price projects typically follow an upfront deposit (e.g. 30% to 50%) followed by progress milestone payments upon milestone completion.
          </li>
          <li>
            <strong className="text-slate-900">Invoices:</strong> Invoices are payable upon receipt or within the net terms specified on the invoice.
          </li>
          <li>
            <strong className="text-slate-900">Late Payments:</strong> If payment is significantly overdue, BayleafX reserves the right to pause ongoing development sprints until balances are settled.
          </li>
        </ul>
      </section>

      <section id="acceptable-use" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">07 //</span>
          Acceptable Use Policy
        </h2>
        <p className="text-slate-600 leading-relaxed">
          You agree not to use our website or services for any unlawful, fraudulent, or harmful purpose. Specifically, you agree not to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Transmit malicious code, viruses, automated web scraping bots, or denial-of-service attempts.</li>
          <li>Attempt unauthorized access to our internal systems, servers, or client repositories.</li>
          <li>Request the development of platforms that facilitate unlawful activities, fraud, or infringement of third-party rights.</li>
        </ul>
      </section>

      <section id="third-parties" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">08 //</span>
          Third-Party Services &amp; Hosting
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Our solutions often integrate with third-party providers (such as Vercel, AWS, Stripe, Google Cloud, Shopify, WordPress plugins, or email delivery systems). BayleafX Technologies is not responsible for outages, policy updates, pricing changes, or service interruptions caused directly by external third-party service providers.
        </p>
      </section>

      <section id="warranty" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">09 //</span>
          Warranty &amp; 30-Day Support
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We stand behind the quality of our work. BayleafX provides a <strong className="text-slate-900">complimentary 30-day bug-fix warranty</strong> starting from the final delivery date of any custom software project.
        </p>
        <p className="text-slate-600 leading-relaxed">
          If any reproducible bug or deviation from the agreed specifications is discovered within 30 days of deployment, our engineering team will remediate the issue promptly at zero additional charge. This warranty does not cover modifications made by third parties or unexpected breaking changes introduced by third-party APIs after launch.
        </p>
      </section>

      <section id="liability" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">10 //</span>
          Limitation of Liability
        </h2>
        <p className="text-slate-600 leading-relaxed">
          To the maximum extent permitted by applicable law, BayleafX Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, business, or goodwill.
        </p>
        <p className="text-slate-600 leading-relaxed">
          In no event shall our total aggregate liability arising out of or related to any project engagement exceed the total fees paid by the client to BayleafX Technologies for that specific project.
        </p>
      </section>

      <section id="termination" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">11 //</span>
          Term &amp; Termination
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Either party may terminate an ongoing service engagement by providing written notice via email if the other party materially breaches any provision of these Terms or the applicable Statement of Work and fails to cure such breach within 14 days of written notice.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Upon termination, the client is responsible for payment for all hours and milestones completed up to the date of termination, and BayleafX will release all completed project work.
        </p>
      </section>

      <section id="governing-law" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">12 //</span>
          Governing Law &amp; Dispute Resolution
        </h2>
        <p className="text-slate-600 leading-relaxed">
          These Terms and any project engagements shall be governed by and construed in accordance with applicable laws. In the event of any disagreement or dispute, both parties agree to first attempt resolution through good-faith amicable negotiation.
        </p>
      </section>

      <section id="contact" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">13 //</span>
          Contact Information
        </h2>
        <p className="text-slate-600 leading-relaxed">
          If you have any questions or require clarification regarding these Terms of Service, please reach out to our team:
        </p>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2.5 font-sans text-xs sm:text-sm text-slate-700">
          <div><strong className="text-slate-900">Legal Entity:</strong> BayleafX Technologies</div>
          <div><strong className="text-slate-900">Official Website:</strong> https://www.bayleafx.com</div>
          <div><strong className="text-slate-900">Support &amp; Inquiries Email:</strong> bayleafxtechnologies@gmail.com</div>
          <div><strong className="text-slate-900">Services:</strong> Web Applications, Full-Stack Software, Custom WordPress, UI/UX Design, and Digital Marketing</div>
        </div>
      </section>
    </LegalLayout>
  );
}
