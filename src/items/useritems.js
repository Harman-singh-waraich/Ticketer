import React from "react";
import reactDOM from "react-dom";
import { List, Avatar } from 'antd';
import ticket from './ticket.jpg'
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
  return  <List
      itemLayout="horizontal"
      dataSource={this.state.userItems}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={ticket} />}
            title={<a onClick={()=>{this.props.itemDetailed(item)}}>{item._name}</a>}
            description= {<Time _time={item._dated}/>}
          />
        </List.Item>
      )}
    />
  }
}

export default UserItems;
