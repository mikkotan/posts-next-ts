import { gql } from 'apollo-boost';

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost(
    $title: String!,
    $description: String!,
    $postType: String!,
    $link: String,
  ) {
    createPost(
      title: $title,
      description: $description,
      postType: $postType,
      link: $link
    ) {
      id
      title
      description
      postType
      link
      createdAt
    }
  }
`
