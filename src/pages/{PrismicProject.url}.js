import * as React from 'react'
import { graphql } from 'gatsby'
import HeroLayout from '../components/hero-layout'
import ArticleLayout from '../components/article-layout'

const Project = ({ data}) => {
    if (!data) return null
    const doc = data.prismicProject.data

    return (
        <div>
            <HeroLayout title={doc.project_title.text} sentence={doc.project_characteristics}/>
            <ArticleLayout header={doc.overview_header.text} description={doc.overview_description}/>
            <div className='project-details'>
                {doc.phase.map((node) => (
                    <ArticleLayout header={node.section_header.text} description={node.phase_description}/>
                ))}
            </div>
        </div>
    )
}

export const query = graphql`
    query Project($id: String) {
        prismicProject(id: {eq: $id}) {
            url
            uid
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
`

export default Project
