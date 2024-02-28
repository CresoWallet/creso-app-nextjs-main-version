// NotificationPopup.jsx
import React, { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";

const NotificationPopup = ({ handleClose }) => {
  const [hover, setHover] = useState(false);
  const notifications = [
    { id: 1, message: "New transaction received", time: "2 minutes ago" },
    { id: 2, message: "Account balance updated", time: "5 minutes ago" },
    // Add more dummy notifications as needed
  ];

  const popupRef = useRef();

  useEffect(() => {
    // Disable scrolling on the background when the popup is open
    document.body.style.overflow = "hidden";

    // Cleanup function to re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleBackgroundClick = (e) => {
    if (popupRef.current === e.target) {
      handleClose();
    }
  };

  const handleOverlayClick = (event) => {
    // Close the popup when clicking outside of it
    if (event.target.classList.contains("popup-overlay")) {
      handleClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-start justify-center z-50 p-4 sm:p-16 ${
        hover ? "bg-opacity-80" : "bg-opacity-50"
      } cursor-pointer popup-overlay`}
      onClick={handleOverlayClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        ref={popupRef}
        onClick={handleBackgroundClick}
        className="absolute inset-0 bg-black opacity-50 cursor-pointer"
      ></div>
      <div
        className={`bg-white p-4 sm:p-6 rounded-lg my-12 items-center w-80 z-10 relative ${
          hover ? "bg-gray-100" : ""
        }`}
      >
        <div className="flex items-center">
          <p className="font-bold text-center text-2xl">Notification </p>
          <span className="ml-2 text-lg upcomming">Upcoming</span>
        </div>
        <hr />
        {notifications.map((notification) => (
          <div key={notification.id} className="mb-2 mt-4">
            <p className="font-medium">{notification.message}</p>
            <p className="text-sm text-gray-500">{notification.time}</p>
          </div>
        ))}
        <div className="flex flex-col text-sm text-start"></div>
        {/* Use a rounded black close button with black background
        <div
          className="absolute top-4 right-4 cursor-pointer bg-black rounded-full p-2 hover:font-bold"
          onClick={handleClose}
        >
          <span className="text-white text-2xl">&times;</span>
        </div> */}
        <div className="absolute top-2 right-2 bg-black rounded-full h-6 w-6  flex items-center justify-center cursor-pointer z-[99]">
          <IoIosClose
            className="text-white h-7 w-7 cursor-pointer"
            onClick={handleClose}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
