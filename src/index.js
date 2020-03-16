import React from "react";
import reactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import 	Web3 from 'web3';
function Reddit(){

	async function LoadBlockchainData(){

	     window.web3 = new Web3("http://localhost:7545");
		const network = await window.web3.eth.net.getNetworkType();
	    console.log(network);
	}
	LoadBlockchainData();
	let web3 = window.web3;
	console.log(web3);
	const [posts, setPosts] = React.useState([]);

	React.useEffect(()=>{
		axios.get(`https://www.reddit.com/r/reactjs.json`)
		.then(res => {
			const newPosts = res.data.data.children.map(obj => obj.data);


			setPosts(newPosts);
		});
	},[]);

	return <div>
	          <h1>/r/reactjs</h1>
			  <ul>
			  {posts.map(post => (
				  <li key={post.id}><a href={post.url}>{post.title}</a><br/>
				                       --{post.author}</li>
			  ))}
			  </ul>
		  </div>
}

reactDOM.render(<Reddit />,document.querySelector('#root'));
