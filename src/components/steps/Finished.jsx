import { Box, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { renderText } from '../Common/displayComponents'
import { Text} from '../Common/displayComponents'


export default function Finished({state}) {
  return (
    <Paper component={Box} p={2}>
      
         <Box mt={1} mb={2}>
                            {renderText({ label: "Connect Your Site To AdSense", variant:"h6" })}
                            </Box>

<Grid container spacing={2} justify="flex-end">
<Box p={2}>
Copy and paste this code in the HTML of your site, between the head tags. <br></br>
Place the code on every page you want to show ads.
After we’ve run some checks, your site will be ready to show ads.
Remember to go to Ads and choose the ad formats you want to show.<br></br></Box>

</Grid>
<Box p={2}> <h4>WordPress user? <a href="https://www.google.com/adsense/new/u/0/pub-6952563424363305/sites/my-sites/new" >
              {" "}
              Learn how to insert code in your WordPress site" &#8594;
            </a>
          </h4>  </Box>


<Box p={2}>Your AdSense code </Box>

            <Grid container  spacing={2} style={{ marginBottom:"10px"}}>
                <Grid item xs={12} sm={12}>
                  <Paper Component={Box}>
                       <Box mb={4} pt={2}>

                            {Text
                            ({ label: 
    "<script async src=, https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6952563424363305 crossorigin= anonymous> </script>"
                               })}
                       </Box>
                       
                    </Paper>
                    
                    <br/>
                        <form>
                            </form>
    
</Grid>
            </Grid>
            <Box mt={1} mb={2}>
                            {renderText({ label: "Thank You For Connecting With Adsense", variant:"h5" })}
                            
                            </Box>


    </Paper>
    
  );
}