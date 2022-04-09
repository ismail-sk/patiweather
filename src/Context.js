import {createContext, useContext, useState} from 'react';

const SlectedContext = createContext();

export const MainProvider =( {children}) => {
    
    const [selectedCity, setSelectedCity] = useState(/* localStorage.getItem("tmp") || */
        {
          "id": 77,
          "name": "Yalova",
          "latitude": "40.6500",
          "longitude": "29.2667",
          "population": 233009,
          "region": "Marmara"
        });
/*     useEffect(()=> {
        localStorage.setItem("tmp,", selectedCity);
    }, [selectedCity]); 
 */
    const useValues = {
        selectedCity,
        setSelectedCity
    };

    return (
        <SlectedContext.Provider value={useValues}>{children}</SlectedContext.Provider>
    )
};

export const useSelectedCity = () => useContext(SlectedContext);
