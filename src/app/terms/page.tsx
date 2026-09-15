import type { Metadata } from 'next';
import { LegalLayout } from '@/components/layout/legal-layout';

export const metadata: Metadata = {
  title: 'Terms of Service — BayleafX Atelier',
  description:
    'Terms and Conditions governing the use of the BayleafX digital atelier and preliminary architectural engagement protocols.',
  alternates: {
    canonical: 'https://bayleafx.com/terms',
  },
};

const TOC_ITEMS = [
  { id: 'acceptance', label: '1. Acceptance & Eligibility' },
  { id: 'informational-scope', label: '2. Informational Scope & Engagements' },
  { id: 'intellectual-property', label: '3. Intellectual Property Rights' },
  { id: 'client-deliverables', label: '4. Client Deliverables & IP Assignment' },
  { id: 'acceptable-use', label: '5. Acceptable Use & Prohibitions' },
  { id: 'metrics-disclaimer', label: '6. Agency Metrics & Benchmarks' },
  { id: 'digital-delivery', label: '7. Digital Delivery & Handover' },
  { id: 'third-parties', label: '8. Third-Party Integrations' },
  { id: 'disclaimer', label: '9. Warranty Disclaimers' },
  { id: 'liability', label: '10. Limitation of Liability' },
  { id: 'indemnity', label: '11. Indemnification' },
  { id: 'governing-law', label: '12. Governing Law & Dispute Resolution' },
  { id: 'modifications', label: '13. Modifications to Terms' },
  { id: 'contact', label: '14. Inquiries & Contact' },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="These Terms of Service govern your access to the BayleafX website, digital showcases, and communication channels."
      lastUpdated="March 10, 2026"
      activeRoute="/terms"
      tocItems={TOC_ITEMS}
    >
      <div className="rounded-xl border border-white/10 bg-[#121212] p-5 text-xs sm:text-sm text-[#D0CDC8] space-y-2">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[#52B788] font-bold">
          Contractual Architecture Note
        </p>
        <p className="leading-relaxed">
          These Terms govern access to our website and informational resources. All commercial software engineering, UI/UX design sprints, and strategic marketing deliverables are governed by customized, bilaterally executed Statements of Work (SOW) or Master Services Agreements (MSA).
        </p>
      </div>
      <section id="acceptance" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">01 //</span>
          Acceptance of Terms & Eligibility
        </h2>
        <p>
          By accessing or browsing the digital presence of <strong>[COMPANY LEGAL NAME]</strong> (&ldquo;BayleafX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) accessible via <code className="text-[#F5F2ED] bg-white/[0.06] px-1 font-mono text-xs">https://bayleafx.com</code>, you agree to be bound by these Terms of Service.
        </p>
        <p>
          Our platform is exclusively intended for commercial entities, enterprise organizations, and professional individuals representing corporate clients. By using this website, you represent and warrant that you possess the full legal power and corporate authority to agree to these Terms.
        </p>
      </section>
      <section id="informational-scope" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">02 //</span>
          Informational Scope & Initiation of Services
        </h2>
        <p>
          The materials, service descriptions, telemetry metrics, and architectural showcases on this website are published for informational, promotional, and preliminary evaluation purposes only.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>No Binding Commitment via Website Alone:</strong> Submitting a project brief or contact inquiry through our direct inquiry interface does not create a client relationship or bind BayleafX to deliver custom engineering services.</li>
          <li><strong>Execution of Formal SOW:</strong> A legally binding commercial engagement is formed only upon the mutual bilateral execution of a written Statement of Work (SOW), Master Services Agreement (MSA), or accepted written proposal, accompanied by the receipt of applicable project deposits.</li>
        </ul>
      </section>
      <section id="intellectual-property" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">03 //</span>
          Intellectual Property of BayleafX
        </h2>
        <p>
          All content published on this website—including but not limited to typography layouts, user interface designs, custom CSS tokens, animation curves, 3D/cybernetic artwork, visual renders, copy, graphics, and the &ldquo;BayleafX&rdquo; trademark and logotype—is the sole and exclusive intellectual property of <strong>[COMPANY LEGAL NAME]</strong> and protected by international copyright, trademark, and unfair competition laws.
        </p>
        <p>
          You may not scrape, reproduce, replicate, mirror, adapt, or distribute any proprietary design element, code component, or visual artwork from this website without explicit prior written authorization from BayleafX.
        </p>
      </section>
      <section id="client-deliverables" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">04 //</span>
          Client Deliverables & IP Assignment
        </h2>
        <p>
          For clients entering into formal project engagements with BayleafX:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Custom Deliverables:</strong> Upon full and final receipt of agreed milestone payments and fees specified in the applicable Statement of Work, BayleafX assigns to the client all right, title, and interest in and to the custom software code, bespoke Figma designs, and branded assets authored specifically for that client.</li>
          <li><strong>BayleafX Pre-Existing IP:</strong> BayleafX retains all rights in its internal scaffolding libraries, design token generators, starter frameworks, open-source dependencies, and generalized engineering techniques developed prior to or independently of the client engagement. Clients receive a perpetual, irrevocable, worldwide, royalty-free license to utilize such pre-existing IP as integrated into the final deliverables.</li>
        </ul>
      </section>
      <section id="acceptable-use" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">05 //</span>
          Acceptable Use & Prohibited Conduct
        </h2>
        <p>When accessing or interacting with our digital presence, you agree NOT to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li>Conduct automated scraping, crawling, or systematic data extraction without our prior written consent.</li>
          <li>Transmit unauthorized penetration testing, vulnerability scanning, or Denial of Service (DoS/DDoS) stress tests against our hosting infrastructure.</li>
          <li>Submit malicious payloads, cross-site scripts, SQL injections, or falsified inquiry submissions through our contact forms.</li>
          <li>Impersonate any individual, corporate officer, or representative of BayleafX or our partner network.</li>
          <li>Circumvent or tamper with security mechanisms, edge firewalls, or routing headers deployed by our CDN providers.</li>
        </ul>
      </section>
      <section id="metrics-disclaimer" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">06 //</span>
          Agency Metrics & Performance Benchmarks
        </h2>
        <p>
          Performance metrics referenced across this website (such as &ldquo;+150 Projects Shipped&rdquo;, &ldquo;98% Client Retention Rate&rdquo;, &ldquo;3.2s Avg. Load Improvement&rdquo;, and &ldquo;40% Avg. Conversion Lift&rdquo;) represent verifiable historical benchmarks achieved across representative engineering and optimization sprints.
        </p>
        <p className="text-xs text-[#A8A5A0]">
          Past performance does not constitute a legal guarantee or commercial warranty that every bespoke platform will achieve identical metric improvements. Engineering outcomes depend heavily on client stack constraints, third-party API dependencies, traffic volumes, and business domain variables.
        </p>
      </section>
      <section id="digital-delivery" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">07 //</span>
          Digital Delivery, Work Products & Handover
        </h2>
        <p>
          BayleafX develops purely digital intellectual property, software platforms, and brand systems. We do not sell or ship physical merchandise.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-[#A8A5A0]">
          <li><strong>Delivery Mechanisms:</strong> Client project milestones are delivered exclusively via secure digital mechanisms, including private Git repositories (GitHub / GitLab), cloud container registries, Figma workspace transfers, and staging URL deployments.</li>
          <li><strong>Review & Acceptance Windows:</strong> Formal acceptance criteria and technical punch-list inspection windows are governed by the applicable Statement of Work (typically fourteen (14) calendar days following milestone delivery notification).</li>
        </ul>
      </section>
      <section id="third-parties" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">08 //</span>
          Third-Party Integrations & External Links
        </h2>
        <p>
          Our application and client platforms frequently integrate with third-party software tools, headless APIs, and cloud services (such as Next.js, Vercel, Stripe, AWS, and modern headless CMS engines). We do not control and assume no responsibility for the independent availability, uptime, pricing changes, or terms of third-party platforms.
        </p>
      </section>
      <section id="disclaimer" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">09 //</span>
          Warranty Disclaimers
        </h2>
        <p className="uppercase text-xs font-mono tracking-wider text-[#A8A5A0]">
          THIS WEBSITE AND ITS DEMONSTRATIVE CONTENTS ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
        </p>
        <p>
          To the maximum extent permitted by applicable law, BayleafX disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, or that the website will operate uninterrupted, secure, or free from minor typographical or technical errors.
        </p>
      </section>
      <section id="liability" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">10 //</span>
          Limitation of Liability
        </h2>
        <p>
          To the fullest extent permitted by law, in no event shall <strong>[COMPANY LEGAL NAME]</strong>, its officers, directors, software architects, employees, or contractors be liable for any indirect, incidental, special, consequential, or punitive damages—including loss of profits, data corruption, business interruption, or loss of goodwill—arising out of or in connection with your access to, or inability to access, this website.
        </p>
        <p>
          For formal commercial engagements, monetary liability limitations, caps, and mutual indemnities are expressly defined in the applicable executed Master Services Agreement.
        </p>
      </section>
      <section id="indemnity" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">11 //</span>
          Indemnification
        </h2>
        <p>
          You agree to defend, indemnify, and hold harmless <strong>[COMPANY LEGAL NAME]</strong> and its affiliates from and against any third-party claims, liabilities, damages, judgments, awards, losses, costs, or expenses (including reasonable attorneys’ fees) arising out of your violation of these Terms of Service or your unauthorized, malicious use of this website.
        </p>
      </section>
      <section id="governing-law" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">12 //</span>
          Governing Law & Dispute Resolution
        </h2>
        <p>
          These Terms of Service and any dispute arising out of or related to them shall be governed by and construed in accordance with the substantive laws of <strong>[GOVERNING JURISDICTION]</strong>, without regard to its conflict of law principles.
        </p>
        <p>
          Any legal action, suit, or proceeding arising under these Terms shall be instituted exclusively in the competent courts located in <strong>[GOVERNING JURISDICTION]</strong>, and each party irrevocably submits to the personal jurisdiction of such courts.
        </p>
      </section>
      <section id="modifications" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">13 //</span>
          Modifications to Terms
        </h2>
        <p>
          We reserve the right to revise and update these Terms of Service at our sole discretion. Any changes become effective immediately upon posting to this page with an updated &ldquo;Last Updated&rdquo; timestamp. Your continued use of the website following the posting of revised Terms signifies your acceptance of the amendments.
        </p>
      </section>
      <section id="contact" className="space-y-4 pt-4 border-t border-white/[0.06]">
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F2ED] flex items-baseline gap-3">
          <span className="font-mono text-sm text-[#52B788]">14 //</span>
          Inquiries & Contact Information
        </h2>
        <p>
          For legal inquiries, contract verification, or terms clarification, please contact our legal counsel desk:
        </p>

        <div className="rounded-xl border border-white/10 bg-[#121212] p-6 space-y-3 font-mono text-xs text-[#A8A5A0]">
          <div><strong className="text-[#F5F2ED]">Legal Entity:</strong> [COMPANY LEGAL NAME]</div>
          <div><strong className="text-[#F5F2ED]">Counsel Desk:</strong> Corporate Governance & Legal Operations</div>
          <div><strong className="text-[#F5F2ED]">Contact Email:</strong> avirupd925@gmail.com / [SUPPORT EMAIL]</div>
          <div><strong className="text-[#F5F2ED]">Registered Address:</strong> [BUSINESS ADDRESS]</div>
          <div><strong className="text-[#F5F2ED]">Jurisdiction:</strong> [GOVERNING JURISDICTION]</div>
        </div>
      </section>
    </LegalLayout>
  );
}
