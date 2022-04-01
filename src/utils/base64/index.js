import { Buffer } from "buffer";

export const encodeBase64 = (string) => {
  return Buffer.from(string).toString("base64");
};

export const decodeBase64 = (base64String) => {
  return Buffer.from(base64String, "base64").toString("ascii");
};
