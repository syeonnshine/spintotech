import type { PerformanceRecord } from "../data/performance";

type Props = {
  records: PerformanceRecord[];
  showType?: boolean;
  // 메인처럼 금액을 노출하지 않는 곳에서 끌 수 있게 함
  showAmount?: boolean;
};

// 모바일은 표를 가로 스크롤하면 사업명이 잘려 읽기 어려워서 카드 목록으로, sm 이상은 표로 보여줌
export default function PerformanceTable({ records, showType = false, showAmount = true }: Props) {
  return (
    <>
      <ul className="flex flex-col gap-3 sm:hidden">
        {records.map((r) => (
          <li key={r.name + r.period} className="flex flex-col gap-1.5 rounded-xl border border-line bg-white p-[18px]">
            <span className="text-[13px] text-muted">
              {showType && `${r.type} · `}
              {r.period} · {r.client}
            </span>
            <span className="font-semibold text-body">{r.name}</span>
            {showAmount && <span className="text-[15px] font-bold text-brand">{r.amount}억</span>}
          </li>
        ))}
      </ul>

      <div className="hidden overflow-x-auto rounded border border-line bg-white sm:block">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-section text-muted">
              <th className="px-4 py-3 font-medium">사업명</th>
              {showType && <th className="px-4 py-3 font-medium">구분</th>}
              <th className="px-4 py-3 font-medium">수행기간</th>
              <th className="px-4 py-3 font-medium">발주처</th>
              {showAmount && <th className="px-4 py-3 text-right font-medium">금액</th>}
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.name + r.period} className="border-b border-line last:border-0">
                <td className="px-4 py-3 text-body">{r.name}</td>
                {showType && <td className="px-4 py-3 text-muted">{r.type}</td>}
                <td className="px-4 py-3 text-muted">{r.period}</td>
                <td className="px-4 py-3 text-muted">{r.client}</td>
                {showAmount && <td className="px-4 py-3 text-right font-semibold text-navy">{r.amount}억</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
