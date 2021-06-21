import React from 'react';
import {PageTitleContainer, PageTitleStyled} from './PageTitle.style';

interface PageTitleProps {
    title: string;
    subtitle: string
}

export default function PageTitle(props : PageTitleProps){
    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {props.title}
            </PageTitleStyled>
            
            {props.subtitle}
        </PageTitleContainer>
    )
}
