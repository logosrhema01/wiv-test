import Web3 from 'web3'
import axios from 'axios'
// import sql3 from 'sqlite3'
// import excelToSqlite from 'excel-to-sqlite'
import InputDataDecoder from 'ethereum-input-data-decoder'
// import {fileURLToPath} from 'url';
import  { TRANSACTIONS, LWINdatabase } from '../data'

// const sqlite3 = sql3.verbose();


const config = (lwin) => ({
  method: 'post',
  url: 'https://sandbox-api.liv-ex.com/data/v2/priceData',
  headers: { 
    'CLIENT_KEY': '1fcd0df0-07ea-44d3-bf56-0453ab1d7dca', 
    'CLIENT_SECRET': 'sqMSah0k', 
    'Content-Type': 'application/json'
  },
  data : JSON.stringify({
    "lwin": [
      lwin
    ],
    "priceType": [
      "A"
    ],
    "priceDate": "",
    "currency": "GBP"
  })
});


// open database in memory
// let db = new sqlite3.Database(':memory:', (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the in-memory SQlite database.');
// });
// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);
// let excelPath = path.join(__dirname, "LWINdatabase.xlsx");
// console.log(excelPath)
// let excel = excelToSqlite(excelPath);
// // excel.readAll().saveTo("database.sqlite").then((database) => {
// //     console.log(`Sheet ${sheet._name} saved in "database.sqlite"!`);
// // });

var web3 = new Web3(new Web3.providers.HttpProvider("https://polygon-mainnet.infura.io/v3/c65e20654802435c95a2161d92b24e16"))
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_product_id","type":"uint256"},{"internalType":"string","name":"_error","type":"string"}],"name":"BurningError","type":"error"},{"inputs":[{"internalType":"uint256","name":"_process_id","type":"uint256"},{"internalType":"string","name":"_error","type":"string"}],"name":"MintingError","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_lot_id","type":"uint256"}],"name":"LotDestroyed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_lot_id","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"_process_id","type":"uint256"}],"name":"LotMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_lot_id","type":"uint256"}],"name":"LotRedeemed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_product_id","type":"uint256"},{"internalType":"uint256","name":"_burn_type","type":"uint256"}],"name":"burnLot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_product_id","type":"uint256"}],"name":"getProductInfo","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_process_id","type":"uint256"},{"internalType":"address","name":"_owner_address","type":"address"},{"internalType":"string","name":"_brand_name","type":"string"},{"internalType":"string","name":"_region","type":"string"},{"internalType":"uint256","name":"_wine_type","type":"uint256"},{"internalType":"uint256","name":"_year","type":"uint256"},{"internalType":"string","name":"_production_country","type":"string"},{"internalType":"string","name":"_producer","type":"string"},{"internalType":"uint256","name":"_bottle_quantity","type":"uint256"},{"internalType":"string","name":"_uri","type":"string"}],"name":"mintLot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const decoder = new InputDataDecoder(abi);

const reduceData = async (data) =>{
    if (data.method !== 'mintLot') return
    let res = {
        id: data.inputs[0],
        lwin: LWINdatabase[data.inputs[2]],
        title: data.inputs[2],
        price: 'No Price Data',
        image: 	data.inputs[8],
        category: data.inputs[3],
        description: `${data.inputs[2]}, ${data.inputs[3]} by ${data.inputs[7]} in ${parseInt(data.inputs[5])}, ${data.inputs[6]}`
    }
    if(res.lwin){
        
        var price = await axios(config(res.lwin)).then(res => res.data)
            .then(data => data.lwinDetail[0].dataDetail.length > 0 ? 
                data.lwinDetail[0].dataDetail[0].priceData : 
                'No price Data'
            );
        res.price = (Math.round(price * 100) / 100).toFixed(2);
        
    }
        
    return res
}

export default async function getTransactions () {
    let result = await Promise.all(
        TRANSACTIONS.map(async trans=> 
            web3.eth.getTransaction(trans)
                .then(res=> reduceData(decoder.decodeData(res.input)))
                .catch(e=> {throw new Error(e)})
        ))
    return result.filter(v => v !== undefined)
}