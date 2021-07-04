import { GET_LOGS, getRequest } from ".";
import {
  LogResponseDtoType,
  logResponseDtoToLog,
} from "../models/dtoes/response/logResponse";
import Log from "../models/log";

export const getLogsRequest = async (
  page: number = 0,
  query: string = ""
): Promise<{ logs: Log[]; maxPage: number }> => {
  const response = await getRequest().get<LogResponseDtoType>(
    `${GET_LOGS}?page=${page}&size=10&search=${query}`
  );
  return logResponseDtoToLog(response.data);
};
