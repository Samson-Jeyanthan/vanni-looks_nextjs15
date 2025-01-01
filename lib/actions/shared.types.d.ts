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

export type TDistrictParams = {
  name: string;
  path: string;
};

export type TCityParams = {
  districtId: string;
  cityName: string;
  path: string;
};
