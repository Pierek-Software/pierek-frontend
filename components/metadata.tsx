import { Metadata } from "next";

export const buildTitle = (title: string) => {
  return `${title} | Pierek.com`;
};

export interface BuildMetadataPayload {
  title: string;
}

export const buildMetadata = (payload: BuildMetadataPayload): Metadata => {
  return {
    title: buildTitle(payload.title),
  };
};
