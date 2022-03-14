import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import NFTMarketplace from './components/NFTMarketplace';


function App() {
  const [staking, setStaking] = useState(true);

  const openStakingHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setStaking(true);
    event.preventDefault();
    return {staking};
}

const openNFTHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  setStaking(false);
  event.preventDefault();
  return {staking};
}


  return (
    <div className="App">
      <Header nft={openNFTHandler} staking={openStakingHandler}/>
      { staking ? <Body /> : <NFTMarketplace />}
      <Footer />
    </div>
  );
}

export default App;
