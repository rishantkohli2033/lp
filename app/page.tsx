import Link from "next/link";

export default function Home() {
  return (
  <div className="flex justify-center min-w-[28rem]">
    <div className="text-center p-10 text-xl leading-10 text-chocolate">
      <h1 className="font-normal text-6xl tracking-widest">SHEIN</h1>
      <h2 className="font-light text-2xl pt-8">Click Below to become a product reviewer for Shein</h2>
      <div className="flex flex-col justify-text text-lg leading-8 font-light pt-8 p-4 items-center">
        <p>1. Click the link given below</p>
        <p className="pr-1">2. Enter your email & basic info</p>
        <p>3. Complete the product survey</p>
        <p className="pl-3">4. Complete recommended deals</p>
        <p>5. Receive your $750 gift card</p>
        <Link href={'https://glitchy.go2cloud.org/aff_c?offer_id=76&aff_id=2431&source=jobs'} target="_blank">
        <button className="pl-8 pr-8 pt-4 pb-4 mt-12 text-3xl font-normal bg-chocolate text-pink-200 rounded transition w-fit">Start Review</button>
        </Link>
      </div>
    </div>
    </div>
  );
}
