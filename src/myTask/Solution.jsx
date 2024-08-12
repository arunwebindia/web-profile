import { Textarea, Input } from '@mui/joy'
import { Button, FormLabel, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, {useState } from 'react'
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

export default function Solution({ programming }) {
    const [vewAns, setViewAns] = useState(true);
    const [viewNew, setViewNew] = useState(true);
    const [replyData, setReplyData] = useState({ name:'', message:'' });
    const notify = () => toast.success('Thank you for contact me.', {
        position: "top-right"});

    const handleReply = (e) => {
        e.preventDefault();
        const fn = async () => {
            const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/programming/reply/${programming._id}`, replyData);
        }
        fn();
        notify();
    }
    return (
        <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', backgroundColor: '#ffd1c233', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 0' }} id="solution">
            <Box className="section-wrapper" sx={{ maxWidth: '90%' }} width={'70%'}>
                <Box className="ques-box" border={".3px solid lightblue"} p={1}>
                    <Box className="ques" sx={{ padding: '.5rem', fontSize: '1.6rem', borderLeft: '4px solid red', color: 'green' }}>
                        <Typography>
                            {programming.question}
                        </Typography>
                    </Box>
                    <Button variant="outlined" size="small" sx={{ marginTop: '.5rem', marginBottom: ".5rem" }} onClick={() => setViewAns(!vewAns)}>
                        {vewAns ? 'view' : 'hide'} answer
                    </Button>
                    <Box className="ans" sx={vewAns ? { background: "#000", color: "white", height: 0, overflow: 'hidden', borderRadius: ".25rem" } : { background: "#000", color: "white", overflow: 'auto', padding: '.5rem', borderRadius: ".25rem", textAlign: 'start' }}>
                        <pre>{programming.answer}</pre>
                    </Box>
                    <Box className="post" sx={{ padding: '10px 0' }}>
                        <form onSubmit={handleReply}>
                            <Box>
                                <FormLabel sx={{ marginBottom: '.25rem' }}>Name</FormLabel>
                                <Input sx={{ marginBottom: '.5rem' }} name="name" value={replyData.name} onChange={(e) => setReplyData({ ...replyData, [e.target.name]: e.target.value })}></Input>
                                <FormLabel sx={{ marginBottom: '.25rem' }}>Send your code</FormLabel>
                                <Textarea minRows={5} size="sm" name="message" value={replyData.message} onChange={(e) => setReplyData({ ...replyData, [e.target.name]: e.target.value })} />
                            </Box>
                            <Button variant="contained" size="small" sx={{ marginTop: '.5rem', marginBottom: ".5rem" }} type='submit'>
                                send
                            </Button>
                            <Button variant="contained" size="small" sx={{ marginTop: '.5rem', marginBottom: ".5rem", marginLeft: '.5rem' }} onClick={() => setViewNew(!viewNew)}>
                                {viewNew ? 'view' : 'hide'} new
                            </Button>
                        </form>
                    </Box>
                    <Box className="new-post" style={viewNew ? { height: '0', overflow: 'hidden' } : { overflow: 'auto', border: '.2px solid lightgray', padding: '.5rem', borderRadius: '.5rem', background: '#fff' }}>
                        <Box sx={{ fontSize: '20px', marginBottom: '.25rem' }}>Comments ({programming?.reply?.length  ?  programming?.reply?.length : 0 })</Box>
                        {
                            programming.reply?.map((elem)=>{
                                return (
                                    <Box sx={{ padding: '.5rem' }}>
                                    <Box sx={{ color: 'blue', fontSize: "1.3rem", display: 'flex', gap: '.25rem', alignItems: 'center', mb: 1 }}> <Avatar>{elem.name.at(0)}</Avatar><span>{elem.name}</span></Box>
                                    <Box backgroundColor="#000" padding={'16px'} paddingLeft={"40px"} overflow={"auto"} color={'#fff'} borderRadius='.25rem'>
                                        <pre>
                                            {elem.message}
                                        </pre>
                                    </Box>
                                </Box>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
            <ToastContainer />
        </Box>
    )
}
