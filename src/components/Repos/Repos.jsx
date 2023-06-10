/* eslint-disable react/prop-types */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import ReposDiv from './ReposDiv';
// import './repos.css'
import Loading from '../Loading/Loading';

function Repos({ searchInput }) {
  const [data, setData] = useState(null);

  const getData = () => {
    fetch('https://api.codetabs.com/v1/proxy/?quest=https://www.freetogame.com/api/games')
      .then((data) => data.json())
      .then(((data) => setData(data)));
  };

  const filteredData = data?.filter((game) =>
    game.title.toLowerCase().includes(searchInput.toLowerCase()));
  useEffect(() => {
    getData();
  }, []);

  return <ReposDiv data={filteredData} /> || <Loading />;
}

export default Repos;
