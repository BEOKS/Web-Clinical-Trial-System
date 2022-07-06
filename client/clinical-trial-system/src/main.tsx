import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./store";
import {composeWithDevTools} from 'redux-devtools-extension';
import axios from "axios"; // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools())

// 자격 증명을 사용하여 사이트 간 액세스 제어 요청을 해야 하는지 여부를 나타낸다. (기본값: false)
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)
