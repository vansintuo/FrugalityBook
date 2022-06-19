import React, { useRef, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Search from "@mui/icons-material/Search";
import { IconButton, Paper } from "@mui/material";
import searchValueState from "../../../states/searchValue";
import { useRecoilState } from "recoil";
import unauthorFetch from "../../../utils/functions/api/unauthorFetch";
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";
import { redirectUser } from "../../../utils/functions/auth/authUser";
import { useRouter } from "next/router";
// import useStyle from "../style";
const NewSearchBar = () => {
    const theme = useTheme()
    const isMacth = useMediaQuery(theme.breakpoints.down('md'))
    const useStyle = makeStyles({
        container: {
            position: 'relative',
            backgroundColor: 'rgba(0,0,0,0.1)',
            height: '40px',
            borderRadius: 30,
            padding: '0 auto',
            cursor: 'pointer',
            "&:hover": {
                "& $text": {
                    '& input': {
                        width: `${isMacth ? "300px" : "350px"}`,
                        padding: '0 10px',
                    }
                },
                "& $result": {
                    display: 'block',
                    padding: '15px',
                }
            }
        },
        button: {
            float: 'right',
            width: '10px',
            height: 35,
            borderRadius: '50%',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
        },
        text: {
            float: 'left',
            '& input': {
                border: 'none',
                outline: 'none',
                background: 'none',
                padding: '0px',
                lineHeight: '40px',
                fontSize: 16,
                color: 'white',
                width: 0,
                transition: '0.5s',
            }
        },
        result: {
            display: 'none',
            top: 0,
            height: 250,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            overflow: "hidden",
            overflowY: "auto",
        }
    })
    const [searchValue, setSearchValue] = useRecoilState(searchValueState);
    const classes = useStyle()
    const inputRef = useRef()
    const [filterData, setFilterData] = React.useState([]);
    const [dataToSearch, setDataToSearch] = React.useState([]);
    const [dataStore, setDataStore] = React.useState([])
    const router = useRouter()

    // ***********************  CATCH DATA FROM FIREBASE *********************
    useEffect(async () => {
        const res = await unauthorFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/books`)
        setDataToSearch(res.data)
    }, []);
    // *********************** CLICK SEARCH ICON *******************************
    function handleSearch(e) {
        console.log('search value ::::::::: ', searchValue._id)
        // redirectUser(`/productDetail/${searchValue._id}`)
        router.push(`/productDetail/${searchValue._id}`)
    }
    function handleSearchBySubmit(e) {
        e.preventDefault()
        alert('clicked')
        // window.location.reload()
        // router.push(`/productDetail/${searchValue._id}`)
    }
    //*********** CATCH VALUE SEACH WHEN CLICK BOOK TITLE ***************** 
    const handleCatchValueSearch = (data) => {
        console.log(data)
        setSearchValue(data);
        inputRef.current.value = data.title.toLowerCase()
    }
    // ************ CUSTOM SEARCH RESULT *************************************
    const handleChange = (event) => {
        console.log('data to search :::: ', dataToSearch)
        const searchValue = event.target.value;
        console.log('serch value :::::::', searchValue)
        const newFilter = dataToSearch.filter((value) => {
            return value.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        if (searchValue === "") {
            setFilterData([]);
            setSearchValue("");
        } else setFilterData(newFilter);
    };
    return (
        <>
            <div className={classes.container}>
                <form onSubmit={handleSearchBySubmit} className={classes.text}>
                    <input
                        type='text'
                        placeholder='Book title ...'
                        name='searchValue'
                        defaultValue=''
                        ref={inputRef}
                        onChange={handleChange}
                    >
                    </input>
                </form>
                <IconButton className={classes.btn} onClick={handleSearch}>
                    <Search sx={{ color: '#00bdd7', '&:hover': { color: 'white' } }} />
                </IconButton>
                {/*:::::::::::: search result ::::::::::::::: */}
                {console.log('filter data :::::::', filterData)}
                {
                    filterData.length != 0 && (
                        <Paper elevation={5} className={classes.result}>
                            {
                                filterData.map((item, index) => {
                                    return (
                                        <table key={index}>
                                            <tr>
                                                <td>
                                                    <Typography
                                                        variant='h6'
                                                        onClick={handleSearch}
                                                        sx={{ '&:hover': { color: '#00bdd7' }, width: '100%', }}>
                                                        {item.title}
                                                    </Typography>
                                                </td>
                                            </tr>
                                        </table>
                                    )
                                })
                            }
                        </Paper>
                    )
                }
            </div>
        </>
    )
}
export default NewSearchBar;

