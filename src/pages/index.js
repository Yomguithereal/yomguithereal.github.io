import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';

import {Divider} from '../components/tufte';

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            slug
            title
            subtitle
            date
          }
        }
      }
    }
  }
`;

export default function Index({data}) {

  const posts = data.allMdx.edges.map(({node}) => node);

  // TODO: credits tufte + byrne
  // TODO: blog posts with descriptive card
  // TODO: publish script
  // TODO: link style

  return (
    <Layout>
      <h2>A fine collection of shenanigans</h2>
      <h3>Writing about programming, litterature, modular synthesizers &amp; other miscellaneous topics</h3>
      <hr />
      <ul>
        {posts.map(p => {
          const data = p.frontmatter;

          const date = new Date(data.date);

          // TODO: subtitles
          return (
            <li key={data.slug}>
              <h4 style={{borderBottom: 'none', maxWidth: '100%'}}>
                <Link to={`/posts/${data.slug}`}>{data.title}</Link>
              </h4>
              <p>
                <code>{date.toLocaleDateString()}</code>
                <br />
                {data.subtitle}
              </p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
