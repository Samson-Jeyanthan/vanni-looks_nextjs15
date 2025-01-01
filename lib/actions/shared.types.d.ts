export type TMainCategoryParams = {
  title: string;
  icon?: IMediaProps;
  path: string;
};

export type TSubCategoryParams = {
  title: string;
  mainCategoryId: string;
  path: string;
};
