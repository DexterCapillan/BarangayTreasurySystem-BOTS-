import React, { useRef, useState, useMemo } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function Rocad() {
  const tableRef = useRef();

  const [collections, setCollections] = useState([
    { date: "", number: "", payor: "", nature: "", amount: 0 },
  ]);

  const [deposits, setDeposits] = useState([
    { officer: "", reference: "", amount: 0 },
  ]);

  const [forms, setForms] = useState([
    { name: "", beginning: "", receipt: "", issued: "", ending: "" },
  ]);

  // Add/Remove Handlers
  const addCollectionRow = () => {
    setCollections([...collections, { date: "", number: "", payor: "", nature: "", amount: 0 }]);
  };
  const removeCollectionRow = (index) => {
    setCollections(collections.filter((_, i) => i !== index));
  };

  const addDepositRow = () => {
    setDeposits([...deposits, { officer: "", reference: "", amount: 0 }]);
  };
  const removeDepositRow = (index) => {
    setDeposits(deposits.filter((_, i) => i !== index));
  };

  const addFormRow = () => {
    setForms([...forms, { name: "", beginning: "", receipt: "", issued: "", ending: "" }]);
  };
  const removeFormRow = (index) => {
    setForms(forms.filter((_, i) => i !== index));
  };

  // Change Handlers
  const handleCollectionChange = (index, field, value) => {
    const updated = [...collections];
    updated[index][field] = value;
    setCollections(updated);
  };

  const handleDepositsChange = (index, field, value) => {
    const updated = [...deposits];
    updated[index][field] = value;
    setDeposits(updated);
  };

  const handleFormsChange = (index, field, value) => {
    const updated = [...forms];
    updated[index][field] = value;
    setForms(updated);
  };

  // Totals
  const collectionTotal = useMemo(() => {
    return collections.reduce((sum, row) => sum + (parseFloat(row.amount) || 0), 0).toFixed(2);
  }, [collections]);

  const totalDeposits = useMemo(() => {
    return deposits.reduce((sum, row) => sum + parseFloat(row.amount || 0), 0).toFixed(2);
  }, [deposits]);

  // Export
  const exportPDF = () => {
    html2canvas(tableRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("rocad-report.pdf");
    });
  };

  const exportExcel = () => {
    const table = tableRef.current;
    const wb = XLSX.utils.table_to_book(table, { sheet: "Rocad Report" });
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([wbout], { type: "application/octet-stream" }), "rocad-report.xlsx");
  };

  return (
    <div className="p-6 bg-white overflow-auto">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Reports on Collection and Deposits (ROCAD)
      </h2>

      <div className="mb-4 flex gap-2 justify-end">
        <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700" onClick={exportPDF}>
          Export to PDF
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700" onClick={exportExcel}>
          Export to Excel
        </button>
      </div>

      <table ref={tableRef} className="table-fixed w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th colSpan="6" className="p-3 bg-gray-200 text-center">Reports on Collection and Deposits</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td colSpan="2" className="p-2 font-semibold">Name:</td>
            <td colSpan="2" className="p-2 font-semibold">Barangay:</td>
            <td className="p-2 font-semibold">Date:</td>
            <td className="p-2 font-semibold">RCD No:</td>
          </tr>

          {/* A. COLLECTIONS Section */}
          <tr>
            <td rowSpan="2" className="p-2 font-bold bg-gray-200 text-center w-40 align-top">A. Collections</td>
            <td colSpan="2" className="p-2 font-bold bg-gray-200 text-center">Official Receipt</td>
            <td className="p-2 font-bold bg-gray-200 text-center">Payor</td>
            <td className="p-2 font-bold bg-gray-200 text-center">Nature of Collection</td>
            <td className="p-2 font-bold bg-gray-200 text-center">Amount</td>
          </tr>
          <tr>
            <td className="p-2 bg-gray-200 text-center font-bold">Date</td>
            <td className="p-2 bg-gray-200 text-center font-bold">Number</td>
            <td colSpan="3" className="bg-gray-200"></td>
          </tr>

          {collections.map((row, index) => (
            <tr key={index}>
              <td className="p-1 text-center">
                <input type="date" className="w-full border border-gray-300 p-1 rounded"
                  value={row.date} onChange={(e) => handleCollectionChange(index, "date", e.target.value)} />
              </td>
              <td className="p-1 text-center">
                <input type="text" className="w-full border border-gray-300 p-1 rounded"
                  value={row.number} onChange={(e) => handleCollectionChange(index, "number", e.target.value)} />
              </td>
              <td className="p-1 text-center">
                <input type="text" className="w-full border border-gray-300 p-1 rounded"
                  value={row.payor} onChange={(e) => handleCollectionChange(index, "payor", e.target.value)} />
              </td>
              <td className="p-1 text-center">
                <input type="text" className="w-full border border-gray-300 p-1 rounded"
                  value={row.nature} onChange={(e) => handleCollectionChange(index, "nature", e.target.value)} />
              </td>
              <td className="p-1 text-center flex justify-between items-center">
                <input type="number" className="w-full border border-gray-300 p-1 rounded text-right"
                  value={row.amount} onChange={(e) => handleCollectionChange(index, "amount", parseFloat(e.target.value) || 0)} />
                <button onClick={() => removeCollectionRow(index)} className="text-red-500 ml-2 font-bold">🗑</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="6" className="p-2 text-right">
              <button onClick={addCollectionRow} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">+ Add Row</button>
            </td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td colSpan="5" className="p-2 text-right">Total:</td>
            <td className="p-2 text-center">₱{collectionTotal}</td>
          </tr>

          {/* B. DEPOSITS Section */}
          <tr className="bg-gray-200 font-bold">
            <td colSpan="2" className="p-2 text-center">Name of Accountable Officer/Bank/Branches</td>
            <td colSpan="2" className="p-2 text-center">Reference</td>
            <td colSpan="2" className="p-2 text-center">Amount</td>
          </tr>
          {deposits.map((row, index) => (
            <tr key={index}>
              <td colSpan="2" className="p-2 text-center">
                <input type="text" className="w-full border border-gray-300 p-1 rounded"
                  value={row.officer} onChange={(e) => handleDepositsChange(index, "officer", e.target.value)} />
              </td>
              <td colSpan="2" className="p-2 text-center">
                <input type="text" className="w-full border border-gray-300 p-1 rounded"
                  value={row.reference} onChange={(e) => handleDepositsChange(index, "reference", e.target.value)} />
              </td>
              <td colSpan="2" className="p-2 text-center flex justify-between items-center">
                <input type="number" className="w-full border border-gray-300 p-1 rounded"
                  value={row.amount} onChange={(e) => handleDepositsChange(index, "amount", e.target.value)} />
                <button onClick={() => removeDepositRow(index)} className="text-red-500 ml-2 font-bold">🗑</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="6" className="p-2 text-right">
              <button onClick={addDepositRow} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">+ Add Row</button>
            </td>
          </tr>
          <tr className="bg-gray-100 font-bold">
            <td colSpan="5" className="p-2 text-right">Total:</td>
            <td className="p-2 text-center">₱{totalDeposits}</td>
          </tr>

          {/* C. FORMS Section */}
          <tr className="bg-gray-200 font-bold">
            <td colSpan="6" className="p-2 text-left">D. ACCOUNTABILITY OF ACCOUNTABLE FORMS</td>
          </tr>
          <tr>
            <td className="p-2 font-bold bg-gray-200 text-center w-40">Name of Form and No.</td>
            <td colSpan="2" className="p-2 font-bold bg-gray-200 text-center w-36">Beginning Balance</td>
            <td className="p-2 font-bold bg-gray-200 text-center w-36">Receipt</td>
            <td className="p-2 font-bold bg-gray-200 text-center w-36">Issued</td>
            <td className="p-2 font-bold bg-gray-200 text-center w-36">Ending Balance</td>
          </tr>
          {forms.map((row, index) => (
            <tr key={index}>
              <td className="p-2 text-center">
                <input type="text" className="w-full border border-gray-300 p-1 rounded"
                  value={row.name} onChange={(e) => handleFormsChange(index, "name", e.target.value)} />
              </td>
              <td colSpan="2" className="p-2 text-center">
                <input type="text" className="w-full border border-gray-300 p-1 rounded"
                  value={row.beginning} onChange={(e) => handleFormsChange(index, "beginning", e.target.value)} />
              </td>
              <td className="p-2 text-center">
                <input type="text" className="w-full border border-gray-300 p-1 rounded"
                  value={row.receipt} onChange={(e) => handleFormsChange(index, "receipt", e.target.value)} />
              </td>
              <td className="p-2 text-center">
                <input type="text" className="w-full border border-gray-300 p-1 rounded"
                  value={row.issued} onChange={(e) => handleFormsChange(index, "issued", e.target.value)} />
              </td>
              <td className="p-2 text-center flex justify-between items-center">
                <input type="text" className="w-full border border-gray-300 p-1 rounded"
                  value={row.ending} onChange={(e) => handleFormsChange(index, "ending", e.target.value)} />
                <button onClick={() => removeFormRow(index)} className="text-red-500 ml-2 font-bold">🗑</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="6" className="p-2 text-right">
              <button onClick={addFormRow} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">+ Add Row</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Rocad;
