import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/legal-layout';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy — BayleafX Atelier',
  description:
    'Commercial policies governing project deposits, milestone billing, sprint retainers, cancellation procedures, and defect remediation for BayleafX engagements.',
  alternates: {
    canonical: 'https://bayleafx.com/refunds',
  },
};

const TOC_ITEMS = [
  { id: 'commercial-nature', label: '1. Bespoke Services Architecture' },
  { id: 'deposits', label: '2. Project Deposits & Mobilization' },
  { id: 'milestones', label: '3. Milestone Review & Sign-Off' },
  { id: 'refund-eligibility', label: '4. Non-Refundability of Delivered Labor' },
  { id: 'cancellation', label: '5. Cancellation Procedures & Notice' },
  { id: 'retainers', label: '6. Monthly Engineering Retainers' },
  { id: 'warranty', label: '7. Technical Warranty & Punch-List Cure' },
  { id: 'invoicing-disputes', label: '8. Payment Invoicing & Duplicate Charges' },
  { id: 'dispute-resolution', label: '9. Dispute Escalation Protocol' },
  { id: 'contact', label: '10. Commercial & Billing Inquiries' },
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      subtitle="Standard commercial governance regarding project mobilization deposits, milestone approvals, contract cancellations, and defect remediation."
      lastUpdated="March 10, 2026"
      activeRoute="/refunds"
      tocItems={TOC_ITEMS}
    >
      {/* Notice Callout */}
      <div className="rounded-xl border border-white/10 bg-[#121212] p-5 text-xs sm:text-sm text-[#D0CDC8] space-y-2">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[#52B788] font-bold">
          Professional Services Disclosure
        </p>
        <p className="leading-relaxed">
          BayleafX delivers bespoke, high-touch engineering and design consultancy. We do not sell off-the-shelf consumer retail goods or automated recurring self-serve SaaS subscriptions. All commercial transactions are governed by project-specific Statements of Work (SOW) executed between <strong>[COMPANY LEGAL NAME]</strong> and our corporate clients.
        </p>
      </div>

      {/* Section 1 */}
      <section id="commercial-nature" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">01 //</span>
          Bespoke Services Architecture
        </h2>
        <p>
          Every software platform, full-stack architecture, interactive design system, and digital growth campaign developed by <strong>[COMPANY LEGAL NAME]</strong> (&ldquo;BayleafX&rdquo;) is tailored exclusively to client specifications.
        </p>
        <p>
          Because our services represent direct allocations of specialized engineering hours, senior software architectural time, and custom creative work, commercial commitments and refund rights differ substantially from mass-market consumer transactions.
        </p>
      </section>

      {/* Section 2 */}
      <section id="deposits" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">02 //</span>
          Project Deposits & Mobilization Fees
        </h2>
        <p>
          Prior to initiating technical discovery, sprint scheduling, or team mobilization, clients are required to remit an upfront project deposit as stipulated in their Statement of Work (typically <strong>[DEPOSIT PERCENTAGE, E.G., 30% TO 50%]</strong> of the total estimated engagement fee).
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Pre-Kickoff Cancellation:</strong> If a client requests cancellation in writing before BayleafX commences architectural discovery, team onboarding, or sprint work, the deposit may be refunded minus an administrative preparation fee of <strong>[E.G., 10% OR ACTUAL DIRECT EXPENSES]</strong>.</li>
          <li><strong>Post-Commencement:</strong> Once architectural discovery, wireframing, repo configuration, or design sprints have commenced, mobilization deposits are strictly <strong>non-refundable</strong>, compensating BayleafX for dedicated capacity committed and non-recoverable labor.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="milestones" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">03 //</span>
          Milestone Review & Acceptance Sign-Off
        </h2>
        <p>
          Custom engineering projects are structured in phased milestones (e.g. Discovery & Wireframes, Design System Completion, Full-Stack Alpha Build, Production Release):
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Review Window:</strong> Upon delivery of each milestone (via staging deployment, GitHub pull request, or Figma prototype), the client has a formal review period of <strong>[REVIEW WINDOW, E.G., 10 TO 14 CALENDAR DAYS]</strong> to verify compliance with the agreed SOW specifications.</li>
          <li><strong>Deemed Acceptance:</strong> If the client does not provide written, substantiated rejection notices detailing non-conformance within this window, the milestone is deemed formally accepted, and the corresponding milestone invoice becomes due.</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section id="refund-eligibility" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">04 //</span>
          Non-Refundability of Delivered Labor
        </h2>
        <p>
          Once a milestone has been formally accepted or deployed to client production infrastructure, the fees associated with that milestone are <strong>strictly non-refundable</strong>.
        </p>
        <p className="text-xs text-[#A8A5A0]">
          Custom code and creative assets cannot be &ldquo;returned&rdquo; or repurposed. Rather than offering retroactive financial refunds for accepted deliverables, BayleafX provides an explicit technical warranty and remediation period as described in Section 7.
        </p>
      </section>

      {/* Section 5 */}
      <section id="cancellation" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">05 //</span>
          Cancellation Procedures & Notice
        </h2>
        <p>
          Either party may terminate an ongoing Statement of Work pursuant to the cancellation protocols defined in the executed agreement:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[#A8A5A0]">
          <li>
            <strong className="text-[#F5F2ED]">Written Notice:</strong> The terminating party must deliver written notice of cancellation via electronic mail to designated project leads with a minimum notice period of <strong>[NOTICE PERIOD, E.G., 14 OR 30 CALENDAR DAYS]</strong>.
          </li>
          <li>
            <strong className="text-[#F5F2ED]">Pro-Rata Settlement:</strong> Upon receipt of cancellation notice, the client is financially liable for all hours accrued, milestone progress achieved, and third-party commitments incurred up to the effective termination date.
          </li>
          <li>
            <strong className="text-[#F5F2ED]">Work Product Handover:</strong> Upon full payment of all accrued invoices and outstanding balances, BayleafX will transfer all current work-in-progress code repositories, Figma designs, and project documentation to the client.
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section id="retainers" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">06 //</span>
          Monthly Engineering & Growth Retainers
        </h2>
        <p>
          For clients engaging BayleafX on ongoing monthly retainers (e.g. continuous feature development, proactive cloud telemetry, or growth engineering):
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Billing Cycle:</strong> Retainer fees are invoiced and payable in advance of each monthly billing cycle (e.g. on the 1st of each calendar month).</li>
          <li><strong>Cancellation Notice:</strong> Retainer agreements may be canceled by providing written notice at least <strong>[RETAINER NOTICE, E.G., 30 DAYS]</strong> prior to the start of the next billing cycle.</li>
          <li><strong>Unused Allocation:</strong> Dedicated sprint allocations do not automatically roll over to subsequent months unless explicitly agreed in the Master Services Agreement. Pre-paid retainer fees for active billing months are non-refundable.</li>
        </ul>
      </section>

      {/* Section 7 */}
      <section id="warranty" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">07 //</span>
          Technical Warranty & Punch-List Cure Window
        </h2>
        <p>
          To ensure absolute client satisfaction without compromising professional delivery integrity, BayleafX provides an explicit technical warranty:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Cure Period:</strong> Following milestone delivery, BayleafX maintains a <strong>[WARRANTY WINDOW, E.G., 30-DAY]</strong> technical defect warranty.</li>
          <li><strong>Remediation Scope:</strong> If reproducible software bugs or design defects deviating from the mutually agreed Statement of Work are identified during this window, BayleafX will triage, patch, and remediate the issue at no additional charge to the client.</li>
          <li><strong>Exclusions:</strong> Warranty remediation does not cover new feature requests, modifications introduced by client internal developers, or outages caused by third-party API deprecations.</li>
        </ul>
      </section>

      {/* Section 8 */}
      <section id="invoicing-disputes" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">08 //</span>
          Invoicing, Payment Terms & Duplicate Charges
        </h2>
        <p>
          Invoicing protocols are governed as follows:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Payment Modalities:</strong> Invoices are settled via wire transfer, ACH, or commercial invoice platforms as designated by BayleafX.</li>
          <li><strong>Duplicate Charges:</strong> In the rare event of an inadvertent duplicate wire or banking transaction, BayleafX will immediately investigate and issue a full credit or refund of the duplicate amount within five (5) business days of verification.</li>
          <li><strong>Payment Terms:</strong> Invoices are subject to standard payment windows (typically <strong>[E.G., NET 15 DAYS]</strong> from invoice issuance). Late payments may incur interest at <strong>[E.G., 1.5% PER MONTH]</strong> or the maximum legal rate allowed by law.</li>
        </ul>
      </section>

      {/* Section 9 */}
      <section id="dispute-resolution" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">09 //</span>
          Dispute Escalation Protocol
        </h2>
        <p>
          If a commercial disagreement arises regarding milestone acceptance, scope interpretation, or invoicing, both parties agree to follow a structured escalation procedure:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Executive Consultation:</strong> Lead architectural and executive representatives from both parties will convene for a good-faith conference within ten (10) business days of written notice.</li>
          <li><strong>Independent Technical Review:</strong> If technical compliance is disputed, an agreed independent code auditor may evaluate the repository against the written SOW specifications.</li>
          <li><strong>Arbitration:</strong> If unresolved within thirty (30) days, the matter shall be submitted to confidential binding arbitration in <strong>[GOVERNING JURISDICTION]</strong>.</li>
        </ol>
      </section>

      {/* Section 10 */}
      <section id="contact" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">10 //</span>
          Commercial & Billing Inquiries
        </h2>
        <p>
          For invoice verification, project billing inquiries, or cancellation notices, please direct communications to our commercial desk:
        </p>

        <div className="rounded-xl border border-white/10 bg-[#121212] p-6 space-y-3 font-mono text-xs text-[#A8A5A0]">
          <div><strong className="text-[#F5F2ED]">Legal Entity:</strong> [COMPANY LEGAL NAME]</div>
          <div><strong className="text-[#F5F2ED]">Department:</strong> Commercial Finance & Contracts Desk</div>
          <div><strong className="text-[#F5F2ED]">Billing Contact:</strong> hello@bayleafx.com / [SUPPORT EMAIL]</div>
          <div><strong className="text-[#F5F2ED]">Registered Address:</strong> [BUSINESS ADDRESS]</div>
          <div><strong className="text-[#F5F2ED]">Governing Jurisdiction:</strong> [GOVERNING JURISDICTION]</div>
        </div>
      </section>
    </LegalLayout>
  );
}
