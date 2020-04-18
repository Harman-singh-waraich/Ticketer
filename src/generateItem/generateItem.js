import { Form, Input, InputNumber, Button } from 'antd';
import React from "react";
import reactDOM from "react-dom";
import './generateItem.css'
const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 16,
  },
};

const ItemForm = (props) => {
  const onFinish = values => {
    console.log(values);
    let {item} = values
    let price = parseInt(item.number)
    props.generateItem(item.string,item.name,price,item.credentials)
  };

  return (
    <div className = "GenerateForm" style={{backgroundColor:"transparent",justifyContent: "center",
          alignItems: "center"}}>
      <Form {...layout} name="nest-messages" onFinish={onFinish}  >
      <Form.Item
        name={['item', 'name']}
        label={<h style={{fontSize:"24px",fontFamily:"Comic Sans MS, Comic Sans, cursive",fontWeight:"700",color:"#A30014"}}>Name</h>}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={{opacity:"0.4",borderColor:"#E262B6"}}/>
      </Form.Item>

      <Form.Item
        name={['item', 'string']}
        label={<h style={{fontSize:"24px",fontFamily:"Comic Sans MS, Comic Sans, cursive",fontWeight:"700",color:"#A30014"}}>Type</h>}
        rules={[
          {
            type: 'string',
          },
        ]}
      >
        <Input style={{opacity:"0.4",borderColor:"#095F10"}}/>
      </Form.Item>

      <Form.Item
        name={['item', 'number']}
        label={<h style={{fontSize:"24px",fontFamily:"Comic Sans MS, Comic Sans, cursive",fontWeight:"700",color:"#A30014"}}>Price</h>}
        rules={[
          {
            type: 'any',
          },
        ]}
      >
        <Input style={{opacity:"0.4",borderColor:"#565F09"}}/>
      </Form.Item>

      <Form.Item
        name={['item','credentials']}
        label={<h style={{fontSize:"24px",fontFamily:"Comic Sans MS, Comic Sans, cursive",fontWeight:"700",color:"#A30014"}}>Credentials</h>}
        rules={[
          {
            type: 'string',
          },
        ]}
      >
      <Input style={{marginLeft:"20 px",opacity:"0.4",borderColor:"#86790C"}}/>
    </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" style={{opacity:"0.7",backgroundColor:"#A30014",borderRadius:"4px"}} >
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default ItemForm;
