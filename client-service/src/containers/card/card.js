import React from 'react'
import { Paper } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import TrendingDownRoundedIcon from '@material-ui/icons/TrendingDownRounded';
import style from './style.module.css'
import { green } from '@material-ui/core/colors';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


const Card = ({ data, changePct, name, value, typ }) => {
    let icon = null
    if (changePct >= 0) icon = <TrendingUpRoundedIcon style={{ color: green[500] }} fontSize='large' />
    else icon = <TrendingDownRoundedIcon color='secondary' fontSize='large' />;
    return (
        <Paper elevation={11} className={style.paper}>
            <Container fluid className={style.container}>
                <Row className={style.topRow}>
                    <h4 className={style.symbol}> {name}</h4>
                    {icon}
                </Row>
                <Row className={style.middleRow}>
                    <h5 className={style.price}> {value} %</h5>
                    <p className={changePct < 0 ? style.negative : style.positive}>{changePct}</p>

                </Row>
            </Container>
        </Paper>
    )
}

export default Card