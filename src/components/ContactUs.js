'use client'

import { useState } from 'react'

export default function ContactSales() {

  const [showToast, setShowToast] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
  })

  // handle input change
  const handleChange = (e
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('https://hook.us2.make.com/5r1nipi6temc6miigci4h135oxojfweb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-make-apikey': '3ddbc71bcbf40336462e3c47509a644354fc64b6652cd966192d8e5fb847dcb6',
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
        
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          message: '',
        })
      } else {
        alert('Failed to send message. Try again later.')
      }
    } catch (error) {
      console.error(error)
      alert('Something went wrong!')
    }
  }

  return (
    <section
      className="relative isolate bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 py-24 sm:py-32 lg:px-8"
      id="contact"
    >
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
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contact Sales
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Let’s build something incredible together. Fill out the form below
          and our team will reach out within 24 hours.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20 bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-900"
            >
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-900"
            >
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-900"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company name"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you're looking for..."
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Let’s Talk
          </button>
        </div>
      </form>

      {showToast && (
        <div className="fixed bottom-5 right-5 z-50 rounded-lg bg-green-500 text-white px-4 py-2 shadow-lg text-sm animate-slide-up">
          Message sent successfully!
        </div>
      )}
    </section>
  )
}
