import Image from "next/image"

export default function Gallery() {
    return (
        <>
            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">2025</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">2024</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">2023</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">2022</button>
                <button type="button" className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">2021</button>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/shivgarjanapathakpunelogo.png" alt="one" width={500}
                        height={500} />
                </div>
            </div>

        </>
    )
}