import type { Resume } from "./configType"

export interface State {
    counter: {
        count: number
    },
    app: {
        resumeConfig: Resume,
        theme: {
            [key: string]: string
        }
    }
}
