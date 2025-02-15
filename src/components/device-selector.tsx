import { useSelectInputDeviceAgent } from "@/rapida/hooks/use-select-input-device-agent";
import { cn } from "@/rapida/styles";
import { useEffect, useState } from "react";

export const DeviceSelector = () => {
  const [showMenu, setShowMenu] = useState(false);
  const deviceSelect = useSelectInputDeviceAgent({});
  const [selectedDeviceName, setSelectedDeviceName] = useState("");

  useEffect(() => {
    deviceSelect.devices.forEach((device) => {
      if (device.deviceId === deviceSelect.activeDeviceId) {
        setSelectedDeviceName(device.label);
      }
    });
  }, [deviceSelect.activeDeviceId, deviceSelect.devices, selectedDeviceName]);

  useEffect(() => {
    const handleClickOutside = (_: MouseEvent) => {
      if (showMenu) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  const activeClassName = showMenu ? "rotate-180" : "rotate-0";

  return (
    <div className="relative">
      <button
        className={`flex hover:opacity-50 ${activeClassName} transition-all duration-100`}
        onClick={(e) => {
          setShowMenu(!showMenu);
          e.stopPropagation();
        }}
      >
        <ChevronSVG />
      </button>
      <div
        className="absolute left-0 bottom-7 text-left rounded-md border z-10 w-[280px] shadow-lg"
        style={{
          display: showMenu ? "block" : "none",
        }}
      >
        {deviceSelect.devices.map((device, index) => {
          return (
            <div
              onClick={(e) => {
                e.stopPropagation();
                deviceSelect.setActiveMediaDevice(device.deviceId);
                setShowMenu(false);
              }}
              className={cn(
                device.deviceId === deviceSelect.activeDeviceId &&
                  "!text-blue-800",
                "text-gray-900",
                "text-xl",
                "bg-white text-xs py-2 px-2 cursor-pointer hover:bg-gray-200 hover:text-gray-600 rounded-md"
              )}
              key={index}
            >
              {device.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ChevronSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M13.3334 6L8.00003 11.3333L2.66669 6"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
