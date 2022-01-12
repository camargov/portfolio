import * as React from 'react'
import { graphql } from 'gatsby'



const Nav = ({ data }) => {
    if (!data) return null
    const doc = data.prismicNavigation.data

    return (
        <div>
            <ul>
                {doc.regular_navigation.map((regularNavItem) => (
                    <li>
                        <a href={regularNavItem.top_level_link.url}>{regularNavItem.top_level_link_label}</a>
                    </li>
                ))}
                {doc.nav.map((subNavItem) => (
                    <li>{subNavItem.primary.label.text}</li>
                ))}
            </ul>
        </div>
    )
}

export const query = graphql`
    query Navigation {
        prismicNavigation {
            data {
                nav {
                    ... on PrismicNavigationDataNavNavItem {
                        items {
                            sub_nav_link {
                                url
                            }
                            sub_nav_link_label {
                                text
                            }
                        }
                        primary {
                            label {
                                text
                            }
                        }
                    }
                }
                regular_navigation {
                    top_level_link {
                        url
                    }
                    top_level_link_label
                }
            }
        }
    }
`

export default Nav