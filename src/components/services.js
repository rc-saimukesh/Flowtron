import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Website Essentials',
    id: 'tier-website',
    priceMonthly: 'Negotiable',
    description:
      'Build a high-converting website that works as your digital storefront and integrates seamlessly with your CRM.',
    features: [
      'Custom website (up to 5 pages)',
      'Mobile & SEO optimization',
      'Domain & hosting setup support',
      'Basic integrations (CRM / WhatsApp / Forms)',
      'Contact & booking automations',
      '1 month free maintenance',
      '2 minor content/design changes included',
    ],
  },
  {
    name: 'CRM Implementation & Workflow Setup',
    id: 'tier-crm',
    priceMonthly: 'Negotiable',
    description:
      'Set up and automate your CRM to manage leads, follow-ups, and deals — all in one place.',
    features: [
      'CRM setup (Zoho, HubSpot, or custom)',
      'Sales pipeline design',
      'Task & follow-up automation',
      'Lead and deal tracking setup',
      'Dashboard customization',
      '2 months workflow fine-tuning support',
    ],
  },
  {
    name: 'Business Process Automation',
    id: 'tier-automation',
    priceMonthly: 'Negotiable',
    description:
      'Automate repetitive tasks and connect your tools for smoother, faster operations.',
    features: [
      'Workflow automation (CRM, Gmail, WhatsApp, Slack)',
      'Client onboarding & payment flows',
      'Proposal automation',
      'Data syncing between tools',
      'Internal notifications',
    ],
  },
  {
    name: 'Full Business System Setup',
    id: 'tier-allinone',
    priceMonthly: 'Negotiable',
    description:
      'A complete done-for-you ecosystem — website, CRM, and automation, working together seamlessly.',
    features: [
      'Everything from all packages',
      'Payment gateway integration',
      'Client portal or dashboard',
      '1:1 onboarding & walkthroughs',
      '6 months priority support',
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="relative isolate bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-300 to-sky-400 opacity-20"
        />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-blue-600">Pricing</h2>
        <p className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
          Choose the right plan for your business
        </p>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Get end-to-end business automation, CRM setup, and web development — tailored for you.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {tiers.map((tier) => {
          const isFeatured = hovered === tier.id

          return (
            <div
              key={tier.id}
              onMouseEnter={() => setHovered(tier.id)}
              onMouseLeave={() => setHovered(null)}
              className={classNames(
                isFeatured
                  ? 'border-2 border-blue-400 shadow-lg scale-[1.02]'
                  : 'border border-gray-200 shadow-sm',
                'bg-white w-[350px] h-[500px] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:cursor-pointer'
              )}
            >
              <div className="overflow-hidden">
                <h3 className="text-blue-600 text-base font-semibold">{tier.name}</h3>
                <p className="mt-3 flex items-baseline gap-x-2">
                  <span className="text-gray-900 text-3xl font-semibold tracking-tight">
                    {tier.priceMonthly}
                  </span>
                  <span className="text-gray-500 text-sm">/project</span>
                </p>
                <p className="mt-3 text-gray-600 text-sm leading-snug line-clamp-4">
                  {tier.description}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700 overflow-hidden">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-2">
                      <CheckIcon className="h-4 w-4 text-blue-500 flex-none" />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={classNames(
                  isFeatured
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold transition'
                )}
              >
                Get started
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
