import React from 'react';
import { Typography, Box, Stack, FormControl, FormHelperText, TextField, TextareaAutosize, Select, MenuItem, Button } from '@pankod/refine-mui';
import { FormProps } from 'interfaces/common';
import CustomButton from './CustomButton';

const Form = ({ register, handleSubmit, handleImageChange, deseaseImage, formLoading, onFinishHandler}: FormProps) => {
  return (
  <Box mt="20px" display="flex" flexDirection={{ xs: "column", lg: "row" }} borderRadius="15px" padding="20px" bgcolor="#fcfcfc" alignItems="center">
    <Box flex={1} maxWidth={764}>
      <Stack direction="column" gap={1} flexWrap="wrap" width="100%" mb={2} alignItems="center">
        <Stack direction="row" gap={2}>
          <Typography color="#11142d" fontSize={16} fontWeight={500} my="10px">Desease Photo</Typography>
          <Button component="label" sx={{width: "fit-content", color: "#2ed480", textTransform: 'capitalize', fontSize: 16}}>
            Upload *<input hidden accept="image/*" type="file" onChange={(e) => {
            // @ts-ignore 
            handleImageChange(e.target.files[0])}} />
          </Button>
        </Stack>
          <Typography fontSize={14} color="#808191" sx={{wordBreak: 'break-all'}}>{deseaseImage?.name}</Typography>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"}
                alt="avatar"
                width={90}
                height={90}
                style={{borderRadius: "100%", objectFit: "cover",}}/>
          <CustomButton type="Recapture" title={formLoading ? 'Recapturing...' : 'Recapture'} backgroundColor="#475be8" color="#fcfcfc" />
      </Stack>     
    </Box>
    <Box width="100%" flex={1} maxWidth={700} display="flex" flexWrap="wrap" gap="20px">
      <Stack direction="column" gap={1} justifyContent="space-between" width="100%" flexWrap="wrap">
        <Typography color="#11142d" fontSize={20} fontWeight={500} my="5px">Completion Message</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="#11142d" fontSize={30} fontWeight={500} my="5px">Overall Quality</Typography>
          <Typography color="#11142d" fontSize={30} fontWeight={500} my="5px">XXX</Typography>
        </Stack>
        <Box border={2} padding="10px">
          <Stack direction="row" justifyContent="space-between">
            <Typography color="#11142d" fontSize={16} fontWeight={500} my="5px">Desease Detected?</Typography>
            <Stack direction="row">
              <Button style={{ minWidth: "1px", color: "#000000", padding: "2px"}}>Yes</Button>
              <Typography my="7px">/</Typography>
              <Button style={{ minWidth: "10px", color: "#000000", padding: "2px"}}>No</Button>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography color="#11142d" fontSize={16} fontWeight={500} my="5px">Desease</Typography>
            <Typography color="#11142d" fontSize={16} fontWeight={500} my="5px">XXXX</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography color="#11142d" fontSize={16} fontWeight={500} my="5px">Desease Level</Typography>
            <Typography color="#11142d" fontSize={16} fontWeight={500} my="5px">XX%</Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <CustomButton type="Save" title={formLoading ? 'Saving...' : 'Save'} backgroundColor="#475be8" color="#fcfcfc" />
            <CustomButton type="Add Note" title={formLoading ? 'Adding note...' : 'Add Note'} backgroundColor="#475be8" color="#fcfcfc" />
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <CustomButton type="Genarate Report" title={formLoading ? 'Genarating Report...' : 'Genarate Report'} backgroundColor="#475be8" color="#fcfcfc" />
            <CustomButton type="Compare Result" title={formLoading ? 'Comparing Result...' : 'Compare Result'} backgroundColor="#475be8" color="#fcfcfc" />
          </Stack>    
        </Box>
        <Box border={2} padding="10px">
          <Stack direction="row" justifyContent="space-between">
            <Typography color="#11142d" fontSize={16} fontWeight={500} my="5px">Precautions</Typography>
          </Stack>
          <Stack direction="row" gap={1}>
            <Typography color="#11142d" fontSize={16} fontWeight={500} my="5px">Put</Typography>
            <Typography color="#11142d" fontSize={16} fontWeight={500} my="5px">XXXX</Typography>
            <Typography color="#11142d" fontSize={16} fontWeight={500} my="5px">and</Typography>
            <Typography color="#11142d" fontSize={16} fontWeight={500} my="5px">Check</Typography>
            <Typography color="#11142d" fontSize={16} fontWeight={500} my="5px">YYYY</Typography>
          </Stack>   
        </Box>
      </Stack>       
    </Box>
  </Box>
  )
}

export default Form