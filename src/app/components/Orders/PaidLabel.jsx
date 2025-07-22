const PaidLabel = ({ isPaid }) => {
  return (
    <span
      className={`px-2 py-1 text-xs rounded font-medium ${
        isPaid ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {isPaid ? "Paid" : "Not Paid"}
    </span>
  );
};

export default PaidLabel;
