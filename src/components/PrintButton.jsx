const PrintButton = ({ onPrint }) => {
  return (
    <section className="print-btn-sc">
      <div className="container">
        <button type="button" className="btn btn-primary" onClick={onPrint}>
          Print CV
        </button>
      </div>
    </section>
  );
};

export default PrintButton;
