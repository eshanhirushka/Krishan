import { Box, Stack, Typography, Button, width } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { FormProps } from 'interfaces/common';

import CustomButton from '../components/common/CustomButton';

const ScanningPage = () => {
  return (
    <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography fontSize={25} fontWeight={700} color="#11142d">Scanning Page</Typography>
        </Stack>
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
          <Typography fontSize={14} color="#808191" sx={{wordBreak: 'break-all'}}></Typography>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"}
                alt="avatar"
                width={90}
                height={90}
                style={{borderRadius: "100%", objectFit: "cover",}}/>
          
      </Stack>     
    </Box>
    <Box width="100%" flex={1} maxWidth={700} display="flex" flexWrap="wrap" gap="20px">
      <Stack direction="column" gap={1} justifyContent="space-between" width="100%" flexWrap="wrap">
        <Box border={2} padding="10px" alignItems="center">
          <Stack direction="row" justifyContent="center">
            <Typography color="#11142d" fontSize={20} fontWeight={500} my="5px">Scanning Progress</Typography>
          </Stack>
          <Stack direction="row" justifyContent="center">
            <Typography color="#11142d" fontSize={20} fontWeight={500} my="5px">Message</Typography>
          </Stack>
          <Stack direction="row" justifyContent="center">
            <Button style={{backgroundColor: "#475be8", color: "#fcfcfc", width: "49%", marginTop: "10px"}}>View Details</Button>
          </Stack>   
        </Box>
      </Stack>       
    </Box>
  </Box>
    </Box>
  )
}

export default ScanningPage