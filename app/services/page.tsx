import ScrollReveal from "@/components/ScrollReveal";
import ServicesHero from "@/components/ServicesHero";

const services = [
  {
    title: "Philanthropic Strategy",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    items: [
      "Define and develop a philanthropic focus based on your values and past giving",
      "Clarify mission and set clear philanthropic goals and guidelines",
      "Guide grant recommendation strategy discussions",
      "Design a grant program aligned with your giving account\u2019s mission",
    ],
  },
  {
    title: "Nonprofit Identification & Due Diligence",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    items: [
      "Research and compile curated lists of nonprofits aligned with your grantmaking goals",
      "Assess nonprofit capacity and ability to implement programs",
      "Conduct research on relevant topics to refine grantmaking priorities",
    ],
  },
  {
    title: "Grant Management & Capacity Support",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    items: [
      "Support the proposal and grant recommendation process",
      "Draft non-binding agreements outlining grant purpose and reporting expectations",
      "Oversee ongoing grant communication, nonprofit relationships, and reporting",
    ],
  },
  {
    title: "Communications Support",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    items: [
      "Assist with external messaging about your philanthropy",
      "Raise awareness of your impact areas and programs with appropriate audiences",
    ],
  },
  {
    title: "Evaluation & Impact Measurement",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    items: [
      "Define measurable goals and outcomes",
      "Conduct grantee check-ins and monitor progress",
      "Review grant reports and conduct impact evaluations",
      "Provide regular updates and lessons-learned summaries",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero — video */}
      <ServicesHero />

      <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-6">
            We offer a full suite of philanthropic advisory services — from
            initial strategy through ongoing grant management. Engagements are
            tailored to each client.
          </p>
          <hr className="border-border mb-16" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="bg-bg-card border border-border-light p-8 h-full hover:shadow-sm transition-shadow duration-300">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-light text-accent mb-5">
                  {service.icon}
                </div>
                <h2 className="font-serif text-xl md:text-2xl text-text mb-5">
                  {service.title}
                </h2>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-text-muted text-sm leading-relaxed pl-4 border-l-2 border-accent-light"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
