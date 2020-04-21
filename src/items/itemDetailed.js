import React from "react";
import reactDOM from "react-dom";
import green from'./beige.png'
import { Breadcrumb,Descriptions, Radio } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

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
      <div style={{background:`url(${green})`,height:"85vh",paddingTop:"81px",paddingLeft:"30px"}}>

        <Breadcrumb style={{float:"top"}}>
          <Breadcrumb.Item href="">
            <UserOutlined />
          </Breadcrumb.Item>
          <a><Breadcrumb.Item  onClick={this.props.myItems}>
            <span>My items</span>
          </Breadcrumb.Item></a>
          <Breadcrumb.Item>Item</Breadcrumb.Item>
        </Breadcrumb>
        <br/>
       <h1 style={{fontSize:49}}>{this.props.item._name}</h1>
        <Descriptions bordered    column={1} style={{fontSize:300}}>
          <Descriptions.Item label="Product" >{this.props.item._name}</Descriptions.Item>
          <Descriptions.Item label="Type">{this.props.item._type}</Descriptions.Item>
          <Descriptions.Item label="Amount">{this.props.item._price}TK</Descriptions.Item>
          <Descriptions.Item label="Dated" >{`${d}`}</Descriptions.Item>
          <Descriptions.Item label="ID" style={{fontSize:12}}>{this.props.item._hash}</Descriptions.Item>
          <Descriptions.Item label="Credentials" style={{fontSize:12}}>{this.state.credentials}</Descriptions.Item>
        </Descriptions>
        <br />
        <br />
      </div>
    );
  }
}
export default Demo;
