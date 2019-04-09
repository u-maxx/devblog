import React from 'react';
import Link from 'gatsby-link';
import userConfig from '../../../config';

import Wrapper from './Wrapper';
import imgSrc from  '../../m2_in_progress_.jpg';

function Magento2UImage() {
  return (
    <Wrapper>
      <Link to="/">
        <img src={imgSrc} alt={userConfig.magento2Utitle} />
      </Link>
    </Wrapper>
  );
}

export default Magento2UImage;
