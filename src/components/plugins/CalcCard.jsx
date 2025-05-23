import React from 'react';

const CalcCard = ({ data }) => {
  if (data.error) {
    return <div className="text-red-500">{data.error}</div>;
  }

  return (
    <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
      <h3 className="font-bold text-lg text-yellow-800">Calculator Result</h3>
      <p className="font-mono bg-white p-2 rounded mt-1">{data.expression} = <span className="font-bold">{data.result}</span></p>
    </div>
  );
};

export default CalcCard;