import { useEffect, useRef, useState } from "react";

type Props = {
  lat: number;
  lng: number;
  title: string;
};

// @types/navermaps 없이 쓰는 최소 선언
declare global {
  interface Window {
    naver?: any;
    navermap_authFailure?: () => void;
  }
}

const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID as string | undefined;

// 페이지를 오가도 SDK 스크립트가 한 번만 로드되도록 Promise를 모듈 단위로 캐싱
let sdkPromise: Promise<void> | null = null;
function loadSdk() {
  if (window.naver?.maps) return Promise.resolve();
  if (!sdkPromise) {
    sdkPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      // 2025년 콘솔 통합 이후 파라미터명이 ncpClientId → ncpKeyId로 변경됨
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        sdkPromise = null; // 네트워크 실패 시 다음 진입에서 재시도할 수 있게 초기화
        reject(new Error("네이버 지도 SDK 로드 실패"));
      };
      document.head.appendChild(script);
    });
  }
  return sdkPromise;
}

export default function NaverMap({ lat, lng, title }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(!clientId);

  useEffect(() => {
    if (!clientId) return;
    // 도메인 미등록 등 인증 실패는 onerror가 아니라 이 전역 콜백으로만 알려줌
    window.navermap_authFailure = () => {
      console.error("네이버 지도 인증 실패 — NCP 콘솔의 Web 서비스 URL 등록을 확인하세요.");
      setFailed(true);
    };

    let cancelled = false;
    loadSdk()
      .then(() => {
        if (cancelled || !ref.current) return;
        const { maps } = window.naver;
        const position = new maps.LatLng(lat, lng);
        const map = new maps.Map(ref.current, {
          center: position,
          zoom: 17,
          // 트랙패드·마우스 없이도 확대할 수 있도록 줌 버튼 노출
          zoomControl: true,
          zoomControlOptions: { position: maps.Position.TOP_RIGHT },
        });
        new maps.Marker({ position, map, title });
      })
      .catch(() => !cancelled && setFailed(true));

    return () => {
      cancelled = true;
    };
  }, [lat, lng, title]);

  // 키 누락·인증 실패 시 빈 회색 박스 대신 네이버 지도 링크로 대체
  if (failed) {
    return (
      <a
        href={`https://map.naver.com/p/search/${encodeURIComponent(title)}`}
        target="_blank"
        rel="noreferrer"
        className="flex h-[320px] w-full items-center justify-center rounded border border-line bg-section text-sm text-muted hover:text-brand sm:h-[400px]"
      >
        네이버 지도에서 위치 보기 →
      </a>
    );
  }

  return <div ref={ref} className="h-[320px] w-full rounded border border-line sm:h-[400px]" />;
}
