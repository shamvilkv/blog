import Link from "next/link";
import React from "react";

interface BlogCardProps {
  title: string;
  body: string;
  id: number;
  clickDisabled?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  body,
  id,
  clickDisabled,
}) => {
  return (
    <div
      className={
        !clickDisabled
          ? `hover:shadow-lg hover:shadow-blue-200 shadow focus:cursor-pointer rounded-md p-5`
          : ``
      }
    >
      <Link
        href={{ pathname: `/posts/${id}`, query: { title, body, id } }}
        as={`/posts/${id}`}
        className={clickDisabled ? "pointer-events-none" : ""}
      >
        <h1 className="font-semibold capitalize mb-2 hover:underline text-blue-800">
          {title}
        </h1>
      </Link>
      <h1 className="font-normal">{body}</h1>
    </div>
  );
};

export default BlogCard;
