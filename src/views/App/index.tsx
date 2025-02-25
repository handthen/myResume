import React, { useEffect } from 'react'
import { Main, Header, Layout, Footer } from '@/layout'
import { useSelector, useDispatch } from 'react-redux'
import Profile from './component/Profile'
import ProjectList from './component/ProjectList'
import EducationList from './component/EducationList'
import WorkExpList from './component/WorkExpList'
import Aboutme from './component/Aboutme'
import SkillList from './component/SkillList'
import IndividualWorks from './component/IndividualWorks'
import type { Resume } from '@/typings/configType'
import type { State } from '@/typings/storeType'
import { getSearchParams } from '@/utils'

export default (): React.ReactElement => {
  const resume = useSelector<State>((state) => state.app.resumeConfig) as Resume
  const dispatch = useDispatch()
  const SearchParams = getSearchParams()
  useEffect(() => {
    dispatch({
      type: 'app/getResume',
      payload: SearchParams.get('user'),
    })
  }, [])

  function isEmpty(params: any) {
    if (!params && params !== 0) return true
    if (Array.isArray(params) && !params.length) return true
    if (!Object.keys(params).length) return true
  }


  return (
    <Layout>
      <Header />
      <Main>
        {!isEmpty(resume.profile) && <Profile profile={resume.profile} avatar={resume.avatar} />}
        {!isEmpty(resume.educationList) && <EducationList educationList={resume.educationList} />}
        {!isEmpty(resume.workExpList) && <WorkExpList workExpList={resume.workExpList} />}
        {!isEmpty(resume.skillList) && <SkillList skillList={resume.skillList}></SkillList>}
        {!isEmpty(resume.aboutme) && <Aboutme aboutme={resume.aboutme}></Aboutme>}
        {!isEmpty(resume.workList) && <IndividualWorks workList={resume.workList} />}
        {!isEmpty(resume.projectList) && <ProjectList projectList={resume.projectList} />}
      </Main>

      <Footer />
    </Layout>
  )
}
