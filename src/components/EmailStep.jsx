import { Box, Typography, TextField, Button } from "@mui/material";
import PropTypes from "prop-types";

const EmailStep = ({
  subject,
  body,
  onSubjectChange,
  onBodyChange,
  onPrevious,
  onNext,
}) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Configurar correo electrónico
      </Typography>
      <TextField
        label="Asunto"
        fullWidth
        value={subject}
        onChange={(e) => onSubjectChange(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Cuerpo del mensaje"
        multiline
        rows={6}
        fullWidth
        value={body}
        onChange={(e) => onBodyChange(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="outlined" onClick={onPrevious}>
          Anterior
        </Button>
        <Button
          variant="contained"
          onClick={onNext}
          disabled={!subject.trim() || !body.trim()}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

EmailStep.propTypes = {
  subject: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubjectChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default EmailStep;
