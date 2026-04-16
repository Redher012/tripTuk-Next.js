"use client";
import CountrySelector from "@/app/components/Orders/CountrySelector";
import PaymentSelector from "@/app/components/Orders/PaymentSelector";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import { toast } from "react-toastify";

const today = new Date();
today.setHours(0, 0, 0, 0);

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

const theDayAfter = new Date();
theDayAfter.setDate(theDayAfter.getDate() + 2);
theDayAfter.setHours(0, 0, 0, 0);

const Order = () => {
  const params = useParams();
  const tripType = params.tripType;

  const [names, setNames] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
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
  const [tripDuration, setTripDuration] = useState(
    tripType !== "flexi" ? tripType : "1"
  );

  const [numberPassenger, setNumberPassengers] = useState("1 passenger");
  // const [orderId, setOrderId] = useState("");
  const orderId = useRef(null);

  const daysTrip = Number(tripDuration.split(" ")[0]) || 1;
  const passengersCount = Number(numberPassenger.split(" ")[0]);
  const tukTuksNeeded = Math.ceil(passengersCount / 2) || 1;
  const priceVehicleDay = Number(process.env.NEXT_PUBLIC_TUK_TUK_PRICE_DAY);
  const priceTotalTrip = tukTuksNeeded * priceVehicleDay * daysTrip;

  useEffect(() => {
    if (startDate) {
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + daysTrip - 1);
      setEndDate(endDate);
    }
  }, [daysTrip, startDate]);

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca2,idd,flags"
      );
      const countries = await res.json();

      const sortedCountries = countries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sortedCountries);
    };
    getCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setSelectedCountryCode(selectedCountry);
    }
  }, [selectedCountry]);

  const createOrderAndGetId = async function () {
    if (
      !names ||
      !address ||
      !selectedCountry ||
      !town ||
      !postCode ||
      !phone ||
      !email
    ) {
      toast.error("All required fields must be filled.");
      return;
    }

    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        names,
        paymentMethod,
        selectedCountry,
        address,
        town,
        postCode,
        phone,
        email,
        startDate,
        endDate,
        pickupPoint,
        pickupAddress,
        departureTime,
        tripDuration,
        numberPassenger,
        daysTrip,
        passengersCount,
        tukTuksNeeded,
        priceVehicleDay,
        priceTotalTrip,
      }),
    });

    const dataCreation = await res.json();

    if (!res.ok || !dataCreation.order?._id) {
      toast.error("Order creation failed");
      return;
    }

    // Send email for created order;
    const orderData = dataCreation.order;
    try {
      const res = await fetch("/api/emails/send-order-confirmation", {
        method: "POST",
        body: JSON.stringify(orderData),
      });
      const dataEmail = await res.json();
      console.log("Data form client", dataEmail);
    } catch (err) {
      console.error("Error sending a message");
    }

    return {
      orderId: dataCreation.order._id,
      email,
    };
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/40 py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Adventure</h1>
            <p className="text-xl text-gray-600">
              {tripType === "flexi" ? "Flexible Trip With Tuk Tuk and Driver" : `${tripType} Day Trip With Tuk Tuk and Driver`}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <form className="space-y-6 lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-amber-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Information</h2>

          <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Two Names *</label>
            <input
              name="name"
              autoComplete="name"
              value={names}
              onChange={(e) => setNames(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
              placeholder="Your Names"
              required
            />
          </div>

          <CountrySelector
            countries={countries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            field="Country"
          />

          <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address *</label>
            <input
              name="street-address"
              autoComplete="street-address"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all mb-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="House number and street name, apartment, etc..."
              required
            />
          </div>

          <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Town / City *</label>
            <input
              name="address-level2"
              autoComplete="address-level2"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
              value={town}
              onChange={(e) => setTown(e.target.value)}
              required
            />
          </div>

          <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Postcode / ZIP *</label>
            <input
              name="postal-code"
              autoComplete="postal-code"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
              required
            />
          </div>

          <CountrySelector
            countries={countries}
            selectedCountry={selectedCountryCode}
            setSelectedCountry={setSelectedCountryCode}
            phone={phone}
            setPhone={setPhone}
            field="Phone"
          />

          <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
              required
            />
          </div>

              <div className="h-px bg-gradient-to-r from-amber-200 via-amber-400 to-orange-200 my-8" />
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Details</h2>

          <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
              Journey Start Date *
            </label>
            <Calendar
              onChange={setStartDate}
              value={startDate}
                  className="rounded-xl border-2 border-gray-200 p-3"
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

          {tripType === "flexi" && (
            <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Trip duration</label>
              <select
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
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
          )}

          <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Passengers</label>
            <select
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Area *</label>
            <select
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
              value={pickupPoint}
              onChange={(e) => setPickupPoint(e.target.value)}
            >
              <option>Colombo City (free)</option>
              <option>Colombo Airport (free)</option>
              {tripType === "flexi" && (
                <>
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
                  <option>Arugam Bay (extra €20)</option>{" "}
                </>
              )}
            </select>
          </div>

          {pickupPoint !== "Colombo Airport" && (
            <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Address in</label>
              <input
                type="text"
                name="pickup-address"
                autoComplete="address-line1"
                placeholder="Add pickup point"
                value={pickupAddress}
                onChange={(e) => setPickupAddress(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                required
              />
            </div>
          )}

          <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Time *</label>
                <select
                  name="pickup-time"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                  value={departureTime}
                  onChange={(e) => setDepartureTime(e.target.value)}
                >
              {Array.from({ length: (22 - 4) * 2 + 1 }).map((_, i) => {
                const hour = 4 + Math.floor(i / 2);
                const minutes = i % 2 === 0 ? "00" : "30";
                const time = `${hour.toString().padStart(2, "0")}:${minutes}`;
                return <option key={time}>{time}</option>;
              })}
            </select>
          </div>
            </form>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-3xl shadow-xl p-8 border border-amber-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Trip Summary</h3>

          {/* border-b pb-4  */}
          <div className="space-y-2 text-gray-800">
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
                <span>${priceTotalTrip.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Extras - {"none"}</span>
                <span>${priceTotalTrip.toFixed(2)}</span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-primary-900 my-3" />
            <div className="flex justify-between font-semibold">
              <span>Total Price</span>
              <span>${priceTotalTrip.toFixed(2)}</span>
            </div>
          </div>
                <PaymentSelector
                  tripPrice={priceTotalTrip}
                  getOrderDetails={createOrderAndGetId}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
