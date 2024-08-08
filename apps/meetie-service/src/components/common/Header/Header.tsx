import Image from "next/image";

interface HeaderButtonPropsType {
  handleButtonClick?: () => void;
}

interface HeaderProps extends React.PropsWithChildren {
  hasButton?: boolean;
  backgroundColor?: string;
}

interface HeaderLeftButtonProps extends HeaderButtonPropsType {
  isCloseIcon?: boolean;
}

interface HeaderRightButtonProps extends HeaderButtonPropsType {
  icon: string;
}

interface HeaderRightTextButtonProps extends HeaderButtonPropsType {
  isComplete?: boolean;
}

const Header = ({ children, backgroundColor }: HeaderProps) => {
  return (
    <div
      className={`w-[375px] h-10 flex justify-center items-center fixed top-0 left-[50%] translate-x-[-50%] px-3 z-50 ${backgroundColor ? backgroundColor : "bg-white"}`}
    >
      {children}
    </div>
  );
};

const HeaderTitle = ({ children, hasButton }: HeaderProps) => {
  return (
    <h1 className={`text-bold-18 text-[#212529] ${hasButton ? "mr-0" : "mr-auto"}`}>{children}</h1>
  );
};

const HeaderLeftButton = ({ isCloseIcon, handleButtonClick }: HeaderLeftButtonProps) => {
  return (
    <button className="absolute left-3" onClick={handleButtonClick}>
      <Image
        src={isCloseIcon ? "/svg/ic-header-close.svg" : "/svg/ic-header-left-arrow.svg"}
        alt="leftButtonIcon"
        width={24}
        height={24}
      />
    </button>
  );
};

const HeaderRightButton = ({ icon, handleButtonClick }: HeaderRightButtonProps) => {
  return (
    <button className="absolute right-3" onClick={handleButtonClick}>
      <Image src={icon} alt="rightButtonIcon" width={24} height={24} />
    </button>
  );
};

const HeaderRightText = ({ nowStep }: { nowStep: number }) => {
  return (
    <p className="text-medium-12 absolute right-3 text-[#9d9d9d]">
      <span className="text-[#313131]">{nowStep}</span> / 2
    </p>
  );
};

const HeaderRightTextButton = ({ isComplete, handleButtonClick }: HeaderRightTextButtonProps) => {
  return (
    <button className="absolute right-3" onClick={handleButtonClick}>
      <p className={`text-medium-14 ${isComplete ? "text-primary-500" : "text-black"}`}>
        {isComplete ? "완료" : "취소"}
      </p>
    </button>
  );
};

Header.Title = HeaderTitle;
Header.LeftButton = HeaderLeftButton;
Header.RightButton = HeaderRightButton;
Header.RightText = HeaderRightText;
Header.RightTextButton = HeaderRightTextButton;

export default Header;