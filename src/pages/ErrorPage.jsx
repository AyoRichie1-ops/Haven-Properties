import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, House } from 'lucide-react'

export default function NotFound() {
return ( <main className="flex min-h-[75vh] items-center justify-center bg-[#f8f8f5] px-6 py-20"> <div className="mx-auto max-w-2xl text-center">

    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eaece4] text-[#626b4f]">
      <House size={30} strokeWidth={1.5} />
    </div>

    <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#626b4f]">
      Error 404
    </p>

    <h1 className="mt-4 text-5xl font-medium tracking-tight text-[#252820] sm:text-7xl">
      Lost your way?
    </h1>

    <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-gray-600">
      It looks like this page has moved or doesn't exist.
      Don't worry, your next destination is just a click away.
    </p>

    <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

      <Link
        to="/"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#626b4f] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#4d553e]"
      >
        <ArrowLeft size={17} />
        Back to Home
      </Link>

      <Link
        to="/properties"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-7 py-4 text-sm font-medium text-[#252820] transition hover:border-[#626b4f] hover:text-[#626b4f]"
      >
        Explore Properties
        <ArrowUpRight size={17} />
      </Link>

    </div>

    <p className="mt-16 text-xs uppercase tracking-[0.2em] text-gray-400">
      HAVEN Properties · Find your place
    </p>

  </div>
</main>

)
}
