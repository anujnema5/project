import { THeaderLinks, TInfoHeader } from "@/types/types"

export const HeaderLinks: THeaderLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Courses", href: "/courses" },
    { title: "Activities", href: "/activities" },
    { title: "Art Galleries", href: "art-galleries" },
    { title: "Franchise", href: "/franchies" },
    { title: "Online Classes", href: "/online-classes" },
    { title: "Videos", href: "/videos" },
    { title: "Pay Fee", href: "/pay-fee" },
    { title: "Contact", href: "/contact" },
]

export const InfoHeader: TInfoHeader = {
    name: "NIFA Is A Unit Of Nifaedutech Pvt Ltd.",
    title: "Welcome to the National Institute of Fine Arts",
    phoneNumber: {
        icon: "SVG-HERE", numbers: ["9555112200", "9810130552"]
    },
    mail: "admission@nifafinearts.com",
    socialIcons: [
        { title: "Facebook", href: "https://www.facebook.com/", icon: "SVG-HERE" },
        { title: "Twitter", href: "https://www.twitter.com/", icon: "SVG-HERE" },
        { title: "Instagram", href: "https://www.instagram.com/", icon: "SVG-HERE" },
        { title: "YouYube", href: "https://www.youtube.com/", icon: "SVG-HERE" }
    ]
}