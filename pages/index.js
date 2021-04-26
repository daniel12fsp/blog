import { getLink } from "../constants";
import React from "react";
import { getPosts } from "../helpers/getPosts.js";

function PostCard({ title, link }) {
  return (
    <div>
      <a href={getLink(link)}>{title} </a>
    </div>
  );
}

export default function MainPage({ posts }) {
  return (
    <div>
      <h1> Premissas desse blog</h1>
      <ul>
        <li>Perder o medo de escrever</li>
        <li>Documentar achados com exemplos práticos</li>
        <li>Centralizar códigos, dicas e comandos</li>
      </ul>
      <div>
        <h1> Posts </h1>
        {posts.map((post) => (
          <PostCard key={post.link} {...post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return { props: { posts } };
}
