import { useRouter } from "next/navigation";
import React from "react";

const EscalateBox = () => {
  const router = useRouter();

  const handleEscalate = () => {
    router.push("/dashboard/escalate");
  };

  return (
    <div className="flex flex-col bg-white w-[90%] mx-auto justify-center shadow-lg h-auto rounded-xl">
      <div className="flex flex-row w-full justify-between px-4 py-4">
        <span className="font-bold text-xl">Escalate</span>
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700 text-base">
          If you encounter any issues that require immediate attention, please
          click the button below to escalate.
        </p>
      </div>
      <div className="flex justify-center px-4 py-4">
        <button
          onClick={handleEscalate}
          className="py-2 px-4 bg-blue-500 text-white rounded-lg border border-transparent hover:bg-white hover:border-blue-500 hover:text-blue-500 font-semibold"
        >
          Escalate
        </button>
      </div>
    </div>
  );
};

export default EscalateBox;
