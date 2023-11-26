import { NextResponse } from "next/server";
import { CACHE_TAG_REVIEWS } from "@/lib/reviews";
import { revalidateTag } from "next/cache";

export async function POST(request) {
  const payload = await request.json();
  if (payload.model === "review") {
    revalidateTag(CACHE_TAG_REVIEWS);
    console.log("CACHE_TAG_REVIEWS: ", CACHE_TAG_REVIEWS);
  }
  // return NextResponse.json({ healthy: true });
  return new Response(null), { status: 204 };
}
