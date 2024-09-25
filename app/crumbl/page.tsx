import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-pink-50 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Crumbl Cookie Gift Card</title>
        <meta name="description" content="Get a $100 Crumbl Cookie Gift Card!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        {/* Crumbl Logo */}
        <div className="mb-20">
          <Image
            src="/Crumbl-Cookies-Logo-Vector.svg-.png"  // Path to your image in the public folder
            alt="Crumbl Cookies Logo"
            width={220} // Adjust size as per your need
            height={150} // Adjust size as per your need
          />
        </div>

        {/* Headline */}
        <p className="text-lg text-gray-700 mb-6">
          Complete these steps to get a $100 Crumbl Cookie gift card!
        </p>

        {/* Steps Section */}
        <div className="bg-pink-300 text-white rounded-lg p-6 shadow-lg w-full max-w-md">
          <p className="text-left text-lg mb-3 font-semibold">
            1. Click on "Sign Up!" <br />
            2. Enter email & further information <br />
            3. Complete at least 2-3 deals <br />
            4. Claim your gift card
          </p>
        </div>

        {/* Call to Action Button */}
        <Link href={'https://glitchy.go2cloud.org/aff_c?offer_id=144&aff_id=2431'}>
        <button className="mt-8 bg-gray-800 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-900">
          Sign Up
        </button>
        </Link>
      </main>

      {/* Footer */}
      <footer className="flex items-center font-bold justify-center w-full h-24">
        <p className="text-gray-600"></p>
      </footer>
    </div>
  );
}
