import * as React from 'react'
import { graphql } from 'gatsby'
import HeroLayout from '../components/hero-layout'
import ArticleLayout from '../components/article-layout'

const About = ({ data }) => {
    if (!data) return null
    const doc = data.prismicAboutMe.data

    return (
        <div>
            <HeroLayout title={doc.about_me_header.text} sentence={doc.about_me_sentence.text}></HeroLayout>
            <ArticleLayout header={doc.overview_header.text} description={doc.overview_description}></ArticleLayout>
            <div id="aboutFactsContainer">
                <div id="factsHeader">
                    <h2>{doc.facts_header.text}</h2>
                </div>
                <div id="facts">
                    {doc.facts_list.map((listItem) => (
                        <p>{listItem.fact}</p>
                    ))}
                </div>
            </div>
            <div id="moreInfo">
                {doc.more_info_group.map((node) => (
                    <ArticleLayout header={node.more_info_header.text} description={node.more_info_description}/>
                ))}
            </div>
        </div>
    )
}


export const query = graphql`
    query AboutMe {
        prismicAboutMe {
            data {
                about_me_header {
                    text
                }
                about_me_sentence {
                    text
                }
                facts_header {
                    text
                }
                facts_list {
                    fact
                }
                more_info_group {
                    more_info_description
                    more_info_header {
                        text
                    }
                }
                overview_description
                overview_header {
                    text
                }
            }
        }
    }
    
`

export default About