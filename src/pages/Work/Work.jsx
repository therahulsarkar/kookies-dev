import React from 'react'
import WorkCard from '../../shared/WorkCard/WorkCard'
import Layout from '../../utils/Layout'
import work1 from '../../assets/images/work/work1.svg'
import work2 from '../../assets/images/work/work2.svg'
import work3 from '../../assets/images/work/work3.svg'
import work4 from '../../assets/images/work/work4.svg'

const Work = () => {
  return (
      <Layout>
    <div>
        <WorkCard date="22" month="March" imgSrc={work1} heading="UX/UI DESIGN" title="MyCareerNext" description="Product for Career Enhancement"/>
        <WorkCard date="21" month="March" imgSrc={work2} heading="UX/UI DESIGN" title="Firstep" description="Beautiful Shareable Matrimonial Biodata Maker"/>
        <WorkCard date="20" month="March" imgSrc={work3} heading="APPLICATION DESIGN" title="Primo Umbrella" description="Payroll Management Application"/>
        <WorkCard date="20" month="March" imgSrc={work4} heading="WEBSITE DESIGN" title="Transguard" description="Delivery Service Web-Based Portal"/>
    </div>
    </Layout>
  )
}

export default Work