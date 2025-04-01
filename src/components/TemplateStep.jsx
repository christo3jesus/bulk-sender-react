import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import PropTypes from "prop-types";

import { templates } from "../constants";

const TemplateStep = ({
  selectedTemplate,
  onTemplateChange,
  onPrevious,
  onNext,
}) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Selecciona una plantilla
      </Typography>
      <RadioGroup
        aria-labelledby="template-radio-group"
        name="template"
        value={selectedTemplate}
        onChange={(e) => onTemplateChange(e.target.value)}
      >
        {templates.map((template) => (
          <FormControlLabel
            key={template.id}
            value={template.id}
            control={<Radio />}
            label={template.label}
          />
        ))}
      </RadioGroup>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="outlined" onClick={onPrevious}>
          Anterior
        </Button>
        <Button
          variant="contained"
          onClick={onNext}
          disabled={!selectedTemplate}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

TemplateStep.propTypes = {
  selectedTemplate: PropTypes.string,
  onTemplateChange: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default TemplateStep;
