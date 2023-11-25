import Heading from "@/components/Heading";
import Link from "next/link";
import { getFeaturedReview } from "@/lib/reviews";

export default async function HomePage() {
  const review = await getFeaturedReview();

  return (
    <>
      <Heading>Home</Heading>
      <p>Here we'll list all the home.</p>
      <ul className="flex flex-row flex-wrap gap-3">
        <li className="bg-white border rounded shadow w-80 hover:shadow-xl">
          <Link href={`/reviews/${review.slug}`}>
            <img src={review.image} alt={review.title} width="320" height="180" className="rounded-t " />
            <h2 className="font-semibold font-orbitron py-1 text-center">{review.title}</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
