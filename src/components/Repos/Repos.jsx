import React, { Component, useEffect, useState } from 'react'
import ReposDiv from './ReposDiv'
// import './repos.css' 
import Loading from '../Loading/Loading';


class Repos extends Component {
  state = {
    data: null
  }
  setData = (e) => {
    this.setState(() => ({data: e}))
  }
  getData = () => {
    fetch(`https://api.codetabs.com/v1/proxy/?quest=https://www.freetogame.com/api/games`)
      .then((data) => data.json())
      .then((data => this.setData(data)))
      };
  componentDidMount(){
    this.getData()
  }

  render(){
    const { searchInput } = this.props;
    const { data } = this.state;
    const filteredData = data?.filter((game) => game.title.toLowerCase().includes(searchInput.toLowerCase()))

    return <ReposDiv data={filteredData}/> || <Loading/>;
  }

} 

export default Repos