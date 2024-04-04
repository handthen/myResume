import { all } from "redux-saga/effects";
export * from '@redux-saga/core/effects'
import { Watchs } from "@/store/reducer"

export default function* rootSaga() {
    yield all(Watchs)
}
