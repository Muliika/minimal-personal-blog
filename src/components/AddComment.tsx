import React from 'react'

const AddComment = () => {
  return (
    <div>
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
                {/* <img className="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
            </div>
            <div className="min-w-0 flex-1">
                <form action="#" className="relative">
                <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-white focus-within:ring-1 focus-within:ring-white">
                    <label htmlFor="comment" className="sr-only">Add your comment</label>
                    <textarea rows={3} name="comment" id="comment" className="block w-full resize-none bg-transparent border-0 py-3 focus:ring-0 sm:text-sm" placeholder="Add your comment..."></textarea>

                    {/* <!-- Spacer element to match the height of the toolbar --> */}
                    <div className="py-2" aria-hidden="true">
                    {/* <!-- Matches height of button in toolbar (1px border + 36px content height) --> */}
                    <div className="py-px">
                        <div className="h-9"></div>
                    </div>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                    <div className="flex items-center space-x-5">
                    </div>
                    <div className="flex-shrink-0">
                    <button type="submit" className="inline-flex items-center rounded-md border border-transparent bg-black dark:bg-gray-500 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2">Post</button>
                    </div>
                </div>
                </form>
            </div>
            </div>
    </div>
  )
}

export default AddComment