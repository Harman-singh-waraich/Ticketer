
  <Layout className="menu">
    <Sider theme="light" trigger={null} collapsible collapsed={this.state.collapsed} >
      <Menu mode="inline" defaultSelectedKeys={['1']} style={{float:'right'}}>

        <Menu.Item key="1">
        <HomeTwoTone style={{fontSize:this.state.collapsed ? "32px":"16px"}}
                     onClick={()=> {this.setState({Content:"",background:`url(${home})`})}}/>
          <span onClick={()=> {this.setState({Content:"",background:`url(${home})`})}} style={{paddingRight:90}}>Home</span>
        </Menu.Item>

        <Menu.Item key="2">
          <IdcardTwoTone style={{fontSize:this.state.collapsed ? "32px":"16px"}}
                                 onClick={()=> {this.setState({Content:<ItemForm generateItem={this.props.generateItem} getItem={this.props.getItem}/>,background:`url(${generateBack})`})}}/>
          <span onClick={()=> {this.setState({Content:<ItemForm generateItem={this.props.generateItem} getItem={this.props.getItem}/>,background:`url(${generateBack})`})}} style={{paddingRight:30}}>Generate Item</span>
        </Menu.Item>

        <Menu.Item key="3">
          <DollarCircleTwoTone style={{fontSize:this.state.collapsed ? "32px":"16px"}}
          onClick={()=> {this.setState({Content:<Items account = {this.props.account}
                                                             getItem={this.props.getItem}
                                                             getItems={this.props.getItems}
                                                             redeemItem={this.props.redeemItem}
                                                             buyToken={this.props.buyToken}
                                                             getAllItems = {this.props.getAllItems}
                                                             getUserItems = {this.props.getUserItems}
                                                             />,
                                              background:`url(${redeemBack})`})}}/>
          <span onClick={()=> {this.setState({Content:<Items account = {this.props.account}
                                                             getItem={this.props.getItem}
                            -                                 getItems={this.props.getItems}
                                                             redeemItem={this.props.redeemItem}
                                                             buyToken={this.props.buyToken}
                                                             getAllItems = {this.props.getAllItems}
                                                             getUserItems = {this.props.getUserItems}
                                                             />,
                                              background:`url(${redeemBack})`})}}
                                                             style={{paddingRight:80}}>Redeem</span>
        </Menu.Item>

        <Menu.Item key="4">
          <TagTwoTone style={{fontSize:this.state.collapsed ? "32px":"16px"}}
          onClick={()=>{this.setState({Content:<Explore buyToken={this.props.buyToken}
                                                              welcomeToken={this.props.welcomeToken}
                                                              offerValid={this.props.offerValid}
                                                              account={this.props.account}/>,background: `url(${back1})`})}}/>
          <span onClick={()=>{this.setState({Content:<Explore buyToken={this.props.buyToken}
                                                              welcomeToken={this.props.welcomeToken}
                                                              offerValid={this.props.offerValid}
                                                              account={this.props.account}/>,background: `url(${back1})`})}} style={{paddingRight:80}} >Explore </span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 ,height:"40px"}}>
       <div >
        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: this.toggle,
          style:{fontSize:'40px',marginRight:20},
        })}
        <div style={{float:"right"}}>
        <Dropdown overlay={menu}  trigger={['click']}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <Avatar size="large"
                  icon={<UserOutlined/>}
                  style={{
                    verticalAlign: 'top',
                  }}/>
      </a>
    </Dropdown>

        </div>

        <div style={{float:"right"}}>
          {this.props.account}
        </div>
        </div>
     </Header>
     <div className="test"             style={{
                   padding: 24,
                   height:"100vh",
                   backgroundImage: this.state.background,
                   backgroundSize:"cover"
                 }}>

      <Content
        className="site-layout-background-content"

      >
        {this.state.Content}
      </Content>
    </div>
    </Layout>
  </Layout>
//////////////////////////////////////////////////
const onClick = ({key}) => {
  if(key=="1"){
      message.info(`Balance: ${this.props.balance} TOK`);
    }
};

const menu = (
  <Menu  onClick={onClick} >
    <Menu.Item key="1"  >
          <Popover placement="left" content={this.props.balance} >
            Balance
          </Popover></Menu.Item>
    <Menu.Item key="2" onClick={()=>{this.setState({Content:<UserItems getUserItems = {this.props.getUserItems}
                                                                       itemDetailed = {this.itemDetailed}
                                                                       account={this.props.account}/>})}}>My items</Menu.Item>
  </Menu>
);
//////////////////////////////////////////////
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
//////////////////////
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
