import React from "react";
import reactDOM from "react-dom";
// import "./ant.css";
import Home from './home/home.js'
import { Badge,Menu, Dropdown, message,Layout,Carousel,Avatar,Popover,Button } from 'antd';
import {UserOutlined } from '@ant-design/icons';
import ItemForm from './generateItem/generateItem.js';
import Explore from './explore/explore.js';
import UserItems from './items/useritems.js';
import Items from './Redeem/redeemItem.js';
import Demo from './items/itemDetailed.js';
import Identicon from 'react-identicons';
import user from "./user.png"
const { Header, Sider, Content } = Layout;


class Main extends React.Component {

   constructor(props){
     super(props)
     this.state = {
       collapsed: false,
       Content:<Home explore={this.explore}  generate={this.generate} redeem={this.redeem}/>
     };
   }
  balance = ()=>{
    this.props.getBalance()
  }
  itemDetailed = (item)=>{
    this.setState({Content:<Demo item={item} getCredentials={this.props.getCredentials}
                                 myItems={this.content} account={this.props.account}/>})
  }
  home = ()=>{
    this.setState({Content:<Home explore={this.explore}  generate={this.generate}
                         redeem={this.redeem}/>})
  }
  explore = ()=>{
    this.setState({Content:<Explore buyToken={this.props.buyToken}
                                    welcomeToken={this.props.welcomeToken}
                                    offerValid={this.props.offerValid}
                                    account={this.props.account}/>})
  }
  generate = ()=>{
   {this.setState({Content:<ItemForm generateItem={this.props.generateItem}
                                     getItem={this.props.getItem}/>})}
  }
  redeem =()=>{
    this.setState({Content:<Items account = {this.props.account}
                                                       getItem={this.props.getItem}
                                                       getItems={this.props.getItems}
                                                       redeemItem={this.props.redeemItem}
                                                       buyToken={this.props.buyToken}
                                                       getAllItems = {this.props.getAllItems}
                                                       getUserItems = {this.props.getUserItems}
                                                       />})
                                                     }
  content =()=>{
    this.setState({Content:<UserItems getUserItems = {this.props.getUserItems}
                                                      itemDetailed = {this.itemDetailed}
                                                      account={this.props.account}/>})

  }

  render(){

    const Img = (<img src={user} />)
    return (<div>

      <nav class="navbar navbar-dropdown navbar-light mbr-navbar" id="menu-e" data-rv-view="16" style={{backgroundColor: "rgb(254, 213, 197)"}}>
        <div class="container">


            <div class="clearfix"></div>
            <div class="collapse navbar-toggleable-sm" id="exCollapsingNavbar2">

              <span class="navbar-logo"><ul class="nav-dropdown collapse pull-xs-right navbar-toggleable-sm nav navbar-nav" id="exCollapsingNavbar"><li class="nav-item dropdown"><a class="nav-link link dropdown-toggle" data-toggle="dropdown-submenu" >{Img}</a><div class="dropdown-menu"><a class="dropdown-item">Account:{this.props.account}</a><a class="dropdown-item">Balance: {this.props.balance} TOK</a><a class="dropdown-item" onClick={()=>{this.content();this.props.resetCount()}}><a>My Items</a></a></div></li></ul></span>

            <span><a class="navbar-brand " style={{paddingTop:"20px",float:"left",fontSize:"50px"}}>Ticketer</a></span>

                <ul class="nav navbar-nav pull-xs-right"><li class="nav-item"><a class="nav-link" onClick={()=>{this.home()}} ><span class="mbri-home mbr-iconfont mbr-iconfont-btn-parent"></span>Home</a></li><li class="nav-item"><a class="nav-link" onClick={()=>{this.generate()}}><span class="mbri-credit-card mbr-iconfont mbr-iconfont-btn-parent"></span>Generate</a></li> <li class="nav-item"><a class="nav-link" onClick={this.redeem}><span class="mbri-shopping-bag mbr-iconfont mbr-iconfont-btn-parent"></span>Redeem</a></li>  </ul>
            </div>
        </div>
    </nav>

    <section  className="site-layout-background-content"   style={{
                  height:"100vh",
                }}>
       {this.state.Content}
   </section>

  </div>
    );
  }
}

export default Main;
