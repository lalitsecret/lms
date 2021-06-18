import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import $ from 'jquery'
import CanvasJSReact from '../../js/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App()
{
	let state=useSelector(stateFromStore=>stateFromStore)
	let dispatch=useDispatch()

	let a=state.courses.map(x=>({label:x.name,y:x.price})).slice(0,8)

	const options = {
		title: {
			text: "All Courses and price"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: a
		}
		]
	};	

		// $("#chartContainer").CanvasJSChart(options);
	
		return <CanvasJSChart options = {options}
        />
}
export default App