import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProfileCard from "../ProfileCard";

const data = [1,2,3,4,5,6,7,8,9]
const Welcome = () => {

    return (
        <div style={{padding:'12px'}}>
        <Grid style={{textAlign:'start'}} container spacing={1}>
          {
            data.map((d)=>{
              return (<Grid key = {d} item xs={6} sm = {6} md={6} lg={6}>
                  <ProfileCard/>
                </Grid >
              )
            })
          }

        </Grid>
        </div>

    )

}


export default React.memo(Welcome);