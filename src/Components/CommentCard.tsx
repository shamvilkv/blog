import React from "react";
import Image from "next/image";

interface CommentCardProps {
  item: { email: string; body: string; name: string };
}

const CommentCard: React.FC<CommentCardProps> = ({ item }) => {
  const { email, name, body } = item;

  return (
    <div className="mt-3 mb-8 pt-3">
      <div className="flex flex-row align-top">
        <Image
          src="/images/user.png"
          alt="user"
          width="40"
          height="40"
          className="mr-2 place-self-start"
        />

        <div className="flex flex-col">
          <h1 className="font-semibold text-base capitalize">{name}</h1>
          <h4 className="text-sm text-slate-400">{email}</h4>
          <h4 className="mt-2 text-sm text-slate-600 w-3/4">{body}</h4>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
