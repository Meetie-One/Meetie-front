import Image from "next/image";

interface MemberType {
  image: string;
  name: string;
  field: string;
  description: string;
}

const Member = ({ image, name, field, description }: MemberType) => {
  return (
    <>
      <div className="p-2 bg-white h-[220px] rounded-lg">
        <div className="flex justify-end">
          <Image className="bg-red-50" src={image} alt="icon" width={20} height={20} />
        </div>
        <div className="flex justify-center">
          <Image
            className="bg-black rounded-full"
            src="/svg/ic-member.png"
            alt="icon"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col p-2">
          <span className="flex justify-center text-bold-14">{name}</span>
          <span className="flex justify-center text-regular-12 mb-2">{field} | UX.UI</span>
          <span className="flex justify-center text-bold-12">{description}</span>
        </div>
        <div className="flex justify-center">
          <button className="w-full border rounded-lg border-primary-500 text-primary-500 text-regular-12">
            친구 추가하기 +
          </button>
        </div>
      </div>
    </>
  );
};
export default Member;