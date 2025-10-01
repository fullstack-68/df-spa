import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function getClock() {
  return axios.request<{ data: string }>({
    method: "GET",
    url: "/api/clock",
  });
}

function useClock() {
  const query = useQuery({
    queryKey: ["Clock"],
    queryFn: getClock,
    select: (res) => {
      return res.data.data;
    },
    // refetchInterval: 1000,
  });

  // console.log(query);

  return { clock: query.data ?? "", refetch: query.refetch };
}

export default useClock;
