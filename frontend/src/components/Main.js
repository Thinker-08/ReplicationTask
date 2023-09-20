import React, {useState, useEffect} from 'react';
import wazirx from '../images/wazirx.png'
import bitbns from '../images/bitbns.png'
import colodax from '../images/colodax.png'
import zebpay from '../images/zebpay.png'
import coindcx from '../images/coindcx.png'
import {Button} from 'react-bootstrap'
import {useName} from '../context/name';
import axios from 'axios';

const Main = () => {
  const {name, setName} = useName();
  console.log(name);
  const [data, setData] = useState({});
  async function callData() {
      const response = await axios.get(`http://localhost:8080/api/routes/getPrice?name=${name||'btc'}`);
      console.log(response.data[0])
      setData(response.data[0]);
  }
  useEffect(() => {
    callData();
  }, [name])
  
  return (
    <div className="table-container">
      <table className="data-table">  
        <thead>
          <tr className="table-row">
            <th style={{ width: '5%' }} className="heading">#</th>
            <th style={{ width: '22%' }} className="heading">Platform</th>
            <th style={{ width: '21%' }} className="heading">Last Traded Price</th>
            <th style={{ width: '21.5%' }} className="heading">Buy / Sell Price</th>
            <th style={{ width: '22.5%' }} className="heading">Difference</th>
            <th style={{ width: '100%' }} className="heading">Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row-spacing">
            <td>1</td>
            <td><img src={wazirx} height={"25px"} style={{borderRadius: "100%"}}/> WazirX</td>
            <td>₹ {data.last}</td>
            <td>₹ {data.buy} / ₹ {data.sell}</td>
            <td style={{color:"#DA5757"}}>-4.21 %</td>
            <td style={{color:"#DA5757"}}> ▼ ₹ 1,03,065</td>
          </tr>
          <tr className="table-row-spacing">
            <td>2</td>
            <td><img src={bitbns} height={"25px"} style={{borderRadius: "100%"}}/> Bitbns</td>
            <td>₹ 29,50,000</td>
            <td>₹ 29,50,000 / ₹ 29,60,100</td>
            <td style={{color: "#5BBEB2"}}>20.43 %</td>
            <td style={{color: "#5BBEB2"}}>▲ ₹ 5,00,353</td>
          </tr>
          <tr className="table-row-spacing">
            <td>3</td>
            <td><img src={colodax} height={"25px"} style={{borderRadius: "100%"}}/>Colodax</td>
            <td>₹ 23,15,619</td>
            <td>₹ 23,51,000 / ₹ 23,15,619</td>
            <td style={{color:"#DA5757"}}>-5.47 %</td>
            <td style={{color:"#DA5757"}}>▼ ₹ 1,34,026</td>
          </tr>
          <tr className="table-row-spacing">
            <td>3</td>
            <td><img src={zebpay} height={"25px"} style={{borderRadius: "100%"}}/>Zebpay</td>
            <td>₹ 22,74,162</td>
            <td>₹ 22,74,162 / ₹ 22,74,162</td>
            <td style={{color:"#DA5757"}}>-7.16 %</td>
            <td style={{color:"#DA5757"}}>▼ ₹ 1,75,483</td>
          </tr>
          <tr className="table-row-spacing">
            <td>4</td>
            <td><img src={colodax} height={"25px"} style={{borderRadius: "100%"}}/>Colodax</td>
            <td>₹ 23,15,619</td>
            <td>₹ 23,51,000 / ₹ 23,15,619</td>
            <td style={{color:"#DA5757"}}>-5.47 %</td>
            <td style={{color:"#DA5757"}}>▼ ₹ 1,34,026</td>
          </tr>
          <tr className="table-row-spacing mb-1">
            <td>4</td>
            <td><img src={coindcx} height={"25px"} style={{borderRadius: "100%"}}/>Coindcx</td>
            <td>₹ 23,77,799</td>
            <td>₹ 23,51,589 / ₹ 23,77,799</td>
            <td style={{color:"#DA5757"}}>-2.93 %</td>
            <td style={{color:"#DA5757"}}>▼ ₹ ₹ 71,846</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <Button variant="outline-info" style={{fontFamily:"sans-serif"}}>Add hodinfo to homescreen</Button>{' '}
    </div>
  );
};

export default Main;
