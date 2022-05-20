import React, {ChangeEvent} from "react";
import styled from "styled-components";

type ToggleType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputWrapper = styled.label`
  position: relative;
`
const Input = styled.input`
  position: absolute;
  left: -99999px;
  top: -99999px;

  &:checked + span {
    background-color: gray;

    &:before {
      left: 27px;
    }

  }
`

const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  background-color: gray;
  position: relative;
  transition: background-color 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 45px;
    transition: 0.2s;
    background-color: aquamarine;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }
`

export const Toggle = (props: ToggleType) => {

    return (
        <InputWrapper>
            <Input onChange={props.onChange} type={"checkbox"}/>
            <Slider/>
        </InputWrapper>
    )
}

