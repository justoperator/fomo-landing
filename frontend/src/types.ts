export type Link = {
    label: string;
    href: string
}

export type Block = {
    type: string;
    [key: string]: any
}

export type Common = {
  header: {
    logo: string;
    links: Link[];
    buttonText: string;
    buttonLink: string
  }

  footer: {
    text: string;
    links: Link[]
  }

}

export type PageData = {
    title: string;
    seoDescription?: string;
    blocks: Block[]
}
