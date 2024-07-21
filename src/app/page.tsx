import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main className="flex flex-col my-14 px-5 space-y-20">
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&lsquo;m Dorian 👋
              </div>
              <div className="max-w-[600px] md:text-xl">
                Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.
              </div>
            </div>

              <Avatar className="size-28 border">
                <AvatarImage alt='profile image' src='/me.png' />
                <AvatarFallback>initials</AvatarFallback>
              </Avatar>

          </div>
        </div>
      </section>
      <section id="blog" className='mt-5'>
        {/* <div className="max-w-3xl mx-auto my-10">
        </div> */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Featured blog posts</h1>
          <p className="text-gray-600 mb-8">Learn how to grow your business with our expert advice.</p>
          
          <div className="space-y-8">
            {/* <!-- Blog Post 1 --> */}
            {/* Beware that the the size of the image, blog-post heading and description affect the overall height and width of the image and their might be some data that is not displayed because overflow is set to hidden */}
            <div className="overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image className="h-full w-full object-cover rounded-xl overflow-hidden" src="/bg1.jpg" alt="alt data" width={200} height={400}/>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span>Mar 16, 2027</span>
                    <span className="mx-2">•</span>
                    <span>Marketing</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Boost your conversion rate</h2>
                  <p className="text-gray-600 mb-4">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</p>
                  <div className="flex items-center">
                    <Image className="h-10 w-10 rounded-full mr-3" src="/me.png" alt="Michael Foster" width={100} height={100}/>
                    <div>
                      <p className="font-semibold">Michael Foster</p>
                      <p className="text-sm text-gray-600">Co-Founder / CTO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* blog post 2 */}
            <div className="overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image className="h-full w-full object-cover rounded-xl" src="/bg2.jpg" alt="alt data" width={200} height={400}/>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span>Mar 16, 2027</span>
                    <span className="mx-2">•</span>
                    <span>Marketing</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Boost your conversion rate corrupti dicta laboris incididunt</h2>
                  <p className="text-gray-600 mb-4">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto .</p>
                  <div className="flex items-center">
                    <Image className="h-10 w-10 rounded-full mr-3" src="/me.png" alt="Michael Foster" width={100} height={100}/>
                    <div>
                      <p className="font-semibold">Michael Foster</p>
                      <p className="text-sm text-gray-600">Co-Founder / CTO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* blog post 3 */}
            <div className="overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image className="h-full w-full object-cover rounded-xl" src="/bg3.jpg" alt="alt data" width={200} height={400}/>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span>Mar 16, 2027</span>
                    <span className="mx-2">•</span>
                    <span>Marketing</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Boost your conversion rate corrupti Illo sint voluptas. Error voluptates</h2>
                  <p className="text-gray-600 mb-4">culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto .</p>
                  <div className="flex items-center">
                    <Image className="h-10 w-10 rounded-full mr-3" src="/me.png" alt="Michael Foster" width={100} height={100}/>
                    <div>
                      <p className="font-semibold">Michael Foster</p>
                      <p className="text-sm text-gray-600">Co-Founder / CTO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* load more buttons */}
      <section id="load-more-btn" className='w-full flex justify-center'>
          <button className="shadow-[0_0_0_2px_#000000_inset] px-8 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            All posts
          </button>
      </section>
      {/* load more buttons */}
      {/* news letter section */}
      <Newsletter/>
      {/* news letter section */}
      
    </main>
  );
}

