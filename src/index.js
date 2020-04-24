import React from "react";
import Main from "./main.js"
import "./ant.css"
import reactDOM from "react-dom";
import 	Web3 from 'web3';
import redeem from "./abis/Redeem.json";
import token from "./abis/Token.json";
var Spinner = require('react-spinkit');
class Reddit extends React.Component{

 constructor(props){
	 	super(props)

	 	this.state={
		 	account: "na",
			loading:true,
			Token:"",
			Redeem:"",
      buyView:true,
      newItem:0
	 	};
 }

 	async componentWillMount(){
	 	await this.LoadWeb3();
	 	await this.LoadBlockchainData();
    await this.getBalance();

 }

	async  LoadBlockchainData(){

			 window.accounts = await window.web3.eth.getAccounts();
			 console.log(window.accounts);
			 this.setState({account:window.accounts[0]})
       const networkId = await window.web3.eth.net.getId()
			 const redeem_address = redeem.networks[networkId].address;
			 const Token = await new window.web3.eth.Contract(token.abi,token.networks[networkId].address);
			 this.setState({Token})

		 	 const Redeem = await new window.web3.eth.Contract(redeem.abi,redeem_address);
			 this.setState({Redeem})
				this.setState({loading:false})
	}

	async LoadWeb3 (){
		if(window.ethereum){
			window.web3 = new Web3(window.ethereum)
			await window.ethereum.enable()
		}
		else if(window.web3){
			window.web3 = new Web3(window.web3.currentProvider)
		}
		else{
			window.alert("metamask not installed")
		}
	}
	generateItem = (type,name,price,credentials)=>{
		this.setState({loading:true})
		this.state.Redeem.methods.generateItem(type,name,price,credentials).send({from:this.state.account,gas:2000000}).then((tran)=>{
				this.setState({loading:false})

		}).catch((e)=>{
      alert(e.message)
      this.setState({loading:false})
    })

	}

   getAllItems = async ()=>{
     let allItems = await this.state.Redeem.methods.getAllItems().call()
     return allItems
   }
   getItems = async ()=>{
     let names = await this.state.Redeem.methods.getItems().call()
     console.log(names);
     return names;
   }
   getItem =async (name)=>{

    let ans =await this.state.Redeem.methods.getItem(name).call()
    return ans
    }

    getUserItems = async (user) =>{
      let userItems = await this.state.Redeem.methods.getUserItems(user).call()
      return userItems
    }

    getCredentials = async (item) =>{
      let credentials = await this.state.Redeem.methods.getCredentials(item).call({from:this.state.account})
      return credentials
    }

    offerValid = async (user) =>{
      let result = await this.state.Redeem.methods.WelcomeOfferAvailed(user).call()
      return result
    }
  getBalance = async ()=>{
    this.setState({loading:true})
    let bal = await  this.state.Token.methods.balanceOf(this.state.account).call()
        this.setState({balance:bal})
        this.setState({loading:false})
  }

  updater = setInterval(async ()=>{
    let p_account =this.state.account
    let n_account = await window.web3.eth.getAccounts()
    let self = this;
    window.ethereum.on('accountsChanged', function (accounts) {
      window.location.reload();
      self.setState({account:accounts[0]})
    })
  },1000)
	buyToken = ()=>{
		this.setState({loading:true})
		this.state.Redeem.methods.transferToken(200).send({from:this.state.account,gas:200000}).then(()=>{
      this.getBalance()
			this.setState({loading:false})
		})
	}
  welcomeToken = () =>{
    this.setState({loading:false})
    this.state.Redeem.methods.welcomeToken().send({from:this.state.account,gas:200000}).then(()=>{
      this.getBalance()
      this.setState({loading:false})
    })
  }

  increaseCount=()=>{
    let initialCount = this.state.newItem
    let newCount = initialCount+1
    this.setState({newItem:newCount})
  }
  resetCount=()=>{
    this.setState({newItem:0})
  }
	redeemItem = (name)=>{
		this.setState({loading:true})
		this.state.Token.methods.approve(this.state.Redeem._address,200).send({from:this.state.account,gas:200000}).then(()=>{
			this.state.Redeem.methods.redeemItem(name,this.state.account).send({from:this.state.account,gas:200000}).then(()=>{
        this.increaseCount()
        this.getBalance()
        this.setState({loading:false})
      }).catch((e)=>{
        alert(e.message)
        this.setState({loading:false})
      })
		})
	}



render(){
let content

if(this.state.loading){
	content =  <Spinner name='double-bounce' />

}
else{
  content = <Main account = {this.state.account}
                  generateItem={this.generateItem}
                  getItem={this.getItem}
                  balance={this.state.balance}
                  getItems = {this.getItems}
                  redeemItem={this.redeemItem}
                  buyToken={this.buyToken}
                  getAllItems={this.getAllItems}
                  getUserItems={this.getUserItems}
                  getCredentials = {this.getCredentials}
                  welcomeToken ={this.welcomeToken}
                  offerValid = {this.offerValid}
                  count = {this.state.newItem}
                  resetCount={this.resetCount}/>
}
return   <div>
           {content}
          </div>
}
}


reactDOM.render(<Reddit />,document.querySelector('#root'));
