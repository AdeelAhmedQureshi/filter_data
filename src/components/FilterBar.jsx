import React from 'react';

export default function FilterBar({ filters, setFilters, resetFilters }) {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Filter by name" 
                value={filters.name} 
                onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            />
            <input 
                type="number" 
                placeholder="Filter by age" 
                value={filters.age} 
                onChange={(e) => setFilters({ ...filters, age: e.target.value })}
            />
            <select 
                value={filters.city} 
                onChange={(e) => setFilters({ ...filters, city: e.target.value })}
            >
                <option value="">Select City</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Los Angeles">Los Angeles</option>
            </select>
            <select 
                value={filters.occupation} 
                onChange={(e) => setFilters({ ...filters, occupation: e.target.value })}
            >
                <option value="">Select Occupation</option>
                <option value="Engineer">Engineer</option>
                <option value="Designer">Designer</option>
                <option value="Doctor">Doctor</option>
            </select>
            <button onClick={resetFilters}>Reset Filters</button>
        </div>
    );
}
