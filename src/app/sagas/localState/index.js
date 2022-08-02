import { takeEvery, put, select } from 'redux-saga/effects';
export function* localState(){

    yield takeEvery("INIT", function*(){

        const recoveredState = localStorage.getItem("pepe-store--appState");
        if (recoveredState) {

            yield put ({type: "LOAD_STATE", state: JSON.parse(recoveredState)});
            
        }

    })

    yield takeEvery([

       // todo

    ], function * () {

        localStorage.setItem("pepe-store--appState", JSON.stringify(yield select()));

    })

}