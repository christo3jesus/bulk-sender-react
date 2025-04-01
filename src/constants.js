export const applicants = [
  {
    id: 1,
    name: "Elon Musk",
    email: "elon@spacex.com",
    phone: "987654321",
    avatar: "EM",
  },
  {
    id: 2,
    name: "Bill Gates",
    email: "bill@microsoft.com",
    phone: "876543210",
    avatar: "BG",
  },
  {
    id: 3,
    name: "Jeff Bezos",
    email: "jeff@amazon.com",
    phone: "765432109",
    avatar: "JB",
  },
  {
    id: 4,
    name: "Mark Zuckerberg",
    email: "mark@meta.com",
    phone: "654321098",
    avatar: "MZ",
  },
];

export const templates = [
  {
    id: "invitation",
    label: "Invitación al proceso",
    sms: "Hola {name}, te invitamos a participar en el proceso de {process_name} que se llevará a cabo el {date} a las {time}. Por favor, confirma tu asistencia respondiendo a este mensaje. ¡Te esperamos!",
    email: {
      subject: "Invitación al proceso de {process_name}",
      body: "Estimado/a {name},\n\nEsperamos que te encuentres bien. A través de este medio, queremos invitarte a participar en el proceso de {process_name}, que se llevará a cabo el {date} a las {time}. El lugar del encuentro será {location}.\n\nTu participación es muy importante para nosotros. Agradeceríamos que confirmes tu asistencia respondiendo a este correo.\n\nQuedamos atentos a cualquier consulta que puedas tener.\n\nCordialmente,\n{sender_name}\n{sender_position}\n{company}",
    },
    whatsapp:
      "Hola {name}, te invitamos a participar en el proceso de {process_name} que se llevará a cabo el {date} a las {time}. Por favor, confirma tu asistencia respondiendo a este mensaje. ¡Te esperamos!",
  },
  {
    id: "reminder",
    label: "Recordatorio del proceso",
    sms: "Hola {name}, te recordamos que el proceso de {process_name} al que confirmaste tu asistencia se realizará el {date} a las {time}. ¡Te esperamos puntual!",
    email: {
      subject: "Recordatorio del proceso de {process_name}",
      body: "Estimado/a {name},\n\nQueremos recordarte que el proceso de {process_name}, al que amablemente confirmaste tu asistencia, se realizará el {date} a las {time}.\n\nEl evento tendrá lugar en {location}. Si tienes alguna duda o necesitas asistencia previa, no dudes en contactarnos.\n\nTe esperamos puntual.\n\nSaludos cordiales,\n{sender_name}\n{sender_position}\n{company}",
    },
    whatsapp:
      "Hola {name}, te recordamos que el proceso de {process_name} al que confirmaste tu asistencia se realizará el {date} a las {time}. ¡Te esperamos puntual!",
  },
  {
    id: "custom",
    label: "Mensaje personalizado",
    sms: "",
    email: {
      subject: "",
      body: "",
    },
    whatsapp: "",
  },
];

export const channels = [
  { id: "sms", label: "SMS", component: "SmsStep" },
  { id: "email", label: "Correo electrónico", component: "EmailStep" },
  { id: "whatsapp", label: "WhatsApp", component: "WhatsAppStep" },
];

export const steps = [
  "Seleccionar postulantes",
  "Elegir plantilla",
  "Seleccionar canal(es)",
  "Configurar mensajes",
  "Confirmar",
];
