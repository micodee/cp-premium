import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Building2,
  Package,
  Plane,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Electrical Installation",
    description:
      "Professional electrical systems design, installation, and maintenance for commercial and industrial facilities.",
    href: "/services#electrical",
  },
  {
    icon: Building2,
    title: "Construction",
    description:
      "Full-scale electrical construction projects from planning to completion with strict quality standards.",
    href: "/services#construction",
  },
  {
    icon: Package,
    title: "Trading",
    description:
      "Reliable supply chain for rice, cooking oil, and essential commodities with competitive pricing.",
    href: "/services#trading",
  },
  {
    icon: Plane,
    title: "Travel Agency",
    description:
      "Comprehensive travel solutions including corporate travel, tours, and ticketing services.",
    href: "/services#travel",
  },
  {
    icon: Users,
    title: "Outsourcing",
    description:
      "Skilled workforce solutions and HR management services tailored to your business needs.",
    href: "/services#outsourcing",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Integrated Solutions for Your Business
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            We deliver excellence across multiple sectors, providing
            comprehensive solutions that drive growth and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
