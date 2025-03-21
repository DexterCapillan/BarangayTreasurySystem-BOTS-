import React from "react";

function Rocad() {
  return (
    <div className="p-6 bg-white overflow-auto">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Reports on Collection and Deposits
      </h2>

      <table className="table table-bordered w-full">
        {/* First Row: Title */}
        <thead>
          <tr>
            <th colSpan="6" className="p-3 bg-gray-200 text-center">
              Reports on Collection and Deposits
            </th>
          </tr>
        </thead>

        {/* Second Row: Name, Barangay, Date, RCD Number */}
        <tbody>
          <tr className="bg-gray-100">
            <td colSpan="2" className="p-2 font-semibold">
              Name:
            </td>
            <td colSpan="2" className="p-2 font-semibold">
              Barangay:
            </td>
            <td className="p-2 font-semibold">Date:</td>
            <td className="p-2 font-semibold">RCD No:</td>
          </tr>
          {/* Third Row: Sections */}
          <tr>
            <td rowSpan="9" className="p-2 font-bold bg-gray-200 text-center">
              A. Collections
            </td>
            <td colSpan="2" className="p-2 font-bold bg-gray-200 text-center">
              Official Receipt
            </td>
            <td rowSpan="2" className="p-2 font-bold bg-gray-200 text-center">
              Payor
            </td>
            <td rowSpan="2" className="p-2 font-bold bg-gray-200 text-center">
              Nature of Collection
            </td>
            <td rowSpan="2" className="p-2 font-bold bg-gray-200 text-center">
              Amount
            </td>
          </tr>
          <tr>
            <td className="p-2 font-bold bg-gray-200 text-center">Date</td>
            <td className="p-2 font-bold bg-gray-200 text-center">Number</td>
          </tr>
          {/* 7 Data Rows for Entry */}
          {[...Array(7)].map((_, index) => (
            <tr key={index}>
              <td className="p-2 text-center"></td>
              <td className="p-2 text-center"></td>
              <td className="p-2 text-center"></td>
              <td className="p-2 text-center"></td>
              <td className="p-2 text-center"></td>
              <td className="p-2 text-center"></td>
            </tr>
          ))}
          {/* Total Row */}
          <tr className="bg-gray-100 font-bold">
            <td colSpan="5" className="p-2 text-right">
              Total:
            </td>
            <td className="p-2 text-center">₱0.00</td>
          </tr>
          {/* Blank Row */}
          <tr>
            <td colSpan="6" className="p-2"></td>
          </tr>
          {/* Name of Accountable Officer/Bank/Branches - Reference - Amount */}
          <tr className="bg-gray-200 font-bold">
            <td colSpan="2" className="p-2 text-center">
              Name of Accountable Officer/Bank/Branches
            </td>
            <td colSpan="2" className="p-2 text-center">
              Reference
            </td>
            <td colSpan="2" className="p-2 text-center">
              Amount
            </td>
          </tr>
          {/* Empty Row for Entry */}
          <tr>
            <td colSpan="2" className="p-2 text-center"></td>
            <td colSpan="2" className="p-2 text-center"></td>
            <td colSpan="2" className="p-2 text-center"></td>
          </tr>
          {/* Second Total Row */}
          <tr className="bg-gray-100 font-bold">
            <td colSpan="5" className="p-2 text-right">
              Total:
            </td>
            <td className="p-2 text-center">₱0.00</td>
          </tr>
          {/* Final Row: Summary of Collection and Deposits/Remittances */}
          <tr className="bg-gray-200 font-bold">
            <td colSpan="6" className="p-2 text-left">
              Summary of Collection and Deposits/Remittances
            </td>
          </tr>
          {/* Half Rows with Left and Right Alignment */}
          <tr>
            <td colSpan="3" className="p-2"></td>
            <td colSpan="3" className="p-2"></td>
          </tr>
          <tr>
            <td colSpan="3" className="p-2"></td>
            <td colSpan="3" className="p-2 text-center">
              List of Checks
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="p-2 text-left">
              Add Collections
            </td>
            <td className="p-2 text-center">Check</td>
            <td className="p-2 text-left">Payee</td>
            <td className="p-2 text-right">Amount</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-2 font-semibold text-right">Cash</td>
            <td colSpan="2" className="p-2 font-semibold">
              ₱
            </td>
            <td className="p-2 font-semibold text-center">No.</td>
            <td className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-2 font-semibold text-right">Check</td>
            <td colSpan="2" className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-2 font-semibold">Total</td>
            <td className="p-2 font-semibold">₱</td>
            <td className="p-2 font-semibold"></td>

            <td className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>
          </tr>
          
          <tr className="bg-gray-100">
            <td className="p-2 font-semibold">Less:</td>
            <td className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>

            <td className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>
          </tr>

          <tr className="bg-gray-100">
            <td className="p-2 font-semibold">Ending Balance</td>
            <td className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>

            <td className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>
            <td className="p-2 font-semibold"></td>
          </tr>
          <tr className="bg-gray-200 font-bold">
            <td colSpan="6" className="p-2 text-left">
              D. ACCOUNTABILITY OF ACCOUNTABLE FORMS
            </td>
          </tr>
        
          <tr>
            <td rowSpan="9" className="p-2 font-bold bg-gray-200 text-center">
              Name of Form and No.
            </td>
            <td  colSpan="3" className="p-2 font-bold bg-gray-200 text-center">
              Beginning Balance
            </td>
            <td   colSpan="3" className="p-2 font-bold bg-gray-200 text-center flex-1 min-w-[250px]">
              Receipt
            </td>
            <td   colSpan="3" className="p-2 font-bold bg-gray-200 text-center">
              Issued
            </td>
            <td   colSpan="3" className="p-2 font-bold bg-gray-200 text-center">
              Ending Balance
            </td>
          </tr>
          <tr>
            <td className="p-2 font-bold bg-gray-200 text-center">1</td>
            <td className="p-2 font-bold bg-gray-200 text-center">2</td>
            <td className="p-2 font-bold bg-gray-200 text-center">3</td>
            <td className="p-2 font-bold bg-gray-200 text-center">1</td>
            <td className="p-2 font-bold bg-gray-200 text-center">2</td>
            <td className="p-2 font-bold bg-gray-200 text-center">3</td>
            <td className="p-2 font-bold bg-gray-200 text-center">1</td>
            <td className="p-2 font-bold bg-gray-200 text-center">2</td>
            <td className="p-2 font-bold bg-gray-200 text-center">3</td>
            <td className="p-2 font-bold bg-gray-200 text-center">1</td>
            <td className="p-2 font-bold bg-gray-200 text-center">2</td>
            <td className="p-2 font-bold bg-gray-200 text-center">3</td>
          </tr>
          <tr>
            <td className="p-2 font-bold bg-gray-200 text-center">1</td>
            <td className="p-2 font-bold bg-gray-200 text-center">2</td>
            <td className="p-2 font-bold bg-gray-200 text-center">3</td>
            <td className="p-2 font-bold bg-gray-200 text-center">1</td>
            <td className="p-2 font-bold bg-gray-200 text-center">2</td>
            <td className="p-2 font-bold bg-gray-200 text-center">3</td>
            <td className="p-2 font-bold bg-gray-200 text-center">1</td>
            <td className="p-2 font-bold bg-gray-200 text-center">2</td>
            <td className="p-2 font-bold bg-gray-200 text-center">3</td>
            <td className="p-2 font-bold bg-gray-200 text-center">1</td>
            <td className="p-2 font-bold bg-gray-200 text-center">2</td>
            <td className="p-2 font-bold bg-gray-200 text-center">3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Rocad;
