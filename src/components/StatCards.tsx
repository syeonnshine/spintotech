import { stats } from "../data/company";

// 카드 3개를 테두리 하나로 묶고 칸 사이만 구분선으로 나눔 (모바일은 가로선, sm 이상은 세로선)
export default function StatCards() {
  return (
    <div className="grid grid-cols-1 divide-y divide-line rounded-xl border border-line bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {stats.map((stat) => (
        <div key={stat.label} className="p-6 sm:p-8">
          <div className="text-[32px] font-bold text-brand sm:text-[40px]">
            {stat.value}
            <span className="text-xl">{stat.unit}</span>
          </div>
          <p className="mt-1 text-[15px] text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
