import React from "react";
import green from './green.png'
import { List, Typography } from 'antd';
const {Title,Paragraph} = Typography;

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
  return <div style={{background:`url(${green})`,height:"100vh"}}>
      <List
        style={{paddingTop:"100px",paddingLeft:"20px",backgroundImage:`${green}`}}
        itemLayout="horizontal"
        dataSource={this.state.userItems}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<Title level={3} style={{marginBottom:"10px",color:"black",cursor:"pointer"}}
                            onClick={()=>{this.props.itemDetailed(item)}}>
                                {item._name}
                            </Title>}
              description= {<Paragraph strong><Time _time={item._dated}/></Paragraph>}
              />
            </List.Item>
      )}
    />
    </div>
  }
}

export default UserItems;
