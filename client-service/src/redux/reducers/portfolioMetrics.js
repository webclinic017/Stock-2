import {
    FETCH_PORTFOLIO_METRICS,
    PORTFOLIO_METRICS_LOADING,
    PORTFOLIO_METRICS_NOT_LOADING,
} from "../actionTypes"

const initialState = {
    portfolio: {
        returns: 0,
        volatility: 0,
        returnsChange: 0,
        volatilityChange: 0,
        idiosyncraticRisk: 0,
        systematicRisk: 0,
        variance: 0

    },
    loading: false
}


const portfolioMetrics = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PORTFOLIO_METRICS:
            console.log('portoflio metrics', action)
            const { data: { portfolio_risk_returns } } = action
            return {
                ...state,
                portfolio: {
                    ...state.portfolio,
                    returns: portfolio_risk_returns.portfolio_returns,
                    volatility: portfolio_risk_returns.portfolio_volatility,
                    returnsChange: portfolio_risk_returns.portfolio_returns_change,
                    volatilityChange: portfolio_risk_returns.portfolio_volatility_change * -1,
                    idiosyncraticRisk: portfolio_risk_returns.idiosyncratic_risk,
                    systematicRisk: portfolio_risk_returns.systematic_risk,
                    variance: portfolio_risk_returns.portfolio_variance
                }
            }

        case PORTFOLIO_METRICS_NOT_LOADING:
            return {
                ...state,
                loading: false
            }

        case PORTFOLIO_METRICS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}

export default portfolioMetrics