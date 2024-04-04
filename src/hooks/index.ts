
export const composeSync = (...fn: Function[]) => {
    return fn.reduce((a, b) => {
        return (...arg: any) => a(b(...arg))
    })
}

export const composePromise = (...fn: Function[]) => {
    const first = fn.pop()!
    return (...arg: any) => {
        return fn.reverse().reduce(async (a, b) => {
            const result = await a
            return b(result)
        }, Promise.resolve(first(...arg)))
    }
}
