import * as React from "react"
import HeroLayout from '../components/hero-layout'
import ArticleLayout from '../components/article-layout'

const Homepage = () => {
  return (
    <div>
      <HeroLayout title="Portfolio"></HeroLayout>
      <ArticleLayout header="Overview"></ArticleLayout>
    </div>
  )
}

export default Homepage
