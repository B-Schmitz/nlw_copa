import React from "react";
import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base";

interface Props extends IButtonProps {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
}

export function Button(p: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={p.type === "SECONDARY" ? "red.500" : "yellow.500"}
      _pressed={{
        bg: p.type === "SECONDARY" ? "red.600" : "yellow.600",
      }}
      _loading={{
        _spinner: { color: "white" },
      }}
      {...p}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={p.type === "SECONDARY" ? "white" : "black"}
      >
        {p.title}
      </Text>
    </ButtonNativeBase>
  );
}
