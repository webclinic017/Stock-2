import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HistoricPrice from '../historicPrice/historicPrice'
import HistoricPriceNorm from '../historicPriceNorm/historicPriceNorm'

const LinePlots = () => {
    return (
        <Container fluid data-testid='linecharts' >
            <Row style={{ justifyContent: 'center' }}>
                <Col xl={6} style={{ 'padding': 0 }} >
                    <HistoricPrice></HistoricPrice>
                </Col>
                <Col xl={6} style={{ 'padding': 0 }} >
                    <HistoricPriceNorm></HistoricPriceNorm>
                </Col>
            </Row>
        </Container>
    )
}

export default LinePlots