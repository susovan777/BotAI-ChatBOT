import { Box, Typography, Stack, Grid } from '@mui/material'
import icon from '../../assets/bot.png'
import Card from './Card'

export default function InitialChat({ generateResponse }) {

    const initialData = [
        {
            heading: "Hello",
            subtext: "Hello! How can I assist you today?"
        },
        {
            heading: "My order has not arrived yet.",
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: "How do I cancel my order?",
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: "How can I update my email address?",
            subtext: 'Get immediate AI generated response'
        },
    ]


    return (
        <Stack height={1} justifyContent={'flex-end'} p={{ xs: 2, md: 3 }}>
            <Stack
                alignItems={'center'}
                spacing={2}
                my={5}
            >
                <Typography variant='h2'>
                    Hi, Please tell me your query!
                </Typography>
                <Box
                    component={'img'}
                    src={icon}
                    height={{ xs: 42, md: 70 }}
                    width={{ xs: 42, md: 70 }}
                    boxShadow={4}
                    borderRadius={'50%'}
                />
            </Stack>
            <Grid container spacing={{ xs: 1, md: 3 }}>
                {initialData.map(item => (
                    <Grid item key={item.heading} xs={12} md={6}>
                        <Card heading={item.heading} subtext={item.subtext} handleClick={generateResponse} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}