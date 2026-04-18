import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/home/cta-section";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Building2,
  Package,
  Plane,
  Users,
  ArrowRight,
  CheckCircle,
  Wrench,
  Factory,
  Wheat,
  Droplets,
  Globe,
  Ticket,
  UserCheck,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Indopacific Group",
  description:
    "Explore our comprehensive services: electrical installation, construction, trading, travel agency, and outsourcing solutions.",
};

const serviceCategories = [
  {
    id: "electrical",
    icon: Zap,
    title: "Electrical & Construction",
    description:
      "Complete electrical and construction solutions for industrial and commercial projects.",
    services: [
      {
        icon: Zap,
        name: "Electrical Installation",
        description:
          "Design, installation, and commissioning of electrical systems for factories, offices, and commercial buildings.",
        features: [
          "High & low voltage systems",
          "Power distribution panels",
          "Lighting systems",
          "Grounding & protection",
        ],
      },
      {
        icon: Factory,
        name: "Industrial Electrical",
        description:
          "Specialized electrical solutions for manufacturing facilities and industrial complexes.",
        features: [
          "Motor control centers",
          "PLC & automation",
          "Industrial lighting",
          "Emergency power systems",
        ],
      },
      {
        icon: Building2,
        name: "Construction MEP",
        description:
          "Mechanical, electrical, and plumbing systems for construction projects.",
        features: [
          "HVAC systems",
          "Fire protection",
          "Building automation",
          "Energy efficiency",
        ],
      },
      {
        icon: Wrench,
        name: "Maintenance Services",
        description:
          "Ongoing maintenance and support for electrical infrastructure.",
        features: [
          "Preventive maintenance",
          "Emergency repairs",
          "System upgrades",
          "Annual inspections",
        ],
      },
    ],
  },
  {
    id: "trading",
    icon: Package,
    title: "Trading",
    description:
      "Reliable supply chain for essential commodities with competitive pricing and nationwide distribution.",
    services: [
      {
        icon: Wheat,
        name: "Rice Trading",
        description:
          "Quality rice supply for government programs, retail, and wholesale distribution.",
        features: [
          "Premium & medium grade",
          "Government contracts",
          "Warehouse facilities",
          "Nationwide delivery",
        ],
      },
      {
        icon: Droplets,
        name: "Cooking Oil Distribution",
        description:
          "Bulk and retail cooking oil supply for food industry and retail markets.",
        features: [
          "Bulk packaging",
          "Retail distribution",
          "Quality assurance",
          "Competitive pricing",
        ],
      },
    ],
  },
  {
    id: "travel",
    icon: Plane,
    title: "Business Services",
    description:
      "Professional services to support your business operations and workforce needs.",
    services: [
      {
        icon: Globe,
        name: "Corporate Travel",
        description:
          "End-to-end travel management for businesses including flights, hotels, and visa processing.",
        features: [
          "Flight bookings",
          "Hotel reservations",
          "Visa assistance",
          "Travel insurance",
        ],
      },
      {
        icon: Ticket,
        name: "Tour Packages",
        description:
          "Customized tour packages for corporate retreats, incentive trips, and group travel.",
        features: [
          "Domestic tours",
          "International packages",
          "MICE services",
          "Custom itineraries",
        ],
      },
      {
        icon: UserCheck,
        name: "HR Outsourcing",
        description:
          "Comprehensive workforce solutions from recruitment to payroll management.",
        features: [
          "Recruitment services",
          "Payroll management",
          "Contract staffing",
          "HR administration",
        ],
      },
      {
        icon: Briefcase,
        name: "Managed Services",
        description:
          "Skilled workforce deployment for security, cleaning, and facility management.",
        features: [
          "Security personnel",
          "Cleaning services",
          "Facility management",
          "Driver services",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Our Services
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
                Comprehensive solutions across multiple sectors, tailored to
                meet your unique business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {serviceCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <category.icon className="h-4 w-4" />
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className={`py-20 lg:py-28 ${
              categoryIndex % 2 === 0 ? "bg-background" : "bg-muted/50"
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Category Header */}
              <div className="mb-12">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                      {category.title}
                    </h2>
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {service.name}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {service.description}
                        </p>
                        <ul className="mt-4 grid grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Process Section */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                How We Work
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our proven process ensures successful project delivery every
                time.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description:
                    "We listen to understand your specific needs and requirements.",
                },
                {
                  step: "02",
                  title: "Proposal",
                  description:
                    "We provide a detailed proposal with scope, timeline, and pricing.",
                },
                {
                  step: "03",
                  title: "Execution",
                  description:
                    "Our expert team delivers with quality and efficiency.",
                },
                {
                  step: "04",
                  title: "Support",
                  description:
                    "Ongoing support to ensure your continued success.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
