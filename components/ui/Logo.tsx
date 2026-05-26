import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="text-headline-md font-bold text-primary">
      <Image src="/images/logo.png" alt="AIM JAPANESE LANGUAGE ACADEMY" width={100} height={50} className="inline-block" />
    </Link>
  );
}
