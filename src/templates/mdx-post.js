import React from 'react';
import {graphql} from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import {MDXProvider} from '@mdx-js/react';
import slug from 'slug';
import Layout from '../components/Layout';
import Highlight from '../components/Highlight';

const slugify = string => {
  return slug(string, {lower: true});
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        toc
        title
        subtitle
      }
      tableOfContents
      code {
        body
      }
    }
  }
`;

const components = {
  code: props => props.className ?
    <Highlight className={props.className}>{props.children}</Highlight> :
    <code>{props.children}</code>,
  h1: props => <h4 id={slugify(props.children)}>{props.children}</h4>,
  h2: props => <h5>{props.children}</h5>,
  a: props => {

    if (props.href.startsWith('#'))
      return <a href={props.href}>{props.children}</a>;

    return <a target="_blank" rel="noopener noreferrer" href={props.href}>{props.children}</a>;
  }
};

export default function MdxPostTemplate({data: {mdx}}) {

  const toc = (
    <>
      <p>
        <small>
          <em>Table of Contents</em>
        </small>
      </p>
      <ol className="toc">
        {mdx.tableOfContents.items.map(item => {
          return (
            <li key={item.url}>
              <a href={item.url}>{item.title}</a>
              {item.items && (
                <ol className="subtoc">
                  {item.items.map(sub => {
                    return (
                      <li key={sub.url}>
                        <a href={sub.url}>{sub.title}</a>
                      </li>
                    );
                  })}
                </ol>
              )}
            </li>
          );
        })}
      </ol>
      <hr />
    </>
  );

  return (
    <Layout title={mdx.frontmatter.title}>
      <MDXProvider components={components}>
        <h2>
          {mdx.frontmatter.title}
        </h2>
        <h3>
          {mdx.frontmatter.subtitle}
        </h3>
        <hr />
        {mdx.frontmatter.toc && toc}
        <MDXRenderer>
          {mdx.code.body}
        </MDXRenderer>
      </MDXProvider>
    </Layout>
  );
}
