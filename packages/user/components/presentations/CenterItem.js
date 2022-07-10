const CenterItem = ({ label }) => {
  return (
    <div>
      <h2
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          color: "#00bdd7",
          transform: "translate(-50%, -50%)",
        }}
      >
        {label}
      </h2>
    </div>
  );
};

export default CenterItem;
