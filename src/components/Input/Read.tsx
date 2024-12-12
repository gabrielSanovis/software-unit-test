import React from "react"
import { TextInput, TextInputProps } from "react-native"

type ReadProps = TextInputProps

export const Read = ({ ...rest }: ReadProps) => {
    return (
        <TextInput
            {...rest}
            placeholderTextColor={"#2b2b2b"}
        />
    )
}
