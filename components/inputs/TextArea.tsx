"use client";

import { cn } from "@/lib/utils";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

interface Props {
  form: any;
  inputName: string;
  formLabel: string;
  formDescription?: string;
  maxLength: number;
  customClassName?: string;
  placeholder?: string;
}

const TextArea = ({
  form,
  inputName,
  formLabel,
  formDescription,
  maxLength,
  customClassName,
  placeholder,
}: Props) => {
  return (
    <FormField
      control={form.control}
      name={inputName}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col pt-[3px]">
          <FormLabel className="text-dark-100_light-850 mb-1.5">
            {formLabel}
          </FormLabel>
          <FormControl>
            <Textarea
              {...field}
              className={cn(
                "no-focus text-black h-40 resize-none border border-solid border-light-700 bg-light-800 text-sm placeholder:text-light-500",
                customClassName
              )}
              maxLength={maxLength}
              placeholder={placeholder}
            />
          </FormControl>
          {formDescription && (
            <FormDescription className="mt-2 text-xs text-light-500">
              {formDescription}
            </FormDescription>
          )}
          <FormMessage className="text-xs text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default TextArea;
