import { gql } from 'apollo-boost';

export const POSTS_QUERY = gql`
  query Posts {
    getPosts {
      id
      title
      link
      description
      postType
      createdAt
    }
  }
`

export const POST_QUERY = gql`
  query Post($id: ID!) {
    getPost(id: $id) {
      id
      title
      link
      description
      postType
      createdAt
    }
  }
`
