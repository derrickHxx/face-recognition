// import {CHANGE_INPUT_FIELD,REQUEST_IMAGE_PENDING,REQUEST_IMAGE_SUCCESS,REQUEST_IMAGE_FAILED,} from './constant.js';
// import thunkMiddleware from 'redux-thunk';
// import Clarifai from 'clarifai';



// const app = new Clarifai.App({
//  apiKey: '909a5d3a94224facb153c3e8bed784f4'
// });

// export const getInput = (text)=>{

// 	return {
// 		type:CHANGE_INPUT_FIELD,
// 		payload:text,
// 		url:''		
// 	};
// }




// export const fetch = (inputField)=> (dispatch)=>{
// 	dispatch({type:REQUEST_IMAGE_PENDING});

// 	app.models.predict("a403429f2ddf4b49b307e318f00e528b", inputField).then(
// 	    function(response) {
// 	    	 // console.log(response);
// 	     return dispatch({type:REQUEST_IMAGE_SUCCESS,payload:response,url:inputField});
// 	    },
// 	    function(err) {
// 	      return dispatch({type:REQUEST_IMAGE_FAILED,payload:err});
// 	    }
//   	);

// }

// export const getCoor=(attr,image)=>{
// 	return{
// 		type:'GET_COOR',
// 		payload:attr,
// 		coor:[],
// 		image:image
// 	}
// }

// export const getText =  () => (dispatch, getState) => {

//     return getState();
// }