import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import ApplicantsStep from "./components/ApplicantsStep";
import TemplateStep from "./components/TemplateStep";
import ChannelStep from "./components/ChannelStep";
import SmsStep from "./components/SmsStep";
import EmailStep from "./components/EmailStep";
import WhatsAppStep from "./components/WhatsAppStep";
import SummaryStep from "./components/SummaryStep";
import { applicants, templates, channels, steps } from "./constants";

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedApplicants, setSelectedApplicants] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [currentChannelIndex, setCurrentChannelIndex] = useState(0);

  const [communications, setCommunications] = useState({
    sms: "",
    email: { subject: "", body: "" },
    whatsapp: "",
  });

  const resetAll = () => {
    setActiveStep(0);
    setSelectedApplicants([]);
    setSelectedTemplate("");
    setSelectedChannels([]);
    setCurrentChannelIndex(0);
    setCommunications({
      sms: "",
      email: { subject: "", body: "" },
      whatsapp: "",
    });
  };

  const handleNext = () => {
    if (activeStep === 2 && selectedTemplate) {
      const template = templates.find((t) => t.id === selectedTemplate);
      if (template) {
        setCommunications({
          sms: template.sms,
          email: { ...template.email },
          whatsapp: template.whatsapp,
        });
      }
    }

    if (activeStep === 3) {
      if (currentChannelIndex < selectedChannels.length - 1) {
        setCurrentChannelIndex((prev) => prev + 1);
        return;
      } else {
        setActiveStep(4);
        return;
      }
    }

    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep === 3) {
      if (currentChannelIndex > 0) {
        setCurrentChannelIndex((prev) => prev - 1);
        return;
      } else {
        setActiveStep(2);
        return;
      }
    }

    setActiveStep((prev) => prev - 1);
  };

  const handleApplicantSelection = (applicantId) => {
    setSelectedApplicants((prev) =>
      prev.includes(applicantId)
        ? prev.filter((id) => id !== applicantId)
        : [...prev, applicantId]
    );
  };

  const handleChannelSelection = (channelId) => {
    setSelectedChannels((prev) =>
      prev.includes(channelId)
        ? prev.filter((id) => id !== channelId)
        : [...prev, channelId]
    );
  };

  const handleSmsChange = (message) => {
    setCommunications((prev) => ({
      ...prev,
      sms: message,
    }));
  };

  const handleEmailChange = (field, value) => {
    setCommunications((prev) => ({
      ...prev,
      email: {
        ...prev.email,
        [field]: value,
      },
    }));
  };

  const handleWhatsAppChange = (message) => {
    setCommunications((prev) => ({
      ...prev,
      whatsapp: message,
    }));
  };

  const handleFinish = () => {
    const selectedApplicantData = applicants.filter((a) =>
      selectedApplicants.includes(a.id)
    );

    const requestBody = {
      candidates: selectedApplicantData,
      communications: {
        ...(selectedChannels.includes("sms") && { sms: communications.sms }),
        ...(selectedChannels.includes("email") && {
          email: communications.email,
        }),
        ...(selectedChannels.includes("whatsapp") && {
          whatsapp: communications.whatsapp,
        }),
      },
    };

    console.log(
      "Request body to backend:",
      // JSON.stringify(requestBody, null, 2),
      requestBody
    );
    alert("Mensajes enviados correctamente");

    resetAll();
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <ApplicantsStep
            selectedApplicants={selectedApplicants}
            onSelectionChange={handleApplicantSelection}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <TemplateStep
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
            onPrevious={handleBack}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <ChannelStep
            selectedChannels={selectedChannels}
            onChannelChange={handleChannelSelection}
            onPrevious={handleBack}
            onNext={handleNext}
          />
        );
      case 3: {
        const currentChannel = selectedChannels[currentChannelIndex];
        switch (currentChannel) {
          case "sms":
            return (
              <SmsStep
                message={communications.sms}
                onMessageChange={handleSmsChange}
                onPrevious={handleBack}
                onNext={handleNext}
              />
            );
          case "email":
            return (
              <EmailStep
                subject={communications.email.subject}
                body={communications.email.body}
                onSubjectChange={(value) => handleEmailChange("subject", value)}
                onBodyChange={(value) => handleEmailChange("body", value)}
                onPrevious={handleBack}
                onNext={handleNext}
              />
            );
          case "whatsapp":
            return (
              <WhatsAppStep
                message={communications.whatsapp}
                onMessageChange={handleWhatsAppChange}
                onPrevious={handleBack}
                onNext={handleNext}
              />
            );
          default:
            return null;
        }
      }
      case 4:
        return (
          <SummaryStep
            selectedApplicants={selectedApplicants}
            selectedTemplate={selectedTemplate}
            selectedChannels={selectedChannels}
            communications={communications}
            onPrevious={handleBack}
            onFinish={handleFinish}
          />
        );
      default:
        return null;
    }
  };

  const getActiveStepLabel = () => {
    if (activeStep === 3) {
      const currentChannel = selectedChannels[currentChannelIndex];
      const channelLabel =
        channels.find((c) => c.id === currentChannel)?.label || "";
      return `Configurar ${channelLabel}`;
    }
    return steps[activeStep];
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Gestión de Postulantes</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ my: 4 }}>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                {index === 3 && activeStep === 3 ? getActiveStepLabel() : label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {renderStep()}
      </Container>
    </>
  );
};

export default App;
