import Link from "next/link";
import Heading from "../../components/Heading";
import { getFeaturedReview } from "@/lib/reviews";

export default async function ReviewPage(slug) {
  const review = await getFeaturedReview();

  return (
    <>
      <Heading>Reviews</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you</p>
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
