import Heading from "@/components/Heading";
import Link from "next/link";
import { getFeaturedReview, getReviews } from "@/lib/reviews";
import Image from "next/image";

// export const dynamic = "force-dynamic";
// export const revalidate = 30; // seconds

export default async function HomePage() {
  // const review = await getFeaturedReview();
  const reviews = await getReviews(3);
  // console.log("[HomePage] ", reviews.map((review) => review.slug).join(", "));

  return (
    <>
      <Heading>Home</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li key={review.slug} className="bg-white border rounded shadow w-80 hover:shadow-xl">
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt={review.title}
                width="320"
                height="180"
                className="rounded-t"
                // priority={index === 0}
              />
              <div className="px-2 py-1 text-center sm:text-left">
                <h2 className="font-semibold font-orbitron">{review.title}</h2>
                <p className="hidden pt-2 sm:block">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
