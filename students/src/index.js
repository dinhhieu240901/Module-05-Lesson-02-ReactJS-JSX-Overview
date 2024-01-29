import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const students = [
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
  },
  {
    company: "Centro comercial Moctezuma",
    contact: "Francisco Chang",
    country: "Mexico",
  },
  {
    company: "Ernst Handel",
    contact: "Roland Mendel",
    country: "Austria",
  },
  {
    company: "Island Trading",
    contact: "Helen Bennett",
    country: "UK",
  },
  {
    company: "Laughing Bacchus Winecellars",
    contact: "Yoshi Tannamuri",
    country: "Canada",
  },
  {
    company: "Magazzini Alimentari Riuniti",
    contact: "Giovanni Rovelli",
    country: "Italy",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Company
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Country
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Contact
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {students.map((student) => (
        <tr key={student.company}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.company}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.contact}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.country}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
