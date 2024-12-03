import React from 'react';

export const DateFormatter = ({ dateString }) => {
  const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return <label className="fs-6 " style={{ color: "rgb(155 126 172)" }}>{formattedDate}</label>;
};
