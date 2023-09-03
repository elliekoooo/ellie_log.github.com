import * as React from "react"
import { graphql, type PageProps } from "gatsby"
import Layout from "../layout"


const IndexPage = ({data, location }:PageProps) => {

  const { markdownRemark }:any = data;
  return (
      <Layout props={markdownRemark}></Layout>
  )
} 

export const pageQuery = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
    }
}`;

export default IndexPage
