import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import { useQuery } from '@apollo/react-hooks';

import { POSTS_QUERY } from '../graphql/queries';

const IndexPage: NextPage = () => {
  const { data } = useQuery(POSTS_QUERY)

  console.log('data', data)
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
