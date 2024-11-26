import { FC } from "react"
import { SceneProps } from "./types"

const Scene: FC<SceneProps> = ({ category, article, scene }) => {
    return <div>{category} {article} {scene}</div>
}

export default Scene