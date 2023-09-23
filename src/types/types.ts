export type THeaderLinks = {
    title: string,
    href: string
}[];

export type TCoverImages = {
    src: string,
    alt: string
}[];

export type TInfoHeader = {
    name: string,
    title: string;
    phoneNumber: {
        icon: string;
        numbers: string[];
    };
    mail: string;
    socialIcons: {
        title: string;
        href: string;
        icon: string;
    }[];
}


export type course = {
    title: string;
    imgSrc: string;
}

export type TfooterData = {
    title: string;
    links: {
        title: string;
        href: string;
    }[];
}
