const getHistoricData = require('../utils/getHistoricData')
const dotenv = require('dotenv').config()

const { CALCULATOR_STOCK_HISTORY, CALCULATOR_STOCK_METRICS,
    CALCULATOR_PORTFOLIO_METRICS, CALCULATOR_EFFICIENT_FRONTIER } = process.env

const requestMaker = require('../utils/requestMaker')

const axios = require('axios')


exports.financialMetrics = async (req, res) => {
    try {
        const { tickers } = req.body
        console.log(tickers, 'before get historic data')
        const historicData = await getHistoricData(tickers)
        console.log('historic data done')
        const [history, stockMetrics, portfolioMetrics, efficientFrontier] = await axios.all([
            axios.post(CALCULATOR_STOCK_HISTORY, { historicData }),
            axios.post(CALCULATOR_STOCK_METRICS, { historicData }),
            axios.post(CALCULATOR_PORTFOLIO_METRICS, { historicData }),
        ])

        const data = { ...history.data, ...stockMetrics.data, ...portfolioMetrics.data, symbols: [...tickers] }
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.send({ error })
    }
}


exports.efficientFrontier = async (req, res) => {
    try {
        const { tickers } = req.body
        console.log(tickers, 'before get historic data')
        const historicData = await getHistoricData(tickers)
        console.log('historic data done')
        const efficientFrontier = await axios.post(CALCULATOR_EFFICIENT_FRONTIER, { historicData })
        const data = efficientFrontier.data
        return res.status(200).json(data)
    } catch (error) {
        // console.log(error)
        return res.send({ error })
    }
}