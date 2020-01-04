import { YOUTUBE_URL_REGEX } from "utils";

export const validateUrl = (urlText: string) => {
  return YOUTUBE_URL_REGEX.test(urlText);
};
