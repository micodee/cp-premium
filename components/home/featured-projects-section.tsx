import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Industrial Power Grid Installation",
    category: "Electrical",
    description:
      "Complete electrical infrastructure for a 50-hectare industrial complex.",
    image: "/images/project-electrical.jpg",
  },
  {
    title: "Commercial Building MEP",
    category: "Construction",
    description:
      "Full mechanical, electrical, and plumbing systems for a 20-story office tower.",
    image: "/images/project-construction.jpg",
  },
  {
    title: "National Rice Distribution",
    category: "Trading",
    description:
      "Supply chain management for government rice distribution program.",
    image: "/images/project-trading.jpg",
  },
];

export function FeaturedProjectsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Portfolio
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
              A glimpse into our recent work across different sectors,
              showcasing our commitment to excellence.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="/portfolio"
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <span className="text-6xl font-bold text-primary/20">
                    {project.category.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
