"use client";

export const ScrollingText = () => {
  return (
    <div className="w-full overflow-hidden bg-blue-100 py-4 border-y border-blue-200">
      <div className="flex animate-scroll whitespace-nowrap">
        <span className="text-2xl font-bold text-gray-800 mx-8">Work Well Advisors</span>
        <span className="text-2xl font-bold text-gray-800 mx-8">Work Well Advisors</span>
        <span className="text-2xl font-bold text-gray-800 mx-8">Work Well Advisors</span>
        <span className="text-2xl font-bold text-gray-800 mx-8">Work Well Advisors</span>
        <span className="text-2xl font-bold text-gray-800 mx-8">Work Well Advisors</span>
        <span className="text-2xl font-bold text-gray-800 mx-8">Work Well Advisors</span>
      </div>
    </div>
  );
};

