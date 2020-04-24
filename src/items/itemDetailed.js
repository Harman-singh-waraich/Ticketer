import React from "react";
import green from'./beige.png'
import { Breadcrumb,Descriptions } from 'antd';
import {UserOutlined } from '@ant-design/icons';

class Demo extends React.Component {
  state = {
    size: 'default',
  };
  getCredentials = async (item) =>{
    let credentials = await this.props.getCredentials(item)
    this.setState({credentials})
  }
  render() {
    var utcSeconds = this.props.item._dated;
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    this.getCredentials(this.props.item)
    return (
      <div style={{background:`url(${green})`,height:"100vh",paddingTop:"100px",paddingLeft:"30px"}}>

        <Breadcrumb style={{float:"top"}}>
          <Breadcrumb.Item style={{cursor:"pointer"}}>
            <UserOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item  style={{cursor:"pointer"}} onClick={this.props.myItems}>
            <span>My items</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Item</Breadcrumb.Item>
        </Breadcrumb>
        <br/>
       <h1 style={{fontSize:49}}>{this.props.item._name}</h1>
        <Descriptions bordered    column={1} style={{fontSize:16}}>
          <Descriptions.Item label="Product" >{this.props.item._name}</Descriptions.Item>
          <Descriptions.Item label="Type">{this.props.item._type}</Descriptions.Item>
          <Descriptions.Item label="Amount">{this.props.item._price}TK</Descriptions.Item>
          <Descriptions.Item label="Dated" >{`${d}`}</Descriptions.Item>
          <Descriptions.Item label="ID" style={{fontSize:16}}>{this.props.item._hash}</Descriptions.Item>
          <Descriptions.Item label="Credentials" style={{fontSize:16}}><t/>  { this.state.credentials}</Descriptions.Item>
        </Descriptions>
        <br />
        <br />
      </div>
    );
  }
}
export default Demo;
