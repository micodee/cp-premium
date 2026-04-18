const clients = [
  { name: "PLN Indonesia", initials: "PLN" },
  { name: "Pertamina", initials: "PTM" },
  { name: "Bank Mandiri", initials: "BM" },
  { name: "Telkom Indonesia", initials: "TI" },
  { name: "Garuda Indonesia", initials: "GA" },
  { name: "Semen Indonesia", initials: "SI" },
];

export function ClientsSection() {
  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by Leading Organizations
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center"
            >
              <div className="flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6">
                <span className="text-lg font-bold tracking-wider text-muted-foreground">
                  {client.initials}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
