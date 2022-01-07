import * as React from 'react'
import { graphql } from 'gatsby'
import HeroLayout from '../components/hero-layout'
import ArticleLayout from '../components/article-layout'

const Project = ({ data}) => {
    if (!data) return null
    const doc = data.allPrismicProject.nodes.data

    return (
        <div>
            <HeroLayout title={doc.project_title.text} sentence={doc.project_characteristics}/>
            <ArticleLayout header={doc.overview_header.text} description={doc.overview_description}/>
        </div>
    )
}

/*export const query = graphql`
    query Project($id: String) {
        prismicProject(id: {eq: $id}) {
            url
            data {
                overview_description
                overview_header {
                    text
                }
                phase {
                    phase_description
                    section_header {
                        text
                    }
                }
                project_characteristics
                project_title {
                    text
                }
            }
        }
    }
`*/

export const query = graphql`
    query Project {
        allPrismicProject {
            nodes {
                url
                data {
                    project_title {
                        text
                    }
                    overview_description
                    overview_header {
                        text
                    }
                    phase {
                        phase_description
                        section_header {
                            text
                        }
                    }
                    project_characteristics
                }
            }
        }
    }
`

export default Project
