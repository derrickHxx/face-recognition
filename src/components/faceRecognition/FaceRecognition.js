import React,{Component} from 'react';
import './FaceRecognition.css';
// import {fetch,getInput,getText,getCoor} from '../../components/imageLinkForm/action';


class FaceRecognition extends Component{
	

	
	render(){
		const {url,boxes} = this.props;
		
		return (

			<div className='center ma'>
				<div className="absolute mt2">
					<img id="image" alt='' src={url} width='500px' height='500' />
					
					{boxes}
				</div>
			</div>
		)
	}



}

export default FaceRecognition;