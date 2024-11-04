import { axiosClient } from "@/lib/axios/axios";
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useEffect } from "react";

const AxiosInterceptor = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const reqInterceptorConfig = (config: InternalAxiosRequestConfig) => {
      return config;
    };

    const reqErrorInterceptorConfig = (error: AxiosError) => {
      return Promise.reject(error);
    };

    const resInterceptorConfig = (response: AxiosResponse) => {
      return response;
    };

    const resErrInterceptorConfig = (error: AxiosError) => {
      return Promise.reject(error);
    };

    const resInterceptor = axiosClient.interceptors.response.use(
      resInterceptorConfig,
      resErrInterceptorConfig
    );

    const reqInterceptor = axiosClient.interceptors.request.use(
      reqInterceptorConfig,
      reqErrorInterceptorConfig
    );

    return () => {
      axiosClient.interceptors.response.eject(resInterceptor);
      axiosClient.interceptors.request.eject(reqInterceptor);
    };
  }, []);

  return children;
};

export { AxiosInterceptor };
