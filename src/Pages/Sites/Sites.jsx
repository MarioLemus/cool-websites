import Layout from '../../components/Layout/Layout'
import { fonts, design, learning, tools, jobInterview } from '../../../sitesCategories'
import SiteCard from '../../components/SiteCard'
import SiteCategoryNav from '../../components/SiteCategoryNav/SiteCategoryNav'

const XL_CATEGORY_CARD = 'xl:max-w-6xl xl:grid-cols-3 xl:gap-y-24 xl:gap-x-6 xl:mt-12'
const LG_CATEGORY_CARD = 'lg:max-w-5xl lg:grid-cols-2 lg:gap-x-5'
const MD_CATEGORY_CARD = 'md:grid-cols-2 md:gap-x-4'
// The props come from Routes.js
export default function Sites ({ isFonts, isDesign, isLearning, isTools, isJobInterview }) {
  return (
    <Layout>
      <SiteCategoryNav />
      <section className={`grid m-auto ${MD_CATEGORY_CARD} ${LG_CATEGORY_CARD} ${XL_CATEGORY_CARD}`}>
        {isFonts && <SiteCard data={fonts} />}
        {isDesign && <SiteCard data={design} />}
        {isLearning && <SiteCard data={learning} />}
        {isTools && <SiteCard data={tools} />}
        {isJobInterview && <SiteCard data={jobInterview} />}
      </section>
    </Layout>
  )
}
