import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const FreeReturnPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Return for Free Policy | Cailin Mining & Civil"
        description="Read the Cailin Mining & Civil Return for Free policy, including eligibility, availability, refresher training requirements and student responsibilities."
        path="/free-return-policy"
      />
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Policy</p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Return for Free Policy
            </h1>
            <p className="text-muted-foreground">Cailin Mining &amp; Civil</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-foreground">
            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Purpose</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Return for Free program is a promotional benefit offered by Cailin Mining &amp; Civil to provide
                previous students with additional machine operating time and the opportunity to build experience
                and confidence following course completion.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The course fee paid by students covers their scheduled training course and allocated trainer time.
                Return for Free attendance is not included within the course fee and is provided as an additional
                opportunity when machine availability permits.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Eligibility</h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Return for Free is available for up to six (6) months from the student's course completion date.</li>
                <li>Students must activate their first Return for Free attendance within three (3) weeks of course completion.</li>
                <li>
                  Students who do not attend within three weeks of course completion, or who have a gap of more
                  than three weeks between Return for Free attendances, may require refresher training before
                  returning to the machine.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Refresher Training</h2>
              <p className="text-muted-foreground leading-relaxed">
                Return for Free attendance does not include trainer supervision, instruction, assessment, coaching,
                or refresher training.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Students are expected to operate independently and safely.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Where a student has forgotten operating procedures, requires instruction, supervision, re-training,
                or assistance from a trainer, refresher training will be required and charged at the current hourly
                rate. Refresher training must be booked in advance as there is never a spare trainer available to
                provide unscheduled training or supervision.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Once refresher training has been completed, the student may continue to access Return for Free
                opportunities in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Return for Free opportunities are made available where there is a gap in the training schedule and
                a machine is available for a minimum of one (1) hour.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Return for Free places are limited and capacity is restricted by machine availability, maintenance
                requirements, site operations, and the needs of students currently undertaking training.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The number of Return for Free opportunities available each month will vary depending on machine
                availability and training schedules.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground mt-4">
                <li>Return for Free opportunities are allocated on a first-come, first-served basis and may become fully booked.</li>
                <li>Attendance is not guaranteed.</li>
                <li>
                  A requested attendance date is not confirmed until approved by Cailin Mining &amp; Civil. Confirmation
                  may not be provided until up to 24 hours prior to attendance.
                </li>
                <li>Students should not make travel, accommodation, or other arrangements until attendance has been confirmed.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Priority of Training Operations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Students currently undertaking training will always receive priority access to machines, practical
                activities, and training resources.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Return for Free students must not impact, delay, interrupt, or reduce the training opportunities
                available to students currently undertaking training.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Return for Free students are utilising machine time that becomes available through gaps in the
                training schedule and are not allocated dedicated trainer time.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Student Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Arrive at the agreed time.</li>
                <li>Sign on upon arrival.</li>
                <li>Proceed directly to their allocated machine or designated waiting area.</li>
                <li>If the trainer is not immediately available, use the UHF radio located in the office to advise the trainer of your arrival.</li>
                <li>Remain visible to site staff while waiting for a machine to become available.</li>
                <li>Follow all site rules, safety requirements, and directions.</li>
                <li>Operate independently and safely without requiring trainer assistance.</li>
                <li>Immediately stop work and seek assistance if unsure of any task that may affect safety.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">Non-Attendance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Students who fail to attend a confirmed Return for Free booking without reasonable notice may lose
                access to future Return for Free opportunities.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-4">General Conditions</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Return for Free program is a promotional benefit provided by Cailin Mining &amp; Civil and may be
                amended, restricted, suspended, or withdrawn at any time.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Participation in the Return for Free program constitutes acceptance of this policy.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Cailin Mining &amp; Civil reserves the right to refuse Return for Free access where a student presents a
                safety risk, requires excessive supervision, fails to follow site requirements, or does not comply with
                this policy.
              </p>
            </section>

            <section className="text-center pt-4">
              <p className="text-muted-foreground">
                Ready to check your eligibility?{" "}
                <Link to="/free-returns" className="text-primary hover:underline">
                  Go to Free Returns
                </Link>
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeReturnPolicy;
