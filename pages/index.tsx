import * as React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { useQuery } from '@apollo/react-hooks';

import Layout from '../src/components/Layout';

import { POSTS_QUERY } from '../src/graphql/queries';
import { TPost } from '../src/interfaces';

const IndexPage: NextPage = () => {
  const { data, loading } = useQuery(POSTS_QUERY);

  if (loading) { return <div>Loading...</div> }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <div>
        {data.getPosts.map((post: TPost) => (
          <div>
            <li>Title: {post.title}</li>
            <li>Description: {post.description}</li>
            <br />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
