"use client";
import { useDispatch } from "react-redux";
import { getCurrent } from "@/app/_lib/apiResto";
import { getUser } from "@/app/login/userSlice";
import { useEffect } from "react";

function UserLoader() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      async function getCurrentUser() {
        const res = await getCurrent();
        if (res?.id) {
          dispatch(getUser(res));
        }
      }
      getCurrentUser();
    },
    [dispatch]
  );
  return null;
}

export default UserLoader;
