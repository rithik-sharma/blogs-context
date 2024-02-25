import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import "./Blog.css";

const Blogs = () => {
  //consume
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-11/12 max-w-[630px] mt-[60px] mb-[65px] flex flex-col justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-xl mt-3">{post.title}</p>
            <p className="text-sm ">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="underline font-bold">{post.category}</span>
            </p>
            <p className="text-sm mb-3">
              Posted on <span>{post.date}</span>
            </p>
            <p className="text-sm mb-2">{post.content}</p>
            <div className="text-xs flex gap-x-3">
              {post.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className=" text-blue-600 underline font-bold"
                  >{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
