import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { getCountryCallingCode } from "libphonenumber-js";

const CountrySelector = ({
  countries,
  selectedCountry,
  setSelectedCountry,
  phone,
  setPhone,
  field,
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [countryPhoneCode, setCountryPhoneCode] = useState("");
  const [tempPhone, setTempPhone] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  const dropDownRef = useRef(null);

  const selectedCountryData = countries.find(
    (country) => country.name.common === selectedCountry
  );

  const getPhoneCountryCode = (country) => {
    try {
      return `+${getCountryCallingCode(country)}`;
    } catch (error) {
      return "";
    }
  };

  useEffect(() => {
    const listenForClickOutside = (event) => {
      if (
        open &&
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target)
      ) {
        setOpen(false);
        console.log("Modal open");
      }
    };

    document.addEventListener("mousedown", listenForClickOutside);

    return () => {
      document.removeEventListener("mousedown", listenForClickOutside);
    };
  }, [open]);

  useEffect(() => {
    if (selectedCountry)
      setCountryPhoneCode(getPhoneCountryCode(selectedCountryData?.cca2));
  }, [selectedCountry]);

  useEffect(() => {
    if (tempPhone) {
      setPhone(`${countryPhoneCode}${tempPhone}`);
    }
  }, [countryPhoneCode, tempPhone]);

  return (
    <div className="relative w-full" ref={dropDownRef}>
      {field === "Country" && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">{field} *</label>

          {/* Selected Field */}
          <div
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl cursor-pointer bg-white focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-100 transition-all"
            onClick={() => setOpen(!open)}
          >
            {selectedCountry || "Select a country..."}
          </div>
        </div>
      )}

      {field === "Phone" && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone with country code *</label>
          <div className="w-full border-2 border-gray-200 rounded-xl focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-100 transition-all bg-white">
            <div className="flex items-stretch h-[50px]">
              {selectedCountryData?.flags?.png && (
                <div
                  className="border-r border-gray-200 h-full px-2.5 flex items-center gap-1 cursor-pointer self-stretch"
                  onClick={() => setOpen(!open)}
                >
                  <Image
                    alt={`Flag country ${selectedCountryData?.name?.common}`}
                    src={selectedCountryData?.flags?.png}
                    width={30}
                    height={15}
                    className="object-contain"
                  />
                  <IoIosArrowDown className="text-xl" />
                </div>
              )}
              <div className="flex items-center w-full">
                <p className="pl-3 text-gray-700">{countryPhoneCode}</p>
                <input
                  name="tel"
                  autoComplete="tel-national"
                  className="py-3 px-2 w-full outline-0 rounded-r-xl"
                  type="tel"
                  value={tempPhone}
                  onChange={(e) => setTempPhone(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 w-full bg-white border border-amber-100 rounded-xl max-h-60 shadow-lg overflow-hidden">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-3 border-b border-amber-100 absolute top-0 left-0 bg-amber-50 outline-none"
            />
            <div className="overflow-y-auto max-h-60 pt-11">
              {/* Country List */}
              {filteredCountries.map((country) => {
                return (
                  <div
                    key={country.cca2}
                    onClick={() => {
                      setSelectedCountry(country.name.common);
                      setQuery("");
                      setOpen(false);
                    }}
                    className="p-3 hover:bg-amber-50 cursor-pointer flex items-center gap-3"
                  >
                    <Image
                      alt={`Flag country ${country.name.common}`}
                      src={country.flags.png}
                      width={25}
                      height={15}
                      className="object-contain"
                    />
                    {country.name.common}
                    {field === "Phone" && (
                      <p className="text-neutral-600">
                        {(() => {
                          try {
                            return `+${getCountryCallingCode(country.cca2)}`;
                          } catch (error) {
                            return ""; // or "N/A"
                          }
                        })()}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {filteredCountries.length === 0 && (
              <div className="p-2 text-gray-500">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
