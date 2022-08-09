import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledAvatarContainer } from "./style";

export default function BasicMenu({
  profile,
  mynews,
  createNews,
  contentCreators,
  logOut,
}) {
  const { user } = useContext(UserContext);
  const [anchorEl, setAnchor] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  return (
    user ? (
      <div>
      {user?.type === "content creator" && (
        <StyledAvatarContainer>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "130px" }}
            onClick={createNews}
          >
            criar Noticias
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={profile}>Profile</MenuItem>
            <MenuItem onClick={mynews}>my news</MenuItem>
            <MenuItem onClick={logOut}>logOut</MenuItem>
          </Menu>
          <Avatar
            alt="foto de perfil"
            src={user.avatar}
            onClick={handleClick}
          />
        </StyledAvatarContainer>
      )}

      {user?.type === "company" && (
        <StyledAvatarContainer>
          <Button
            variant="contained"
            size="small"
            sx={{ width: 100 }}
            onClick={contentCreators}
          >
            Ver Perfis
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={profile}>Profile</MenuItem>
            <MenuItem onClick={logOut}>logOut</MenuItem>
          </Menu>
          <Avatar
            alt="foto de perfil"
            src={user.avatar}
            onClick={handleClick}
          />
        </StyledAvatarContainer>
      )}

      {user?.type === "reader" && (
        <StyledAvatarContainer>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={profile}>Profile</MenuItem>
            <MenuItem onClick={logOut}>logOut</MenuItem>
          </Menu>
          <Avatar
            alt="foto de perfil"
            src={user.avatar}
            onClick={handleClick}
          />
        </StyledAvatarContainer>
      )}
    </div>
    ):
    (
      <StyledAvatarContainer>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={profile}>Profile</MenuItem>
            <MenuItem onClick={logOut}>logOut</MenuItem>
          </Menu>
          <Avatar
            alt="foto de perfil"
            src={user.avatar}
            onClick={handleClick}
          />
        </StyledAvatarContainer>
    )
  );
}
