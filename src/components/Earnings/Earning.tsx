"use client";


const TeacherEarningsDashboard = ({ total }: { total: number }) => {

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6 text-indigo-700">
        💰 Teacher Earnings Dashboard
      </h1>
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 text-center">
          <h2 className="text-xl font-medium text-gray-700 mb-2">Total Earnings</h2>
          <p className="text-4xl font-bold text-green-600">${total}</p>
        </div>
    </div>
  );
};

export default TeacherEarningsDashboard;
