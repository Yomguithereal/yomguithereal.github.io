import React from 'react';
import {graphql} from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Layout from '../components/layout';

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

export default function MdxPostTemplate({data: {mdx}}) {
  console.log(mdx)

  return (
    <Layout>
      <article>
        <section>
          <h2>
            {mdx.frontmatter.title}
          </h2>
          <h3>
            {mdx.frontmatter.subtitle}
          </h3>
          <hr />
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
}
