import React from "react"
import Layout from "../components/layout.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const IndexPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <div>
        <div className="container mx-auto px-4 py-10">
          <div class="flex flex-col">
            <div class="flex justify-center">
              <button className="bg-transparent border-2 border-white font-hairline text-sm hover:bg-gray-200 hover:text-black hover:font-normal py-4 w-64">
                {data.title}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div class="max-w-xs sm:max-w-sm md:max-w-md  lg:max-w-3xl mx-auto px-4">
          <Img fluid={data.image.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image {
                childImageSharp {
                  fluid(maxHeight: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
