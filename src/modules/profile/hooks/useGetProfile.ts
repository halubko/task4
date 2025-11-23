import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/modules/profile/api/api.ts";

export const useGetUser = (id: number) => {
   return useQuery({
      queryKey: ["get", "user", id],
      queryFn: () => getUser(id),
   });
};
