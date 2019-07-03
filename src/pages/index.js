import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
`;

export default function Index({data}) {

  const posts = data.allMdx.edges.map(({node}) => node);

  // TODO: credits tufte + byrne

  return (
    <Layout>
      A blog.
      <ul>
        {posts.map(p => {
          const slug = p.frontmatter.slug;

          // TODO: subtitles
          return (
            <li key={slug}>
              <Link to={`/posts/${slug}`}>{slug}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
