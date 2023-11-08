import React, { Component } from 'react';
import Ad from '../components/Ad';


function AdPage() {
  const [showAd, setShowAd] = Component(true);

  const handleToggleClick = () => {
    setShowAd((prevShowAd) => !prevShowAd);
  };

  return (
    <div>
      AdPage       입니다
      {showAd && <Ad showAd={showAd} />}
      <button onClick={handleToggleClick} style={{ cursor: "pointer" }}>
        {showAd ? '광고 숨기기' : '광고 보이기'}
      </button>
    </div>
  );
}


export default AdPage;