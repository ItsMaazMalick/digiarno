import { numberOfClientAndOthers } from "@/constants/data";
import NumberTicker from "./ui/number-ticker";

export function ClientsCounter() {
  return (
    <div className="mt-8 flex flex-wrap justify-center items-center gap-2 mx-2 lg:mx-12 rounded-md ring-[1px] p-1">
      {numberOfClientAndOthers.map(
        (data: { name: string; total: number }, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1 w-full md:w-[49%] lg:w-[24%]"
          >
            <NumberTicker
              value={data.total}
              className="font-bold text-4xl text-primary"
            />
            <span className="text-lg font-light uppercase">{data.name}</span>
          </div>
        )
      )}
    </div>
  );
}
