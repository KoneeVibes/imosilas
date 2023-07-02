import { TypographyProps, BoxProps } from "@mui/material"

export type Projects = {
    name: string
    url: string
    homePageBg: string
    thumbnail: string
    projectPageBg: string
    indicator: string
    introduction: string
    details: {
        "About": string
        "Release Date": string
        "Art Direction By": string
        "Design By": string
        "Category": string
        "Strategy": string
    }
    description: string
    imgs: []
}[]

export type ThumbnailProps = {
    url: string
    alt?: string
}

export type NavProps = {
    logo: React.ReactNode
    utility: React.ReactNode
}

export type TimerProps = TypographyProps

export type ArrowProps = ThumbnailProps & {
    right: string
    onClick: () => void
}

export type HomeBodyProps = {
    projectName?: string
    projectURL?: string
}

export type HeaderProps = HomeBodyProps & BoxProps

export type ProjectProps = {
    bg: string
    name: string
    url: string
}