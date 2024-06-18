import callAxios from "@/service/callApi";
import { setShowLoginPopup, setToken } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function useAuth() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.auth);

  const loginProcess = async (login) => {
    let rememberedData = "";
    if (login.remember === true) {
      rememberedData = JSON.stringify(login);
    }
    try {
      const { data: res } = await callAxios.post("/signin", login);
      if (res.success) {
        localStorage.setItem("login-remember", window.btoa(rememberedData));
        dispatch(setToken(res.token));
        dispatch(setShowLoginPopup(false));
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.detail);
    }
  };

  return { token, user, loginProcess };
}
