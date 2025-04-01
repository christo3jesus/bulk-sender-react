import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Avatar,
} from "@mui/material";
import PropTypes from "prop-types";

import { applicants } from "../constants";

const ApplicantsStep = ({ selectedApplicants, onSelectionChange, onNext }) => {
  const handleToggle = (applicantId) => () => {
    onSelectionChange(applicantId);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Selecciona los postulantes
      </Typography>
      <List dense>
        {applicants.map((applicant) => (
          <ListItem key={applicant.id} disablePadding>
            <ListItemButton onClick={handleToggle(applicant.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={selectedApplicants.includes(applicant.id)}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemAvatar>
                <Avatar>{applicant.avatar}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={applicant.name}
                secondary={`${applicant.email} · ${applicant.phone}`}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button
          variant="contained"
          onClick={onNext}
          disabled={selectedApplicants.length === 0}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

ApplicantsStep.propTypes = {
  selectedApplicants: PropTypes.array.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default ApplicantsStep;
