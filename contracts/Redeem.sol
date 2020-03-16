pragma solidity ^0.5.16;

contract Redeem{
  Token token;
  mapping (string => Item) Items;
  uint item_count = 0;
  address owner = address(0);
  string [] item_name;

  constructor(address _token) public{
    token = Token(_token);
    owner = msg.sender;
  }

  struct Item{
    uint256 _price;
    string _name;
    string _type;
    string _hash;
    uint256 _dated;
  }

  modifier onlyOwner(){
      require(msg.sender == owner);
      _;
  }

  function generateItem(string memory  _type, string memory _name, uint _price) public onlyOwner {
      Item memory new_item;
      new_item._type = _type;
      new_item._price = _price;
      new_item._dated = now;
      Items[_name] = new_item;
      item_name.push(_name);
      item_count = item_count +1;
  }
  function getItems() view public returns(uint){
      return item_count;
  }

  function getItem(string memory _name) view public returns(string memory){
    string memory ans = Items[_name]._type;
    return ans;
  }
  function redeemItem(string memory  _name, address _address) public {
    uint price = Items[_name]._price;
    token.transfer(owner,_address,price);
  }
}
contract Token {

    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    event ownerChanged(
      address from,
      address to
    );
    function transferOwnership(address _newOwner) public;
    function redeem(address _address, uint price) public ;
    function nameToken() view public returns(string memory);
}
