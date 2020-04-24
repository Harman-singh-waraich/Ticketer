import ticket from './ticketcut.png';
import redeemBack from "../img/redeemBack.jpg"
import { List} from 'antd';
import React from "react";
import reactDOM from "react-dom";
import './redeemItem.css';

class Items extends React.Component{
  constructor(props){
    super(props)
    this.state ={
    }
  }
  async componentWillMount(){
    await this.loadItems()
  }
  loadItems = async ()=>{
    let allItems = await this.props.getAllItems()
    let items =[]
    allItems.forEach((item, i) => {
      if(item.isAvailable == true){
        items.push(item)
      }
    });
   this.setState({items:items})
  }
  getUserItems = async ()=>{
    let itemNames = await this.props.getItems()
    let userItems = []

    await itemNames.forEach(async (item)=>{
      let _item = await this.props.getItem(item)

      if(_item.itemOwner == this.props.account){
        userItems.push(_item)
      }
    })
    return userItems
  }
  redeemItem =(name)=>{
        this.props.redeemItem(name)

  }


  render(){
    return   <div>
    <section class="mbr-section mbr-section-small mbr-after-navbar" id="pricing-table1-k"  data-rv-view="53" style={{backgroundImage: `url(${redeemBack})`, paddingTop: "4.5rem", paddingBottom: "4.5rem"}}>
        <div class="mbr-overlay" style={{opacity: "0.5", backgroundColor: "rgb(34, 34, 34)"}}></div>

        <div class="container">
            <div class="row">
            <List
                grid={{ gutter: 40, column: 4 }}
                dataSource= {this.state.items}
                renderItem={item => (
                  <div class="card" >
          <img src={ticket} alt="Avatar" style={{width:"200px",height:"200px"}}/>
          <div class="container">
            <h4><b>{item._name}</b></h4>
            <p>Dated: <Time _time={item._dated}/>
               Price: {item._price} TOK</p>
            <button class="button" onClick={()=>{this.redeemItem(item._name);}}>Redeem</button>
          </div>
        </div>
                )}
              />
            </div>
        </div>
    </section>

    <section class="mbr-section mbr-section-small mbr-footer mbr-parallax-background" id="contacts1-h" data-rv-view="56" style={{backgroundImage: "url(assets/images/photo-3.jpg)", paddingTop: "3rem", paddingBottom: "1.5rem"}}>
        <div class="mbr-overlay" style={{backgroundColor: "rgb(60, 60, 60)", opacity: "0.8"}}></div>
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
export default Items;
class Time extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      var utcSeconds = this.props._time;
      var d = new Date(0);
      d.setUTCSeconds(utcSeconds);
      var b = d.toString()
      return `${b.slice(0,16)}`
    }
  }
