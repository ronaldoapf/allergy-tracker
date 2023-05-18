import { useQuery } from "@tanstack/react-query";
import { UserApi } from ".";

export function useGetUser() {
  return useQuery(['user'], async () => UserApi.getUser())
}