import FilterItem from "./filterItem";
import { ReactNode } from "react";
import { Wrapper } from "./style";

type RootFilterProps = {
    children : ReactNode
}

function Filter ( {children } : RootFilterProps ) {

  return (
    <Wrapper>
        {children}
    </Wrapper>
  )
  
}

Filter.Item = FilterItem;

export default Filter;