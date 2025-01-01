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
  _id?: string;
  name: string;
  path: string;
};

export type TCityParams = {
  _id?: string;
  districtId: string;
  cityName: string;
  path: string;
};

export type TDeleteParams = {
  _id: string;
  path: string;
};
