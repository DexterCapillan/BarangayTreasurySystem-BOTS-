import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function TransmissionSlip() {
  const slipRef = useRef();
  const [info, setInfo] = useState({
    from: "",
    to: "",
    subject: "",
    date: "",
    referenceNo: "",
  });

  const [documents, setDocuments] = useState([
    { description: "", quantity: "" },
  ]);

  const handleInfoChange = (field, value) => {
    setInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleDocChange = (index, field, value) => {
    const updated = [...documents];
    updated[index][field] = value;
    setDocuments(updated);
  };

  const addDocumentRow = () => {
    setDocuments([...documents, { description: "", quantity: "" }]);
  };

  const exportToPDF = () => {
    html2canvas(slipRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("transmission-slip.pdf");
    });
  };

  const exportToExcel = () => {
    const table = slipRef.current.querySelector("table");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Transmission Slip" });
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([wbout], { type: "application/octet-stream" }), "transmission-slip.xlsx");
  };

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Transmission Slip</h2>
        <div className="flex gap-2">
          <button onClick={exportToPDF} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Export to PDF
          </button>
          <button onClick={exportToExcel} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Export to Excel
          </button>
        </div>
      </div>

      <div ref={slipRef} className="border border-gray-300 p-4 rounded space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">From:</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={info.from}
              onChange={(e) => handleInfoChange("from", e.target.value)}
            />
          </div>
          <div>
            <label className="font-semibold">To:</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={info.to}
              onChange={(e) => handleInfoChange("to", e.target.value)}
            />
          </div>
          <div>
            <label className="font-semibold">Subject:</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={info.subject}
              onChange={(e) => handleInfoChange("subject", e.target.value)}
            />
          </div>
          <div>
            <label className="font-semibold">Date:</label>
            <input
              type="date"
              className="w-full border border-gray-300 p-2 rounded"
              value={info.date}
              onChange={(e) => handleInfoChange("date", e.target.value)}
            />
          </div>
          <div>
            <label className="font-semibold">Reference No.:</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={info.referenceNo}
              onChange={(e) => handleInfoChange("referenceNo", e.target.value)}
            />
          </div>
        </div>

        <table className="w-full border border-gray-300 mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Description</th>
              <th className="border p-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index}>
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full p-1 border border-gray-300 rounded"
                    value={doc.description}
                    onChange={(e) => handleDocChange(index, "description", e.target.value)}
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="number"
                    className="w-full p-1 border border-gray-300 rounded"
                    value={doc.quantity}
                    onChange={(e) => handleDocChange(index, "quantity", e.target.value)}
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="2" className="p-2 text-right">
                <button onClick={addDocumentRow} className="text-sm text-blue-600 hover:underline">
                  + Add another row
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransmissionSlip;
