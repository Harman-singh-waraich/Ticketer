import React from "react";
import { Button,message } from 'antd';
import contentImg from './content.jpg'

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
       alert("Offer already claimed")
     }
     else{
       this.props.welcomeToken()
     }
   }
  render(){

    return <div>
            <section class="mbr-section mbr-parallax-background col-undefined mbr-after-navbar" id="content5-c" data-rv-view="36" style={{backgroundImage: `url(${contentImg})`, paddingTop:"9rem", paddingBottom: "9rem"}}>
                <div class="mbr-overlay" style={{opacity: "0.2" ,backgroundColor: "black"}}></div>
                <div class="container">
                <div className="site-button-ghost-wrapper" >
                            <h2 style={{color:"#fff"}} >Claim your first time reward!</h2>
                            <div align="center" >
                             <Button onClick={()=>{this.welcomeToken()}} style={{color:"balck"}}ghost>Claim!</Button>
                            </div>
                           <h1 style={{color:"#fff"}}>More content coming soon!!!</h1>
                        </div>
                </div>
            </section>

            <section class="mbr-section mbr-section-small mbr-footer" id="contacts1-8" data-rv-view="39" style={{backgroundColor: "rgb(55, 56, 62)", paddingTop: "3rem", paddingBottom: "1.5rem"}}>

                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-md-3">
                            <div><span class="mbri-globe mbr-iconfont mbr-iconfont-contacts1"></span></div>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <p></p>
                        </div>
                        <div class="col-xs-12 col-md-3">
                            <p><strong>Contacts</strong><br/>
            Email: support@mobirise.com<br/>
            Phone: +1 (0) 000 0000 001<br/>
            Fax: +1 (0) 000 0000 002</p>
                        </div>
                        <div class="col-xs-12 col-md-3"><strong>Links</strong><ul><li>Github</li><li>Mobirise</li></ul></div>
                    </div>
                </div>
            </section>
            </div>
  }
}

export default Explore;
