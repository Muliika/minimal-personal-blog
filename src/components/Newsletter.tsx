import React from 'react'

const Newsletter = () => {
  return (
    <div className="">
        <div className="relative">
          
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl bg-black px-6 py-10 shadow-xl sm:px-12 sm:py-20">
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                  <path className="text-gray-700 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                  <path className="text-gray-900 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to my newsletter.</h2>
                  <p className="mx-auto mt-6 max-w-2xl text-lg text-white">I release interesting articles monthly. I wont spam your inbox and neither will i share your email with anyone else.</p>
                </div>
                <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="cta-email" className="sr-only">Email address</label>
                    <input id="cta-email" type="email" className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-black placeholder-gray-900 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black" placeholder="Enter your email"/>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button type="submit" className="block w-full rounded-md border border-transparent bg-red-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:px-10">Notify me</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Newsletter