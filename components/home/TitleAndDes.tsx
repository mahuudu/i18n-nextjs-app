import { Typography } from '@mui/material'
import React from 'react'

export default function TitleAndDes({
    title,
    des,
    t
}: any) {
    
    return (
        <div className='flex flex-col gap-y-6 items-center max-md:gap-y-4'>
            <Typography
                variant='h1'
                sx={{
                    fontSize: '48px',
                    lineHeight: '66px',
                    fontWeight: 600,
                }}
                color='black.main'
                className='max-md:text-[24px] max-md:leading-8 max-md:text-center'
            >
                        {t(title)}
            </Typography>
            <Typography
                variant='body1'
                sx={{
                    fontSize: '18px',
                    lineHeight: '28px',
                    fontWeight: 400,
                    marginBottom: '0px',
                    textAlign: 'center'
                }}
                color='black.main'
                className='max-md:text-[14px] max-md:leading-5 max-md:text-center'
            >
                  {t(des)}
            </Typography>
        </div>
    )
}
