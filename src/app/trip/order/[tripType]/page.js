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
      <div className="max-w-7xl mx-auto pt-16 p-6 bg-neutral-50 rounded-lg shadow-lg grid md:grid-cols-2 gap-10 relative">
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

          <CountrySelector
            countries={countries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            field="Country"
          />

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

          <CountrySelector
            countries={countries}
            selectedCountry={selectedCountryCode}
            setSelectedCountry={setSelectedCountryCode}
            phone={phone}
            setPhone={setPhone}
            field="Phone"
          />

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
            <label className="block font-medium mb-1">
              Journey Start Date *
            </label>
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

          {tripType === "flexi" && (
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
          )}

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
    </>
  );
};

export default Order;
