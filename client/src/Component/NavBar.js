import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
   AppBar,
   Typography,
   Stack,
   TextField,
   Divider,
   Link,
   Box,
   Button,
   Menu,
   MenuItem,
} from "@mui/material";
import UserDropDownMenu from "./UserDropDownMenu";

export default function NavBar({ user }) {
   const [search, setSearch] = useState("");
   const [anchorEl, setAnchorEl] = React.useState(null);

   const open = Boolean(anchorEl);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const changeHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setSearch({ [name]: value });
   };

   const submitHandler = (e) => {
      e.preventDefault();
      fetch("http://localhost:3000");
   };

   const dropDownMenu = (
      <Menu
         id="basic-menu"
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         MenuListProps={{
            "aria-labelledby": "basic-button",
         }}
      >
         <MenuItem onClick={handleClose}>Profile</MenuItem>
         <MenuItem onClick={handleClose}>My account</MenuItem>
         <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
   );

   return (
      <>
         <Stack direction={"column"} spacing={3}>
            <AppBar elevation={0} position="static" color="">
               <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  marginTop={2}
               >
                  <Stack direction={"row"} spacing={4} alignItems={"center"}>
                     <div></div>
                     <Link
                        component={RouterLink}
                        to="/"
                        underline="never"
                        fontFamily={"sans-serif"}
                        color={"primary"}
                        fontSize={36}
                        sx={{ textDecoration: "none" }}
                     >
                        fetch
                     </Link>
                     <Link
                        component={RouterLink}
                        to="/findjobs"
                        underline="hover"
                        color={"black"}
                     >
                        Find Jobs
                     </Link>
                     <Link component="button" underline="hover" color={"black"}>
                        Company Reviews
                     </Link>
                     <Link component="button" underline="hover" color={"black"}>
                        Find Salaries
                     </Link>
                  </Stack>
                  <Stack direction={"row"} spacing={2} sx={{ mr: 2 }}>
                     <Link
                        component={RouterLink}
                        to={user ? "/profile" : "/signin"}
                        underline="hover"
                        color={"black"}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                     >
                        {user ? user.first_name : "Sign In"}
                        {/* { user ? <UserDropDownMenu /> : "Sign In"} */}
                     </Link>
							{dropDownMenu}
                     <Divider orientation="vertical" />
                     <Link component="button" underline="hover" color={"black"}>
                        Employers / Post Jobs
                     </Link>
                  </Stack>
               </Stack>
               <Divider fullWidth />
               <Stack
                  direction={"row"}
                  spacing={36}
                  alignItems={"center"}
                  justifyContent={"space-between"}
               >
                  <Box sx={{ mt: 7 }} />
                  <TextField
                     onChange={changeHandler}
                     onSubmit={submitHandler}
                     fullWidth
                     size="small"
                     id="filled-search"
                     label="...snag your dream job"
                     type="search"
                     name="search"
                     variant="outlined"
                  />
                  <Box />
               </Stack>
            </AppBar>
         </Stack>
         <Divider fullWidth />
      </>
   );
}
