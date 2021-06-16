import React from "react";
import {
  DiMongodb,
  DiBootstrap,
  DiNodejsSmall,
  DiJavascript1,
  DiReact,
  DiRedis,
  DiHtml5,
} from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end to Front-end etc
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <SiCplusplus size="5rem" />
          <ListTitle>C++</ListTitle>
        </picture>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript1 size="5rem" />
          <ListTitle>JavaScript</ListTitle>
        </picture>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="5rem" />
          <ListTitle>React</ListTitle>
          <ListParagraph>with Hook and Redux</ListParagraph>
        </picture>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejsSmall size="5rem" />
          <ListTitle>Nodejs</ListTitle>
          <ListParagraph>with Express</ListParagraph>
        </picture>
      </ListItem>
      <ListItem>
        <picture>
          <DiRedis size="5rem" />
          <ListTitle>Redis</ListTitle>
        </picture>
      </ListItem>
      <ListItem>
        <picture>
          <DiHtml5 size="5rem" />
          <ListTitle>HTml5</ListTitle>
        </picture>
      </ListItem>
      <ListItem>
        <picture>
          <DiBootstrap size="5rem" />
          <ListTitle>Bootstrap</ListTitle>
        </picture>
      </ListItem>
      <ListItem>
        <picture>
          <DiMongodb size="5rem" />
          <ListTitle>MongoDb</ListTitle>
        </picture>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
