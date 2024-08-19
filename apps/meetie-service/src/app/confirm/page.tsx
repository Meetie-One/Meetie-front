import Image from "next/image";
import UserImg from "/public/img/img-user-profile.png";

export default function Confirm() {
  return (
    <main className="flex flex-col mx-auto justify-center gap-y-4 px-4 pt-[18px] pb-32">
      <section className="flex items-center justify-between h-[50px] mb-4 px-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-[7px]">
        <div className="flex items-center gap-3">
          <span className="text-bold-20">🥸</span>
          <p className="text-medium-14 text-[#41364A] leading-5">우리는 이렇게 인증해요 !</p>
        </div>
        <Image src="/svg/ic-calendar-prev-arrow.svg" alt="icon" width={6} height={12} />
      </section>
      <section className="flex items-center gap-3">
        <h3 className="text-medium-18">14일차 과제</h3>
        <span className="px-[6px] py-[3px] text-regular-12 text-[#3F3FFF] border border-primary-500 border-inset rounded-2xl">
          진행중
        </span>
      </section>
      <section className="relative flex p-4 bg-white border border-[#E9E9E9] border-inset rounded-md drop-shadow-sm">
        <div className="w-[20px] h-10 flex justify-center items-center mr-4 bg-[#F7F3FF] border border-[#EBE9F5] rounded-[7px]">
          <Image src="/svg/ic-calendar-vertical.svg" alt="icon" width={18} height={19} />
        </div>
        <div>
          <p className="text-regular-16">콜로소 인강 1강 완강 인증하기</p>
          <span className="text-regular-12 text-[#82829B]">강의 과제 화면 캡쳐</span>
        </div>
        <div className="absolute flex items-center right-4 bottom-4">
          <span className="text-regular-12 text-[#82829B] mr-1">+2</span>
          <div className="w-5 h-5 rounded-full">
            <Image src={UserImg} alt="" width={20} height={20} />
          </div>
          <div className="ml-[-8px] w-5 h-5 rounded-full">
            <Image src={UserImg} alt="" width={20} height={20} />
          </div>
        </div>
      </section>
      <section className="h-[170px] flex flex-col items-center justify-center text-[#A9A9A9] text-[15px] bg-[#F9F9F9] border border-[#E9E9E9] rounded-lg drop-shadow-sm mt-2 mb-4">
        <Image src="/svg/ic-calendar-add-btn.svg" alt="icon" width={28} height={28} />
        <span className="mt-2">인증 구역</span>
      </section>
      <section>
        <h4 className="text-bold-14 pb-3">기록</h4>
        <textarea
          className="w-full h-[50px] text-[15px] placeholder:text-[#82829B] bg-[#F9F9F9] p-3 border border-[#E9E9E9] rounded-lg resize-none"
          placeholder="과제를 하며 나누고 싶은 생각을 적어보세요."
          maxLength={500}
        />
        <p className="text-[13px] text-[#b7b7b7] text-right">0/500</p>
      </section>
      <section className="flex flex-nowrap gap-3 overflow-x-scroll">
        <div className="flex flex-col items-center justify-center w-[82px] h-[82px] min-w-[82px] border border-[#D5D5D5] rounded-lg bg-[#F9F9F9]">
          <Image src="/svg/ic-calendar-add-btn.svg" alt="icon" width={28} height={28} />
          <span className="text-[#797979] text-regular-14 mt-1">0/4</span>
        </div>
      </section>
      <section>
        <button className="w-full h-[50px] mt-6  mb-3 bg-primary-500 rounded-lg text-semibold-16 text-white">
          인증하기
        </button>
        <p className="text-regular-14 text-[#82829B] text-center underline">임시 저장</p>
      </section>
    </main>
  );
}
