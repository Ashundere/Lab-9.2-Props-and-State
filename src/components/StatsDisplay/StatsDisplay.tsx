import { useState } from "react";
import type { StatsDisplayProps } from "../../types";
import { TextInput } from "../TextInput/TextInput";

// export function CharacterStats(input:string){
//     return input.length
// }

// export function WordStats(input:string){
//     return (input.split(" ")).length
// }

export function StatsDisplay(props: StatsDisplayProps){
    console.log(props)
    // const [stats, getStats] = useState()
    // const [wordCount, getWordCount] = useState(0)
    // const [characterCount, getCharacterCount] = useState(0)


    return(
        <div>
            <h4>Characters:</h4>
                <h6>{TextInput.length}</h6>
            <h4>Words:</h4>
                <h6>{}</h6>
            <h4>Reading Time:</h4>
                <h6>{}</h6>
        </div>
    )
}