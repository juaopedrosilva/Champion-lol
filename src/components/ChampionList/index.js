import React, {Component} from 'react'
import { ListChampion } from './style' 
import axios from 'axios'
import ChampionItem from './ChampioListItem'

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { Creators as TodoActions } from "./store/ducks/champion";

class ChampionList extends Component{
    state = { champios: [] }
    componentDidMount(){
        axios.get(`http://ddragon.leagueoflegends.com/cdn/6.24.1/data/pt_BR/champion.json`)
        .then(res => {
          const champios = res.data.data;
          this.setState({ champios });
        })
    }
    render(){
        return(
            <ListChampion>
                {Object.keys(this.state.champios).map(item => <ChampionItem key={this.state.champios[item].key} data={this.state.champios[item]}/>)}
            </ListChampion>
        )
    }   
}
// const mapStateToProps = state => ({
//     champion: state.champion
// })
  
// const mapDispatchToProps = dispatch =>
//     bindActionCreators(TodoActions, dispatch)
  
export default ChampionList
