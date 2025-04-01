import { Box, Typography, TextField, Button } from "@mui/material";
import PropTypes from "prop-types";

const WhatsAppStep = ({ message, onMessageChange, onPrevious, onNext }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Configurar mensaje de WhatsApp
      </Typography>
      <TextField
        label="Mensaje WhatsApp"
        multiline
        rows={4}
        fullWidth
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="outlined" onClick={onPrevious}>
          Anterior
        </Button>
        <Button variant="contained" onClick={onNext} disabled={!message.trim()}>
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

WhatsAppStep.propTypes = {
  message: PropTypes.string.isRequired,
  onMessageChange: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default WhatsAppStep;
