import AddComment from '@/components/AddComment'
import Newsletter from '@/components/Newsletter'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleBlogPost = () => {
  return (
    <div className=''>
        {/* blog post */}
        <div className="relative overflow-hidden py-16">
            <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
                <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                <svg className="absolute top-12 left-full translate-x-32 transform" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                    <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                </svg>
                <svg className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                    <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                </svg>
                <svg className="absolute bottom-12 left-full translate-x-32 transform" width="404" height="384" fill="none" viewBox="0 0 404 384">
                    <defs>
                    <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                </svg>
                </div>
            </div>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg">
                <h1>
                    <span className="block text-center text-lg font-semibold text-red-600">Category</span>
                    <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-black sm:text-4xl dark:text-white">Odio penatibus risus viverra tellus varius sit neque erat velit.</span>
                </h1>
                <p className="mt-8 text-xl leading-8 text-black dark:text-white">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
                </div>
                <div className="prose prose-lg prose-indigo mx-auto mt-6 text-black dark:text-white">
                <p>Faucibus commodo massa rhoncus, volutpat. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. <a href="#" className='text-blue-700'>Mattis mauris semper</a> sed amet vitae sed turpis id.</p>
                <ul role="list">
                    <li>Quis elit egestas venenatis mattis dignissim.</li>
                    <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                    <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.</p>
                <h2 className='text-black dark:text-white'>From beginner to expert in 30 days</h2>
                <p>Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.</p>
                <blockquote>
                    <p className='text-black dark:text-white'>Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
                </blockquote>
                <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>
                <figure>
                    <Image className="w-full rounded-lg" src="/bg1.jpg" alt="" width="1310" height="873" />
                    <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, culpa?</figcaption>
                </figure>
                <h2 className='text-black dark:text-white'>Everything you need to get up and running</h2>
                <p>Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>
                <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>
                </div>
            </div>
        </div>
        {/* blog post */}

        {/* blog author */}
        <section id="author" className='max-w-3xl mx-auto px-5 mb-16'>
            <div className="flex">
                <div className="mr-4 flex-shrink-0">
                    {/* <svg className="h-16 w-16 border border-gray-300 bg-white text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true">
                    <path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0" />
                    </svg> */}
                    <Image src='/avatar.png' alt='author' className="h-16 w-16" width={64} height={64}/>
                </div>
                <div>
                    <h4 className="text-lg font-bold">Alex Carlson</h4>
                    <p className="mt-1">Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.</p>
                </div>
            </div>
        </section>
        {/* blog author */}

        {/* next and previous posts */}
        <div className="max-w-3xl mx-auto space-y-16 mb-16">
            <div className="">
                <h1 className='px-5'>Previous post</h1>
                <div className="overflow-hidden">
                <div className="md:flex">
                    
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                            <span>Mar 16, 2027</span>
                            <span className="mx-2">•</span>
                            <span className='text-red-500'>Business</span>
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
            <div className="">
                <h1 className='px-5'>Next post</h1>
                <div className="overflow-hidden">
                <div className="md:flex">
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                            <span>Mar 16, 2027</span>
                            <span className="mx-2">•</span>
                            <span className='text-blue-600'>Banter</span>
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
        {/* next and previous posts */}
        {/* comments */}
        <div className="max-w-3xl mx-auto px-5 mb-20">
            <h1 className='py-5'>Comments</h1>
            <div className="flex">
                <div className="mr-4 flex-shrink-0">
                    <Image src='/empty.jpg' alt='author' className="h-16 w-16" width={64} height={64}/>
                </div>
                <div>
                    <h4 className="text-lg font-bold">Kasolo Adam</h4>
                    <p className="mt-1">Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.</p>

                    <div className="mt-6 flex">
                    <div className="mr-4 flex-shrink-0">
                        <Image src='/empty.jpg' alt='author' className="h-12 w-12" width={48} height={48}/>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">Abdul Karim</h4>
                        <p className="mt-1">Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.</p>
                    </div>
                    </div>
                    <div className="mt-6 flex">
                    <div className="mr-4 flex-shrink-0">
                        <Image src='/empty.jpg' alt='author' className="h-12 w-12" width={48} height={48}/>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">Muyinda Oscar</h4>
                        <p className="mt-1">Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        {/* comments */}
        {/* add comment form */}
        <div className="max-w-3xl mx-auto px-5 mb-16">
            <AddComment/>
        </div>
        {/* add comment form */}

    </div>
  )
}

export default SingleBlogPost