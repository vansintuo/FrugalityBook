import React, { useEffect,useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {listDocuments} from "../../utils/functions/fireStore";
import searchValueState from "../../states/searchValue";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import unauthorFetch from "../../utils/functions/api/unauthorFetch";
import { redirectUser } from "../../utils/functions/auth/authUser";
const useStyle = makeStyles({
  search: {
    width: '50%',
    height: 35,
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
    borderRadius: "20px",
    paddingBottom: "25px",
    backgroundColor:'white',
    border:'1px solid #00bdd7',
    display:'flex',
  },
  searchIcon: {
    marginRight:'auto',
    // position:'absolute'
  },
  text: {
    position:'absolute',
    width: '90%',
    height: 18,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 5,
    fontSize: 15,
    outline: "none",
    border: "none",
  },
  searchResult: {
    minWidth: 320,
    height: 150,
    paddingLeft: 5,
    marginLeft: 15,
    overflow: "hidden",
    overflowY: "auto",
    marginTop: 1,
    backgroundColor: "white",
    cursor: "pointer",
  },
  hoverTitle: {
    color: "black",
    "&:hover": {
      color: "#00bdd7",
    },
  }, // can not apply scroll into search list
});
const SearchBar = () => {
  const router = useRouter();
  const inputRef = useRef()
  const resultRef = useRef()
  const classes = useStyle();
  const [filterData, setFilterData] = React.useState([]);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  const [dataToSearch, setDataToSearch] = React.useState([]);
  const [dataStore,setDataStore] = React.useState([])
  // ***********************  CATCH DATA FROM FIREBASE *********************
  useEffect(async () => {
    const res = await unauthorFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books`)
     setDataToSearch(res.data)
  }, []);
  // **************************** AFTER CLICK ON BOOK TITLE ******************
  useEffect(()=>{
      document.addEventListener('click', (event)=>{
        resultRef.current==undefined?"": resultRef.current.style.display='none'
      })
     
  },[])
  // *********************** CLICK SEARCH ICON *******************************
  function handleSearch(e) {
    console.log('search value ::::::::: ', searchValue._id)
    redirectUser(`/productDetail/${searchValue._id}`)
    // router.push(`/productDetail/${searchValue.id}`)
  }
  function handleSearchBySubmit(e) {
    e.preventDefault()
    router.push(`/productDetail/${searchValue._id}`)
  }
//*********** CATCH VALUE SEACH WHEN CLICK BOOK TITLE ***************** 
 const handleCatchValueSearch = (data)=>{
   console.log(data)
  setSearchValue(data);
   inputRef.current.value = data.title.toLowerCase()
 }
  // ************ CUSTOM SEARCH RESULT *************************************
  const handleChange = (event) => {
    console.log('data to search :::: ', dataToSearch)
    const searchValue = event.target.value;
    const newFilter = dataToSearch.filter((value) => {
      return value.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setFilterData([]);
      setSearchValue("");
    } else setFilterData(newFilter);
  };
 
  return (
    <div className={classes.search}>
      {console.log('data to search :::::', dataToSearch)}
      <div className={classes.inputSearch}>
        <form onSubmit={ handleSearchBySubmit}>
          <input
            className={classes.text}
            type="search"
            name="searchValue"
            ref={inputRef}
            onChange={handleChange}
            placeholder="Book title..."
          ></input>
          <span className={classes.searchIcon}>
            <IconButton
              onClick={handleSearch}
              style={{
                marginRight:'10px',
                marginBottom: "-1px",
              }}
            >
              <SearchIcon style={{ marginTop: "-4px" }} />
            </IconButton>
          </span>
        </form>
      </div>
      {/* ******************* SEARCH RESULT DROPDOWN ************************ */}
      {filterData.length != 0 && (
        <Paper elevation={1} className={classes.searchResult}    ref={resultRef}> 
          {filterData.map((item, index) => {
            return (
              <p
                className={classes.hoverTitle}
                key={index}
                onClick={() =>handleCatchValueSearch(item)}
              >
                {item.title}
              </p>
            );
          })}
        </Paper>
      )}
    </div>
  );
};

export default SearchBar;
