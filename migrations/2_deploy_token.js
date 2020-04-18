var Token = artifacts.require("./Token.sol");
var Redeem = artifacts.require("./Redeem.sol");

module.exports =  async function(deployer) {
  await deployer.deploy(Token);
  const token = await Token.deployed();

  await deployer.deploy(Redeem,Token.address);
  const redeem = await Redeem.deployed();

  await token.transfer(redeem.address,'10000')

};
