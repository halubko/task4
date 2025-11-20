import { useQuery } from "@tanstack/react-query";
import { checkToken } from "@/modules/auth/api/api.ts";

export const useCheckToken = () => {
   return useQuery({
      queryKey: ["checkAuth"],
      queryFn: checkToken,
      retry: false,
   });
};
