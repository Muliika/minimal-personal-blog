'use client'

import BlogPagination from '@/components/Pagination'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Blog = () => {
    const [sort, setSort] = useState(false)
    const [filter, setFilter] = useState(false)

  return (
    <div className="max-w-3xl mx-auto p-5 mb-16">
        {/* filters */}
        <div className="">
            <div className="py-16 px-4 text-center sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">All blog posts</h1>
                <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, eveniet.</p>
            </div>

            {/* <!-- Filters --> */}
            <section aria-labelledby="filter-heading" className="grid items-center border-t">
                <h2 id="filter-heading" className="sr-only">Filters</h2>
                <div className="relative col-start-1 row-start-1 py-4">
                    <div className="mx-auto flex space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
                        <div>
                        <button type="button" className="group flex items-center font-medium text-black dark:text-white" aria-controls="disclosure-1" aria-expanded="false" onClick={()=>setFilter(!filter)}>
                            {/* <!-- Heroicon name: mini/funnel --> */}
                            <svg className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd" />
                            </svg>
                            2 Filters
                        </button>
                        </div>
                        <div className="pl-6">
                        <button type="button" className="text-gray-500">Clear all</button>
                        </div>
                    </div>
                </div>

                <div className={`border-t border-gray-200 py-10" id="disclosure-1 ${filter ? 'transition ease-out duration-100 transform opacity-100 scale-100 bg-white':'transition ease-in duration-75 transform opacity-0 scale-95'}`}>
                    <div className={`mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8`}>
                        
                        <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6 my-4">
                            <fieldset>
                                <legend className="block font-medium">Category</legend>
                                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                <div className="flex items-center text-base sm:text-sm">
                                    <input id="category-0" name="category[]" value="all-new-arrivals" type="checkbox" className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-black focus:ring-black"/>
                                    <label htmlFor="category-0" className="ml-3 min-w-0 flex-1 text-gray-600">Personal</label>
                                </div>

                                <div className="flex items-center text-base sm:text-sm">
                                    <input id="category-1" name="category[]" value="tees" type="checkbox" className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-black focus:ring-black"/>
                                    <label htmlFor="category-1" className="ml-3 min-w-0 flex-1 text-gray-600">Urban Living</label>
                                </div>

                                <div className="flex items-center text-base sm:text-sm">
                                    <input id="category-2" name="category[]" value="objects" type="checkbox" className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-black focus:ring-black"/>
                                    <label htmlFor="category-2" className="ml-3 min-w-0 flex-1 text-gray-600">Fashion</label>
                                </div>

                                <div className="flex items-center text-base sm:text-sm">
                                    <input id="category-3" name="category[]" value="sweatshirts" type="checkbox" className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-black focus:ring-black"/>
                                    <label htmlFor="category-3" className="ml-3 min-w-0 flex-1 text-gray-600">Banter</label>
                                </div>

                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 row-start-1 py-4">
                <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                    <div className="relative inline-block">
                    <div className="flex">
                        <button type="button" className="group inline-flex justify-center text-sm font-medium text-black dark:text-white" id="menu-button" aria-expanded="false" aria-haspopup="true" onClick={()=>setSort(!sort)}>
                        Sort
                        {/* <!-- Heroicon name: mini/chevron-down --> */}
                        <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>

                    <div className={`absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none ${sort ? 'transition ease-out duration-100 transform opacity-100 scale-100' : 'transition ease-in duration-75 transform opacity-0 scale-95'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                        <div className="py-1" role="none">

                        <a href="#" className="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Most Popular</a>

                        <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Best Rating</a>

                        <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Newest</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
        {/* filters */}
        {/* blog posts */}
        <section id="blog" className='mt-[-10rem] mb-10'>
            <div className="max-w-3xl mx-auto">
            
            <div className="space-y-8">
            {/* <!-- Blog Post 1 --> */}
            {/* Beware that the the size of the image, blog-post heading and description affect the overall height and width of the image and their might be some data that is not displayed because overflow is set to hidden. Also this can be a separate component and you just map through the data since the same layout is used somewhere else. But to keep the project as simple as possible I left it this way, i shall may be change it later on.*/}
                <div className="overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                    <Link href="/blog/1">
                    <Image className="h-full w-full object-cover rounded-xl overflow-hidden" src="/bg1.jpg" alt="alt data" width={200} height={400}/>
                    </Link>
                    </div>
                    <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                        <span>Mar 16, 2027</span>
                        <span className="mx-2">•</span>
                        <span className='text-red-600'>Business</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2"><Link href="/blog/1">Error voluptates culpa eligendi. Hic vel totam vitae illo</Link></h2>
                    <p className="text-gray-600 mb-4">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel.</p>
                    <div className="flex items-center">
                        <Image className="h-10 w-10 rounded-full mr-3" src="/avatar.png" alt="Alex Carlson" width={100} height={100}/>
                        <div>
                        <p className="font-semibold">Alex Carlson</p>
                        <p className="text-sm text-gray-600">admin</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* blog post 2 */}
                <div className="overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                    <Link href="/blog/1">
                    <Image className="h-full w-full object-cover rounded-xl overflow-hidden" src="/bg2.jpg" alt="alt data" width={200} height={400}/>
                    </Link>
                    </div>
                    <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                        <span>Mar 16, 2027</span>
                        <span className="mx-2">•</span>
                        <span className='text-blue-600'>Banter</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2"><Link href="/blog/1">Error voluptates culpa eligendi. Hic vel totam vitae illo</Link></h2>
                    <p className="text-gray-600 mb-4">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat.</p>
                    <div className="flex items-center">
                        <Image className="h-10 w-10 rounded-full mr-3" src="/avatar.png" alt="Alex Carlson" width={100} height={100}/>
                        <div>
                        <p className="font-semibold">Alex Carlson</p>
                        <p className="text-sm text-gray-600">admin</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* blog post 3 */}
                <div className="overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                    <Link href="/blog/1">
                    <Image className="h-full w-full object-cover rounded-xl overflow-hidden" src="/bg3.jpg" alt="alt data" width={200} height={400}/>
                    </Link>
                    </div>
                    <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                        <span>Mar 16, 2027</span>
                        <span className="mx-2">•</span>
                        <span className='text-green-600'>Personal</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2"><Link href="/blog/1">Error voluptates culpa eligendi. Hic vel totam vitae illo</Link></h2>
                    <p className="text-gray-600 mb-4">culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto .</p>
                    <div className="flex items-center">
                        <Image className="h-10 w-10 rounded-full mr-3" src="/avatar.png" alt="Alex Carlson" width={100} height={100}/>
                        <div>
                        <p className="font-semibold">Alex Carlson</p>
                        <p className="text-sm text-gray-600">admin</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* blog posts */}
        {/* pagination */}
        <div className="mb-16">
            <BlogPagination/>
        </div>
        {/* pagination */}
    </div>
  )
}

export default Blog