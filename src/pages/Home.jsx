import { Link } from 'react-router-dom'
import {
ArrowDown,
ArrowRight,
ArrowUpRight,
ShieldCheck,
KeyRound,
House,
} from 'lucide-react'

const featuredProperties = [
        {
        name: 'The Olive Residence',
        location: 'Lekki Phase 1, Lagos',
        price: '₦185,000,000',
        type: 'FOR SALE',
        image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85',
        },
        {
        name: 'The Modern Retreat',
        location: 'Victoria Island, Lagos',
        price: '₦12,000,000 / year',
        type: 'FOR RENT',
        image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
        },
        {
        name: 'The Garden House',
        location: 'Ajah, Lagos',
        price: '₦95,000,000',
        type: 'FOR SALE',
        image:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85',
        },
        ]

export default function Home() {
return ( 
    <main>
         <section className="px-5 pt-6 sm:px-8 lg:px-10">
        <div className="relative mx-auto min-h-600px max-w-7xl overflow-hidden rounded-[28px] bg-[#34392f] md:min-h-680px"> <img
         src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
         alt="Modern luxury home surrounded by greenery"
         className="absolute inset-0 h-full w-full object-cover"
       />
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/35 to-black/5" />

      <div className="relative z-10 flex min-h-600px flex-col justify-center px-7 py-16 text-white sm:px-12 md:min-h-680px md:px-20">
        <span className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/80">
          <span className="h-px w-10 bg-[#d0d7b9]" />
          Find your place in the world
        </span>

        <h1 className="max-w-3xl text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
          Find a place
          <br />
          to call <span className="italic text-[#d0d7b9]">home.</span>
        </h1>

        <p className="mt-7 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
          Discover exceptional properties, explore new possibilities,
          and find a space that feels uniquely yours.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/properties"
            className="inline-flex items-center gap-3 rounded-full bg-[#d0d7b9] px-6 py-4 text-sm font-semibold text-[#252820] transition hover:bg-white"
          >
            Explore Properties
            <ArrowUpRight size={18} />
          </Link>

          <Link
            to="/about"
            className="rounded-full border border-white/50 px-6 py-4 text-sm transition hover:bg-white/10"
          >
            Discover HAVEN
          </Link>
        </div>

        <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/70">
          <ArrowDown size={16} />
          Discover a better way home
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden rounded-tl-2xl bg-[#f8f8f5] px-8 py-5 text-sm text-[#252820] md:block">
        Thoughtfully selected. Beautifully lived.
      </div>
    </div>
  </section>

  {/* Introduction */}
  <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:items-end lg:px-10 lg:py-32">
    <div>
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#626b4f]">
        More than an address
      </p>

      <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        A better way to find your <span className="italic">place.</span>
      </h2>
    </div>

    <div>
      <p className="max-w-xl text-base leading-8 text-gray-600">
        At HAVEN Properties, we believe finding a home should feel
        exciting, not overwhelming. We help people explore carefully
        selected properties and make confident decisions about where
        they live and invest.
      </p>

      <Link
        to="/about"
        className="mt-6 inline-flex items-center gap-3 border-b border-[#626b4f] pb-2 text-sm font-semibold text-[#626b4f]"
      >
        Get to know us
        <ArrowRight size={16} />
      </Link>
    </div>
  </section>

  {/* Featured properties */}
  <section className="bg-[#efefe8] px-6 py-20 lg:px-10 lg:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#626b4f]">
            A few places we love
          </p>

          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Featured properties
          </h2>
        </div>

        <Link
          to="/properties"
          className="inline-flex items-center gap-3 text-sm font-semibold text-[#626b4f]"
        >
          View all properties
          <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {featuredProperties.map((property) => (
          <article
            key={property.name}
            className="group overflow-hidden rounded-2xl bg-white"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={property.image}
                alt={property.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-[#f8f8f5] px-4 py-2 text-[10px] font-semibold tracking-[0.15em]">
                {property.type}
              </span>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500">
                {property.location}
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                {property.name}
              </h3>

              <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-5">
                <p className="font-semibold">{property.price}</p>

                <Link
                  to="/properties"
                  aria-label={`View ${property.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#efefe8] transition group-hover:bg-[#626b4f] group-hover:text-white"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* Why choose us */}
  <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
    <div className="grid gap-14 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#626b4f]">
          The HAVEN difference
        </p>

        <h2 className="max-w-lg text-4xl font-medium leading-tight sm:text-5xl">
          Property decisions, made with confidence.
        </h2>

        <p className="mt-6 max-w-lg leading-8 text-gray-600">
          From the first viewing to the final decision, our approach
          focuses on clarity, care and helping you find the right fit.
        </p>

        <Link
          to="/services"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#626b4f] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#4d553e]"
        >
          Explore our services
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#efefe8] p-7 sm:mt-10">
          <ShieldCheck size={30} className="text-[#626b4f]" />
          <h3 className="mt-6 text-lg font-semibold">
            A trusted approach
          </h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Clear communication and careful guidance throughout your
            property search.
          </p>
        </div>

        <div className="rounded-2xl bg-[#f5f0e7] p-7">
          <KeyRound size={30} className="text-[#626b4f]" />
          <h3 className="mt-6 text-lg font-semibold">
            Spaces for living
          </h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Explore property options suited to different lifestyles
            and goals.
          </p>
        </div>

        <div className="rounded-2xl bg-[#f5f0e7] p-7 sm:col-span-2">
          <House size={30} className="text-[#626b4f]" />
          <h3 className="mt-6 text-lg font-semibold">
            Personalised guidance
          </h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-gray-600">
            A thoughtful property-search experience built around your
            needs, preferences and plans.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Call to action */}
  <section className="px-6 pb-20 lg:px-10 lg:pb-28">
    <div className="mx-auto max-w-7xl rounded-[28px] bg-[#34392f] px-7 py-16 text-center text-white sm:px-12 md:py-24">
      <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#d0d7b9]">
        Your next chapter starts here
      </p>

      <h2 className="mx-auto max-w-3xl text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
        Ready to find somewhere that feels like yours?
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/70">
        Let's help you take the next step towards your ideal property.
      </p>

      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d0d7b9] px-7 py-4 text-sm font-semibold text-[#252820] transition hover:bg-white"
      >
        Talk to our team
        <ArrowUpRight size={18} />
      </Link>
    </div>
  </section>
</main>
)
}
