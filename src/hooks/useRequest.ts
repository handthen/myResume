
import { useState, useEffect, useCallback } from "react"
interface Config {
    auto?: boolean
}

interface R<T> {
    run: (...arg: unknown[]) => Promise<Object>,
    loading: boolean,
    data: T,
    error: string
}

export default function useRequest<T>(fn: () => Promise<object>, config?: Config): R<T> {
    const { auto } = config! ?? {};
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T>(undefined!);
    const [error, setError] = useState(undefined!)
    const request = async (...arg: unknown[]) => {
        try {
            if (typeof fn !== 'function') return new Error("Fn not function");
            setLoading(true)
            const result = await fn(...arg)
            console.log(result)
            setData(result)
            return result
        } catch (e: string) {
            console.log(e)
            setError(e)
        } finally {
            setLoading(false)
        }
    }
    const run = useCallback(request, [])
    useEffect(() => {
        if (auto) {
            run()
        }
    }, [auto])

    return {
        run,
        loading,
        data,
        error
    }
}
/**
 * 
 * @param fn 请求
 * @param timer 缓存失效时间
 * @param params 参数
 * @returns 缓存后的请求方法
 */
export const cachePromise = function (fn: number, timer?: number, ...params: []): Function {
    let data: Promise<any> = undefined!
    let timId: ReturnType<typeof setTimeout> = undefined!
    function cacel(...arg: []) {
        if (data) {
            return data
        }
        timer && (timId = setTimeout(() => data = undefined!, timer))
        data = fn.apply(this, [...params, ...arg]).catch((e: any) => {
            data = undefined!;
            return Promise.reject(e)
        });
        return data

    }
    cacel.prototype.deletFn = function () {
        data = undefined!
    }
    return cacel
}