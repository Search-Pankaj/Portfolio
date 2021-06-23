import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCodeBadge, DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Span,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container style={{ marginTop: "2rem" }}>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "2rem",
          }}
        >
          <DiCssdeck size="3rem" />{" "}
          <Link herf="https://searchpankaj.netlify.app/">
            <span style={{ fontSize: "2rem" }}>Pankaj Bhardwaj</span>{" "}
          </Link>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#Project">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#Skill">
          <NavLink>Skill</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#About">
          <NavLink>Contact Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Search-Pankaj" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/search-pankaj/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.interviewbit.com/profile/pankaj-kumar_436_491"
        target="_blank"
      >
        <DiCodeBadge size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
