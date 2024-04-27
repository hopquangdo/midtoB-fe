import React, { useState } from 'react';

const AvatarUpload = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mr-5">
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/*"
        onChange={handleAvatarChange}
        className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
      />
      {avatarUrl && (
        <img src={avatarUrl} alt="Avatar" className="mt-2 rounded-md shadow-md w-20 h-auto" />
      )}
    </div>
  );
};

export default AvatarUpload;
