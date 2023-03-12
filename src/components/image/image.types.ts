import { SxProps, Theme } from '@mui/material';
import { ImgHTMLAttributes } from 'react';
import { Effect } from 'react-lazy-load-image-component';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  disabledEffect?: boolean;
  src?: string;
  effect?: Effect;
  ratio?:
    | '4/3'
    | '3/4'
    | '6/4'
    | '4/6'
    | '16/9'
    | '9/16'
    | '21/9'
    | '9/21'
    | '1/1';
  sx?: SxProps<Theme>;
}
