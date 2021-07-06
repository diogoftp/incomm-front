
export const TOKEN_NAME = '@GF_TOKEN';

export function setToken(token: string) {
  localStorage.setItem(TOKEN_NAME, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN_NAME);
}

export function isAuthenticated() {
  return getToken() ? true : false;
}
