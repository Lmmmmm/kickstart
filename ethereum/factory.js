import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x74EF93c8dE1AF2ad859Ac52A61564AB39FefDBA2'
);

export default instance;