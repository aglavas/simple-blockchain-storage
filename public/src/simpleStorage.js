import Web3 from 'web3';
import SimpleStorage from '../../build/contracts/SimpleStorage.json';

const getWeb3 = () => {
    return new Web3('http://localhost:7545');
};

const getSimpleStorage = async web3 => {
    const networkId = await web3.eth.net.getId();
    const deployedContract = SimpleStorage.networks[networkId];
    return new web3.eth.Contract(
        SimpleStorage.abi,
        deployedContract && deployedContract.address
    );
};


export { getWeb3, getSimpleStorage};