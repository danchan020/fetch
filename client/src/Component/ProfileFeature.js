import { Button, Stack, Box, Typography, IconButton } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ProfileDeleteModal from "./ProfileDeleteModal";
import AccountBox from "@mui/icons-material/AccountBox";

function ProfileFeature({
   id,
   first_name,
   last_name,
   email,
   image_url,
   resume,
   handleDeleteProfile,
}) {
   // set default profile picture to profile icon
   return (
      <div>
         <Box
            sx={{
               width: 350,
               height: 525,
               backgroundColor: "white",
               borderRadius: "8px",
            }}
         >
            <Box
               display={"flex"}
               alignItems={"center"}
               justifyContent={"center"}
               sx={{
                  color: "white",
                  background: "rgba(0, 224, 255, 1)",
                  width: 350,
                  height: 50,
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  marginBottom: 3,
               }}
            >
               <h3>{first_name + " " + last_name}</h3>
            </Box>
            <Box sx={{ width: 300, margin: "auto" }}>
               <Stack
                  spacing={2.5}
                  alignItems={"center"}
                  justifyContent={"center"}
               >
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     // onClick={handleMenu}
                     color="inherit"
                  >
                     <AccountBox fontSize="large" />
                  </IconButton>
                  <Typography>{image_url}</Typography>
                  <Typography>{email}</Typography>
                  <Typography>{resume}</Typography>
                  <Button
                     disableElevation
                     fullWidth
                     variant="contained"
                     size="small"
                     type="submit"
                  >
                     Edit Profile
                  </Button>
                  <ProfileDeleteModal
                     handleDeleteProfile={handleDeleteProfile}
                     userId={id}
                  />
               </Stack>
            </Box>
         </Box>
      </div>
   );
}

export default ProfileFeature;
