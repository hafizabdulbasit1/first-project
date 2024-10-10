




















import Link from "next/link";
import Image from "next/image";

export default function Head() {
    return (
        <div className="all">
            {/* Header */}
            <nav className="bg-[#727217] py-2 flex flex-col md:flex-row justify-between items-center text-white">
                {/* Logo */}
                <div className="pl-8 py-2">
                    <h1 className="text-2xl md:text-3xl font-bold bg-gray-400 px-2 py-1 rounded-2xl hover:bg-yellow-500 hover:text-white">
                        ABD
                    </h1>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-col md:flex-row text-white font-bold space-y-2 md:space-y-0 md:space-x-6 md:pr-10 py-2">
                    <li className="hover:bg-yellow-500 rounded-full px-4 py-2">
                        <Link href="/">home</Link>
                    </li>
                    <li className="hover:bg-yellow-500 rounded-full px-4 py-2">
                        <Link href="/about">about</Link>
                    </li>
                    <li className="hover:bg-yellow-500 rounded-full px-4 py-2">
                        <Link href="/gallery">gallery</Link>
                    </li>
                    <li className="hover:bg-yellow-500 rounded-full px-4 py-2">
                        <Link href="/contact-us">contact us</Link>
                    </li>
                </ul>
            </nav>

            {/* Main Page */}
            <main className="bg-slate-300 py-20 md:py-40 px-6 md:px-24 flex flex-col md:flex-row items-center">
                {/* Heading and Text */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-[#727217] font-bold text-4xl md:text-7xl mb-4">This is main page</h1>
                    <p className="text-gray-700 font-bold py-5 w-full md:w-3/4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia odit laudantium accusamus eveniet fugit asperiores cumque quis minima assumenda consequuntur iste modi iusto amet adipisci, blanditiis excepturi, quas saepe?
                    </p>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button className="rounded-2xl bg-gray-500 text-white hover:bg-yellow-500 hover:text-black px-3 py-2">click this</button>
                        <button className="rounded-2xl bg-gray-500 text-white hover:bg-yellow-500 hover:text-black px-3 py-2">for more</button>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                    <Image width={1100} height={500} src="/ac.jpg" alt="shoes" className="w-full h-auto object-cover" />
                </div>
            </main>

            {/* Cards Section */}
            <section className="bg-[#727217] py-10 text-white">
                <h1 className="text-4xl text-center py-5 font-bold">Our Products</h1>
                <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {/* Card 1 */}
                    <div className="rounded overflow-hidden bg-gray-800">
                        <Image width={1000} height={500} src="/animation.png" alt="product" className="hover:scale-110 transition-transform" />
                        <div className="p-4">
                            <h2 className="text-center text-3xl font-bold">High Quality</h2>
                            <p className="text-center text-gray-200 mt-4">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, delectus modi sapiente accusantium qui fugiat tempora atque ipsum.
                            </p>
                        </div>
                        <div className="flex justify-center py-4">
                            <button className="bg-green-900 rounded font-bold text-center px-4 py-2 hover:bg-yellow-600">buy now</button>
                        </div>
                    </div>

                    {/* Repeat Card Structure for Remaining Cards */}
                    {/* Card 2 */}
                    <div className="rounded overflow-hidden bg-gray-800">
                        <Image width={1000} height={500} src="/animation.png" alt="product" className="hover:scale-110 transition-transform" />
                        <div className="p-4">
                            <h2 className="text-center text-3xl font-bold">High Quality</h2>
                            <p className="text-center text-gray-200 mt-4">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, delectus modi sapiente accusantium qui fugiat tempora atque ipsum.
                            </p>
                        </div>
                        <div className="flex justify-center py-4">
                            <button className="bg-green-900 rounded font-bold text-center px-4 py-2 hover:bg-yellow-600">buy now</button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded overflow-hidden bg-gray-800">
                        <Image width={1000} height={500} src="/animation.png" alt="product" className="hover:scale-110 transition-transform" />
                        <div className="p-4">
                            <h2 className="text-center text-3xl font-bold">High Quality</h2>
                            <p className="text-center text-gray-200 mt-4">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, delectus modi sapiente accusantium qui fugiat tempora atque ipsum.
                            </p>
                        </div>
                        <div className="flex justify-center py-4">
                            <button className="bg-green-900 rounded font-bold text-center px-4 py-2 hover:bg-yellow-600">buy now</button>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded overflow-hidden bg-gray-800">
                        <Image width={1000} height={500} src="/animation.png" alt="product" className="hover:scale-110 transition-transform" />
                        <div className="p-4">
                            <h2 className="text-center text-3xl font-bold">High Quality</h2>
                            <p className="text-center text-gray-200 mt-4">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, delectus modi sapiente accusantium qui fugiat tempora atque ipsum.
                            </p>
                        </div>
                        <div className="flex justify-center py-4">
                            <button className="bg-green-900 rounded font-bold text-center px-4 py-2 hover:bg-yellow-600">buy now</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-900 py-10 md:py-14 text-white">
                <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Explore</h2>
                        <ul className="space-y-2 mt-2">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">YouTube</a></li>
                            <li><a href="#">WhatsApp</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">More About</h2>
                        <ul className="space-y-2 mt-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Gallery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Abdul Basit</h2>
                        <p className="mt-2">Copyright 2024 by Abdul Basit</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
