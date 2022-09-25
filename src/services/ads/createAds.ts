import { api } from "../api";

export interface CreateAdsParams {
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

export interface Ads {
  id: string;
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  createAt: string;
}

export interface CreateAdsResponse {
  result: string;
  message: string;
  data: Ads;
}

const createAds = async (
  gameId: string,
  params: CreateAdsParams
): Promise<CreateAdsResponse> => {
  const response = await api
    .post(`/games/${gameId}/ads`, params)
    .then((res) => res)
    .catch((error) => error.response);

  return response.data;
};

export { createAds };