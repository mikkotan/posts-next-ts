import { Fragment } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import ReactPlayer from 'react-player';

import { POST_QUERY } from '../../src/graphql/queries';

import Layout from '../../src/components/Layout';
import VideoBox from '../../src/components/VideoBox';

const PostDetailPage: NextPage = () => {
  const router = useRouter();
  const { data, loading } = useQuery(POST_QUERY, {
    variables: { id: router.query.id }
  });

  return (
    <Layout>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <h1>{data.getPost.title}</h1>
          {data.getPost.postType === 'video' && (
            <VideoBox>
              <ReactPlayer
                controls
                url={data.getPost.link}
                width="610px"
              />
            </VideoBox>
          )}
          <p>{data.getPost.description}</p>
        </Fragment>
      )}
    </Layout>
  );
};

export default PostDetailPage;
