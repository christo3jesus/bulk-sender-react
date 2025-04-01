import { Stepper, Step, StepLabel } from "@mui/material";
import PropTypes from "prop-types";

import { steps } from "../constants";

const StepperNavigation = ({ activeStep }) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel sx={{ my: 4 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

StepperNavigation.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default StepperNavigation;
