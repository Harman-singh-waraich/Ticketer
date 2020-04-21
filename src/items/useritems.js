import React from "react";
import reactDOM from "react-dom";
import green from './green.png'
import { List, Avatar,Typography } from 'antd';
import ticket from './ticket.jpg'
const {Title,Paragraph} = Typography;

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
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

class UserItems extends React.Component{
  constructor(props){
    super(props)
    this.state ={
    }
  }
  async componentWillMount(){
    await this.loadItems()
  }
  loadItems = async ()=>{
    let raw_userItems = await this.props.getUserItems(this.props.account);
    let userItems = []
    raw_userItems.forEach((item, i) => {
      if(item._name != ""){
        userItems.push(item)
      }
    });
    console.log(userItems);
    this.setState({userItems:userItems})
  }
  render(){
  return <div style={{background:`url(${green})`,height:"85vh"}}>
      <List
        style={{paddingTop:"80px",paddingLeft:"20px",backgroundImage:`${green}`}}
        itemLayout="horizontal"
        dataSource={this.state.userItems}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={ticket} />}
              title={<a><Title level={3} style={{marginBottom:"10px"}}
                            onClick={()=>{this.props.itemDetailed(item)}}>
                                {item._name}
                            </Title></a>}
              description= {<Paragraph strong><Time _time={item._dated}/></Paragraph>}
              />
            </List.Item>
      )}
    />
    </div>
  }
}

export default UserItems;
