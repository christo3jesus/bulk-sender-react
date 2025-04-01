import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

import { applicants } from "../constants";

const SummaryStep = ({
  selectedApplicants,
  selectedChannels,
  communications,
  onPrevious,
  onFinish,
}) => {
  const selectedApplicantNames = applicants
    .filter((a) => selectedApplicants.includes(a.id))
    .map((a) => a.name);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Resumen de la acción
      </Typography>

      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Postulantes seleccionados:</strong>
          </Typography>
          <List dense>
            {selectedApplicantNames.map((name) => (
              <ListItem key={name}>
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle1" gutterBottom>
            <strong>Canales y mensajes:</strong>
          </Typography>

          {selectedChannels.includes("sms") && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                SMS:
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {communications.sms}
              </Typography>
            </Box>
          )}

          {selectedChannels.includes("email") && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Correo electrónico:
              </Typography>
              <Typography variant="subtitle2">
                Asunto: {communications.email.subject}
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {communications.email.body}
              </Typography>
            </Box>
          )}

          {selectedChannels.includes("whatsapp") && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                WhatsApp:
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {communications.whatsapp}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="outlined" onClick={onPrevious}>
          Anterior
        </Button>
        <Button variant="contained" onClick={onFinish}>
          Enviar mensajes
        </Button>
      </Box>
    </Box>
  );
};

SummaryStep.propTypes = {
  selectedApplicants: PropTypes.array.isRequired,
  selectedTemplate: PropTypes.string.isRequired,
  selectedChannels: PropTypes.array.isRequired,
  communications: PropTypes.shape({
    sms: PropTypes.string,
    email: PropTypes.shape({
      subject: PropTypes.string,
      body: PropTypes.string,
    }),
    whatsapp: PropTypes.string,
  }).isRequired,
  onPrevious: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
};

export default SummaryStep;
