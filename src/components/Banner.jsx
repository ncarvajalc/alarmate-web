import { Box, Button, Paper, Typography } from "@mui/material";

export default function Banner({ title, body, leftButton, rightButton }) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        width: "512px",
        padding: "16px",
        backgroundColor: "contrastLight.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          height: "100%",
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "black.main",
            fontWeight: "medium",
            fontSize: 20,

            marginBottom: "1rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          sx={{
            color: "black.main",
            textAlign: "left",
            fontSize: 14,
            marginBottom: "1rem",
          }}
        >
          {body}
        </Typography>
        <Box
          sx={{
            display: "flex",

            height: "100%",
            width: "100%",
            backgroundColor: "contrastLight.main",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "secondaryGray.main",
              marginRight: "1rem",
            }}
            onClick={leftButton.action}
          >
            {leftButton.text}
          </Button>
          <Button
            variant="text"
            sx={{
              color: "lightSecondary.main",
            }}
            onClick={rightButton.action}
          >
            {rightButton.text}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
