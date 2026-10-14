import { Link } from 'react-router-dom'
import {
ArrowRight,
ArrowUpRight,
House,
KeyRound,
Building2,
MessagesSquare,
ChartNoAxesCombined,
Search,
CheckCircle2,
} from 'lucide-react'

const services = [
{
icon: House,
title: 'Property Sales',
description:
'Find a property that suits your lifestyle and budget. We guide you through the buying process.',
features: [
'Residential property sales',
'Property viewing arrangements',
'Purchase guidance',
],
},
{
icon: KeyRound,
title: 'Property Rentals',
description:
'Discover comfortable spaces to rent, from modern apartments to spacious family homes.',
features: [
'Apartment and house rentals',
'Rental property search',
'Viewing coordination',
],
},
{
icon: Building2,
title: 'Property Management',
description:
'Make property ownership easier with support for tenants, maintenance, and everyday property needs.',
features: [
'Tenant coordination',
'Maintenance assistance',
'Property oversight',
],
},
{
icon: MessagesSquare,
title: 'Real Estate Consultation',
description:
'Get helpful guidance to make informed decisions when buying, renting, or selling property.',
features: [
'Property selection guidance',
'Market information',
'Buying and renting advice',
],
},
{
icon: ChartNoAxesCombined,
title: 'Investment Guidance',
description:
'Explore property investment opportunities based on your goals, budget, and preferred location.',
features: [
'Investment opportunity research',
'Location evaluation',
'Property comparisons',
],
},
{
icon: Search,
title: 'Property Search',
description:
'Save time finding the right space with property options tailored to your requirements.',
features: [
'Personalised property search',
'Budget-based recommendations',
'Property shortlist support',
],
},
]

export default function Services() {
return ( <main className="bg-[#f8f8f5] text-[#252820]">

  {/* Hero Section */}
  <section className="px-6 py-20 md:px-10 md:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#626b4f]">
          What We Do
        </p>

        <h1 className="text-4xl font-medium leading-tight md:text-6xl">
          Real estate services
          <span className="block font-serif italic text-[#626b4f]">
            designed around you.
          </span>
        </h1>

        <p className="mt-6 max-w-xl leading-8 text-gray-600">
          Whether you're buying, renting, selling, or investing,
          we're here to make your property journey simpler and
          more comfortable.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/properties"
            className="flex items-center gap-2 rounded-full bg-[#626b4f] px-6 py-4 text-sm text-white transition hover:bg-[#4d553e]"
          >
            Explore Properties
            <ArrowUpRight size={17} />
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-full border border-black/20 px-6 py-4 text-sm transition hover:border-[#626b4f]"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
        alt="Modern residential property"
        className="h-350px w-full object-cover md:h-480px"
      />

    </div>
  </section>

  {/* Services Introduction */}
  <section className="border-y border-black/10 bg-white px-6 py-16 md:px-10">
    <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between">

      <h2 className="max-w-lg text-3xl font-medium md:text-4xl">
        The right support for every property journey.
      </h2>

      <p className="mt-5 max-w-xl leading-8 text-gray-600 md:mt-0">
        We offer practical real estate services to help individuals,
        families, and property owners make confident decisions.
      </p>

    </div>
  </section>

  {/* Services Grid */}
  <section className="px-6 py-20 md:px-10 md:py-28">
    <div className="mx-auto max-w-7xl">

      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#626b4f]">
          Our Expertise
        </p>

        <h2 className="mt-3 text-3xl font-medium md:text-5xl">
          How we can help
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <article
              key={service.title}
              className="group border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eef0e8] text-[#626b4f]">
                  <Icon size={23} />
                </div>

                <span className="text-sm text-gray-400">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 min-h-20 text-sm leading-7 text-gray-600">
                {service.description}
              </p>

              <div className="my-6 h-px bg-black/10" />

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-[#626b4f]"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#626b4f] transition group-hover:gap-3"
              >
                Make an enquiry
                <ArrowRight size={16} />
              </Link>
            </article>
          )
        })}

      </div>
    </div>
  </section>

  {/* Call To Action */}
  <section className="px-6 pb-20 md:px-10 md:pb-28">
    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 bg-[#30372b] px-8 py-12 text-white md:px-14 md:py-16 lg:flex-row lg:items-center">

      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#c7cfb8]">
          Let's Get Started
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-medium md:text-5xl">
          Let's find a place that feels like home.
        </h2>

        <p className="mt-5 max-w-xl leading-7 text-white/70">
          Tell us what you're looking for, and let's explore
          the possibilities together.
        </p>
      </div>

      <Link
        to="/contact"
        className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#30372b] transition hover:bg-[#eaece4] lg:self-center"
      >
        Contact Our Team
        <ArrowUpRight size={17} />
      </Link>

    </div>
  </section>

</main>

)
}
