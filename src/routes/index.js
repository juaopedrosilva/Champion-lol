import React, {Fragment} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Container from '../components/Container'
import ChampionList from '../components/ChampionList'
import DetailsChampion from '../components/DetailsChampion';

const Routes = () => ( 
        <BrowserRouter> 
            <Fragment>  
                <Container>
                    <ChampionList/>
                <Switch>       
                    <Route exact path="/DetailsChampion/:name" component={DetailsChampion} />    
                </Switch> 
                </Container>
            </Fragment>
        </BrowserRouter>
)

export default Routes