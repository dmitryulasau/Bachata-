import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts"; //TODO replace with our LOGO
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export default function SignInCard() {
  // ERRORS
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  // MODAL FORGOT PASSWORD
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // FORM SUBMISSION
  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // INPUT VALIDATION
  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  return (
    <Card variant="outlined">
      {/* LOGO */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <SportsMartialArtsIcon />
      </Box>
      {/* SIGN IN TITLE */}
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
      >
        Sign in
      </Typography>
      {/* SIGN IN FORM */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
      ></Box>

      {/* EMAIL */}
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          error={emailError}
          helperText={emailErrorMessage}
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          autoComplete="email"
          autoFocus
          required
          fullWidth
          variant="outlined"
          color={emailError ? "error" : "primary"}
        />
      </FormControl>

      {/* PASSWORD */}
      <FormControl>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormLabel htmlFor="password">Password</FormLabel>

          {/* FORGOT PASSWORD */}
          <Link
            component="button"
            type="button"
            onClick={handleClickOpen}
            variant="body2"
            sx={{ alignSelf: "baseline" }}
          >
            Forgot your password?
          </Link>
        </Box>

        {/* PASSWORD */}
        <TextField
          error={passwordError}
          helperText={passwordErrorMessage}
          name="password"
          placeholder="••••••"
          type="password"
          id="password"
          autoComplete="current-password"
          autoFocus
          required
          fullWidth
          variant="outlined"
          color={passwordError ? "error" : "primary"}
        />
      </FormControl>

      {/* MODAL FORGOT PASSWORD */}
      {/* <ForgotPassword open={open} handleClose={handleClose} /> */}

      {/* SIGN IN BUTTON */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={validateInputs}
      >
        Sign in
      </Button>

      {/* SIGN UP IF NO ACCOUNT */}
      <Typography sx={{ textAlign: "center" }}>
        Don&apos;t have an account?
        <span>
          <Link
            href="" //TODO: add link to sign up page
            variant="body2"
            sx={{ alignSelf: "center" }}
          >
            Sign up
          </Link>
        </span>
      </Typography>
    </Card>
  );
}
