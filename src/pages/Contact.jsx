import { useState } from 'react'
import {
ArrowUpRight,
MapPin,
Phone,
Mail,
Clock,
CheckCircle2,
} from 'lucide-react'

const contactDetails = [
{
icon: Phone,
title: 'Call us',
detail: '+234 800 000 0000',
},
{
icon: Mail,
title: 'Email us',
detail: '[hello@havenproperties.com](mailto:hello@havenproperties.com)',
},
{
icon: MapPin,
title: 'Visit us',
detail: 'Lagos, Nigeria',
},
{
icon: Clock,
title: 'Opening hours',
detail: 'Monday – Friday, 9am – 5pm',
},
]

export default function Contact() {
const [formData, setFormData] = useState({
name: '',
email: '',
subject: 'Buying a property',
message: '',
})

const [submitted, setSubmitted] = useState(false)

function handleChange(event) {
const { name, value } = event.target

setFormData((previousData) => ({
  ...previousData,
  [name]: value,
}))

setSubmitted(false)

}

function handleSubmit(event) {
event.preventDefault()
setSubmitted(true)
}

return ( <main className="min-h-screen bg-[#f8f8f5] text-[#252820]">

  {/* Hero Section */}
  <section className="px-6 py-16 md:px-10 md:py-24">
    <div className="mx-auto max-w-7xl">

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#626b4f]">
        Get In Touch
      </p>

      <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-tight md:text-6xl">
        Let's talk about your
        <span className="block font-serif italic text-[#626b4f]">
          next move.
        </span>
      </h1>

      <p className="mt-6 max-w-xl leading-8 text-gray-600">
        Whether you're looking to buy, rent, sell, or invest,
        we're here to help you take the next step.
      </p>

    </div>
  </section>

  {/* Main Contact Section */}
  <section className="px-6 pb-20 md:px-10 md:pb-28">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">

      {/* Contact Information */}
      <div className="lg:col-span-2">

        <div className="bg-[#30372b] p-8 text-white md:p-10">

          <p className="text-sm uppercase tracking-[0.2em] text-[#c7cfb8]">
            Contact Information
          </p>

          <h2 className="mt-4 text-3xl font-medium">
            We'd love to hear from you.
          </h2>

          <p className="mt-4 leading-7 text-white/70">
            Reach out to our team with your questions or property
            requirements.
          </p>

          <div className="mt-10 space-y-8">

            {contactDetails.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/70">
                      {item.detail}
                    </p>
                  </div>
                </div>
              )
            })}

          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85"
          alt="Modern office buildings"
          className="mt-6 h-64 w-full object-cover"
        />

      </div>

      {/* Contact Form */}
      <div className="border border-black/10 bg-white p-7 md:p-10 lg:col-span-3">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#626b4f]">
          Send an Enquiry
        </p>

        <h2 className="mt-3 text-3xl font-medium">
          How can we help?
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          Fill out the form below and tell us what you're looking for.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          {/* Name and Email */}
          <div className="grid gap-6 sm:grid-cols-2">

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="block w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-[#626b4f] focus:ring-1 focus:ring-[#626b4f]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="block w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-[#626b4f] focus:ring-1 focus:ring-[#626b4f]"
              />
            </div>

          </div>

          {/* Enquiry Type */}
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium"
            >
              What are you interested in?
            </label>

            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-[#626b4f] focus:ring-1 focus:ring-[#626b4f]"
            >
              <option>Buying a property</option>
              <option>Renting a property</option>
              <option>Selling a property</option>
              <option>Property management</option>
              <option>Investment guidance</option>
              <option>General enquiry</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium"
            >
              Your message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help..."
              rows={5}
              required
              className="block w-full resize-y rounded-sm border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none focus:border-[#626b4f] focus:ring-1 focus:ring-[#626b4f]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center gap-3 rounded-full bg-[#626b4f] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#4d553e]"
          >
            Send Enquiry
            <ArrowUpRight size={17} />
          </button>

          {/* Confirmation Message */}
          {submitted && (
            <div
              role="status"
              className="flex items-start gap-3 rounded-sm border border-green-200 bg-green-50 p-4 text-sm text-green-800"
            >
              <CheckCircle2
                size={20}
                className="shrink-0"
              />

              <p>
                Your form has been submitted successfully in this demo.
                No email has been sent yet.
              </p>
            </div>
          )}

        </form>

      </div>
    </div>
  </section>

</main>

)
}
