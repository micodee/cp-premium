import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/home/cta-section";
import { Target, Eye, CheckCircle, Building, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Indopacific Group",
  description:
    "Learn about Indopacific Group, a trusted multi-sector company with over 15 years of experience in electrical, construction, trading, travel, and outsourcing services.",
};

const values = [
  {
    title: "Integrity",
    description:
      "We conduct business with honesty and transparency, building trust with every interaction.",
  },
  {
    title: "Excellence",
    description:
      "We strive for the highest standards in every project, never compromising on quality.",
  },
  {
    title: "Innovation",
    description:
      "We embrace new technologies and methods to deliver better solutions for our clients.",
  },
  {
    title: "Partnership",
    description:
      "We build lasting relationships, working alongside our clients as true partners.",
  },
];

const milestones = [
  { year: "2009", event: "Company founded in Jakarta" },
  { year: "2012", event: "Expanded into electrical construction" },
  { year: "2015", event: "Launched trading division" },
  { year: "2018", event: "Established travel agency services" },
  { year: "2021", event: "Introduced outsourcing solutions" },
  { year: "2024", event: "Serving 20+ cities nationwide" },
];

const legalInfo = [
  { label: "Company Registration", value: "NIB: 1234567890123" },
  { label: "Tax ID", value: "NPWP: 01.234.567.8-012.000" },
  { label: "Primary KBLI", value: "43210 - Electrical Installation" },
  { label: "Secondary KBLI", value: "46693 - Wholesale Trade" },
  { label: "Certification", value: "ISO 9001:2015 Certified" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
                About Indopacific Group
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
                A trusted multi-sector company delivering integrated solutions
                across Indonesia for over 15 years.
              </p>
            </div>
          </div>
        </section>

        {/* Company Profile */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Our Story
                </span>
                <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Building a Legacy of Excellence
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="text-pretty leading-relaxed">
                    Founded in 2009, Indopacific Group began as a specialized
                    electrical installation company serving the industrial
                    sector in Greater Jakarta. Our commitment to quality and
                    reliability quickly earned us a reputation as a trusted
                    partner.
                  </p>
                  <p className="text-pretty leading-relaxed">
                    Over the years, we strategically expanded our portfolio to
                    include construction services, commodity trading, travel
                    solutions, and workforce outsourcing. This diversification
                    allows us to offer integrated solutions that address
                    multiple business needs.
                  </p>
                  <p className="text-pretty leading-relaxed">
                    Today, we serve clients across 20+ cities in Indonesia,
                    supported by a team of 500+ dedicated professionals. Our
                    multi-sector expertise enables us to deliver unique value
                    and insights to every project.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Building className="h-5 w-5 text-primary" />
                  Company Milestones
                </h3>
                <div className="mt-6 space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.year} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          {index + 1}
                        </div>
                        {index < milestones.length - 1 && (
                          <div className="h-full w-px bg-border" />
                        )}
                      </div>
                      <div className="pb-6">
                        <div className="text-sm font-semibold text-primary">
                          {milestone.year}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {milestone.event}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-muted/50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Vision */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  Our Vision
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  To be the leading multi-sector company in Indonesia,
                  recognized for excellence, innovation, and positive impact on
                  communities and industries we serve.
                </p>
              </div>

              {/* Mission */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  Our Mission
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Deliver exceptional quality in every service we provide
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Build sustainable partnerships with clients and communities
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Empower our workforce with growth and development
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Contribute to national economic development
                  </li>
                </ul>
              </div>
            </div>

            {/* Values */}
            <div className="mt-16">
              <h2 className="text-center text-2xl font-bold text-foreground">
                Our Core Values
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-xl border border-border bg-card p-6 text-center"
                  >
                    <h3 className="text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">
                  Legal Information
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                Indopacific Group is a fully registered and compliant business
                entity in Indonesia.
              </p>
              <div className="mt-8 rounded-2xl border border-border bg-card">
                {legalInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className={`flex items-center justify-between px-6 py-4 ${
                      index < legalInfo.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="text-sm text-muted-foreground">
                      {info.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
