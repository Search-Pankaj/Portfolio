import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! <br />
          Welcome To my Website
        </SectionTitle>
        <SectionText>
          I am master's Student at JC Bose University (YMCA) <br />
        </SectionText>
        <a href="/images/1.png" download>
          <Button onClick={props.handleClick}>Download CV</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
