import React from "react";
import reactDOM from "react-dom";
// import "./ant.css";
import Home from './home/home.js'
import { Menu, Dropdown, message,Layout,Carousel,Avatar,Popover,Button } from 'antd';
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
    this.setState({Content:<Demo item={item} getCredentials={this.props.getCredentials} />})
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
  console.log("ran");
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
  render(){

    const menu = (
      <Menu >
        <Menu.Item key="1"  >
                Balance : {this.props.balance} TOK
        </Menu.Item>
        <Menu.Item key="2"  >
                Account : {this.props.account}
        </Menu.Item>
        <Menu.Item key="3" onClick={()=>{this.setState({Content:<UserItems getUserItems = {this.props.getUserItems}
                                                                         itemDetailed = {this.itemDetailed}
                                                                           account={this.props.account}/>})}}>My items</Menu.Item>
      </Menu>
    );

    return (<div>
      <nav class="navbar navbar-light mbr-navbar" id="menu-e" data-rv-view="16" style={{backgroundColor: "rgb(254, 213, 197)"}}>
        <div class="container">


            <div class="clearfix"></div>
            <div class="collapse navbar-toggleable-sm" id="exCollapsingNavbar2">

              <span class="navbar-logo"><Dropdown overlay={menu} style={{width:"200px",height:"300px"}} trigger={['click']}><a><img src={user} alt="Mobirise" style={{height:"60px",width:"50px",paddingTop:"12px"}}/></a></Dropdown></span>

            <span><a class="navbar-brand" href="https://mobirise.com">Ticketer</a></span>

                <ul class="nav navbar-nav pull-xs-right"><li class="nav-item"><a class="nav-link" onClick={()=>{this.home()}} ><span class="mbri-home mbr-iconfont mbr-iconfont-btn-parent"></span>Home</a></li><li class="nav-item"><a class="nav-link" onClick={()=>{this.generate()}}><span class="mbri-credit-card mbr-iconfont mbr-iconfont-btn-parent"></span>Generate</a></li> <li class="nav-item"><a class="nav-link" onClick={this.redeem}><span class="mbri-shopping-bag mbr-iconfont mbr-iconfont-btn-parent"></span>Redeem</a></li>  </ul>
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
