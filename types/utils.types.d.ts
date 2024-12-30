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
  mediaType: string;
  mediaURL: string;
  thumbnailURL: string;
}
