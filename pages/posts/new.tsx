import { NextPage } from 'next';
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import Layout from '../../src/components/Layout';
import PostForm from '../../src/components/PostForm';

import { FormValues } from '../../src/interfaces';

import { CREATE_POST_MUTATION } from '../../src/graphql/mutations';
import { POSTS_QUERY } from '../../src/graphql/queries';

const NewPostPage: NextPage = () => {
  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    refetchQueries: [
      { query: POSTS_QUERY }
    ]
  });
  const router = useRouter();

  const handleSubmit = async (variables: FormValues) => {
    await createPost({ variables })
    router.push('/')
  };

  return (
    <Layout>
      <h1>Publish New Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export default NewPostPage;
