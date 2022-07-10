import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import React, { useState } from "react";

function SignInForm() {
   const initialSignInData = {
      email: "",
      password: "",
   };

   const [signInData, setSignInData] = useState(initialSignInData);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setSignInData((signInData) => ({ ...signInData, [name]: value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // need to update route once backend routes are set
      fetch("dummyurl", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(signInData),
      }).then((resp) => {
         if (resp.ok) {
            // Need to update user state in App.js
            // else render errors
				// check lab "phase-4-rails-putting-it-all-together-auth"
         }
      });
   };

   return (
      <>
         {" "}
         <Box
            component="form"
            sx={{
               "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
         >
            <FormControl variant="standard">
               <InputLabel htmlFor="component-simple">Email Address</InputLabel>
               <Input
                  type="email"
                  id="email"
                  name="email"
                  value={signInData.email}
                  onChange={handleChange}
               />
            </FormControl>
            <FormControl variant="standard">
               <InputLabel htmlFor="component-simple">Password</InputLabel>
               <Input
                  type="password"
                  id="password"
                  name="password"
                  value={signInData.password}
                  onChange={handleChange}
               />
            </FormControl>
            <Button variant="contained" size="small" type="submit">
               Submit
            </Button>
         </Box>
      </>
   );
}

export default SignInForm;