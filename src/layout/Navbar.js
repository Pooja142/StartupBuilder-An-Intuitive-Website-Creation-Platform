import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import "./Navbar.css";

const settings = ["Profile", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="sticky"
        style={{ background: "#99ffcc", padding: "1px" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link className="text-white-nav navbar-brand" to="/home">
                StartUP<p className="builder">Builder</p>
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  style={{
                    backgroundColor: "grey",
                  }}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">
                    <Link className="text-white-nav" to="/Website">
                      Web Format
                    </Link>{" "}
                  </Typography>
                </MenuItem>

                <MenuItem
                  style={{
                    backgroundColor: "grey",
                  }}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">
                    <Link className="text-white-nav" to="/Ads">
                      Promotions
                    </Link>
                  </Typography>
                </MenuItem>

                <MenuItem
                  style={{
                    backgroundColor: "grey",
                  }}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">
                    {" "}
                    <Link className="text-white-nav" to="/Business">
                      Business
                    </Link>
                  </Typography>
                </MenuItem>

                <MenuItem
                  style={{
                    backgroundColor: "grey",
                  }}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">
                    {" "}
                    <Link className="text-white-nav" to="/About">
                      About Us
                    </Link>
                  </Typography>
                </MenuItem>

                <MenuItem
                  style={{
                    backgroundColor: "grey",
                  }}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">
                    {" "}
                    <Link className="text-white-nav" to="/Contact">
                      Contact Us
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Link className="text-white-nav" to="/home">
                StartUp
                <p className="builder" style={{ marginBottom: "10px" }}>
                  Builder
                </p>
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button>
                {" "}
                <Link className="text-white-nav" to="/Website">
                  {" "}
                  Web Format{" "}
                </Link>
              </Button>
              <Button>
                {" "}
                <Link className="text-white-nav" to="/Ads">
                  {" "}
                  Promotions{" "}
                </Link>
              </Button>
              <Button>
                {" "}
                <Link className="text-white-nav" to="/Business">
                  {" "}
                  Business{" "}
                </Link>
              </Button>
              <Button>
                {" "}
                <Link className="text-white-nav" to="/About">
                  {" "}
                  About Us{" "}
                </Link>
              </Button>
              <Button>
                {" "}
                <Link className="text-white-nav" to="/Contact">
                  {" "}
                  Contact Us{" "}
                </Link>
              </Button>
              <Button>
                {" "}
                <Link className="text-white-nav" to="/Guide">
                  {" "}
                  Tutorial{" "}
                </Link>
              </Button>
            </Box>

            <div className="sign">
              <Link className="sign1" to="/">
                <Button
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "x-large",
                    fontFamily: "Lucida Sans",
                    textDecoration: "none",
                  }}
                >
                  Sign In
                </Button>
              </Link>
            </div>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <div style={{ height: "" }}>
                    <Avatar alt="Remy Sharp" src="" />
                  </div>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
