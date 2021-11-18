import React from 'react'
import { Paper, makeStyles, Card, Typography } from '@material-ui/core'

const useStyles = makeStyles( theme=>({
    root : {
        background : '#fdffff'
    },
    pageHeader:{
        padding:theme.spacing(3),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

export default function FamilyHealthPageHeader(props) {
    const { name, familyMemberName, icon} = props;
    const classes = useStyles();
    return (
        <div>
            <Paper elevation={1} square className={classes.root}>
                <div className={classes.pageHeader}>
                    <Card className={classes.pageIcon}>
                        {icon}
                    </Card>
                    <div className={classes.pageTitle}>
                        <Typography
                            variant = "h6"
                            component = "div"
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant = "subtitle2"
                            component = "div"
                        >
                            {"c\\o "+familyMemberName }
                        </Typography>
                        
                    </div>
                </div>
            </Paper>
        </div>
    )
}
