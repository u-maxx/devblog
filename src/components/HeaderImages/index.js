import React from 'react';
import Wrapper from './Wrapper';
import MagentoUImage from "../MagentoUImage";
import Magento2UImage from "../Magento2UImage";
import HeaderImage from '../HeaderImage';

function HeaderImages() {
  return (
    <Wrapper>
        <HeaderImage/>
        <Magento2UImage/>
        <MagentoUImage/>
    </Wrapper>
  );
}

export default HeaderImages;
