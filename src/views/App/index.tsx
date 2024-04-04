import React, { FormEvent, useState } from "react";
import { Main, Header, Layout, Footer } from "@/layout"
import { useSelector, useDispatch } from "react-redux"
import Profile from "./component/Profile"
import ProjectList from "./component/ProjectList"
import EducationList from "./component/EducationList"
import type { Resume } from "@/typings/configType"
import type { State } from "@/typings/storeType"
export default (): React.ReactElement => {
    const resume: Resume = useSelector<State>(state => state.app.resumeConfig) as Resume

    return (
        <Layout>
            <Header />
            <Main>
                {resume.profile && <Profile profile={resume.profile} />}
                {resume.projectList && <ProjectList projectList={resume.projectList} />}
                {resume.educationList && <EducationList projectList={resume.projectList} />}
            </Main>
            <Footer />
        </Layout>
    )
}
