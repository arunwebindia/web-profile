import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { programming } from '../utility_files/utility';
import axios from 'axios';

export default function Programming({ setProgramming }) {
  const [filterData, setFilterData] = useState(programming);
  const [num, setNum] = useState(0);
  useEffect(() => {
    const fn = async () => {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/programming`);
      setFilterData(res.data);
    }
    fn();
  })

  let numberofPage = Math.ceil(programming.length / 10);

  useEffect(() => {
    let start = num * 10 + 1;
    setFilterData(programming.slice(start, start + 10));
    }, [num])

  function handlePagination(nu) {
    setNum(nu);
    }

  function prev() {
    if (num > 0) {
      setNum(num - 1);
    }
  }

  function next() {
    if (num < numberofPage - 1) {
      setNum(num + 1);
    }
  }
  return (<>
    <Box sx={{ width: '100%', p: 2, minHeight: "100vh" }}>
      <Box className="mycontainer">
        <Box sx={{ fontSize: '26px', padding: '.5rem 0', borderBottom: ".3px solid blue" }}>
          Javascript  based on <a href="https://www.w3resource.com/javascript-exercises/" target='_blank'>w3 resource</a>
        </Box>
        {
          filterData.map((elem, index) => {
            return (
              <Box sx={{ padding: ".5rem", marginBottom: "1rem" }}>
                <Typography sx={{ paddingBottom: ".5rem" }}>
                  {num * 10 + index + 1}. {elem.question}
                </Typography>

                <Link to={'/task/programming/solution'} onClick={() => setProgramming(elem)} >See solution</Link>
              </Box>
            )
          })
        }
      </Box>
      <Box sx={{ textAlign: 'end' }}>
        <Button onClick={prev} size='small'>prev</Button>
        {
          Array.from(Array(numberofPage)).map((elem, ind) => {
            return (<Button onClick={() => handlePagination(ind)} sx={num == ind ? { border: '1px solid blue' } : ""} size='small'>{ind + 1}</Button>)
          })
        }
        <Button onClick={next} size='small'>next</Button>
      </Box>
    </Box>
  </>
  )
}
