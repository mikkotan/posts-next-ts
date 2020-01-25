import { gql } from 'apollo-boost';

export const POSTS_QUERY = gql`
query Posts {
  getPosts {
    id
    title
    link
    description
    postType
  }
}
`
