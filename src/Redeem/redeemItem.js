import ticket from './ticketcut.png';
import redeemBack from "../img/redeemBack.jpg"
import { List, Card,Typography ,Popconfirm,Popover,Descriptions,Button} from 'antd';
import React from "react";
import reactDOM from "react-dom";
const { Meta } = Card;
const {Title} = Typography;



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
                  <List.Item>
                  <Popover content={
                    <div>
                    <Descriptions  bordered>
                      <Descriptions.Item label="Type" span={3}>{item._type}</Descriptions.Item>
                      <Descriptions.Item label="Amount" span={3}>{`${item._price} TOK`}</Descriptions.Item>
                      <Descriptions.Item label="Dated" span={3}><Time _time={item._dated}/></Descriptions.Item>
                    </Descriptions>

                    <Popconfirm title="Do you want to redeem？"
                                okText="Yes" cancelText="No"
                                onConfirm={()=>{this.redeemItem(item._name)}}>
                       <Button type="primary"style={{float:"right"}} >Redeem</Button>
                    </Popconfirm>
                    </div>} placement="bottom" trigger="hover">


                       <Card
                        hoverable
                        style={{width: 150,background:"transparent",color:"#fff",height:"250px" }}
                        cover={<img alt="example" src= {ticket} style={{width:"150px",height:"150px"}}/>}
                      >
                            <Meta title={<Title level={3} style={{color:"#fff",marginBottom:"10px"}}>{item._name}</Title>} style={{color:"#fff"}} />
                       </Card>
                  </Popover>
                  </List.Item>
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
      return <p>{`${d}`}</p>
    }
  }
