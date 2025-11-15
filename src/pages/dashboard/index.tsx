import { graphqlFetcher } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";

// TODO: remove example query, separate queries when BE grows
const GET_POSTS = `
  query ($page: Int!, $limit: Int!) {
    posts(options: { paginate: { page: $page, limit: $limit } }) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;

function PostsList() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["posts", 1, 3],
    queryFn: () => graphqlFetcher(GET_POSTS, { page: 1, limit: 3 }),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>

      <h2>Posts (Total: {data.posts.meta.totalCount})</h2>

      {data?.posts.data.map((post) => (
        <div key={post.id} style={{ marginBottom: "12px" }}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
const DashboardPage = () => {
  return (
    <div>
      Dashboard
      <div className="m-10">
        <PostsList />
      </div>
    </div>
  );
};

export default DashboardPage;
