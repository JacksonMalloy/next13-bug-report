import { Search } from "../components/Search";

export const revalidate = 3600,
  dynamic = "force-dynamic";

// This file maps to the index route (/)
export default async function Page({ searchParams }) {
  const isSearching = !!searchParams.search;

  console.log({ isSearching });

  return (
    <section className="p-5">
      {/* @ts-expect-error Server Component */}
      <Search />
    </section>
  );
}
