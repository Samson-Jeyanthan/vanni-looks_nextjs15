export type TConvertedSvgJsxProps = {
  height?: string;
  width?: string;
  fill?: string;
};

export type TCategoryProps = {
  title: string;
  icon: string;
};

export type TURLProps = {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
};

export interface ISearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface IParamsProps {
  params: { id: string };
}

export interface IMediaProps {
  mediaType: "image" | "video" | "audio" | "pdf" | "svg" | "youtube-url";
  mediaURL: string;
  thumbnailURL: string;
}

export type TSocialLinksProps = {
  name:
    | "FACEBOOK"
    | "TWITTER"
    | "INSTAGRAM"
    | "LINKEDIN"
    | "GITHUB"
    | "YOUTUBE"
    | "PORTFOLIO"
    | "OTHER";
  url: string;
};

export type TPhoneProps = {
  number: string;
  type: "LANDLINE" | "MOBILE" | "FAX" | "WHATSAPP";
};
