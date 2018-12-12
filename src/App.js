import React, { Component } from 'react';
// import {connect} from 'react-redux';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Signin from './components/sigin/Signin';
import Register from './components/register/Register';
// import {fetch,getInput,getText,getCoor} from './components/imageLinkForm/action';
// import thunkMiddleware from 'redux-thunk';
import Clarifai from 'clarifai';




const app = new Clarifai.App({
 apiKey: '909a5d3a94224facb153c3e8bed784f4'
});

// const mapStateToProps = (state) =>{
//   return {
//     inputField:state.getInput.inputField,
//     isPendind:state.fetchImage.isPending,
//     image:state.fetchImage.image,
//     error:state.fetchImage.error,
//     url:state.fetchImage.url,
//     attr:state.getCoor.attr,
//     coor:state.getCoor.coor

//   };
// }




// const mapDispatchToProps = (dispatch,ownProps)=>{

 
//   return {

//     onRequestGetCoor:(attr)=>{

//       const state = dispatch(getText());
//       return dispatch(getCoor(attr,state.fetchImage.image));
//     }
   
//   };
// }


const particlesOptions = 
  {
    particles: {
     
     number: {
            value: 200,
            density:{
              enable:true,
              value_area:600
            }
      },
      move:{
        speed:10
      }
     
    },
    interactivity: {
        "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "detect_on":"window"
    }
  }

  


class App extends Component {

  constructor(){
    super();
     

    this.state={
      url:'',
      boxes:[],
      route:'signin',
      isSignedIn:false
    };
  };

   calculate = (data) =>{
    console.log(data);
    if(data.outputs[0].data.regions){


    const box = data.outputs[0].data.regions;
        console.log('box '+box);
        
            const width = document.querySelector('#image').width;
            const height = document.querySelector('#image').height;
            const coor = [];            
            for(let i=0;i<box.length;i++){

              const bounding_box = box[i].region_info.bounding_box;
              const left_col = width * bounding_box.left_col;
              const right_col = width - width*bounding_box.right_col;
              const top_row = height * bounding_box.top_row;
              const bottom_row = height- height*bounding_box.bottom_row;

              coor.push({
                left_col:left_col,
                right_col:right_col,
                top_row:top_row,
                bottom_row:bottom_row
              });

            }
            return coor;
      }else{
        return [];
      }
  }

  display = (coor) =>{
    this.setState({coor:coor});
    return coor;
  }

   createBox = (coor)=>{
      let boxes = [];
      for(let i=0;i<coor.length;i++){

        boxes.push(<div key={i} className='bounding-box' 
          style={{
            top:coor[i].top_row,
            left:coor[i].left_col,
            right:coor[i].right_col,
            bottom:coor[i].bottom_row,
          }}>
          </div>);
      }
      this.setState({boxes:boxes});
    
  }

  onClickFetch = () =>{
     const value = document.querySelector('.detect').value;
    this.setState({url:value});
    

    app.models.predict("a403429f2ddf4b49b307e318f00e528b", value)
    .then(response=>this.createBox(this.calculate(response)))
    .catch(err=>console.log(err));

  }    

  onRouteChange = (route) =>{
    if(route==='signout'){
      this.setState({isSignedIn:false,route:'signin'});
    }else if(route==='home'){
      this.setState({isSignedIn:true,route:'home'})
    }else{
      this.setState({route:route});
    }
    
  }

  componentDidMount(){
    fetch('http://localhost:3001/').then(response=>response.json())
    .then(data=>console.log(data));
  }

  render() {

    // const{onClickFetch,url} = this.props;

    return (
      <div className="App">
          <div>

         <Particles className="particles" params={particlesOptions}/>
         </div>
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home'
            ?<div>

              <Logo/>               
              <Rank />
              <ImageLinkForm  onClickFetch={this.onClickFetch}/>
              
              <FaceRecognition boxes={this.state.boxes} url = {this.state.url}/> 
            </div>


            :(
                this.state.route === 'signin'
                ?<Signin onRouteChange={this.onRouteChange}/>
                :<Register onRouteChange={this.onRouteChange}/>

              )
             
        }
              
      </div>
    );
  }

  
}

export default App;

