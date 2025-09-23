"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const ModalCancelOrder = ({ orderId, paidWith }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);

  const router = useRouter();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const closeOnClickOutsite = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("click", closeOnClickOutsite);
    }
    return () => {
      document.removeEventListener("click", closeOnClickOutsite);
    };
  }, [isModalOpen]);

  const handleCancelReservation = async () => {
    const res = await fetch("/api/order/cancel-stripe-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Order canceled and refunded");
      router.push("/my-orders");
    } else {
      toast.error("Error:", data.error);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-red-400 py-1 px-3 rounded-lg cursor-pointer  hover:bg-red-700"
      >
        Cancel Order
      </button>
      {isModalOpen && (
        <div className="fixed left-0 top-0 w-screen h-screen bg-neutral-900/70 flex items-center justify-center px-4">
          <div
            className="bg-neutral-050 text-neutral-900 p-5 flex flex-col gap-5 rounded-xl"
            ref={modalRef}
          >
            <div className="flex justify-between text-2xl">
              <h3 className="font-semibold">Confirm Order Cancelation</h3>
              <div
                onClick={handleCloseModal}
                className="cursor-pointer hover:text-primary-800"
              >
                <IoClose className="text-3xl" />
              </div>
            </div>
            <p>
              Are you sure you want to cancel the reservation. That's possible
              up to 48 hours before the reservation start. After the cancelation
              the money will be refunded in up to 10 days.
            </p>
            <div className="flex justify-end text-lg gap-3">
              <button
                onClick={handleCloseModal}
                className="px-3  py-1 bg-primary-300 rounded-lg cursor-pointer hover:bg-primary-400"
              >
                Keep Reservation
              </button>
              <button
                onClick={handleCancelReservation}
                className="px-3  py-1 bg-red-300 rounded-lg cursor-pointer hover:bg-red-400"
              >
                Cancel and Refund
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCancelOrder;
