import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <Image
        src="/images/notfound.jpg"
        width={500}
        height={500}
        alt="not found"
      />

      <Link href={"/"} className="font-semibold text-xl text-blue-900">
        Go to Home
      </Link>
    </main>
  );
};

export default NotFound;
