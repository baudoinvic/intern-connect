

import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const RevenueChart = () => {

      const [users, setUsers] = useState([]);
         const [institutions, setInstitutions] = useState([]);
         const [internships, setInternships] = useState([]);

        const fetchUsers = () => {
          let token = localStorage.getItem("token");
          axios({
            url: "http://localhost:4000/api/users",
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              const allUsers = response.data;
              setUsers(allUsers);
              toast.success(response.data.message);
            })
            .catch((error) => {
              console.log(error);
            });
        };

        useEffect(() => {
          fetchUsers();
        }, []);

        const fetchInstitutions = () => {
          let token = localStorage.getItem("token");
          axios({
            url: "http://localhost:4000/api/institutions",
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              const allInstitutions = response.data;
              setInstitutions(allInstitutions);
              toast.success(response.data.message);
            })
            .catch((error) => {
              console.log(error);
            });
        };

        useEffect(() => {
          fetchInstitutions();
        }, []);

        const fetchInternships = () => {
          let token = localStorage.getItem("token");
          axios({
            url: "http://localhost:4000/api/users",
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              const allInternships = response.data;
              setInternships(allInternships);
              toast.success(response.data.message);
            })
            .catch((error) => {
              console.log(error);
            });
        };

        useEffect(() => {
          fetchInternships();
        }, []);


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 10,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          autoSkip: true,
          maxTicksLimit: 6,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          maxTicksLimit: 6,
        },
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Number of students",
        data: [20, 43, 10, 54, 8, 23, 40, 23, 56, 87, 44, 10],
        backgroundColor: "#FFBF00",
      },
      {
        label: "Companies",
        data: [24, 26, 16, 10, 20, 40, 46, 49, 72, 34, 54, 60],
        backgroundColor: "#111827",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-0">
            Revenue Chart
          </h2>
          <div className="flex items-center">
            <span className="mr-2 text-sm sm:text-base text-gray-600">
              Filter:
            </span>
            <select className="bg-gray-200 text-gray-800 text-sm sm:text-base rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div className="relative h-[300px] sm:h-[400px]">
          <Bar options={options} data={data} />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 overflow-hidden">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          Key Metrics
        </h2>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Institutions", value: institutions.length },
            { title: "Total users", value: users.length },
            { title: "Active internships", value: internships.length },
            {
              title: "Total students",
              value: users.filter((user) => user.role === "student").length,
            },
          ].map((metric, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                {metric.title}
              </h3>
              <p className="text-lg sm:text-xl font-bold text-orange-500">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
