import React, {useState} from 'react'
import FamilyHealthPageHeader from './FamilyHealthPageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles, Paper, Toolbar, TableBody, TextField, InputAdornment, TableRow, TableCell } from '@material-ui/core';
import useTable from './useTable';
import { SearchIcon } from '@material-ui/icons/Search';

const useStyles = makeStyles( theme =>({
    pageContent : {
        margin : theme.spacing(5),
        padding : theme.spacing(3)
    },
    searchInput : {
        marginTop : theme.spacing(3),
        width : '100%',
    }
}))

const headCells = [
    {id:'healthProblem', label:'Health Problem'},
    {id:'healthStatus', label:'Health Status'},
    {id:'date', label:'Appointed Date'}
]

export default function MyFamilyHealth() {

    const classes = useStyles();

    const lister = [
        {id:1,problem: 'throat pain', healthStatus:'Pending',date:'25-03-2021'},
        {id:2,problem: 'ear pain',healthStatus:'Moderate',date:'11-04-2021'},
        {id:3,problem: 'eye sight',healthStatus:'Healthy',date:'04-05-2021'},
        {id:4,problem: 'teeth',healthStatus:'Severe',date:'28-06-2021'},
        {id:5,problem: 'diabetics',healthStatus:'Moderate',date:'12-07-2021'},
        {id:6,problem: 'heart problem',healthStatus:'Helathy',date:'09-08-2021'},
        {id:7,problem: 'gas trouble',healthStatus:'Severe',date:'25-09-2021'},
        {id:8,problem: 'eye sight',healthStatus:'Healthy',date:'04-05-2021'},
        {id:9,problem: 'teeth',healthStatus:'Severe',date:'28-06-2021'},
        {id:10,problem: 'diabetics',healthStatus:'Moderate',date:'12-07-2021'}
    ]

    const [expanded, setExpanded] = React.useState(false);
    const [records, setRecords] = useState(lister)
    const [filterFn, setFilterFn] = useState({fn : items =>{return items}})

    const handleChange = (panel) => (event, isExpanded) =>{
        setExpanded(isExpanded ? panel : false);
    }

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn:items =>{
                if(target.value==="")
                    return items
                else
                    return items.filter(x => x.problem.toLowerCase().includes(target.value))
            }
        })
    }

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } =useTable(records, headCells, filterFn);

    return (
        <>
            {/* <FamilyHealthPageHeader 
                name = "MLK Rao(42 yrs)"
                familyMemberName = "TT Pal(73 yrs)"
                icon = {<PeopleOutlineTwoToneIcon fontSize="large" />}
            /> */}
            <Paper className={classes.searchInput}>
                <Toolbar>
                    <TextField
                        variant = "outlined"
                        label = "Search Problem"
                        className = {classes.searchInput}
                        Adornment = {<InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>}
                        onChange = {handleSearch}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item=>(
                                <TableRow key={item.id}>
                                    <TableCell>{item.problem}</TableCell>
                                    <TableCell>{item.healthStatus}</TableCell>
                                    <TableCell>{item.date}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
    )
}
