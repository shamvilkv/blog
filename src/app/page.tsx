import BlogCard from "@/Components/BlogCard";

async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch blog data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return [];
  }
}

export default async function Home() {
  const blogData: { id: number; body: string; title: string }[] =
    await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-neutral-700 mb-5">Blogs</h1>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
          {blogData.map((item) => (
            <BlogCard
              key={item.id}
              title={item.title}
              body={item.body}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
