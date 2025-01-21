"use client";

import useDateSelector, {
  convertToISOString,
  formatISOStringDate,
} from "@/lib/hooks/useDateSelector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";

type Props = {
  formLabel?: string;
  formDescription?: string;
  isoDate?: string;
  fieldChange: (value: string) => void;
};

const DateInput = ({
  formLabel,
  formDescription,
  fieldChange,
  isoDate,
}: Props) => {
  const { year, month, day } = formatISOStringDate(isoDate);

  const [dates, setDates] = useState({
    selectedYear: String(year) || "",
    selectedMonth: String(month) || "",
    selectedDay: String(day) || "",
  });
  const { years, months, days } = useDateSelector({
    yearValue: dates.selectedYear,
    monthValue: Number(dates.selectedMonth),
    dayValue: dates.selectedDay,
  });

  const handleDropdownChange = () => {
    const convertedDate = convertToISOString(
      dates.selectedYear,
      dates.selectedMonth,
      dates.selectedDay
    );
    fieldChange(convertedDate);
  };

  useEffect(() => {
    if (
      dates.selectedYear !== "" &&
      dates.selectedMonth !== "" &&
      dates.selectedDay !== ""
    ) {
      handleDropdownChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates]);

  return (
    <div className="flex w-full flex-col gap-2">
      {formLabel && <p className="text-sm font-medium">{formLabel}</p>}
      <div className="flex-center w-full gap-4">
        <Select
          onValueChange={(id: string) => {
            setDates({
              ...dates,
              selectedYear: id,
            });
          }}
        >
          <SelectTrigger className="flex-between bg-light-800">
            {years?.find(
              (year) => Number(year.id) === Number(dates.selectedYear)
            )?.label || <SelectValue />}
            {!dates.selectedYear && (
              <p className="flex w-full items-start text-light-500">Year</p>
            )}
          </SelectTrigger>
          <SelectContent className="no-focus text-light-100 border border-solid border-light-700 bg-light-800 text-sm">
            {years.map((option, index) => (
              <SelectItem
                key={index}
                value={String(option.id)}
                className="cursor-pointer capitalize hover:bg-light-700"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(id: string) => {
            setDates({
              ...dates,
              selectedMonth: id,
            });
          }}
        >
          <SelectTrigger className="flex-between bg-light-800">
            {months?.find(
              (month) => Number(month.id) === Number(dates.selectedMonth)
            )?.label || <SelectValue />}
            {!dates.selectedMonth && (
              <p className="flex w-full items-start text-light-500">Month</p>
            )}
          </SelectTrigger>
          <SelectContent className="no-focus text-light-100 border border-solid border-light-700 bg-light-800 text-sm">
            {months.map((option, index) => (
              <SelectItem
                key={index}
                value={String(option.id)}
                className="cursor-pointer capitalize hover:bg-light-700"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          onValueChange={(id: any) => {
            setDates({
              ...dates,
              selectedDay: id,
            });
          }}
        >
          <SelectTrigger className="flex-between bg-light-800">
            {days?.find((day) => day.id === dates.selectedDay)?.label || (
              <SelectValue />
            )}
            {!dates.selectedDay && (
              <p className="flex w-full items-start text-light-500">Day</p>
            )}
          </SelectTrigger>
          {days.length > 0 && (
            <SelectContent className="no-focus text-light-100 border border-solid border-light-700 bg-light-800 text-sm">
              {days.map((option, index) => (
                <SelectItem
                  key={index}
                  value={option.id}
                  className="cursor-pointer capitalize hover:bg-light-700"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          )}
        </Select>
      </div>
    </div>
  );
};

export default DateInput;
