import React, { memo}  from 'react';
import RefreshIcon from '../../../assets/images/refresh.svg';
import { Card, Typography, Button, Select, MenuItem} from '../../../components';
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style';
// import { render } from '../../../../node_modules/@testing-library/react/types/index';

const navigatorHasShare = navigator.share;

function Painel({ updateAt, onChange, data, country, getCoviddata}) {
    const { cases, recovered, deaths, todayCases, todayDeaths} = data

    const renderCountries = (country, index) => (
        
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt= {`País-${country.label}`} />
            </ItemStyled>
        </MenuItem>
        
    )
    const textCovid19 = `País: ${country}`;

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid - 19 ${country} - recuperados ${recovered}`,
            text: textCovid19,
            url: 'https://covid-19-pp.herokuapp.com/' //onde a aplicação vai ficar hospedado 
        })
    }

    const renderSharebutton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant= "container" color="primary" onClick={copyInfo}>
                Compartilhar
            </Button>
        </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">COVID-19</Typography>
                    <Typography variant="h5" component="span" color="primary"> Painel Coronavirus </Typography>
                    <Typography variant="h5" component="span" color="primary"> Atualizado em: {updateAt} </Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                {navigatorHasShare ? renderSharebutton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Painel)