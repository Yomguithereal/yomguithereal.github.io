import React from 'react';
import {graphql} from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import {MDXProvider} from '@mdx-js/react';
import Layout from '../components/Layout';
import Highlight from '../components/Highlight';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        subtitle
      }
      code {
        body
      }
    }
  }
`;

// TODO: automatic id on titles
const components = {
  code: props => props.className ?
    <Highlight className={props.className}>{props.children}</Highlight> :
    <code>{props.children}</code>,
  h1: props => <h4>{props.children}</h4>
};

export default function MdxPostTemplate({data: {mdx}}) {
  return (
    <Layout>
      <MDXProvider components={components}>
        <article>
          <section>
            <h2>
              {mdx.frontmatter.title}
            </h2>
            <h3>
              {mdx.frontmatter.subtitle}
            </h3>
            <hr />
            <MDXRenderer>
              {mdx.code.body}
            </MDXRenderer>
          </section>
        </article>
      </MDXProvider>
    </Layout>
  );
}
