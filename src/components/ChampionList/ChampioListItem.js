import React from 'react' 
import { ChampioItem } from './style.js'
import { Link } from 'react-router-dom' 

const ChampioListItem = props => {
  return (
    <Link to={`/DetailsChampion/`+props.data.id} >
        <ChampioItem >
        <img src={'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/'+props.data.image.full} alt='test'/>
        <span>{props.data.id}<br/></span>
        </ChampioItem>
    </Link>
  )
}

export default ChampioListItem
