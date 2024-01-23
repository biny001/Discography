import styled from "@emotion/styled";
import { FaBars, FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { RiPlayListFill } from "react-icons/ri";
import { RiPlayListLine } from "react-icons/ri";
import { RiSearch2Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  background-color: #205295;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: ${({ showSidebar }) => (showSidebar ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    max-width: 300px;
    height: 100%;
    z-index: 1000;
    background-color: #205295;
  }
`;

const ListIcon = styled(NavLink)`
  display: flex;
  padding: 3px 4px;
  gap: 12px;
  align-items: center;
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  text-decoration: none;

  cursor: pointer;
  &:hover {
    background-color: rgba(10, 116, 179, 0.3);
    color: #fff;
    border-radius: 4px;
    padding: 3px 4px;
    transition: all 0.2s ease-in-out;
  }

  &.active {
    background-color: rgba(44, 116, 179, 0.3);
    border-radius: 4px;
    padding: 3px 4px;
  }
  transition: all 0.2s ease-in-out;
  @media (max-width: 767px) {
    font-size: 18px;
    padding: 10px;
    color: #fff;

    &.active {
      background-color: rgba(44, 116, 179, 0.3);
      border-radius: 4px;
      padding: 3px 4px;
    }
  }
`;

const Logo = styled.img`
  width: 128px;
  height: 128px;
  object-fit: contain;
  @media (max-width: 767px) {
    width: 96px;
    height: 96px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 16px;
  @media (max-width: 767px) {
    padding: 10px;
  }
`;

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 400px;
  width: 100%;
  padding: 0 10px;
  justify-content: flex-start;
  margin-top: 8px;

  & > h3 {
    font-size: 18px;
    font-weight: 500;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: auto;
    width: 100%;
    padding: 10px;
  }
`;
const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 767px) {
    display: block;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1100;
  }
`;

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const iconMappings = {
    playlist: {
      outline: <RiPlayListLine size="28px" />,
      fill: <RiPlayListFill size="28px" />,
    },
    home: {
      outline: <GoHome size="28px" />,
      fill: <GoHomeFill size="28px" />,
    },
    search: {
      outline: <GoSearch size="28px" />,
      fill: <RiSearch2Fill size="28px" />,
    },
    favorites: {
      outline: <FaRegHeart size="28px" />,
      fill: <FaHeart size="28px" />,
    },
  };

  return (
    <>
      <HamburgerButton onClick={toggleSidebar}>
        <FaBars />
      </HamburgerButton>
      <Container showSidebar={showSidebar}>
        <NavLink to="/">
          <LogoContainer>
            <Logo src="/Logo.png" />
            <h1>Discography</h1>
          </LogoContainer>
        </NavLink>
        <UnorderedList>
          <h3>Menu</h3>
          {Object.entries(iconMappings).map(([key, { outline, fill }]) => (
            <ListIcon
              key={key}
              to={`/${key === "playlist" ? "" : key}`}
            >
              {({ isActive }) => (
                <>
                  {isActive ? fill : outline}
                  <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                </>
              )}
            </ListIcon>
          ))}
        </UnorderedList>
      </Container>
    </>
  );
}

export default Sidebar;
