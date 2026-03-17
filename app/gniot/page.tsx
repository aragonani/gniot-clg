import GniotComponents from "@/components/colleges-components/gniot";
import { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "GNIOT Group of Institutions",
		description: "GNIOT Group of Institutions",
	};
}

const page = () => {

  return (
    <Suspense fallback={<div className="min-h-screen"/>}>
      <GniotComponents />
    </Suspense>
  );
};

export default page;
