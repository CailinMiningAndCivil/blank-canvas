import { Layout } from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Legal</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: 13 May 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-foreground">
            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">1) Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cailin Mining & Civil Pty Ltd ("Cailin", "we", "us") provides mining & civil training in Western Australia and operates as a third‑party training provider for All West Training Services (RTO 51925). Statements of Attainment are issued by All West Training Services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Contact: <a href="mailto:info@cailinminingcivil.com" className="text-primary hover:underline">info@cailinminingcivil.com</a>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Address: 411–423 Caraban Rd, Caraban WA 6041, Australia
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This Policy explains how we collect, use, share and protect personal information across our website(s), funnels, embedded booking/checkout, recruitment portal, and our AI assistant in accordance with the Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">2) What We Collect</h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Identity & contact:</strong> name, email, phone, address, date of birth.</li>
                <li><strong className="text-foreground">Training data:</strong> enrolment details, course selections, RPL/VOC information, assessment outcomes, attendance notes, certification records.</li>
                <li><strong className="text-foreground">Payment data:</strong> processed via Bookeo/payment gateways; we do not store full card numbers.</li>
                <li><strong className="text-foreground">Support & communications:</strong> emails, messages, AI chat content.</li>
                <li><strong className="text-foreground">Attribution & analytics:</strong> UTM parameters, Google Click ID (GCLID), device/browser info, referring URLs, page interactions; identifiers from tags (Google/Meta).</li>
                <li><strong className="text-foreground">Affiliate/referral:</strong> information necessary to attribute referrals and pay commissions; we do not share customer PII with affiliates.</li>
                <li><strong className="text-foreground">Recruitment & employment data:</strong> work history, qualifications, skills assessments, availability, visa status, safety records, previous mining/civil construction experience, references, and other employment-related information.</li>
                <li><strong className="text-foreground">International student information:</strong> visa type and status, international qualifications for recognition purposes, English language proficiency assessments.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">3) How We Collect It</h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Forms, bookings, checkouts (Wix/GHL/Bookeo).</li>
                <li>Recruitment portal applications and candidate registrations.</li>
                <li>Cookies, localStorage, pixels and tags (GA4, Google Ads, Meta, GTM).</li>
                <li>Facebook Lead Ads or partner forms you submit.</li>
                <li>Our AI assistant when you interact with it.</li>
                <li>Assessment and competency evaluations.</li>
                <li>Industry contacts and referral networks.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">4) Why We Use It</h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Training Services:</strong> Deliver training/assessments; schedule sessions; manage enrolments, RPL, VOC; issue certifications via All West Training Services (RTO 51925).</li>
                <li><strong className="text-foreground">Payment Processing:</strong> Take payments; handle cancellations, rescheduling and refunds.</li>
                <li><strong className="text-foreground">Support Services:</strong> Provide support, answer questions (including via AI assistant).</li>
                <li><strong className="text-foreground">Marketing & Analytics:</strong> Attribution & analytics (UTMs/GCLID) to understand how you found us and which ads/content perform; Marketing (with consent): reminders, updates, offers; you can opt‑out anytime.</li>
                <li><strong className="text-foreground">Recruitment Services:</strong> Operate talent pool and candidate database; match qualified operators with potential employers; facilitate job placements in mining and civil construction industries; receive variable placement fees when successful matches occur.</li>
                <li><strong className="text-foreground">Compliance & Safety:</strong> Maintain records as required by vocational education legislation, workplace safety requirements, and industry standards.</li>
                <li><strong className="text-foreground">International Student Support:</strong> Assess qualification recognition, provide visa guidance (informational only), and facilitate pathways to employment where permissible.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">5) Recruitment Portal & Talent Pool</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Candidate Registration:</strong> Through our recruitment portal, you can opt-in to join our talent pool of workers. This includes candidates who have trained with us and those with external qualifications or experience.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Data Collection:</strong> When you join our talent pool, we collect employment history, qualifications, skills, availability, work preferences, and other relevant professional information. This data remains private within our database.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Matching Services:</strong> We use this information to identify potential candidates for recruiters and employers seeking trained personnel in mining and civil construction. We do not share your personal details without your explicit consent for specific opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Placement Fees:</strong> Cailin Mining & Civil receives a variable fee for successful candidate placements. Fee structures depend on various factors including role type, duration, and employer arrangements.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Candidate Control:</strong> You maintain control over your participation and can update your preferences or withdraw from the talent pool at any time.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">6) Legal Bases & Region Notes</h2>
              <p className="text-muted-foreground leading-relaxed">
                We follow the Privacy Act 1988 (Cth) and Australian Privacy Principles (APPs) administered by the Office of the Australian Information Commissioner (OAIC).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For international students and visitors: If you're in the EU/UK, we rely on consent, contract or legitimate interests as appropriate under GDPR. For other jurisdictions, we apply comparable privacy protections.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Industry Compliance:</strong> We also comply with relevant vocational education regulations administered by ASQA (Australian Skills Quality Authority) and state-specific training authority requirements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">7) Our AI Assistant</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our bot helps with course info and support triage. Conversations may be reviewed by trained staff to improve responses. Do not provide payment card details or highly sensitive information in chat. The bot may display affiliate or referral links; see Section 11.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">8) Advertising, Cookies & localStorage</h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>We use GA4, Google Ads (incl. auto‑tagging/GCLID), Meta Pixel, and GTM.</li>
                <li>Our site stores UTMs and GCLID in localStorage to preserve attribution across pages and when you return.</li>
                <li>Our consent banner lets you accept/decline non‑essential tracking; you can also adjust browser settings or clear storage.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">9) Sharing Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We may share limited data with:</p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>All West Training Services (RTO 51925) to arrange enrolments/issuance of Statements of Attainment.</li>
                <li>Service providers: hosting (Wix/GHL), Bookeo, email/CRM, analytics/ad platforms (Google/Meta), payment gateways, security/IT.</li>
                <li>Recruitment partners: Employers and recruiters only with your explicit consent for specific opportunities.</li>
                <li>Industry networks: Professional references and work history verification where consented.</li>
                <li>Government agencies: As required by the Privacy Act 1988 (Cth), vocational education legislation, or other applicable laws.</li>
                <li>Referral/partner businesses only when you consent (see Section 11).</li>
                <li>Affiliates: we do not share customer personal details with affiliates; only aggregated or masked reporting.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell personal data. All data sharing is conducted in accordance with the Australian Privacy Principles.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">10) International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some providers store/process data overseas (including USA, EU). We take reasonable steps to ensure comparable protections in accordance with APP 8 of the Privacy Act 1988 (Cth).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">11) Referrals, Partners & Affiliate Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Click‑to‑consent referrals:</strong> In some emails/pages/messages we provide a hyperlink to a third‑party service (e.g., resume writing or other partner). If you click such a link clearly labelled as a referral, you instruct and consent to us sharing your name and contact details with that third party for them to contact you about their services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Form‑based consent:</strong> In other cases you may be asked to submit a partner form yourself; submitting that form authorises the partner to contact you directly.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Partners are independent businesses. Review their privacy policy/terms before engaging. We are not responsible for their services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Affiliate links:</strong> We may display affiliate links (including via our AI assistant). If you follow an affiliate link and opt‑in on the partner site, the partner will handle your data under their policies. We do not share your personal data with affiliates; we receive attribution/commissions based on aggregated events.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">12) Industry-specific Considerations</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Mining & Civil Construction:</strong> We handle industry-specific data including safety certifications, equipment operation records, site access credentials, and work history relevant to mining and civil construction employment.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Safety Records:</strong> We may collect and maintain safety training records, incident reports, and competency assessments as required by industry standards and workplace safety legislation.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Security Clearances:</strong> Where relevant to employment opportunities, we may collect information about security clearances or eligibility for restricted site access.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">13) International Students</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Visa Information:</strong> We collect visa status information to provide guidance on training eligibility and employment pathways (informational purposes only — we are not migration agents).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Qualification Recognition:</strong> We process international qualifications and work experience for RPL (Recognition of Prior Learning) purposes.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">English Proficiency:</strong> We assess English language capabilities as required for training and workplace safety.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Employment Guidance:</strong> We provide information about employment opportunities available to different visa categories, but recommend consulting qualified migration agents for official visa advice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">14) Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Training Records:</strong> Student enrollment, assessment, and certification records are retained as required by vocational education legislation administered by ASQA and relevant state authorities, typically for a minimum of 30 years.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Recruitment Data:</strong> Candidate profiles are retained while you remain active in our talent pool. Inactive profiles are archived after 2 years of no engagement.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">General Records:</strong> Other data is deleted or de‑identified when no longer needed for business or legal purposes.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Right to Deletion:</strong> You may request deletion of your personal information, subject to our legal obligations to retain certain training and compliance records.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">15) Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use reasonable administrative, technical and physical safeguards in accordance with APP 11 of the Privacy Act 1988 (Cth). No method is 100% secure; contact us immediately if you suspect misuse.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">16) Your Choices & Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Under the Privacy Act 1988 (Cth) and Australian Privacy Principles, you have rights to:</p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Access:</strong> Request copies of your personal information.</li>
                <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                <li><strong className="text-foreground">Complaints:</strong> Lodge complaints with us or the Office of the Australian Information Commissioner (OAIC).</li>
                <li><strong className="text-foreground">Marketing opt‑out:</strong> Unsubscribe from marketing communications.</li>
                <li><strong className="text-foreground">Consent management:</strong> Manage tracking consent via our banner or browser settings.</li>
                <li><strong className="text-foreground">Recruitment control:</strong> Update your talent pool preferences or withdraw participation.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">17) Complaints Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">If you have concerns about our handling of your personal information:</p>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground">
                <li>Contact us first: <a href="mailto:info@cailinminingcivil.com" className="text-primary hover:underline">info@cailinminingcivil.com</a></li>
                <li>External complaints: You can complain to the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.oaic.gov.au</a> or 1300 363 992.</li>
              </ol>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">18) Changes & Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Policy periodically. Changes will be posted on our website with updated effective dates.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Questions/requests: <a href="mailto:info@cailinminingcivil.com" className="text-primary hover:underline">info@cailinminingcivil.com</a>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Postal Address: 411–423 Caraban Rd, Caraban WA 6041, Australia
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This Privacy Policy is governed by Australian law and complies with the Privacy Act 1988 (Cth) and Australian Privacy Principles administered by the Office of the Australian Information Commissioner.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
