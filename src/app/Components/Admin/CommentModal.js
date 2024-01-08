import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function CommentModal({ open, setOpen }) {
  let completeButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        initialFocus={completeButtonRef}
        as="div"
        static
        className="relative z-10"
        onClose={() => null}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur amet labore.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setOpen(false)}
                  >
                    Go back to dashboard
                  </button>
                </div>
              </Dialog.Panel> */}
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="flex items-start space-x-4">
                  <div className="min-w-0 flex-1">
                    <form action="#" className="relative">
                      <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                        <label htmlFor="comment" className="sr-only">
                          Add your comment
                        </label>
                        <textarea
                          rows={3}
                          name="comment"
                          id="comment"
                          ref={completeButtonRef}
                          className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Add your comment..."
                          defaultValue={""}
                        />

                        {/* Spacer element to match the height of the toolbar */}
                        <div className="py-2" aria-hidden="true">
                          {/* Matches height of button in toolbar (1px border + 36px content height) */}
                          <div className="py-px">
                            <div className="h-9" />
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                        <div className="flex items-center space-x-5">
                          <div className="flex items-center">
                            <button
                              type="button"
                              className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                            >
                              <PaperClipIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                              <span className="sr-only">Attach a file</span>
                            </button>
                          </div>
                        </div>
                        <div className="flex-shrink-0 space-x-2">
                          <button
                            type="submit"
                            onClick={(e) => {
                              setOpen(false), e.preventDefault();
                            }}
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Post
                          </button>
                          <button
                            onClick={(e) => {
                              setOpen(false), e.preventDefault();
                            }}
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
