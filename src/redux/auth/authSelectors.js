export const isLoggined = (state) => state.logginedService.serviceInfo.id;
export const serviceName = (state) => {
  const email = state.logginedService.serviceInfo.email;
  const login = email ? email.split('@')[0] : 'anonymous';
  return login;
};
