import React from "react";
import reactDOM from "react-dom";
// import "./ant.css";
import Home from './home/home.js'
import { Menu, Dropdown, message,Layout,Carousel,Avatar,Popover,Button } from 'antd';

import ItemForm from './generateItem/generateItem.js';
import Explore from './explore/explore.js';
import UserItems from './items/useritems.js';
import Items from './Redeem/redeemItem.js';
import Demo from './items/itemDetailed.js';
import Identicon from 'react-identicons';
const { Header, Sider, Content } = Layout;


class Main extends React.Component {

   constructor(props){
     super(props)
     this.state = {
       collapsed: false,
       Content:<Home explore={this.explore}  generate={this.generate}/>
     };
   }
  balance = ()=>{
    this.props.getBalance()
  }
  itemDetailed = (item)=>{
    this.setState({Content:<Demo item={item} getCredentials={this.props.getCredentials} />})
  }
  explore = ()=>{
    this.setState({Content:<Explore buyToken={this.props.buyToken}
                                    welcomeToken={this.props.welcomeToken}
                                    offerValid={this.props.offerValid}
                                    account={this.props.account}/>})
  console.log("ran");
  }
  generate = ()=>{
   {this.setState({Content:<ItemForm generateItem={this.props.generateItem}
                                     getItem={this.props.getItem}/>})}
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(){


    return (<div>
      <nav class="navbar navbar-light mbr-navbar" id="menu-e" data-rv-view="16" style={{backgroundColor: "rgb(254, 213, 197)"}}>
        <div class="container">
            <button class="navbar-toggler pull-right hidden-md-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
                <div class="hamburger-icon"></div>
            </button>

            <div class="clearfix"></div>
            <div class="collapse navbar-toggleable-sm" id="exCollapsingNavbar2">

                <span><a class="navbar-brand" href="https://mobirise.com">Ticketer</a></span>



                <ul class="nav navbar-nav pull-xs-right"><li class="nav-item"><a class="nav-link" href="index.html"><span class="mbri-home mbr-iconfont mbr-iconfont-btn-parent"></span>Home</a></li><li class="nav-item"><a class="nav-link" onClick={()=>{this.generate()}}><span class="mbri-credit-card mbr-iconfont mbr-iconfont-btn-parent"></span>Generate</a></li> <li class="nav-item"><a class="nav-link" href="page3.html"><span class="mbri-shopping-bag mbr-iconfont mbr-iconfont-btn-parent"></span>Redeem</a></li>  </ul>
            </div>
        </div>
    </nav>

    <section     style={{
                  marginTop:"15vh",
                  height:"100vh",
                }}>

     <Content
       className="site-layout-background-content"

     >
       {this.state.Content}
     </Content>
   </section>

  </div>
    );
  }
}

export default Main;
