import { useState, useEffect } from 'react'
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
    detail: 'hello@havenproperties.com',
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

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success',
  })

  useEffect(() => {
    if (!toast.show) return

    const timer = setTimeout(() => {
      setToast((previous) => ({
        ...previous,
        show: false,
      }))
    }, 5000)

    return () => clearTimeout(timer)
  }, [toast])

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setIsSubmitting(true)

    setToast((previous) => ({
      ...previous,
      show: false,
    }))

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: 'dcc0682b-497a-4a19-8508-43fd03f33b46',
            subject: `HAVEN Properties Enquiry: ${formData.subject}`,
            from_name: 'HAVEN Properties Website',
            name: formData.name,
            email: formData.email,
            enquiry_type: formData.subject,
            message: formData.message,
          }),
        }
      )

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            'Unable to send your enquiry. Please try again.'
        )
      }

      setToast({
        show: true,
        message:
          'Your enquiry has been sent successfully! We appreciate you contacting HAVEN Properties.',
        type: 'success',
      })

      setFormData({
        name: '',
        email: '',
        subject: 'Buying a property',
        message: '',
      })
    } catch (error) {
      setToast({
        show: true,
        message:
          error.message ||
          'Unable to send your enquiry. Please check your internet connection and try again.',
        type: 'error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f8f5] text-[#252820]">
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
            <div className="rounded-[25px] bg-[#30372b] p-8 text-white md:p-10">
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
              className="mt-6 h-64 w-full rounded-lg object-cover"
            />
          </div>

          {/* Contact Form */}
          <div className="rounded-[25px] border border-black/10 bg-white p-7 md:p-10 lg:col-span-3">
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
                disabled={isSubmitting}
                className="inline-flex items-center gap-3 rounded-full bg-[#626b4f] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#4d553e] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send Enquiry'}

                {!isSubmitting && (
                  <ArrowUpRight size={17} />
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className={`fixed bottom-6 right-6 z-100 w-[calc(100%-3rem)] max-w-sm transition-all duration-300 ${
          toast.show
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <div
          className={`flex items-start gap-3 rounded-xl border bg-white p-4 shadow-2xl ${
            toast.type === 'success'
              ? 'border-green-200'
              : 'border-red-200'
          }`}
        >
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              toast.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 size={22} />
            ) : (
              <span className="text-lg font-bold">!</span>
            )}
          </div>

          <div className="flex-1">
            <p className="font-semibold text-gray-900">
              {toast.type === 'success'
                ? 'Enquiry Sent'
                : 'Submission Failed'}
            </p>

            <p className="mt-1 text-sm leading-5 text-gray-600">
              {toast.message}
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setToast((previous) => ({
                ...previous,
                show: false,
              }))
            }
            aria-label="Close notification"
            className="text-xl leading-none text-gray-400 transition hover:text-gray-700"
          >
            &times;
          </button>
        </div>
      </div>
    </main>
  )
}
