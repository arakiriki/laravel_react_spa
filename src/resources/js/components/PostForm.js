import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => createStyles({
    textArea: {
        marginRight: theme.spacing(2),
    },
}));



function PostFrom(props) {

    const classes = useStyles();

    const {data, inputChange, btnFunc} = props;

    return (
        <form className=''>
            <TextField id="name" label="task" variant="outlined" className={classes.textArea} className='mt-3 d-flex justify-content-center' name="name" value={data.name} onChange={inputChange}/>
            <TextField id="content" label="content" variant="outlined" className={classes.textArea} className='mt-3 d-flex justify-content-center' name="content" value={data.content} onChange={inputChange} />
            <Button color="primary" variant="contained" href="/" className='mt-3 d-flex justify-content-center' onClick={btnFunc} >登録</Button>
        </form>
    );
}

export default PostFrom;