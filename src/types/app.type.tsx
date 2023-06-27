import { TypographyProps } from "@mui/material"

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

export type TimerProps = TypographyProps

export type ArrowProps = ThumbnailProps & {
    right: string
    onClick: () => void
}

export type HomeBodyProps = {
    projectName: string
    projectURL: string
}