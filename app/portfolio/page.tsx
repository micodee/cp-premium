"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/home/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Building } from "lucide-react";

const categories = [
  { id: "all", name: "All Projects" },
  { id: "electrical", name: "Electrical" },
  { id: "construction", name: "Construction" },
  { id: "trading", name: "Trading" },
  { id: "travel", name: "Travel" },
  { id: "outsourcing", name: "Outsourcing" },
];

const projects = [
  {
    id: 1,
    title: "Industrial Power Grid Installation",
    category: "electrical",
    client: "PT Kawasan Industri Jababeka",
    location: "Cikarang, West Java",
    year: "2023",
    description:
      "Complete electrical infrastructure for a 50-hectare industrial complex including high voltage substations, distribution networks, and backup power systems.",
    scope: ["High voltage substations", "Distribution networks", "Emergency power systems"],
  },
  {
    id: 2,
    title: "Commercial Tower MEP Systems",
    category: "construction",
    client: "PT Agung Podomoro Land",
    location: "Jakarta",
    year: "2023",
    description:
      "Full mechanical, electrical, and plumbing systems for a 25-story mixed-use commercial tower.",
    scope: ["HVAC systems", "Electrical distribution", "Fire protection", "Building automation"],
  },
  {
    id: 3,
    title: "National Rice Distribution Program",
    category: "trading",
    client: "Bulog",
    location: "Nationwide",
    year: "2024",
    description:
      "Large-scale rice distribution for government social assistance program covering multiple provinces.",
    scope: ["Procurement", "Warehousing", "Logistics", "Distribution"],
  },
  {
    id: 4,
    title: "Factory Electrical Upgrade",
    category: "electrical",
    client: "PT Astra Honda Motor",
    location: "Karawang, West Java",
    year: "2022",
    description:
      "Complete electrical system upgrade for motorcycle manufacturing facility including motor control centers and automation systems.",
    scope: ["Motor control centers", "PLC systems", "Power distribution", "Lighting upgrade"],
  },
  {
    id: 5,
    title: "Corporate Travel Management",
    category: "travel",
    client: "PT Bank Central Asia",
    location: "Jakarta",
    year: "2024",
    description:
      "Comprehensive corporate travel management services including flight bookings, hotel reservations, and visa processing.",
    scope: ["Flight bookings", "Hotel management", "Visa services", "Travel policy compliance"],
  },
  {
    id: 6,
    title: "Security Personnel Deployment",
    category: "outsourcing",
    client: "PT Lippo Karawaci",
    location: "Tangerang",
    year: "2023",
    description:
      "Deployment and management of security personnel for multiple commercial and residential properties.",
    scope: ["Personnel recruitment", "Training", "Deployment", "Quality management"],
  },
  {
    id: 7,
    title: "Shopping Mall Electrical Systems",
    category: "electrical",
    client: "PT Pakuwon Jati",
    location: "Surabaya",
    year: "2022",
    description:
      "Complete electrical installation for a new shopping mall including power distribution, lighting, and emergency systems.",
    scope: ["Power distribution", "Architectural lighting", "Emergency systems", "Escalators"],
  },
  {
    id: 8,
    title: "Cooking Oil Distribution Network",
    category: "trading",
    client: "PT Sinar Mas Agro",
    location: "Java & Sumatra",
    year: "2023",
    description:
      "Wholesale distribution of cooking oil products across Java and Sumatra regions.",
    scope: ["Procurement", "Storage facilities", "Distribution network", "Retail partnerships"],
  },
  {
    id: 9,
    title: "Hospital MEP Installation",
    category: "construction",
    client: "RS Siloam",
    location: "Semarang",
    year: "2024",
    description:
      "Critical MEP systems installation for a new hospital facility with specialized medical gas and electrical requirements.",
    scope: ["Medical gas systems", "Critical power", "HVAC", "Fire suppression"],
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Our Portfolio
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">
                Explore our completed projects across different sectors,
                showcasing our expertise and commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="rounded-full"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg"
                >
                  {/* Project Image Placeholder */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                      <span className="text-7xl font-bold text-primary/20">
                        {project.category.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <Badge className="absolute right-4 top-4 capitalize">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                      {project.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="h-3.5 w-3.5" />
                        {project.client}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {project.year}
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.scope.slice(0, 3).map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                      {project.scope.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.scope.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-muted-foreground">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "200+", label: "Projects Completed" },
                { value: "50+", label: "Corporate Clients" },
                { value: "15+", label: "Years Experience" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
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
