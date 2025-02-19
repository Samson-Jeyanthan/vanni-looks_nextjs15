import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Converting date to format like 2024 Dec 31
export const getConvertedDate = (date: Date): string => {
  // Extract the year, month, and day from the Date object
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" }); // Use short month format (e.g., "Dec")
  const year = date.getFullYear();

  // Create the formatted date string (e.g., "2024 Dec 31")
  const formattedDate = `${year} ${month} ${day}`;

  return formattedDate;
};

// getting date format like 2024 Jan 01
export function getFormattedDate(date: string | null): string {
  if (!date) {
    return "";
  }
  const dt = new Date(date);

  if (isNaN(dt.getTime())) {
    throw new Error("Invalid date format");
  }

  const year = dt.getUTCFullYear();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[dt.getUTCMonth()]; // Get the month name from the array
  const day = dt.getUTCDate().toString().padStart(2, "0");

  return `${year} ${month} ${day}`;
}

// filter function for url query params
interface IUrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export const formUrlQuery = ({ params, key, value }: IUrlQueryParams) => {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

interface IRemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: IRemoveUrlQueryParams) => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

export const getSinceYear = (date: Date): string => {
  // Extract the year from the Date object
  const year = date.getFullYear();

  const sinceYear = `${year}`;

  return sinceYear;
};
