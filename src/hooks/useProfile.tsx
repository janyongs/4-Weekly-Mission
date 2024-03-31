import { API_URL } from "./const";
import { useEffect, useState } from "react";
import axios from "axios";

interface Profile {
  email: string;
  id: number;
  name: string;
  profileImageSource: string;
}

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(() => {
    fetchGetUser();
  }, []);

  const fetchGetUser = async () => {
    try {
      const fetch = await axios.get(`${API_URL}/sample/user`);
      const { data } = fetch;
      if (data) {
        console.log(data);
        setProfile({ ...data });
      }
    } catch (e) {
      console.log("e");
    }
  };
  return { profile };
};
