import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className="overflow-hidden py-16 px-6 lg:px-8 lg:py-24">
            <div className="relative mx-auto max-w-xl">
                <svg className="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                <defs>
                    <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <svg className="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                <defs>
                    <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Contact Me</h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
                </div>
                <div className="mt-12">
                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-black dark:text-white">First name</label>
                    <div className="mt-1">
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-black dark:border-white bg-transparent py-3 px-4 shadow-sm focus:border-black focus:ring-white"/>
                    </div>
                    </div>
                    <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-black dark:text-white">Last name</label>
                    <div className="mt-1">
                        <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-black dark:border-white bg-transparent py-3 px-4 shadow-sm focus:border-black focus:ring-white"/>
                    </div>
                    </div>
                    <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white">Email</label>
                    <div className="mt-1">
                        <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-black dark:border-white bg-transparent py-3 px-4 shadow-sm focus:border-black focus:ring-white"/>
                    </div>
                    </div>
                    <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white">Message</label>
                    <div className="mt-1">
                        <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-black dark:border-white bg-transparent py-3 px-4 shadow-sm focus:border-black focus:ring-white"></textarea>
                    </div>
                    </div>
                    <div className="sm:col-span-2">
                    <button type="submit" className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-black dark:bg-gray-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">Let&lsquo;s talk</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact