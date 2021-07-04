import { GET_STATUS, getRequest } from ".";
import {
  statusResponseDtoToStatus,
  StatusResponseDtoType,
} from "../models/dtoes/response/statusResponse";
import Status from "../models/status";

export const getStatusRequest = async (query: string = ""): Promise<Status> => {
  const response = await getRequest().get<StatusResponseDtoType>(
    `${GET_STATUS}?search=${query}`
  );
  return statusResponseDtoToStatus(response.data);
};
