import Link from "next/link";
import Heading from "../../components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import PaginationBar from "@/components/PaginationBar";

export const metadata = {
  title: "Reviews",
};

const PAGE_SIZE = 6;
// export const dynamic = "force-dynamic";
// export const revalidate = 30; // seconds

export default async function ReviewPage({ searchParams }) {
  const page = parsePageParam(searchParams.page);
  console.log(page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);
  console.log("[ReviewsPage] props: ", page);

  return (
    <>
      <Heading>Reviews</Heading>
      <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
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
              <h2 className="font-semibold font-orbitron py-1 text-center">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}
