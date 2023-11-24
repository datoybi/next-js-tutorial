import Link from "next/link";
import Heading from "../../components/Heading";

export default function ReviewPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we'll list all the reviews.</p>
      <ul>
        <li>
          <Link href="reviews/hollow-night">hollow night</Link>
        </li>
        <li>
          <Link href="reviews/stardew-vally">stardew-valuuy</Link>
        </li>
      </ul>
    </>
  );
}
