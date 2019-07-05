import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';

import {Divider} from '../components/tufte';
import SafeLink from '../components/SafeLink';

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

function formatDate(date) {
  const [year, month, day] = date.split('-');

  return `${day}/${month}/${year}`;
}

export default function Index({data}) {

  const posts = data.allMdx.edges.map(({node}) => node);

  return (
    <Layout>
      <h2>A curated collection of shenanigans</h2>
      <h3>Writing about programming, litterature, modular synthesizers &amp; other miscellaneous topics</h3>
      <hr />
      <p>
        <em>Posts about programming &amp; data structures:</em>
      </p>
      <ul>
        {posts.map(p => {
          const data = p.frontmatter;

          return (
            <li key={data.slug}>
              <h4 style={{borderBottom: 'none', maxWidth: '100%'}}>
                <Link to={`/posts/${data.slug}`}>{data.title}</Link>
              </h4>
              <p>
                <code>{formatDate(data.date)}</code>
                <br />
                <em>{data.subtitle}</em>
              </p>
            </li>
          );
        })}
      </ul>
      <Divider />
      <h4>Acknowledgments</h4>
      <p>Being a very bad graphist, I must rely on works from more talented people than myself to design palatable things:</p>
      <ul>
        <li>
          The very fine <SafeLink href="https://edwardtufte.github.io/tufte-css/">Tufte CSS</SafeLink> stylesheet (<SafeLink href="https://github.com/edwardtufte/tufte-css">repository</SafeLink>), by <SafeLink href="https://github.com/daveliepmann">Dave Liepmann</SafeLink> et alii.
        </li>
        <li><SafeLink href="https://www.c82.net/">Nicolas Rougeux</SafeLink>'s fantastic rendition of <SafeLink href="https://www.c82.net/euclid/">Byrne's Euclid</SafeLink>.</li>
      </ul>
    </Layout>
  );
}
