import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';
import HeaderImages from '../HeaderImages';

function Header({ config }) {
  const { author, description, detailed_description, social } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImages && (
          <HeaderImages/>
        )}
        <H1><Link to="/">{author}</Link></H1>
        <P>{description}</P>
          {social &&
          <Social
              magentou={social.magentou}
              linkedin={social.linkedin}
              cv={social.cv}
              email={social.email}
              skype={social.skype}
              calendy={social.calendy}
              commercehero={social.commercehero}
              stackoverflowstory={social.stackoverflowstory}
              stackoverflowcv={social.stackoverflowcv}
              stackexchange={social.stackexchange}
              twitter={social.twitter}
              github={social.github}
              dockerhub={social.dockerhub}
              pagespeed={social.pagespeed}
              lighthouse={social.lighthouse}
          />
          }
        <P>{detailed_description}</P>
      </Wrapper>
    </Container> 
  );
}

export default Header;