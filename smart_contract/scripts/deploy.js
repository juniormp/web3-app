// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const contract = await transactionsFactory.deploy();

  await contract.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error); 
    process.exit(1);
  });

//   const hre = require("hardhat");

// const main = async () => {
//   const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
//   const contract = await transactionsFactory.deploy();

//   await contract.deployed();
// }

// const runMain = async() => {
//   try {
//     await main();
//     process.exit(0);
//   } catch(error) {
//     console.log(err);
//     process.exit(1);
//   }
// }