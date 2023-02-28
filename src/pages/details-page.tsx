import { useState } from 'react';
import { Add } from "@mui/icons-material";
import { useList } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { useForm, FieldValues } from '@pankod/refine-react-hook-form';

import { PropertyCard, CustomButton } from 'components';

import Form from 'components/common/Form';

const DetailsPage = () => {
    const navigate = useNavigate();
    const [deseaseImage, setDeseaseImage] = useState({name: '', url: ''});
    const {refineCore: {onFinish, formLoading}, register, handleSubmit} = useForm();

    const handleImageChange = (file: File) => {
        const reader = (readFile:File) => new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(readFile);
        });
        reader(file).then((result: string) => setDeseaseImage({
        name: file?.name, url: result
        }));
    };
    const onFinishHandler = async (data: FieldValues) => {
        if(!deseaseImage.name) return alert('Please Select Image');
    };

  return (
    <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography fontSize={25} fontWeight={700} color="#11142d">Details Page</Typography>
        </Stack>
        <Form type="Create" register={register} onFinish={onFinish} formLoading={formLoading} handleSubmit={handleSubmit} handleImageChange={handleImageChange} onFinishHandler={onFinishHandler} deseaseImage={deseaseImage }/>
    </Box>
  )
}

export default DetailsPage