export interface Iimage {
  src: string;
  alt?: string;
}

export interface Ifilm {
  title: string;
  image: Iimage;
}

export interface Isection {
  section: string;
  films: Ifilm[];
}

export interface Itop {
  number: Iimage;
  film: Iimage;
}