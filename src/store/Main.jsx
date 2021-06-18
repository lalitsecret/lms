import React from 'react'
import App from '../components/App'
import {Provider} from 'react-redux'
import store from './store'
function Main()
{
	return <Provider store={store}><App/></Provider>
}
export default Main