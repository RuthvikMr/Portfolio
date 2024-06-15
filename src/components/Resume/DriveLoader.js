import React from 'react';

const fileId = '1lkWI7Va_4YveH2zAi-STh-Psx7NBRsvB';
// Create the embedded URL
const embedUrl = `https://drive.google.com/file/d/${fileId}/view`;

const DriveFilePreview = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe
        src={embedUrl}
        style={{ width: '100%', height: '100%' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DriveFilePreview;
