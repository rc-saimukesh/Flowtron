'use client'

import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function ContactSales() {
  return (
    <section className="relative isolate bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 py-24 sm:py-32 lg:px-8">
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 to-sky-400 opacity-25 sm:left-[calc(50%-40rem)] sm:w-[72rem]"
        />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contact Sales
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Let’s build something incredible together. Fill out the form below and our team will reach out within 24 hours.
        </p>
      </div>

      {/* Form */}
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20 bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
              First name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              placeholder="John"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
              Last name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              placeholder="Doe"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Company name"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us what you're looking for..."
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Privacy Checkbox */}
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Let’s Talk
          </button>
        </div>
      </form>
    </section>
  )
}
