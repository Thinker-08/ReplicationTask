const express = require('express');
const router = express.Router();
const axios = require('axios');
const {dataTable} = require('../models/dataTable');

router.route('/getLatest').get(async(req, res) => {
    try{
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const array = Object.values(response.data);
        const promises = array.map((e) => {
            return dataTable.upsert({
                baseUnit: e.base_unit,
                quoteUnit: e.quote_unit,
                low: e.low,
                high: e.high,
                last: e.last,
                type: e.type,
                open: e.open,
                volume:e.volume,
                sell:e.sell,
                buy: e.buy,
                at: e.at,
                name: e.name,
            }, {
                where: {
                    name: e.name,
                }
            })
        })
        await Promise.all(promises).then(() => {
            console.log("Successfully updated table");
        })
        const data = await dataTable.findAll({
            limit: 10,
            order:[['at', 'DESC']]
        });
        res.send(data);
    } catch (err) {
        console.log(err);
    }
});

router.route('/getSymbols').get(async(req, res) => {
    const response = await dataTable.findAll({
        attributes: ['baseUnit'],
        group: ['baseUnit']
    })
    const valuesArray = response.map(obj => obj.baseUnit);
    res.send(valuesArray);
});

router.route('/getPrice').get(async(req, res) => {
    const resp = await axios.get('http://localhost:8080/api/routes/getLatest');
    const parameter = req.query.name;
    console.log(parameter);
    const response = await dataTable.findAll({
        limit: 1,
        order:[['at', 'DESC']], 
        where: {
            baseUnit: parameter,
        }
    })
    console.log("Heres the data", response);
    res.send(response);
})

module.exports=router;