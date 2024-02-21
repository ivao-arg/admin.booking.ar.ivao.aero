export const Env = {
  API_HOST: process.env.REACT_APP_API_HOST || 'https://api.booking.ar.ivao.aero',
  LOGO_URL: process.env.REACT_APP_LOGO_URL || 'https://files.ar.ivao.aero/PR/tag_white.svg',
  MAIN_SYSTEM_URL: process.env.REACT_APP_MAIN_SYSTEM_URL || 'https://booking.ar.ivao.aero',
  DEV: Boolean(process.env.REACT_APP_DEV) || false,
};
