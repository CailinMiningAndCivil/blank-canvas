import { Layout } from "@/components/layout/Layout";

const TermsAndConditions = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Legal</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground">Last updated: 13 May 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-foreground">
            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">1) Our Role & RTO Relationship</h2>
              <p className="text-muted-foreground leading-relaxed">
                We deliver training and assessments as a third‑party provider to All West Training Services (RTO 51925). Statements of Attainment are issued by All West upon successful competency and completion of requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                ASSESSMENT ONLY and VOC may be facilitated through All West Training Services in accordance with Australian Skills Quality Authority (ASQA) standards and the Standards for Registered Training Organisations (RTOs) 2015.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">2) Training Services</h2>

              <h3 className="font-display text-xl text-foreground mb-3 mt-6">2.1) Course Delivery & Assessments</h3>
              <p className="text-muted-foreground leading-relaxed">
                We aim to provide the best possible educational experience in mining and civil construction equipment operation; however, competency is determined by qualified assessors in accordance with industry training packages and ASQA requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You may be assessed as Not Yet Competent for units/assessments and may require further training.
              </p>

              <h3 className="font-display text-xl text-foreground mb-3 mt-6">2.2) Industry-specific Training</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our courses are designed for mining and civil construction environments. Training includes industry-specific safety protocols, equipment operation standards, and workplace competency requirements relevant to these industries.
              </p>

              <h3 className="font-display text-xl text-foreground mb-3 mt-6">2.3) International Students</h3>
              <p className="text-muted-foreground leading-relaxed">
                We welcome international students and provide guidance on qualification recognition and employment pathways. We are not migration agents — for official visa advice, consult qualified migration professionals.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">3) Recruitment Services</h2>

              <h3 className="font-display text-xl text-foreground mb-3 mt-6">3.1) Talent Pool Participation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through our recruitment portal, you may opt-in to join our talent pool of qualified operators. Participation is voluntary and you may withdraw at any time.
              </p>

              <h3 className="font-display text-xl text-foreground mb-3 mt-6">3.2) Candidate Matching</h3>
              <p className="text-muted-foreground leading-relaxed">
                We connect qualified candidates with employers and recruiters in mining and civil construction industries. Your personal information is not shared without your explicit consent for specific opportunities.
              </p>

              <h3 className="font-display text-xl text-foreground mb-3 mt-6">3.3) Placement Arrangements</h3>
              <p className="text-muted-foreground leading-relaxed">
                When successful matches occur between candidates and employers, Cailin Mining & Civil receives a variable placement fee from the employer. Fee structures vary based on role type, duration, and specific arrangements.
              </p>

              <h3 className="font-display text-xl text-foreground mb-3 mt-6">3.4) No Employment Guarantees</h3>
              <p className="text-muted-foreground leading-relaxed">
                Participation in our talent pool or completion of training courses does not guarantee employment. Job placement depends on industry demand, candidate suitability, and employer requirements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">4) Safety & Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                Follow all instructions, site rules and safety protocols in accordance with SafeWork Australia guidelines and mining/civil construction industry standards. We may remove a participant for unsafe/inappropriate conduct without refund.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All training occurs in live work environments with inherent risks associated with heavy machinery and construction activities.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">5) Pricing & Payments</h2>
              <p className="text-muted-foreground leading-relaxed">
                Prices are in AUD unless stated. Bookings/checkouts may be processed via Bookeo or other gateways. You are responsible for any bank/FX fees. Access may be suspended for failed payments.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All transactions are subject to the Australian Consumer Law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">6) Cancellations, Rescheduling & Refunds</h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Refund eligibility: cancellations 48 hours or more prior to the start time are eligible for a refund in accordance with the Australian Consumer Law.</li>
                <li>Within 48 hours / no‑show: generally non‑refundable; rescheduling may be offered at our discretion and subject to availability/admin fees.</li>
                <li>If we cancel or materially reschedule, you can choose a full refund or a new date.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Nothing here limits your rights under the Australian Consumer Law or guarantees provided under the Competition and Consumer Act 2010 (Cth).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">7) Certificates & Records</h2>
              <p className="text-muted-foreground leading-relaxed">
                Statements of Attainment are issued by All West Training Services (RTO 51925) after all requirements are met in accordance with ASQA standards.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Training records are maintained as required by vocational education legislation for the prescribed retention periods.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">8) Data Protection & Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                All personal information is handled in accordance with the Privacy Act 1988 (Cth) and Australian Privacy Principles administered by the Office of the Australian Information Commissioner (OAIC). See our{" "}
                <a href="/privacypolicy" className="text-primary hover:underline">Privacy Policy</a> for full details.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">9) Referrals & Affiliate Links</h2>

              <h3 className="font-display text-xl text-foreground mb-3 mt-6">9.1) Referral Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Referrals: If you click a clearly‑labelled referral link (e.g., résumé services or other partner), you authorise us to share your name and contact details with that partner so they can contact you. Partners are independent businesses. Review their terms and privacy.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Affiliate links: If you follow an affiliate link and opt‑in on the partner site, that partner handles your data under their Privacy Act 1988 (Cth) obligations. We do not share your personal data with affiliates; we may receive commissions.
              </p>

              <h3 className="font-display text-xl text-foreground mb-3 mt-6">9.2) Recruitment Referrals</h3>
              <p className="text-muted-foreground leading-relaxed">
                When we refer candidates to employers through our recruitment services, such referrals are subject to explicit candidate consent and separate agreements with recruiting partners.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">10) Affiliate Program (for Promoters)</h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Enrollment: affiliates sign up via our funnel; we assign a unique link.</li>
                <li>Attribution: leads who submit our form via an affiliate link are associated to that affiliate; future purchases by those leads may be commissionable. Attribution windows and rules are as configured in our system; we have sole discretion on final attribution.</li>
                <li>Commissions: paid monthly, rate is variable. Commissions exclude refunds/chargebacks; self‑purchases/fraud are not eligible.</li>
                <li>Data: affiliates receive no customer PII; only aggregated reporting in compliance with Privacy Act 1988 (Cth).</li>
                <li>Compliance: affiliates must follow applicable laws including the Competition and Consumer Act 2010 (Cth), Privacy Act 1988 (Cth), advertising policies (incl. Google/Meta), and our brand guidelines. We may suspend/terminate participation for non‑compliance or misuse.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">11) Marketing & Advertising</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use advertising (Google/Meta) so people can find our services and we measure performance using UTMs/GCLID and analytics in accordance with Privacy Act 1988 (Cth) requirements. You can opt‑out of marketing emails at any time.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">12) Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All course materials and site content are protected by copyright and other intellectual property laws. You may not reproduce/distribute without permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">13) Website Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                Do not introduce malware, attempt unauthorised access, or misuse the site. We may update content/policies at any time. Use of our website is subject to applicable Telecommunications Act 1997 (Cth) and Cybercrime Act 2001 (Cth) provisions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">14) Industry Standards & Compliance</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Our training services comply with relevant industry standards including:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Australian Skills Quality Authority (ASQA) requirements</li>
                <li>SafeWork Australia guidelines</li>
                <li>Mining and civil construction industry training packages</li>
                <li>Relevant state-based workplace safety legislation</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">15) International Students & Visa Considerations</h2>
              <p className="text-muted-foreground leading-relaxed">
                We provide general information about training eligibility and employment pathways for different visa categories. This information is general in nature and should not be relied upon as migration advice. Consult qualified migration agents for specific visa guidance.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We comply with Education Services for Overseas Students Act 2000 (EOSA) where applicable.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">16) Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the extent permitted by law, including the Australian Consumer Law, we exclude liability for indirect/incidental/consequential loss. Our total liability for paid services is capped at the amount paid for the affected service.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Nothing limits your rights under the Australian Consumer Law or Competition and Consumer Act 2010 (Cth), or liability we cannot exclude by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">17) Force Majeure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are not liable for delays or failures due to circumstances beyond our reasonable control, including but not limited to natural disasters, government actions, equipment failures, or industry-specific disruptions affecting mining and civil construction operations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">18) Dispute Resolution</h2>

              <h3 className="font-display text-xl text-foreground mb-3 mt-6">18.1) Internal Resolution</h3>
              <p className="text-muted-foreground leading-relaxed">
                We encourage early resolution of disputes. Contact us at{" "}
                <a href="mailto:info@cailinminingcivil.com" className="text-primary hover:underline">info@cailinminingcivil.com</a> to discuss any concerns.
              </p>

              <h3 className="font-display text-xl text-foreground mb-3 mt-6">18.2) External Options</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">Unresolved disputes may be referred to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Australian Competition and Consumer Commission (ACCC) for consumer matters</li>
                <li>Office of the Australian Information Commissioner (OAIC) for privacy matters</li>
                <li>ASQA for training-related complaints</li>
                <li>Relevant industry ombudsman services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">19) Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                Western Australia law governs these Terms in accordance with Australian federal legislation including the Competition and Consumer Act 2010 (Cth) and Privacy Act 1988 (Cth). Courts of WA have jurisdiction, subject to any exclusive federal jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">20) Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found invalid or unenforceable, the remaining provisions continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">21) Updates & Amendments</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms periodically. Continued use of our services after changes constitutes acceptance of updated Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">22) Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Email: <a href="mailto:info@cailinminingcivil.com" className="text-primary hover:underline">info@cailinminingcivil.com</a>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Address: 411–423 Caraban Rd, Caraban WA 6041, Australia
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These Terms & Conditions are governed by Australian law and comply with applicable federal and state legislation including the Competition and Consumer Act 2010 (Cth), Privacy Act 1988 (Cth), and relevant vocational education standards.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsAndConditions;
