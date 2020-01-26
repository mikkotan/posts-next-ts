import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../src/components/Layout';

import { POSTS_QUERY } from '../src/graphql/queries';
import { TPost } from '../src/interfaces';

import PostCard from '../src/components/PostCard';

const IndexPage: NextPage = () => {
  const { data, loading } = useQuery(POSTS_QUERY);

  if (loading) { return <div>Loading...</div> }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Welcome to Post++ 👋</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          {data.getPosts.map((post: TPost) => (
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <PostCard key={post.id} post={post} />
            </Link>
          ))}
        </Fragment>
      )}
    </Layout>
  );
};

export default IndexPage;
