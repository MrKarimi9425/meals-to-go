import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {

    const [keyword, setKeyword] = useState("san francisco")
    const [location, setLocation] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword)
    }

    useEffect(() => {
        if (!keyword) {
            return;
        }
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then(result => {
                setIsLoading(false);
                setLocation(result);
            }).catch(error => {
                setIsLoading(false);
                setError(error);
            })
    }, [keyword])



    return <LocationContext.Provider
        value={{
            isLoading,
            error,
            keyword,
            search: onSearch,
            location
        }}
    >
        {children}
    </LocationContext.Provider>
}