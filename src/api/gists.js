import { request } from "./request";
export const getPublicGistsApi = (page) => {
  return request.get(`gists/public?page${page}`);
};
