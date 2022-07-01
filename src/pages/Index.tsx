import { gql, useQuery } from "@apollo/client";
import { Post } from "../components/Post/Post";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: {
    text: string;
  };
  published: string;
}

export const IndexPage = () => {
  const GET_POSTS_QUERY = gql`
    query GetPostsQuery {
      codelandia01S(orderBy: published_DESC) {
        id
        slug
        title
        published
        content {
          text
        }
      }
    }
  `;

  const { data } = useQuery<{ codelandia01S: Post[] }>(GET_POSTS_QUERY);

  return (
    <div className="w-2/3 pt-24">
      {data?.codelandia01S.map((post) => {
        return (
          <Post key={post.id} date={post.published} slug={post.slug} title={post.title}>
            {post.content.text}
          </Post>
        );
      })}
    </div>
  );
};
