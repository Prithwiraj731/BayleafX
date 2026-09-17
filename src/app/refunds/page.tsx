import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/legal-layout';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | BayleafX Technologies',
  description:
    'Commercial policies governing project deposits, milestone billing, cancellations, and the 30-day bug-fix guarantee for BayleafX Technologies.',
  alternates: {
    canonical: 'https://www.bayleafx.com/refunds',
  },
};

const TOC_ITEMS = [
  { id: 'custom-services', label: '1. Nature of Custom Services' },
  { id: 'deposits', label: '2. Project Deposits' },
  { id: 'milestones', label: '3. Milestone Reviews & Sign-Off' },
  { id: 'cancellation', label: '4. Cancellation by Client' },
  { id: 'agency-cancellation', label: '5. Cancellation by BayleafX' },
  { id: 'warranty-guarantee', label: '6. 30-Day Bug-Fix Guarantee' },
  { id: 'retainers', label: '7. Monthly Support & Retainers' },
  { id: 'billing-disputes', label: '8. Payment Disputes & Errors' },
  { id: 'contact', label: '9. Billing Inquiries & Contact' },
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      subtitle="Clear and transparent commercial policies regarding project deposits, milestone approvals, cancellations, and our quality guarantee."
      lastUpdated="September 2026"
      activeRoute="/refunds"
      tocItems={TOC_ITEMS}
    >
      <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-5 text-xs sm:text-sm text-slate-700 space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[#1B4332] font-bold">
          Custom Services Policy
        </p>
        <p className="leading-relaxed">
          BayleafX Technologies delivers custom, bespoke software engineering, web development, and digital design services tailored to each client’s exact specifications. Because our work represents dedicated time, senior talent allocation, and custom intellectual property, our refund and cancellation terms reflect the nature of professional services.
        </p>
      </div>

      <section id="custom-services" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">01 //</span>
          Nature of Custom Services
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Unlike pre-packaged software or physical goods, every website, custom application, and design system we build is created specifically for your brand. We commit our senior designers and developers exclusively to your project sprints.
        </p>
        <p className="text-slate-600 leading-relaxed">
          All client engagements are governed by this policy along with the specific milestones, timelines, and deliverables outlined in your project proposal or Statement of Work.
        </p>
      </section>

      <section id="deposits" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">02 //</span>
          Project Deposits
        </h2>
        <p className="text-slate-600 leading-relaxed">
          To reserve our team&apos;s schedule and commence architectural planning, an upfront project deposit (typically 30% to 50% of the total project value) is required before work begins.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong className="text-slate-900">Before Work Commences:</strong> If a client requests cancellation in writing before our team has begun discovery meetings, wireframing, or repository setup, the deposit will be refunded in full minus any direct transaction processing fees.
          </li>
          <li>
            <strong className="text-slate-900">After Work Has Started:</strong> Once technical discovery, wireframes, design mockups, or development sprints have been initiated, the initial deposit is non-refundable as it covers dedicated team capacity and non-recoverable hours.
          </li>
        </ul>
      </section>

      <section id="milestones" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">03 //</span>
          Milestone Reviews &amp; Sign-Off
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We believe in complete transparency. We structure our projects into clear sequential milestones (e.g. Discovery &amp; Wireframes ➔ Design Approval ➔ Frontend/Backend Development ➔ QA &amp; Launch).
        </p>
        <p className="text-slate-600 leading-relaxed">
          At each milestone, we deliver live previews or clickable prototypes for your review. Once a milestone is reviewed, approved, and paid for, the fees associated with that milestone are deemed earned and non-refundable.
        </p>
      </section>

      <section id="cancellation" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">04 //</span>
          Cancellation by Client
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Clients may cancel an ongoing project at any time by sending written notice via email to <code className="text-[#1B4332] bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded font-mono text-xs">bayleafxtechnologies@gmail.com</code>.
        </p>
        <p className="text-slate-600 leading-relaxed">
          In the event of cancellation:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>The client is billed only for work and hours completed up to the date of cancellation notice.</li>
          <li>Any unearned advance payments exceeding the completed work will be refunded promptly within 14 business days.</li>
          <li>All completed source code, Figma design assets, and documentation completed up to that point will be packaged and delivered to the client.</li>
        </ul>
      </section>

      <section id="agency-cancellation" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">05 //</span>
          Cancellation by BayleafX
        </h2>
        <p className="text-slate-600 leading-relaxed">
          In rare circumstances (such as an irreconcilable conflict, material breach of terms, or prolonged client unresponsiveness exceeding 30 days), BayleafX reserves the right to terminate an engagement.
        </p>
        <p className="text-slate-600 leading-relaxed">
          If BayleafX terminates the contract without cause, any unearned prepaid amounts will be refunded in full, and all work completed to date will be handed over immediately.
        </p>
      </section>

      <section id="warranty-guarantee" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">06 //</span>
          30-Day Bug-Fix Guarantee
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We stand behind everything we build. All custom software, web applications, and WordPress sites developed by BayleafX Technologies include a <strong className="text-slate-900">30-day post-launch warranty</strong> at no extra charge.
        </p>
        <p className="text-slate-600 leading-relaxed">
          If any technical bug, broken layout, or functional issue matching the agreed project scope arises within 30 days of launch, we will diagnose and fix it immediately at zero cost.
        </p>
      </section>

      <section id="retainers" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">07 //</span>
          Monthly Support &amp; Retainers
        </h2>
        <p className="text-slate-600 leading-relaxed">
          For clients enrolled in monthly maintenance, hosting, or marketing retainers:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>Monthly retainer agreements may be cancelled at any time with 14 days written notice prior to the next billing cycle.</li>
          <li>Retainer fees for the current active month are non-refundable once the billing cycle has commenced.</li>
        </ul>
      </section>

      <section id="billing-disputes" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">08 //</span>
          Payment Disputes &amp; Errors
        </h2>
        <p className="text-slate-600 leading-relaxed">
          If you notice any billing discrepancy, duplicate charge, or clerical error on an invoice, please notify us within 14 calendar days. We will investigate immediately and issue any necessary credit or direct refund within 5 to 7 business days.
        </p>
      </section>

      <section id="contact" className="space-y-4 pt-6 border-t border-slate-200/80">
        <h2 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[#1B4332]">09 //</span>
          Billing Inquiries &amp; Contact
        </h2>
        <p className="text-slate-600 leading-relaxed">
          For any questions regarding billing, invoices, deposits, or cancellation requests, contact our commercial desk:
        </p>

        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2.5 font-sans text-xs sm:text-sm text-slate-700">
          <div><strong className="text-slate-900">Company:</strong> BayleafX Technologies</div>
          <div><strong className="text-slate-900">Official Website:</strong> https://www.bayleafx.com</div>
          <div><strong className="text-slate-900">Billing &amp; Commercial Email:</strong> bayleafxtechnologies@gmail.com</div>
          <div><strong className="text-slate-900">Support Hours:</strong> Monday – Friday (Responses within 24 hours)</div>
        </div>
      </section>
    </LegalLayout>
  );
}
