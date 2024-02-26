import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MovieCardPropsType {
  id: string;
  poster_path: string;
  title: string;
  className?: string;
}

const MovieCard = ({
  id,
  poster_path,
  title,
  className,
}: MovieCardPropsType) => {
  return (
    <div>
      <div className={`rounded-2xl overflow-hidden ${className}`}>
        <Link href={`/movie/${id}`}>
          <Image src={poster_path} placeholder="blur" blurDataURL="./loading.jpg" alt={title} width={1000} height={100} />
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
