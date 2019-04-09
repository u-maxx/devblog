import React from 'react';
import Link from 'gatsby-link';
import userConfig from '../../../config';

import Wrapper from './Wrapper';
import imgSrc from  '../../developer_plus_.png';

function MagentoUImage() {
  return (
    <Wrapper>
      <Link to="/">
        <img src={imgSrc} alt={userConfig.magentoUtitle} />
      </Link>
    </Wrapper>
  );
}

export default MagentoUImage;
