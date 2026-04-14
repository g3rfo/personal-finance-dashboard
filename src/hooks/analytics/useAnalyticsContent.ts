import { useAppSelector } from "@/features/store/hooks";

function useAnalyticsContent() {
  const analyticsData = useAppSelector((state) => state.analyticsData);

  return {
    analyticsData,
  };
}

export default useAnalyticsContent;
