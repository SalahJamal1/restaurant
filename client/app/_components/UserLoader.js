"use client";
import { useDispatch } from "react-redux";
import { getCurrent } from "@/app/_lib/apiResto";
import { getUser, Loader } from "@/app/_store/userSlice";
import { useEffect } from "react";

function UserLoader() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      async function getCurrentUser() {
        dispatch(Loader());
        const res = await getCurrent();
        if (res) {
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
