import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
// import greenai from "../images/greenai.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { NavLink } from "react-router-dom";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="bg-green-100 relative">
      {/* <img src={greenai} alt="Green Tech Pic" className="absolute w-full h-full" /> */}
      <div className="p-10 lg:pt-48 sm:pt-12 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-5">
          <div>
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <NavLink
              to="/contact"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-600 hover:text-green-200"
            >
              Contact Information
            </NavLink>
          </div>
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive lg:text-6xl text-green-300 sm:text-3xl mb-4">
              Hey there. Welcome to{" "}
              <span className="text-green-100">{author.name}</span>
              's webpage!
            </h1>
            
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="ogu7ciby"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
