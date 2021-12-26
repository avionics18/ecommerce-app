import { Icon } from "@iconify/react";

const MiddleNav = () => {
  return (
    <div className="bg-white py-5 border-b relative">
      <div className="container m-auto">
        <div className="flex justify-between items-center relative">
          <div className="contact-details flex items-center">
            <div className="text-yellow-600">
              <Icon icon="carbon:phone-voice" height="32" />
            </div>
            <div className="ml-3">
              <p className="text-yellow-600 text-sm font-bold">CALL US</p>
              <p className="text-lg">(+91) 8084 451288</p>
            </div>
          </div>
          <div className="brand-logo bg-white pt-1 w-56 absolute">
            <p className="text-yellow-600 mb-1 flex justify-center">
              <Icon icon="ant-design:dropbox-circle-filled" width="60" />
            </p>
            <h1 className="text-2xl text-center uppercase font-serif">
              <span className="font-bold">EC</span>OMO
            </h1>
          </div>
          <div className="features flex items-center space-x-3 text-gray-700">
            <button className="p-3 rounded hover:bg-gray-100 hover:text-yellow-700 transition-all">
              <Icon icon="bi:search" height="20" />
            </button>
            <button className="p-3 rounded hover:bg-gray-100 hover:text-yellow-700 transition-all">
              <Icon icon="bi:heart" height="20" />
            </button>
            <button className="p-3 rounded hover:bg-gray-100 hover:text-yellow-700 transition-all">
              <Icon icon="bi:handbag" height="20" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
