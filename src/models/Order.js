import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    names: { type: String, required: true },
    paymentMethod: {
      type: String,
      enum: ["payPal", "card"],
      default: "bank",
    },

    selectedCountry: { type: String, required: true },
    address: { type: String, required: true },
    town: { type: String, required: true },
    postCode: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },

    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },

    pickupPoint: { type: String },
    pickupAddress: { type: String },
    departureTime: { type: String },

    tripDuration: { type: String },
    numberPassenger: { type: String },

    daysTrip: { type: Number }, // derived
    passengersCount: { type: Number }, // derived
    tukTuksNeeded: { type: Number }, // derived
    priceVehicleDay: { type: Number }, // from .env
    priceTotalTrip: { type: Number }, // derived
    paid: { type: Boolean, default: false },

    stripePaymentIntentId: { type: String },
    stripeChargeId: { type: String },
    stripeSessionId: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
