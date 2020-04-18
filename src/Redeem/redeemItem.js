import ticket from './ticketcut.png';
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
    return   <List
        grid={{ gutter: 40, column: 2 }}
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
                style={{width: 200,background:"transparent",color:"#fff" }}
                cover={<img alt="example" src= {ticket} />}
              >
                    <Meta title={<Title level={2} style={{color:"#fff"}}>{item._name}</Title>} style={{color:"#fff"}} />
               </Card>
          </Popover>
          </List.Item>
        )}
      />
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
