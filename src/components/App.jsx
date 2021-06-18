import React from 'react'

import {BrowserRouter} from 'react-router-dom'
import Left from './common/Left'
import Right from './common/Right'
import Header from './common/Header'
import Footer from './common/Footer'
import Toaster from './common/Toaster'


function App(props)
{
	return <BrowserRouter>
			<Header/>
			<Left/>
			<Right/>
			<Footer/>
			<Toaster/>
	</BrowserRouter>
}
export default App