/** 简历配置内容 */

export interface educationItem {
  edu_time: [string | undefined, string | number]
  school: string
  major?: string
  /** 学历 */
  academic_degree?: string
}

export interface workExpItem {
  company_name: string
  department_name: string
  work_time: [string | undefined, string | number]
  work_desc: string
}

export interface projectItem {
  /** 项目名称 */
  project_name: string
  /** 担任角色 */
  project_role: string
  /** 描述 */
  project_desc?: string
  /** 项目内容，负责内容 */
  project_content?: string
  /** 项目时间 */
  project_time?: string | Array<string>
  project_technology?: string
}

export interface skillItem {
  /** 技能项 */
  skill_name?: string
  /** 掌握程度 */
  skill_level?: number
  /** 技能描述 */
  skill_desc?: string
}

export interface awardItem {
  // 奖项
  award_info: string
  award_time?: string
}

export interface workItem {
  work_name?: string
  work_desc?: string
  visit_link?: string
}

export type Resume = {
  /** 头像 */
  avatar?: {
    src?: string
    shape?: string
    size?: string
    hidden?: boolean
    mode: number
  }

  /** 个人信息 */
  profile?: {
    name: string
    mobile?: string
    email?: string
    github?: string
    zhihu?: string
    /** 工作经验 xx 年 */
    workExpYear?: string
    /** 期望工作地 */
    workPlace?: string
    /** 职位 */
    positionTitle?: string
    xueli?: string
  }

  /** 标题名称映射 */
  titleNameMap?: {
    /** 默认: 教育背景 */
    educationList?: string
    /** 默认: 工作经历 */
    workExpList?: string
    /** 默认: 项目经历 */
    projectList?: string
    /** 默认: 个人技能 */
    skillList?: string
    /** 默认: 更多信息 */
    awardList?: string
    /** 默认: 作品 */
    workList?: string
    /** 自我介绍 */
    aboutme?: string
  }

  /** 教育背景 */
  educationList?: Array<educationItem>

  /** 工作经历 */
  workExpList?: Array<workExpItem>

  /** 项目经历 */
  projectList?: Array<projectItem>

  /** 个人技能 */
  skillList?: Array<skillItem>

  /** 更多信息 */
  awardList?: Array<awardItem>

  /** 作品 */
  workList?: Array<workItem>

  /** 自我介绍 */
  aboutme?: {
    aboutme_desc: string
  }

  /** 增加国际化 */
  locales?: {
    [key: string]: Resume
  }

  template?: string
}

/**
 * 主题配置，暂时只支持主题色
 */
export type ThemeConfig = {
  /** 主题色 */
  color: string
  /** Tag 标签色 */
  tagColor: string
}
