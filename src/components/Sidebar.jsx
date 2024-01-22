import styled from "@emotion/styled";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { RiPlayListFill } from "react-icons/ri";
import { RiPlayListLine } from "react-icons/ri";
import { RiSearch2Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background-color: #205295;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

const Logo = styled.img`
  width: 128px;
  height: 128px;
  object-fit: contain;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 16px;
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
`;
function Sidebar() {
  const iconMappings = {
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
    playlist: {
      outline: <RiPlayListLine size="28px" />,
      fill: <RiPlayListFill size="28px" />,
    },
  };

  return (
    <Container>
      <NavLink to="/">
        <LogoContainer>
          <Logo src="/src/assets/Logo.png" />
          <h1>Discography</h1>
        </LogoContainer>
      </NavLink>
      <UnorderedList>
        <h3>Menu</h3>
        {Object.entries(iconMappings).map(([key, { outline, fill }]) => (
          <ListIcon
            key={key}
            exact={key === "home"}
            to={`/${key === "home" ? "" : key}`}
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
  );
}

export default Sidebar;
