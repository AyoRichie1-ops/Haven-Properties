import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
ArrowUpRight,
MapPin,
SlidersHorizontal,
BedDouble,
Bath,
Maximize,
} from 'lucide-react'

const properties = [
{
id: 1,
name: 'The Olive Residence',
location: 'Lekki Phase 1, Lagos',
price: 185000000,
type: 'Sale',
category: 'Detached House',
beds: 5,
baths: 4,
area: '420 sqm',
image:
'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85',
},
{
id: 2,
name: 'The Modern Retreat',
location: 'Victoria Island, Lagos',
price: 12000000,
type: 'Rent',
category: 'Apartment',
beds: 3,
baths: 3,
area: '180 sqm',
image:
'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
},
{
id: 3,
name: 'The Garden House',
location: 'Ajah, Lagos',
price: 95000000,
type: 'Sale',
category: 'Detached House',
beds: 4,
baths: 4,
area: '350 sqm',
image:
'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85',
},
{
id: 4,
name: 'The City Apartment',
location: 'Ikeja GRA, Lagos',
price: 8500000,
type: 'Rent',
category: 'Apartment',
beds: 2,
baths: 2,
area: '120 sqm',
image:
'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
},
{
id: 5,
name: 'The Contemporary Villa',
location: 'Banana Island, Lagos',
price: 450000000,
type: 'Sale',
category: 'Luxury Villa',
beds: 6,
baths: 6,
area: '650 sqm',
image:
'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85',
},
{
id: 6,
name: 'The Parkview Suite',
location: 'Ikoyi, Lagos',
price: 18000000,
type: 'Rent',
category: 'Apartment',
beds: 3,
baths: 3,
area: '210 sqm',
image:
'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85',
},
]

const formatPrice = (price, type) => {
const formatted = new Intl.NumberFormat('en-NG').format(price)

return type === 'Rent'
? `₦${formatted} / year`
: `₦${formatted}`
}

export default function Properties() {
const [filter, setFilter] = useState('All')
const [search, setSearch] = useState('')

const filteredProperties = properties.filter((property) => {
const matchesType = filter === 'All' || property.type === filter

const matchesSearch =
  property.name.toLowerCase().includes(search.toLowerCase()) ||
  property.location.toLowerCase().includes(search.toLowerCase()) ||
  property.category.toLowerCase().includes(search.toLowerCase())

return matchesType && matchesSearch
})

return ( <main className="min-h-screen">
{/* Page heading */} <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-10 lg:pt-24"> <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#626b4f]">
Find your next space </p>

    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <h1 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Spaces that feel
          <span className="text-[#626b4f]"> like home.</span>
        </h1>

        <p className="mt-5 max-w-xl leading-7 text-gray-600">
          Explore a collection of homes and apartments selected
          to suit different lifestyles and ambitions.
        </p>
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#efefe8]">
          <SlidersHorizontal size={18} />
        </span>
        Find your perfect match
      </div>
    </div>
  </section>

  {/* Search and filters */}
  <section className="mx-auto max-w-7xl px-6 lg:px-10">
    <div className="flex flex-col gap-5 rounded-2xl border border-black/10 bg-white p-5 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        {['All', 'Sale', 'Rent'].map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`rounded-full px-5 py-3 text-sm transition ${
              filter === option
                ? 'bg-[#626b4f] text-white'
                : 'bg-[#f3f3ee] text-gray-600 hover:bg-[#e8e9df]'
            }`}
          >
            {option === 'All'
              ? 'All Properties'
              : option === 'Sale'
                ? 'For Sale'
                : 'For Rent'}
          </button>
        ))}
      </div>

      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search location or property..."
        aria-label="Search properties"
        className="w-full rounded-full border border-black/10 bg-[#f8f8f5] px-5 py-3 text-sm outline-none transition focus:border-[#626b4f] md:max-w-sm"
      />
    </div>
  </section>

  {/* Property listings */}
  <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
    <div className="mb-8 flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        Available properties
      </h2>

      <p className="text-sm text-gray-500">
        {filteredProperties.length}{' '}
        {filteredProperties.length === 1 ? 'property' : 'properties'}
      </p>
    </div>

    {filteredProperties.length > 0 ? (
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.map((property) => (
          <article
            key={property.id}
            className="group overflow-hidden rounded-2xl border border-black/5 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={property.image}
                alt={property.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-[#f8f8f5] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider">
                For {property.type}
              </span>

              <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-2 text-xs text-white backdrop-blur-sm">
                {property.category}
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={15} className="text-[#626b4f]" />
                {property.location}
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                {property.name}
              </h3>

              <p className="mt-3 text-lg font-semibold text-[#626b4f]">
                {formatPrice(property.price, property.type)}
              </p>

              <div className="mt-5 flex items-center justify-between border-y border-black/10 py-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <BedDouble size={16} />
                  {property.beds} Beds
                </span>

                <span className="flex items-center gap-1.5">
                  <Bath size={16} />
                  {property.baths} Baths
                </span>

                <span className="flex items-center gap-1.5">
                  <Maximize size={15} />
                  {property.area}
                </span>
              </div>

              <Link
                to="/contact"
                className="mt-5 flex items-center justify-between rounded-full bg-[#efefe8] px-5 py-3 text-sm font-medium transition hover:bg-[#626b4f] hover:text-white"
              >
                Enquire about property
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    ) : (
      <div className="rounded-2xl bg-[#efefe8] px-6 py-16 text-center">
        <h3 className="text-xl font-semibold">
          No properties found
        </h3>

        <p className="mt-3 text-sm text-gray-600">
          Try another search term or change your selected filter.
        </p>

        <button
          onClick={() => {
            setFilter('All')
            setSearch('')
          }}
          className="mt-6 rounded-full bg-[#626b4f] px-6 py-3 text-sm text-white transition hover:bg-[#4d553e]"
        >
          Clear filters
        </button>
      </div>
    )}
  </section>

  {/* Bottom call to action */}
  <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
    <div className="rounded-3xl bg-[#34392f] px-7 py-14 text-white sm:px-12 md:py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[#d0d7b9]">
        Need a little guidance?
      </p>

      <div className="mt-5 flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <h2 className="max-w-2xl text-3xl font-medium leading-tight sm:text-4xl">
          Let's find the right property for you.
        </h2>

        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#d0d7b9] px-6 py-4 text-sm font-semibold text-[#252820] transition hover:bg-white md:self-auto"
        >
          Contact our team
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  </section>
</main>
)
}
