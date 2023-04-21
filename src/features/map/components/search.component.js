import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    position: absolute;
    z-index: 999;
    top: 25px;
    width: 100%;
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])

    return (
        <SearchContainer>
            <Searchbar
                placeholder="search for a location"
                value={searchKeyword}
                icon={"map"}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={text => {
                    setSearchKeyword(text)
                }}
                style={{ backgroundColor: 'white' }} elevation={2} />
        </SearchContainer>
    )
}