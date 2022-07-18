const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//detele entire build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//read campaign.sol from the contract folder
const compaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(compaignPath, 'utf8');

//compile both contracts with solidity compiler
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}