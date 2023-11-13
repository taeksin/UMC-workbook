import React, { useState } from 'react';
import Ad from './Ad';

function AdPage() {
  const [showAd, setShowAd] = useState(true); // useState를 이용하여 초기 상태 설정

  const handleToggleClick = () => {
    setShowAd((prevShowAd) => !prevShowAd);
  };

  return (
    <div>
      {showAd && <Ad showAd={showAd} />} {/* showAd prop을 전달 */}
      <button onClick={handleToggleClick} style={{ cursor: "pointer" }}>
        {showAd ? '광고 숨기기' : '광고 보이기'}
      </button>
    </div>
  );
}

export default AdPage;
