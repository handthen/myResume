import React, { FormEvent, useState } from "react";
import { Main, Header, Layout, Footer } from "@/layout"
import { useSelector, useDispatch } from "react-redux"
import Profile from "./component/Profile"
import ProjectList from "./component/ProjectList"
import EducationList from "./component/EducationList"
import type { Resume } from "@/typings/configType"
import type { State } from "@/typings/storeType"
export default (): React.ReactElement => {
    const resume = useSelector<State>(state => state.app.resumeConfig) as Resume

    function random5(){
        return Math.floor(Math.random() * 5 + 1)
    }
    function random7(){
      while(true){
        const num1 = (random5() - 1) * 4 // 0 4 8 12 16
        const num2 = random5() - 1 // 0 1 2 3 4
        const count = num1 + num2
        if(count<=14){
            return count % 7 + 1
        }
      }
    }

    console.log(random7())
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
