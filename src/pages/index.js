import * as React from 'react'
import { graphql } from 'gatsby'
import HeroLayout from '../components/hero-layout'
import ArticleLayout from '../components/article-layout'
import Footer from '../components/footer'
import Nav from '../components/nav'

const Homepage = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data

  return (
    <div>
      <Nav/>
      <HeroLayout title={doc.portfolio_header.text} sentence={doc.portfolio_sentence.text}/>
      <ArticleLayout header={doc.portfolio_overview_header.text} description={doc.portfolio_overview_description}/>
      <div id="projectTree">
        <div>
          <h2>{doc.project_tree_header.text}</h2>
        </div>
        <div>
          {doc.project_tree_group.map((node) => (
            <h2>{node.project_category}</h2>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export const query = graphql`
  query Homepage {
    prismicHomepage {
      data {
        portfolio_header {
          text
        }
        portfolio_overview_description
        portfolio_overview_header {
          text
        }
        portfolio_sentence {
          text
        }
        project_tree_group {
          project_category
        }
        project_tree_header {
          text
        }
      }
    }
  }
`

export default Homepage
