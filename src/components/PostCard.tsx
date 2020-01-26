import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import moment from 'moment';
import ReactPlayer from 'react-player';

import { TPost } from '../interfaces'

import VideoBox from './VideoBox';

const Card = styled.div`
  width: 610px;
  display: flex;
  flex-direction: column;
  background-color: #4CFFFF;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 5px;

  &:hover {
    cursor: pointer;
  }
`

const Header = styled.div`
  .title {
    font-size: 18px;
    font-weight: 600;
    color: black;
  }

  .title:hover {
    color: blue;
  }

  .date {
    font-size: 12px;
    font-weight: 200;
    color: gray;
  }
`

const Description = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: gray;
`

type Props = {
  post: TPost
}

const PostCard: React.FunctionComponent<Props> = ({ post }) => (
  <Card>
    {post.postType === 'video' && (
      <VideoBox>
        <ReactPlayer url={post.link} controls width="430px" />
      </VideoBox>
    )}
    <Header>
      <span className="date">{`Posted ${moment(Number(post.createdAt)).fromNow()}`}</span>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <div className="title">{post.title}</div>
      </Link>
    </Header>
    <Description>
      {post.description}
    </Description>
  </Card>
)

export default PostCard;
