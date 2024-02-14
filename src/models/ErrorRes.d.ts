export type ErrorRes = {
    message: string;
    name:    string;
    stack:   string;
    config:  Config;
    code:    string;
    status:  number;
    request: any;
    response: Error;
}

export type Config = {
    transitional:      Transitional;
    adapter:           string[];
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    env:               Request;
    headers:           ConfigHeaders;
    baseURL:           string;
    params:            Params;
    method:            string;
    url:               string;
}

export type Error = {
    data:       Data;
    status:     number;
    statusText: string;
    headers:    ErrorHeaders;
    config:     Config;
    request:    Request;
}

export type Data = {
    cod:     string;
    message: string;
}


export type ErrorHeaders = {
    "content-length": string;
    "content-type":   string;
}

export type Request = any

export type Env = any

export type Transitional = {
    silentJSONParsing:   boolean;
    forcedJSONParsing:   boolean;
    clarifyTimeoutError: boolean;
}

export type ConfigHeaders = {
    Accept: string;
}

export type Params = {
    q:     string;
    units: string;
    appid: string;
}
