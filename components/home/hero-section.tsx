import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Trusted by 200+ Businesses
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building Excellence Across{" "}
              <span className="text-accent">Multiple Sectors</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
              From electrical installations to global trading, we deliver
              integrated solutions that power businesses forward. Your trusted
              partner for sustainable growth.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/portfolio">
                  <Play className="mr-2 h-4 w-4" />
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 self-center lg:gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white lg:text-4xl">15+</div>
              <div className="mt-2 text-sm text-white/60">Years of Experience</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white lg:text-4xl">200+</div>
              <div className="mt-2 text-sm text-white/60">Projects Completed</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white lg:text-4xl">50+</div>
              <div className="mt-2 text-sm text-white/60">Corporate Clients</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent lg:text-4xl">5</div>
              <div className="mt-2 text-sm text-white/60">Business Sectors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
