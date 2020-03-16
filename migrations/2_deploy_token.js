var Token = artifacts.require("./Token.sol");
var Redeem = artifacts.require("./Redeem.sol");

module.exports = function(deployer) {
  deployer.deploy(Token).then(()=>{
    return deployer.deploy(Redeem,Token.address)
  });
};
