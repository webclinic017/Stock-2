const getHistoricData = require('../utils/getHistoricData')
const dotenv = require('dotenv').config()
const axios = require('axios')
const { CALCULATOR_STOCK_HISTORY, CALCULATOR_STOCK_METRICS,
    CALCULATOR_PORTFOLIO_METRICS, CALCULATOR_EFFICIENT_FRONTIER, CALCULATOR_SERVICE, PRICER_SERVICE } = process.env


exports.financialMetrics = async (req, res) => {
    try {
        const { tickers } = req.body
        const historicData = await getHistoricData(tickers)
        const [history, stockMetrics, portfolioMetrics] = await axios.all([
            axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_HISTORY}`, { historicData }),
            axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_STOCK_METRICS}`, { historicData }),
            axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_PORTFOLIO_METRICS}`, { historicData }),
        ])
        const data = { ...history.data, ...stockMetrics.data, ...portfolioMetrics.data, symbols: [...tickers] }
        return res.status(200).json(data)
    } catch (error) {
        console.log(error.data)
        return res.send({ error })
    }
}


exports.efficientFrontier = async (req, res) => {
    try {
        const { tickers } = req.body
        const historicData = await getHistoricData(tickers)
        const efficientFrontier = await axios.post(`${CALCULATOR_SERVICE}${CALCULATOR_EFFICIENT_FRONTIER}`, { historicData })
        const data = efficientFrontier.data
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.send({ error })
    }
}