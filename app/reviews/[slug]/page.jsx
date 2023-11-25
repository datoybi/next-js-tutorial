import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareButton from "@/components/ShareButton";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  // console.log("[generateStaticParams] ", slugs);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold pb-3">{review.subtitle}</p>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareButton />
      </div>
      <img src={review.image} alt="" width="640" height="360" className="mb-2 rounded" />
      <article dangerouslySetInnerHTML={{ __html: review.body }} className="max-w-screen-sm prose prose-slate" />
    </>
  );
}
