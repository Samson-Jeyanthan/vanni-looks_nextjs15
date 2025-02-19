"use client";

type Props = {
  districtData?: string;
  citiesData?: string;
  selectedDistrict?: string;
};

const DistrictsFilters = ({
  districtData,
  citiesData,
  selectedDistrict,
}: Props) => {
  const parsedDistrictData: any[] =
    districtData && JSON.parse(districtData || "");
  return (
    <div className="w-56 flex flex-col gap-1 mt-6">
      <p className="text-md font-semibold my-2">Districts</p>

      {parsedDistrictData?.map((district, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-3 rounded-md hover:bg-light-750 p-2 capitalize text-sm cursor-pointer"
          >
            {district.name}
          </div>
        );
      })}
    </div>
  );
};

export default DistrictsFilters;
