'use client';

import Select from "react-select";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { useEffect, useState } from "react";

countries.registerLocale(enLocale);

type CountryOption = {
  value: string;
  label: string;
};

interface CountrySelectProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
}

export default function CountrySelect({
  id,
  name,
  value,
  onChange,
  className,
  placeholder = "Select a country",
  required = false,
}: CountrySelectProps) {
  const [options, setOptions] = useState<CountryOption[]>([]);

  useEffect(() => {
    const countryObj = countries.getNames("en", { select: "official" });
    const countryList = Object.entries(countryObj).map(([code, name]) => ({
      value: code,
      label: name,
    }));
    setOptions(countryList);
  }, []);

  return (
    <div className={className}>
      <Select
        inputId={id}
        name={name}
        options={options}
        value={options.find((opt) => opt.value === value)}
        onChange={(selected) => onChange(selected?.value || "")}
        placeholder={placeholder}
        classNamePrefix="react-select"
        isSearchable
        required={required ? true : undefined} // only apply if required is true
      />
    </div>
  );
}
