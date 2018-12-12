// import {CHANGE_INPUT_FIELD,REQUEST_IMAGE_PENDING,REQUEST_IMAGE_SUCCESS,REQUEST_IMAGE_FAILED,} from './constant.js'
// // import { createNamedReducer } from "redux-named-reducers";

// const initialStateInput ={
// 	inputField:''
// };

// const initialStateImage={
// 	isPendind:false,
// 	image:{},
// 	error:'',
// 	url:''
	
// }

// const initialCoor = {
// 	attr:[],
// 	coor:[]
// }

// export const getInput = (state=initialStateInput,action={})=>{

// 	switch(action.type){
// 		case CHANGE_INPUT_FIELD:
// 			return Object.assign({},state,{inputField:action.payload});
// 		default:
// 			return state;	
// 	}

// };


// export const fetchImage = (state=initialStateImage,action={})=>{

// 	switch(action.type){
// 		case REQUEST_IMAGE_PENDING:
// 			return Object.assign({},state,{isPending:true});
// 		case REQUEST_IMAGE_SUCCESS:
// 		// console.log(`reducer:${action.payload}`);
			
			

// 			return Object.assign({},state,{image:action.payload,isPending:false,url:action.url});
// 		case REQUEST_IMAGE_FAILED:
// 			return Object.assign({},state,{error:action.payload,isPending:false});	
// 		default:
// 			return state;
// 	}
// };

// export const getCoor=(state=initialCoor,action={})=>{
// 	switch(action.type){
// 		case 'GET_COOR':
// 			const attr = action.payload;
// 			let coor = [];
// 			const image = action.image;
		
// 			if(attr.length>0){
				
// 				const box = image.outputs[0].data.regions;
				
// 			    (()=>{
// 			      const width = attr[0];
// 			      const height = attr[1];
			      
// 			      for(let i=0;i<box.length;i++){

// 			        const bounding_box = box[i].region_info.bounding_box;
// 			        const left_col = width * bounding_box.left_col;
// 			        const right_col = width - width*bounding_box.right_col;
// 			        const top_row = height * bounding_box.top_row;
// 			        const bottom_row = height- height*bounding_box.bottom_row;

// 			        coor.push({
// 			          left_col:left_col,
// 			          right_col:right_col,
// 			          top_row:top_row,
// 			          bottom_row:bottom_row
// 			        });

// 			      }
// 			    })();
			   
// 			}
// 			return Object.assign({},state,{coor:coor,attr:action.payload});
// 			break;
// 		default:
// 			return state;	
// 	}

// }