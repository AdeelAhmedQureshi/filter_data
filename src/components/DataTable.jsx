import React, {useState,useEffect} from 'react';
import sampleData from '../sampleData';
import FilterBar from './FilterBar';

function DataTable(){

    // filtering data based on given conditions:
    const [filters,setFilters] = useState({name:'', age:'', city:'', occupation:''}); 

    useEffect(() => {
        console.log("Filters updated:", filters);
    }, [filters]);
    
    const filteredData = sampleData.filter(item => {
        /*
        item.name.toLowerCase().includes(filters.name.toLowerCase())
        This checks if the lowercase version of filters.name is found anywhere inside the lowercase version of item.name
        */
        return(
        item.name.toLowerCase().includes(filters.name.toLowerCase())
        && (filters.age === '' || item.age===Number(filters.age )) 
        && (filters.city === '' || item.city===filters.city)
        && (filters.occupation === '' || item.occupation === filters.occupation)
        );
    });

    // to reset filters
    const resetFilters = ()=> {
        setFilters({name:'',age:'',city:'',occupation:''});
    };


    return(
        <>
        <div>
         { /*filterbar component*/}
        <FilterBar filters={filters} setFilters={setFilters} resetFilters={resetFilters} />

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item)=>
                        (
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                            <td>{item.occupation}</td>
                        </tr>
                        )
                    )}
                </tbody>
            </table>        
        </div>
        </>
    );
}
export default DataTable;