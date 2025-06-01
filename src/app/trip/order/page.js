"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

const today = new Date();
today.setHours(0, 0, 0, 0);

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

const theDayAfter = new Date();
theDayAfter.setDate(theDayAfter.getDate() + 2);
theDayAfter.setHours(0, 0, 0, 0);

const Order = () => {
  const [names, setNames] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(theDayAfter);
  const [endDate, setEndDate] = useState(theDayAfter);
  const [pickupPoint, setPickupPoint] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [tripDuration, setTripDuration] = useState("");
  const [numberPassenger, setNumberPassengers] = useState("1 passenger");

  const daysTrip = Number(tripDuration.split(" ")[0]) || 1;
  const passengersCount = Number(numberPassenger.split(" ")[0]);
  const tukTuksNeeded = Math.ceil(passengersCount / 2) || 1;
  const priceVehicleDay = Number(process.env.NEXT_PUBLIC_TUK_TUK_PRICE_DAY);
  const priceToatalTrip = tukTuksNeeded * priceVehicleDay * daysTrip;

  useEffect(() => {
    if (startDate) {
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + daysTrip - 1);
      console.log(endDate);
      setEndDate(endDate);
    }
  }, [daysTrip, startDate]);

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countries = await res.json();

      const sorted = countries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(countries);
      // console.log(sorted);
    };
    getCountries();
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-16 p-6 bg-white rounded-lg shadow-lg grid md:grid-cols-2 gap-10 relative">
      {/* Left Side - Form Fields */}
      <form className="space-y-4">
        <h2 className="text-4xl font-semibold mb-4">Product Order Form</h2>

        <div>
          <label className="block font-medium">Two Names *</label>
          <input
            value={names}
            onChange={(e) => setNames(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Your Names"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Country *</label>
          <select
            className="w-full p-2.5 border rounded cursor-pointer"
            required
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Select a country...</option>
            {countries.map((country, i) => (
              <option key={country.cca2}>{country.name.common}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium">Street Address *</label>
          <input
            className="w-full p-2 border rounded mb-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="House number and street name, apartment, etc..."
            required
          />
        </div>

        <div>
          <label className="block font-medium">Town / City *</label>
          <input
            className="w-full p-2 border rounded"
            value={town}
            onChange={(e) => setTown(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Postcode / ZIP *</label>
          <input
            className="w-full p-2 border rounded"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Phone with country code *</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Email Address *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Journey Start Date *</label>
          <Calendar
            onChange={setStartDate}
            value={startDate}
            className="rounded border"
            tileDisabled={({ date }) => {
              const d = new Date(date);
              d.setHours(0, 0, 0, 0);
              return d <= tomorrow; // disables today, tomorrow, and any past date
            }}
          />
          <p className="mt-2 text-sm text-gray-600">
            Your trip starts on: {startDate.toDateString()}
          </p>
        </div>

        <div>
          <label className="block font-medium">Trip duration</label>
          <select
            className="w-full p-3 border rounded"
            value={tripDuration}
            onChange={(e) => setTripDuration(e.target.value)}
          >
            {Array.from({ length: 30 }).map((_, i) => {
              const days = (1 + i).toString();

              return (
                <option key={i}>
                  {days} {days === "1" ? "day" : "days"}
                </option>
              );
            })}
          </select>
          <p className="mt-2 text-sm text-gray-600">
            Last Day of your Journey -{" "}
            {endDate.toDateString() || startDate.toDateString()}
          </p>
        </div>

        <div>
          <label className="block font-medium">Number of Passengers</label>
          <select
            className="w-full p-3 border rounded"
            value={numberPassenger}
            onChange={(e) => setNumberPassengers(e.target.value)}
          >
            {Array.from({ length: 10 }).map((_, i) => {
              const passenger = (1 + i).toString();

              return (
                <option key={i}>
                  {passenger} {passenger === "1" ? "passenger" : "passengers"}
                </option>
              );
            })}
          </select>
          <p className="mt-2 text-sm text-gray-600">
            Max two passengers per vehicle
          </p>
        </div>

        <div>
          <label className="block font-medium">Pickup Area *</label>
          <select
            className="w-full p-3 border rounded"
            value={pickupPoint}
            onChange={(e) => setPickupPoint(e.target.value)}
          >
            <option>Colombo City (free)</option>
            <option>Colombo Airport (free)</option>
            <option>Kandy (free)</option>
            <option>Ella (free)</option>
            <option>Nuwara Eliya (free)</option>
            <option>Galle (extra €20)</option>
            <option>Unawatuna (extra €20)</option>
            <option>Mirissa (extra €20)</option>
            <option>Hikkaduwa (extra €20)</option>
            <option>Sigiriya (extra €20)</option>
            <option>Dambulla (extra €20)</option>
            <option>Negombo (extra €20)</option>
            <option>Arugam Bay (extra €20)</option>
          </select>
        </div>

        {pickupPoint !== "Colombo Airport" && (
          <div>
            <label className="block font-medium">Pickup Address in</label>
            <input
              type="text"
              placeholder="Add pickup point"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        <div>
          <label className="block font-medium">Pickup Time *</label>
          <select className="w-full p-3 border rounded">
            {Array.from({ length: (22 - 4) * 2 + 1 }).map((_, i) => {
              const hour = 4 + Math.floor(i / 2);
              const minutes = i % 2 === 0 ? "00" : "30";
              const time = `${hour.toString().padStart(2, "0")}:${minutes}`;
              return <option key={time}>{time}</option>;
            })}
          </select>
        </div>
      </form>

      {/* Right Side - Order Summary */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-inner md:fixed top-16 left-1/2 xl:ml-8 transform  w-full xl:max-w-xl lg:max-w-lg md:max-w-[370px]">
        <h3 className="text-xl font-semibold mb-4">Trip Summary</h3>

        <div className="space-y-2 border-b pb-4  text-gray-800">
          <div className="flex justify-between">
            <span>Name</span>
            <span>{names || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span>Passengers</span>
            <span>{passengersCount || 1}</span>
          </div>
          <div className="flex justify-between">
            <span>Tuk Tuks Needed</span>
            <span>{tukTuksNeeded}</span>
          </div>
          <div className="flex justify-between">
            <span>Trip Duration</span>
            <span>{daysTrip} days</span>
          </div>
          <div className="flex justify-between">
            <span>Start Date</span>
            <span>{startDate?.toDateString?.() || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span>End Date</span>
            <span>{endDate?.toDateString?.() || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span>Pickup</span>
            <span>{pickupPoint || "—"}</span>
          </div>
          {pickupPoint !== "Colombo Airport" && (
            <div className="flex justify-between">
              <span>Pickup Address</span>
              <span>{pickupAddress || "—"}</span>
            </div>
          )}
          <div className="w-full h-[1px] bg-primary-900 my-3" />

          <div className="flex justify-between flex-col w-full">
            <span>Subtotal:</span>
            <div className="flex justify-between">
              <span>
                <strong>{tukTuksNeeded || 1}</strong>{" "}
                {tukTuksNeeded === 1 ? "tuk tuk" : "tuk tuks"} X{" "}
                <strong>{daysTrip || 1}</strong>{" "}
                {daysTrip === 1 ? "day" : "days"}
              </span>
              <span>${priceToatalTrip.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Extras - {"none"}</span>
              <span>${priceToatalTrip.toFixed(2)}</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-primary-900 my-3" />
          <div className="flex justify-between font-semibold">
            <span>Total Price</span>
            <span>${priceToatalTrip.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <p className="font-semibold text-gray-700">Payment Method:</p>
          <p className="text-green-700 capitalize">{paymentMethod}</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
