export interface Country {
  name: string;
  flag: string;
  capital: string;
}

export interface ApiCountry {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  capital?: string[];
}