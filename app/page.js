// import Image from "next/image";
// import getStripe from "@/utils/get-stripe";
// import Head from "next/head";
// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import {
//   Box,
//   AppBar,
//   Button,
//   Container,
//   Toolbar,
//   Typography,
//   CssBaseline,
//   Grid,
// } from "@mui/material";

// export default function Home() {
//   return (
//     <>
//       <CssBaseline />
//       <Head>
//         <title>Flashcard SaaS</title>
//         <meta name="description" content="Create flashcard from your text" />
//       </Head>

//       {/* App Bar */}
//       <AppBar position="fixed" color="primary" elevation={4}>
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Flashcard SaaS
//           </Typography>
//           <SignedOut>
//             <Button color="inherit" sx={{ mr: 1 }}>
//               Login
//             </Button>
//             <Button
//               color="inherit"
//               variant="outlined"
//               sx={{ color: "#fff", borderColor: "#fff" }}
//             >
//               Sign Up
//             </Button>
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </Toolbar>
//       </AppBar>

//       <Container maxWidth="lg" sx={{ pt: 12 }}>
//         {/* Hero Section */}
//         <Box textAlign="center" mb={8}>
//           <Typography variant="h2" gutterBottom>
//             Welcome to Flashcard SaaS
//           </Typography>
//           <Typography variant="h6" color="text.secondary">
//             The easiest way to make flashcards from your text
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ mt: 4, px: 4, py: 1.5, fontSize: "1rem" }}
//           >
//             Get Started
//           </Button>
//         </Box>

//         {/* Features Section */}
//         <Box sx={{ mb: 10 }}>
//           <Typography variant="h4" gutterBottom textAlign="center">
//             Features
//           </Typography>
//           <Grid
//             container
//             spacing={3}
//             justifyContent="center"
//             alignItems="stretch"
//             wrap="nowrap" // ✅ this prevents wrapping on mid-large screens
//             sx={{ overflowX: 'auto' }} // optional: scroll on tiny viewports
//           >
//             <Grid item xs={12} sm={6} md={4}>
//               <Box
//                 sx={{
//                   p: 3,
//                   // border: "1px solid",
//                   // borderColor: "grey.300",
//                   // borderRadius: 2,
//                   textAlign: "center",
//                   height: "100%",
//                   minWidth: 260, // ✅ Ensures width constraint
//                 }}
//               >
//                 <Typography variant="h6" gutterBottom>
//                   Easy Text Input
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Simply input your text and let our software do the rest. Creating flashcards has never been easier.
//                 </Typography>
//               </Box>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <Box
//                 sx={{
//                   p: 3,
//               // border: "1px solid",
//                   // borderColor: "grey.300",
//                   // borderRadius: 2,
//                   textAlign: "center",
//                   height: "100%",
//                   minWidth: 260,
//                 }}
//               >
//                 <Typography variant="h6" gutterBottom>
//                   Smart Flashcards
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Our AI breaks down your text into concise flashcards, perfect for studying.
//                 </Typography>
//               </Box>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <Box
//                 sx={{
//                   p: 3,
//               // border: "1px solid",
//                   // borderColor: "grey.300",
//                   // borderRadius: 2,
//                   textAlign: "center",
//                   height: "100%",
//                   minWidth: 260,
//                 }}
//               >
//                 <Typography variant="h6" gutterBottom>
//                   Accessible Anywhere
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Access your flashcards from any device, at any time. Study on the go with ease.
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>


//         {/* Pricing Section */}
//         <Box sx={{ mb: 8 }}>
//           <Typography variant="h4" gutterBottom textAlign="center">
//             Pricing
//           </Typography>
//           <Grid container spacing={4} justifyContent="center">
//             <Grid item xs={12} sm={6} md={4}>
//               <Box
//                 sx={{
//                   p: 3,
//                   border: "1px solid",
//                   borderColor: "grey.300",
//                   borderRadius: 2,
//                   textAlign: "center",
//                 }}
//               >
//                 <Typography variant="h6">Basic</Typography>
//                 <Typography variant="subtitle1" gutterBottom>$5 / month</Typography>
//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                   Access to basic flashcard features and limited storage.
//                 </Typography>
//                 <Button variant="contained" color="primary">
//                   Choose Basic
//                 </Button>
//               </Box>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <Box
//                 sx={{
//                   p: 3,
//                   border: "1px solid",
//                   borderColor: "grey.300",
//                   borderRadius: 2,
//                   textAlign: "center",
//                 }}
//               >
//                 <Typography variant="h6">Pro</Typography>
//                 <Typography variant="subtitle1" gutterBottom>$10 / month</Typography>
//                 <Typography variant="body2" color="text.secondary" gutterBottom>
//                   Unlimited flashcards, AI generation, and analytics.
//                 </Typography>
//                 <Button variant="contained" color="primary">
//                   Choose Pro
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </>
//   );
// }
import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import Head from "next/head";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Box,
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  CssBaseline,
  Grid,
} from "@mui/material";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      {/* App Bar */}
      <AppBar position="fixed" color="primary" elevation={4}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" sx={{ mr: 1 }} href="/sign-in">
              Login
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              sx={{ color: "#fff", borderColor: "#fff" }}
              href="/sign-up"
            >
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ pt: 12 }}>
        {/* Hero Section */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" gutterBottom>
            Welcome to Flashcard SaaS
          </Typography>
          <Typography variant="h6" color="text.secondary">
            The easiest way to make flashcards from your text
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 4, px: 4, py: 1.5, fontSize: "1rem" }}
          >
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Features
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="stretch"
            wrap="nowrap" // ✅ this prevents wrapping on mid-large screens
            sx={{ overflowX: 'auto' }} // optional: scroll on tiny viewports
          >
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 3,
                  // border: "1px solid",
                  // borderColor: "grey.300",
                  // borderRadius: 2,
                  textAlign: "center",
                  height: "100%",
                  minWidth: 260, // ✅ Ensures width constraint
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Easy Text Input
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Simply input your text and let our software do the rest. Creating flashcards has never been easier.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 3,
              // border: "1px solid",
                  // borderColor: "grey.300",
                  // borderRadius: 2,
                  textAlign: "center",
                  height: "100%",
                  minWidth: 260,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Smart Flashcards
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our AI breaks down your text into concise flashcards, perfect for studying.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 3,
              // border: "1px solid",
                  // borderColor: "grey.300",
                  // borderRadius: 2,
                  textAlign: "center",
                  height: "100%",
                  minWidth: 260,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Accessible Anywhere
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Access your flashcards from any device, at any time. Study on the go with ease.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>


        {/* Pricing Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            Pricing
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: "grey.300",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">Basic</Typography>
                <Typography variant="subtitle1" gutterBottom>$5 / month</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Access to basic flashcard features and limited storage.
                </Typography>
                <Button variant="contained" color="primary">
                  Choose Basic
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: "grey.300",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography variant="h6">Pro</Typography>
                <Typography variant="subtitle1" gutterBottom>$10 / month</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Unlimited flashcards, AI generation, and analytics.
                </Typography>
                <Button variant="contained" color="primary">
                  Choose Pro
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
