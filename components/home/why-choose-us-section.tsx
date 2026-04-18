import { Shield, Clock, Award, Handshake } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Reliability",
    description:
      "Over 15 years of consistent service delivery with a proven track record across multiple industries.",
  },
  {
    icon: Clock,
    title: "Timely Execution",
    description:
      "We understand the importance of deadlines and consistently deliver projects on schedule.",
  },
  {
    icon: Award,
    title: "Quality Standards",
    description:
      "Certified processes and compliance with national regulations ensure the highest quality outcomes.",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We build long-term relationships focused on understanding and meeting your unique business needs.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Partner You Can Trust
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              With over a decade of experience spanning multiple industries, we
              have built a reputation for excellence, integrity, and results.
              Our diversified portfolio allows us to offer unique insights and
              integrated solutions.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Employees
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Cities Served
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
