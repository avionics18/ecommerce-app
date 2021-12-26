import { Icon } from "@iconify/react";

const SocialIcons = () => {
  return (
    <div className="social-icons flex items-center space-x-2">
      <a
        href="#"
        className="w-6 h-6 flex justify-center items-center border border-yellow-200 hover:border-white rounded-full text-yellow-200 hover:text-white transition-all"
      >
        <Icon icon="fe:facebook" />
      </a>
      <a
        href="#"
        className="w-6 h-6 flex justify-center items-center border border-yellow-200 hover:border-white rounded-full text-yellow-200 hover:text-white transition-all"
      >
        <Icon icon="fe:twitter" />
      </a>
      <a
        href="#"
        className="w-6 h-6 flex justify-center items-center border border-yellow-200 hover:border-white rounded-full text-yellow-200 hover:text-white transition-all"
      >
        <Icon icon="fe:youtube" />
      </a>
      <a
        href="#"
        className="w-6 h-6 flex justify-center items-center border border-yellow-200 hover:border-white rounded-full text-yellow-200 hover:text-white transition-all"
      >
        <Icon icon="fe:instagram" />
      </a>
    </div>
  );
};

export default SocialIcons;
