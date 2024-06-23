import BlogCard from "@/Components/BlogCard";
import CommentCard from "@/Components/CommentCard";
import { notFound } from "next/navigation";

interface props {
  params: { postId: number };
}

interface comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

async function getPost(params: { postId: any }) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?id=${params.postId}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return [];
  }
}

async function getComments(id: number) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return [];
  }
}

const page: React.FC<props> = async ({ params }) => {
  if (params.postId > 100 || isNaN(+params.postId)) {
    notFound();
  }

  const [blogDetail] = await getPost(params);
  const comments = await getComments(blogDetail.id);

  return (
    <div className="container mx-auto flex min-h-screen flex-col p-20">
      <h1 className="text-3xl font-semibold text-neutral-700 mb-5">
        Blog Page
      </h1>

      <BlogCard
        title={blogDetail.title}
        body={blogDetail.body}
        id={blogDetail.id}
        clickDisabled
      />
      <div className="mt-3 mb-3 pt-5 divide-y divide-dashed">
        <h1 className="font-semibold mt-10 mb-5">{comments.length} Comments</h1>
        {comments.map((item: comment) => (
          <CommentCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
