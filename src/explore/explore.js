import React from "react";
import { Button,message } from 'antd';

class Explore extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  async componentWillMount(){
    await this.checkValidity()
    }

  checkValidity = async ()=>{
    this.props.offerValid(this.props.account).then((validity) =>{
      this.setState({
        offerValidity:validity,
      })
    })
  }
 welcomeToken = async ()=>{
     
     if(this.state.offerValidity){
       message.info("Offer already claimed")
     }
     else{
       this.props.welcomeToken()
     }
   }
  render(){

    return   <div className="site-button-ghost-wrapper" >
                <h2 style={{color:"#fff"}}>Claim your first time reward!</h2>
                <div align="center" >
                 <Button onClick={()=>{this.welcomeToken()}}ghost>Claim!</Button>
                </div>
               <h1 style={{color:"#fff"}}>More content coming soon!!!</h1>
            </div>
  }
}

export default Explore;
