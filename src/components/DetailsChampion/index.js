import React , {Component} from 'react'
import { ChampionDetails } from './style.js'
import axios from 'axios'

class DetailsChampion extends Component {
  state = { 
    detailsChampion: [], 
    champion: this.props.match.params.name,
    skins: []
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.name !== nextProps.match.params.name) {
      axios.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/pt_BR/champion/${nextProps.match.params.name}.json`)
      .then(res => {
        const detailsChampion = res.data.data;
        this.setState({ detailsChampion: detailsChampion });
      })
      this.setState({ champion: nextProps.match.params.name })
    }
  } 
 
  componentDidMount(){
    axios.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/pt_BR/champion/${this.state.champion}.json`)
      .then(res => {
        const detailsChampion = res.data.data 
        this.setState({ detailsChampion });
      })
  } 
  render(){
    return (
      <ChampionDetails>
        <React.Fragment>
      {console.log(this.state.detailsChampion)}
      {console.log(this.state.champion)}
     
      <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.state.champion}_0.jpg`} alt='tes' />
      {this.state.detailsChampion !== undefined && Object.keys(this.state.detailsChampion).map(res => {
        this.state.detailsChampion[res].skins.map(item => {
           this.state.skins.push(item.num)
         })   
      })}
      
      {/* {this.state.skins.map(res =>  <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.state.champion}_${res}.jpg`} alt='tes' />)} */}
      </React.Fragment>
      </ChampionDetails>
    )
  } 
}
export default DetailsChampion
