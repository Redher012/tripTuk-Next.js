const PaidLabel = ({ isPaid }) => {
  return (
    <span
      className={`px-2 py-1 text-xs rounded font-medium ${
        isPaid
          ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white"
          : "bg-amber-100 text-amber-800"
      }`}
    >
      {isPaid ? "Paid" : "Not Paid"}
    </span>
  );
};

export default PaidLabel;
