import { IoSearch } from "react-icons/io5";

const SearchBox  =() =>{
return(
    
        <div className="searchBox position-relative d-flex align-items-center">
        <IoSearch className="mr-1" />
        <input type="text" placeholder="Search here..."/>

        </div>
    
)
}
export default SearchBox;