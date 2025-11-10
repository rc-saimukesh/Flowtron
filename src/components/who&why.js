import { BanknotesIcon, Cog8ToothIcon, HandThumbUpIcon, RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/20/solid'

export default function about() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0" id='about'>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {/* <p className="text-base/7 font-semibold text-indigo-600">Deploy faster</p> */}
              <h2 className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Who we are?
              </h2>
              <p className="mt-6 text-xl/8 text-gray-700">
               We’re not just another web or automation agency — we’re system architects for modern businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="aboutus.png"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
              <p>
                At Flowtron (replace with your brand name), we help service-based businesses, agencies, and real estate firms turn messy operations into seamless, scalable systems.
We combine strategic process design, custom CRM implementation, and smart automation to make sure every part of your business — from leads to payments — runs smoothly.
              </p>
              <ul className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BanknotesIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Our mission is simple.</strong> Help growing businesses work smarter, scale faster, and stop losing revenue to inefficiency.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                We believe a great system doesn’t just make your business faster — it makes it freer.
Free from repetitive work.
Free from missed follow-ups.
Free from burnout.
              </p>
              <h2 className="mt-16 text-3xl font-bold tracking-tight text-gray-900">Why Us?</h2>
              <p className="mt-6">
                Most agencies focus on design or leads — we focus on efficiency and growth.
              </p>
              <ul  className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <Cog8ToothIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">System-First Approach.</strong> We don’t just build websites or CRMs; we connect every piece of your workflow so they work as one.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HandThumbUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Tailored for Your Business.</strong> No templates or one-size-fits-all solutions. Every system is mapped to your process.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <RocketLaunchIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">End-to-End Expertise.</strong> From strategy to setup, from website to workflow — we handle everything.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LightBulbIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Automation That Scales.</strong> We design systems that grow with your business, not against it.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
