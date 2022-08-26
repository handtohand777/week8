require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/0I_tzacJQ6yTtTtKLH9Ztkbk92FHSaXF",
       accounts: ["70a02de1dc211086f9bdfc66f414a8743b181725e09e134a8aac4af0c88973bd"]
    }
  }

};
