import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Heart,
  Compass,
} from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Trust & Transparency',
      description:
        'We believe every property decision should be supported by honesty, clear communication and reliable information.',
    },
    {
      icon: Heart,
      title: 'People First',
      description:
        'Every client has different needs. We focus on understanding those needs and helping people find the right fit.',
    },
    {
      icon: Compass,
      title: 'Purposeful Guidance',
      description:
        'We aim to make property searches easier by providing thoughtful guidance throughout the process.',
    },
  ]

  return (
    <main>
      {/* Hero section */}
      <section className="px-5 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#626b4f]">
            About HAVEN
          </p>

          <h1 className="max-w-5xl text-5xl font-medium leading-tight tracking-tight sm:text-6xl lg:text-8xl">
            Real estate with a
            <span className="text-[#626b4f]"> human touch.</span>
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-xl text-base leading-8 text-gray-600">
              We believe finding a property is about more than walls
              and windows. It is about discovering a space where your
              next chapter can begin.
            </p>

            <p className="max-w-xl text-sm leading-7 text-gray-500 md:justify-self-end">
              At HAVEN Properties, our goal is to make the journey
              towards finding your ideal property clearer, simpler
              and more rewarding.
            </p>
          </div>

          <div className="mt-12 h-350px overflow-hidden rounded-24px sm:h-450px lg:h-550px">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
              alt="Contemporary residential property"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center lg:px-10 lg:py-32">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#626b4f]">
            Our story
          </p>

          <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
            Helping people find their place.
          </h2>

          <p className="mt-7 leading-8 text-gray-600">
            HAVEN Properties was created around a simple idea: finding
            a property should be an exciting experience, not a stressful
            one.
          </p>

          <p className="mt-5 leading-8 text-gray-600">
            Whether someone is searching for a family home, a rental
            apartment or a property investment, we believe they deserve
            clear information, helpful guidance and an experience built
            around their needs.
          </p>

          <Link
            to="/properties"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#626b4f] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#4d553e]"
          >
            Explore properties
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
            alt="Bright and welcoming modern home"
            className="h-450px w-full rounded-2xl object-cover sm:h-550px"
          />

          <div className="absolute -bottom-5 left-5 rounded-xl bg-[#f8f8f5] p-5 shadow-lg sm:-left-5 sm:p-7">
            <p className="text-2xl font-semibold text-[#626b4f]">
              Your next chapter
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Begins with the right space.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="bg-[#34392f] px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#d0d7b9]">
              Our mission
            </p>

            <h2 className="max-w-lg text-3xl font-medium leading-snug sm:text-4xl">
              To make finding the right property a clearer,
              more personal experience.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-white/65">
              We aim to connect people with properties that suit
              their needs through attentive service, useful
              information and thoughtful guidance.
            </p>
          </div>

          <div className="border-t border-white/20 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#d0d7b9]">
              Our vision
            </p>

            <h2 className="max-w-lg text-3xl font-medium leading-snug sm:text-4xl">
              To become a trusted name in property discovery.
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-white/65">
              We envision a property experience where people feel
              informed, confident and supported as they make
              important decisions about their future.
            </p>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#626b4f]">
            What guides us
          </p>

          <h2 className="text-4xl font-medium leading-tight sm:text-5xl">
            The values behind every decision.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <article
                key={value.title}
                className="rounded-2xl border border-black/10 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <Icon size={30} className="text-[#626b4f]" />

                  <span className="text-sm text-gray-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-9 text-xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl bg-[#efefe8] p-8 sm:p-12 md:flex-row md:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#626b4f]">
              Find your next space
            </p>

            <h2 className="max-w-2xl text-3xl font-medium sm:text-4xl">
              Let's find somewhere you'll love.
            </h2>
          </div>

          <Link
            to="/properties"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#626b4f] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#4d553e]"
          >
            View properties
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}