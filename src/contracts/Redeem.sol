pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;
import './Token.sol';

contract Redeem{
  Token token;
  mapping (string => Item) public Items;
  mapping(address => Item[]) userItems;
  mapping(address => bool) User;
  mapping(address => bool) public WelcomeOfferAvailed;
  mapping(bytes32 => string) internal credentials;
  address owner;
  string [] public itemIndexes;
  uint256 itemCount = 0;


  constructor(Token _token) public{
    token = _token;
    owner = msg.sender;
  }
  struct Item{
    uint _price;
    string _name;
    string _type;
    bytes32 _hash;
    uint _dated;
    address itemOwner;
    bool isAvailable;
    uint index;
  }

  modifier onlyOwner(){
      require(msg.sender == owner);
      _;
  }
  modifier itemOwner(Item memory _item){
    require(msg.sender== _item.itemOwner,"you are not allowed");
    _;
  }
  event TokenPurchased(
    address account,
    address token,
    uint amount,
    uint rate
    );
  /* function deleteItem(string  memory name) internal returns(bool){
    Item memory deletedItem = Items[name];
    if(deletedItem.index != itemIndexes.length -1){
     string memory  lastName = itemIndexes[itemIndexes.length -1];
     itemIndexes[deletedItem.index] = lastName;
     Items[lastName].index = deletedItem.index;
    }
    delete Items[name];
    itemIndexes.length--;
    return true;
  } */

  function generateItem(string memory  _type, string memory _name,  uint _price, string memory _credentials) public onlyOwner {
      Item memory new_item;
      new_item._name = _name;
      new_item._type = _type;
      new_item._price = _price;
      new_item._dated = now;
      new_item.itemOwner = msg.sender;
      new_item.isAvailable =true;
      new_item._hash = keccak256(abi.encode(_name,_type,new_item._dated));
      Items[_name] = new_item;
      credentials[new_item._hash] = _credentials;
      itemCount = itemCount +1;
      itemIndexes.push(_name);
      new_item.index= itemIndexes.length-1;
  }
  function getItems() public returns(string [] memory){
      return itemIndexes;
  }

  function getItem(string memory _name) view public returns(Item memory){
    Item memory _item = Items[_name];
    return (_item);
  }

  function getAllItems() view public returns (Item[] memory){
    Item[] memory allItems = new Item[](itemCount);
    for(uint i=0;i<itemIndexes.length;i++){
      allItems[i] = Items[itemIndexes[i]];
    }
    return allItems;
  }

  function getCredentials(Item memory _item) view  public itemOwner(_item) returns(string memory) {
    return (credentials[_item._hash]);
  }

  function getUserItems(address _user) view public returns (Item[] memory){
    Item[] memory allItems = new Item[](itemCount);
    for(uint i=0;i<itemIndexes.length;i++){
      if(Items[itemIndexes[i]].itemOwner== _user){
      allItems[i] = Items[itemIndexes[i]];
     }
    }
    return allItems;
  }

  function transferToken( uint amount) public {
    require(token.balanceOf(address(this))>= amount);
    token.transfer(msg.sender,amount);
    emit TokenPurchased(msg.sender,address(token),amount,100);
  }

  function welcomeToken() public {
    require(WelcomeOfferAvailed[msg.sender]==false);
    token.transfer(msg.sender,200);
    WelcomeOfferAvailed[msg.sender] = true;
    emit TokenPurchased(msg.sender,address(token),200,100);
  }

  function redeemItem(string memory  _name, address _address) public {
    uint price = Items[_name]._price;
    Item storage item = Items[_name];
    require(item.isAvailable,"item not available");
    item.itemOwner = _address;
    item.isAvailable=false;
    token.transferFrom(_address,address(this),price);
  }

}
