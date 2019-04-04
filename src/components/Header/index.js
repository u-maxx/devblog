import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { author, description, detailed_description, recommends_label, social } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{author}</Link></H1>
        <P>{description}</P>
          {social &&
          <Social
              magentou={social.magentou}
              commercehero={social.commercehero}
              website={social.website}
              github={social.github}
              dockerhub={social.dockerhub}
              twitter={social.twitter}
              linkedin={social.linkedin}
              email={social.email}
          />
          }
        <P>{detailed_description}</P>
        <P>{recommends_label}</P>
      </Wrapper>
    </Container> 
  );
}

export default Header;