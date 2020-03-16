pragma solidity ^0.5.16;
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
contract Token is ERC20{
  string public name = "token";
  string public symbol = "TOK";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 1000*(10**18);
  address  public owner = address(0);

  function nameToken() view public returns(string memory){
    return name;
  }
  constructor() public{
     owner = msg.sender;
    _totalSupply = INITIAL_SUPPLY;
    _balances[msg.sender] = INITIAL_SUPPLY;
  }
  modifier onlyOwner(){
    require(msg.sender == owner);
    _;
  }
  event ownerChanged(
    address from,
    address to
  );
  function transferOwnership(address _newOwner) public onlyOwner{
    emit ownerChanged(owner,_newOwner);
    _balances[_newOwner] = _balances[owner];
    _balances[owner] = 0;
    owner = _newOwner;
  }
  function redeem(address _address, uint price) public {
    this.transfer(_address, price);
  }

}
