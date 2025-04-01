import {
  Box,
  Button,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import PropTypes from "prop-types";

import { channels } from "../constants";

const ChannelStep = ({
  selectedChannels,
  onChannelChange,
  onPrevious,
  onNext,
}) => {
  const handleToggle = (channelId) => () => {
    onChannelChange(channelId);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Selecciona uno o más canales
      </Typography>
      <FormGroup>
        {channels.map((channel) => (
          <FormControlLabel
            key={channel.id}
            control={
              <Checkbox
                checked={selectedChannels.includes(channel.id)}
                onChange={handleToggle(channel.id)}
              />
            }
            label={channel.label}
          />
        ))}
      </FormGroup>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button variant="outlined" onClick={onPrevious}>
          Anterior
        </Button>
        <Button
          variant="contained"
          onClick={onNext}
          disabled={selectedChannels.length === 0}
        >
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

ChannelStep.propTypes = {
  selectedChannels: PropTypes.array.isRequired,
  onChannelChange: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default ChannelStep;
