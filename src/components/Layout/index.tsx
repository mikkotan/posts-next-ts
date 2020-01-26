import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Layout, Menu } from 'antd';

import Logo from './Logo';

const { Header, Content } = Layout;

type Props = {
  title?: string
}

const CMenu = styled(Menu)`
  line-height: 64px;
  background-color: #2683FE;
`

const CContent = styled(Content)`
  padding: 0 50px;
  margin: 24px 0;
  min-height: 540px;
`

const Container = styled.div`
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const CHeader = styled(Header)`
  line-height: 64px;
  height: 64px;
  background-color: #2683FE;
`

const activeNav: any = {
  '/': '1',
  '/posts/new': '2'
}

const CustomLayout: React.FunctionComponent<Props> = ({
  children,
  title
}) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <CHeader>
          <Link href="/">
            <Logo>Post++</Logo>
          </Link>
          <CMenu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[activeNav[router.pathname]]}
          >
            <Menu.Item key="1">
              <Link href="/">
                <span>Feed</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/posts/new">
                <span>New Post</span>
              </Link>
            </Menu.Item>
          </CMenu>
        </CHeader>
        <CContent>
          <Container>
            {children}
          </Container>
        </CContent>
      </Layout>
    </div>
  )
};

CustomLayout.defaultProps = {
  title: 'Post++'
}

export default CustomLayout
