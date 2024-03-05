import React, { FC } from 'react';

interface LogoProps {
  width: number;
  height: number;
  color: string;
}

const Logo: FC<LogoProps> = ({ width, height, color }: LogoProps) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
    >
      <path
        d="M250.3 1.9c-1.2 1.1-2.3 1.8-2.6 1.5-.2-.3-1.5.6-2.8 2-1.9 2-2.7 2.2-3.8 1.3-1.1-.9-1.3-.9-.8 0 .4.7-.5 1.6-2.3 2.5-1.6.7-3 1.6-3 2 0 .5-.6.8-1.2.8-.7 0-3.3 1.3-5.7 2.9-2.5 1.7-4.8 2.8-5.3 2.5-.4-.3-.8.2-.8 1.1 0 .9-.4 1.3-1 1-.5-.3-2 .3-3.2 1.4-1.2 1.2-2.8 2.1-3.5 2.1-.7 0-1.3.4-1.3 1 0 .5-.6 1-1.4 1-.7 0-1.9.7-2.6 1.5-.7.8-1.6 1.2-2.1.9-.5-.3-.9 0-.9.5 0 .6-.7 1.1-1.5 1.1-.9 0-1.8.7-2.1 1.5-.4.8-1 1.2-1.5.9-.5-.3-.9 0-.9.6s-.4.8-1 .5c-.5-.3-1-.1-1 .5s-.4.9-.9.6c-.4-.3-2.3.6-4.1 1.9-1.9 1.4-3.8 2.5-4.3 2.5-.4 0-1.5.7-2.4 1.5-.8.8-1.8 1.3-2.3 1-.4-.3-1 .2-1.4 1-.3.8-1 1.5-1.7 1.5-.6 0-2.4.9-4 2.1-1.6 1.1-2.9 1.7-2.9 1.2 0-.4-.5 0-1.1.9-.5 1-1.9 1.8-2.9 1.8-1.1 0-2 .5-2 1.2 0 .6-.3.9-.6.5-.3-.3-1.5.3-2.7 1.4-1.1 1-2.7 1.9-3.4 1.9-.7 0-1.3.4-1.3 1 0 .5-.3 1-.7.9-1.6-.2-5.3 1.4-5.3 2.2 0 .5-.5.9-1.1.9-.6 0-2.4.9-4 2.1-1.6 1.1-2.9 1.7-2.9 1.3 0-.4-.7.1-1.5 1.2-.8 1-1.5 1.6-1.5 1.1 0-.9-8.2 4.1-9.2 5.7-.5.8-.8.7-.8-.1 0-.9-.7-.7-2 .5-1.9 1.6-9.3 5.9-16.7 9.8-1.8.9-3.3 2.1-3.3 2.6s-.4.7-1 .3c-.5-.3-1.8.3-3 1.5-1.1 1.1-2.6 2-3.4 2-.7 0-1.9.7-2.6 1.5-.7.8-1.6 1.2-2.1.9-.5-.3-.9-.1-.9.5 0 .5-1 1.3-2.2 1.7-1.3.4-2.8 1.4-3.5 2.3-.7.9-1.3 1.2-1.3.8 0-.4-1.7.4-3.7 1.8-2.1 1.4-4.1 2.5-4.6 2.5s-2.8 1.3-5.2 3c-2.4 1.6-4.8 3-5.4 3-.5 0-1.5.8-2 1.7-.6 1-1.1 1.4-1.1 1 0-.5-1.3.1-2.9 1.2-1.6 1.2-3.2 2.1-3.5 2.1-.4 0-1.6.9-2.8 2-1.2 1-2.5 1.7-3 1.4-.4-.3-.8 0-.8.5 0 .6-.7 1.1-1.6 1.1-.8 0-1.2.4-.9 1 .3.5.2 1-.4 1-1.8 0 0 2.8 2.2 3.5 1.2.4 2.5.7 3 .6.4-.1.7.4.7 1.1 0 .6.3.8.6.5.4-.4 1.9.2 3.4 1.3 1.6 1.1 3.1 2 3.4 2 .4 0 2 1 3.5 2.1 1.6 1.2 3.4 1.9 3.9 1.5.5-.3 1.2 0 1.5.8.3.8 2.2 1.9 4.1 2.6 2 .6 3.6 1.6 3.6 2.1s1 .9 2.3.9c1.3 0 2.9.6 3.6 1.2.9.9 1.2.9.7.1-.3-.7.2-1.4 1.4-1.8 1.1-.3 2-1.1 2-1.6 0-.6.5-.7 1-.4.6.3 1.3-.1 1.6-.9.3-.9 1-1.4 1.4-1.1.5.3 1.1.1 1.5-.5.4-.6 1.1-.8 1.6-.5.5.4.9.1.9-.5 0-.5 1.6-1.8 3.5-2.7 1.9-.9 3.5-2.1 3.5-2.5 0-.5.4-.7.9-.4.5.3 1.4-.1 2.1-.9.7-.8 1.9-1.5 2.6-1.5.8 0 1.4-.5 1.4-1 0-.6.6-1 1.4-1 .7 0 1.9-.7 2.6-1.5.7-.8 2.1-1.5 3.2-1.5 1 0 1.6-.5 1.3-1-.3-.6.3-1 1.4-1 1.2 0 2.1-.5 2.1-1 0-.6.7-1 1.5-1s1.5-.4 1.5-.8c0-.9 5.9-3.6 7.7-3.5.7 0 1.1-.2.9-.6-.5-.8 1.5-2.5 3.4-2.9.8-.2 1.8-.8 2.1-1.4.3-.5 1-1 1.5-1 1.7-.1 5.4-2.1 5.4-3 0-.4.7-.8 1.5-.8s2.4-.9 3.5-2 2.1-2 2.3-1.9c.8.2 5.7-2.2 5.7-2.9 0-.5.6-.9 1.3-.9.6 0 3.5-1.3 6.2-3 2.8-1.6 8.2-4.7 12-6.8 3.9-2.1 7.2-4.1 7.5-4.4.3-.4 2.1-1.5 4-2.4 1.9-1 5.3-2.8 7.5-4.2 2.2-1.3 5.8-3.4 8-4.6 2.2-1.2 5.8-3.3 8-4.8 2.2-1.4 4.3-2.5 4.7-2.6.4 0 1.6-.7 2.6-1.5s2.5-1.6 3.3-1.8c.7-.2 1.6-.7 1.9-1 .7-1 6-4.1 10-5.9 1.9-.8 4-2.2 4.8-3.2 1-1.1 1.1-1.2.6-.1-.6 1.1-.2 1 1.3-.3 1.1-.9 2.6-1.7 3.3-1.7.7 0 1-.3.6-.7-.3-.4.8-1.2 2.6-1.8 2.7-.8 3.5-.8 4.6.5 1.2 1.3 1.2 1.3.6 0-.5-.8.7-.3 2.5 1.2 1.8 1.6 3.9 2.8 4.7 2.8.8 0 1.4.5 1.4 1.1 0 .5.5.7 1 .4.6-.3 1-.2 1 .4 0 .5 1.6 1.5 3.5 2.2 1.9.7 3.5 1.7 3.5 2.2 0 .4.4.6.9.3.5-.4 1.1-.2 1.3.2.4 1 10.9 7.1 12.2 7 .5 0 1.2.4 1.5.9.9 1.3 8.5 5.8 9.4 5.5.4-.1.7.2.7.6 0 .5 1.8 1.7 4 2.7 2.2 1 4 2.2 4 2.7s.5.6 1 .3c.6-.3 1-.1 1 .4 0 .6.7 1.1 1.5 1.1s1.5.5 1.5 1.1c0 .5.4.8.9.4.6-.3 1.4.3 2 1.2.6 1 1.1 1.4 1.1 1 0-.5 1.3.1 2.9 1.2 1.5 1.1 3.1 1.8 3.5 1.4.3-.3.6-.1.6.6s.4 1 .9.7c.5-.3 1.2.1 1.5 1 .3.8 1 1.3 1.5.9.6-.3 1.4.3 2 1.2.6 1 1.1 1.4 1.1 1 0-.5 1.3.1 2.9 1.2 1.6 1.2 3.4 2.1 4 2.1.6 0 1.1.5 1.1 1.1 0 .5.4.8.8.5.5-.3 1.9.4 3.1 1.5 1.2 1.2 2.8 2.2 3.4 2.3.7.1 3 1.3 5.2 2.7 2.2 1.4 5.6 3.4 7.5 4.5 1.9 1 3.7 2.2 3.8 2.7.2.4.8.5 1.3.1.5-.3 1.2.2 1.5 1 .3.9 1 1.4 1.4 1.1.5-.3 1.5.1 2.3.9.8.8 1.7 1.2 2.1.9.3-.4.6-.1.6.5 0 .7.7 1.2 1.5 1.2.9 0 2.3.6 3.1 1.2 3.4 2.9 4 3.3 5.4 3.6 1.9.4 3.3 2.6 2 3-.6.2-.8.8-.5 1.3.3.4-.6 1.1-2 1.5-1.4.3-2.5 1-2.5 1.5s-.6.9-1.4.9c-.8 0-2.1.6-2.8 1.3-.7.7-3.4 2.4-6 3.7-2.7 1.3-4.8 2.8-4.8 3.2 0 .5-.4.7-.9.3-.5-.3-1.6.1-2.4.9-.8.8-1.7 1.2-2.1.9-.3-.3-.8.2-1.2 1.1-.3.9-1 1.4-1.4 1.1-.5-.3-1.5.2-2.3 1-.9.8-2 1.5-2.5 1.5s-2.1.9-3.6 2.1c-1.4 1.1-2.6 1.8-2.6 1.4 0-.4-.7 0-1.5.7-3.2 2.9-4.5 3.9-4.5 3.4 0-.3-2.5 1-5.5 2.9s-5.8 3.5-6.4 3.5c-.5 0-1.1.5-1.3 1.2-.2.6-1.3 1.2-2.4 1.3-1.1 0-3.1 1.1-4.4 2.3-1.3 1.2-2.8 2.2-3.3 2.2-.4 0-2.8 1.4-5.3 3-2.4 1.7-4.4 2.7-4.4 2.3 0-.4-.4-.2-.9.5-.4.7-1.6 1.4-2.5 1.6-1 .1-2.1.7-2.4 1.2-.7 1-2.7 2-4.5 2.3-.4 0-1.6.9-2.8 1.9-1.1 1.1-3.7 2.8-5.9 3.8s-4 2.2-4 2.6c0 .5-.4.8-.9.8-.6 0-3.7 1.6-7 3.5-3.3 2-6.2 3.4-6.5 3.3-.2-.2-1.3.5-2.3 1.5-1.1.9-2.3 1.4-2.6 1-.4-.3-.7-.1-.7.5 0 .7-.7 1.2-1.5 1.2s-1.5.5-1.5 1.1c0 .5-.4.7-1 .4-.5-.3-1-.3-1 .2 0 .4-1.1 1.3-2.5 2-1.4.6-2.3.7-1.9.2.3-.5-.1-.9-.8-.9-.8 0-.9-.3-.3-.8 1.4-1 1.7-3.2.4-3.2-.8 0-.8-.5.1-1.5 1-1.2 1-1.5-.1-1.5-.9 0-1-.3-.4-.8 1.4-1 1.7-3.2.4-3.2-.8 0-.8-.5.1-1.5 1-1.2 1-1.5-.1-1.5-1.2 0-1.2-.2 0-.9.9-.6 1-1.1.2-1.5-.6-.4-.8-1.3-.4-1.9 1.2-1.9 1.2-3.6.2-4.3-.6-.4-.6-1.1.1-1.9.8-.9.8-1.5 0-2-.6-.3-.7-1.2-.3-1.8 1.2-1.9 1.2-3.7.1-3.7-.6 0-.5-.7.3-1.6 1-1.3 1-1.7-.2-2.5-.8-.5-.9-.9-.2-.9 1.2 0 1.2-1.7 0-3.6-.3-.6-.4-1.4 0-1.8 1.2-1.2 1.2-5.6 0-5.6-.8 0-.8-.3-.2-.8 1.2-.8 1.3-2.2.3-3.8-.4-.6-.4-1.4-.1-1.8 1.2-1.2 1.1-5.6-.1-5.6-.7 0-.7-.3-.1-.8 1.5-1.1 1.7-3.2.2-3.2-.9 0-.9-.2.1-.9.8-.4 1.4-1.2 1.4-1.6 0-.4-.6-1.2-1.4-1.6-1.1-.7-1.1-.9.1-.9 1 0 1.1-.3.2-1.4-.9-1-.9-1.6-.1-2.1.6-.4.7-1.2.3-1.8-.7-1.1-.9-3.3-.3-4.7.7-2 .7-4-.2-4-.6 0-.5-.6.2-1.5 1-1.2 1-1.5-.1-1.5-1.2 0-1.2-.2 0-.9.9-.6 1-1.1.2-1.5-.6-.4-.8-1.3-.4-1.9 1.3-2.1 1.3-5.8 0-5-.7.4-.6 0 .2-1 .9-1.1 1-1.7.2-1.7-.6 0-1.1-.7-1.1-1.6 0-1.4-.3-1.4-1.5-.4-.8.7-1.5.9-1.5.4s-.7.2-1.6 1.4c-.8 1.2-2.3 2.2-3.3 2.2-1.1 0-2.2.7-2.5 1.6-.3.8-1 1.3-1.5 1-.5-.4-1.1-.3-1.3.2-.4 1.1-10.1 6.7-11 6.4-.5-.1-.8.2-.8.7 0 .5-1.3 1.4-3 2.1-1.6.7-2.7 1.6-2.5 2.1.3.4-.4.6-1.5.4-1.1-.2-2 0-2 .5 0 1.3-5.6 4.1-6.5 3.2-.5-.4-.5-.2-.2.4.4.7-.3 1.4-1.6 1.8-1.2.3-3.2 1.5-4.5 2.6-1.2 1.1-2.2 1.6-2.2 1 0-.5-.9-.1-2 1s-2.5 2-3 2c-.6 0-2 .9-3.2 2-1.2 1-2.5 1.7-3 1.4-.4-.3-.8 0-.8.5 0 .6-.7 1.1-1.5 1.1-.7 0-1.9.8-2.4 1.7-.8 1.3-1 1.4-1.1.4 0-1.1-.6-.8-2 .7-1.2 1.2-2.7 2.2-3.5 2.2-.8 0-1.5.5-1.5 1.1 0 .5-.4.7-1 .4-.5-.3-1-.1-1 .4 0 .6-.5 1.1-1.2 1.1-.6 0-2.6 1.1-4.4 2.5-1.8 1.4-3.8 2.5-4.4 2.5-.7 0-2.3.9-3.7 2-1.4 1.1-3.2 2-3.9 2-.8 0-1.4.5-1.4 1.1 0 .5-.4.7-1 .4-.5-.3-1-.1-1 .4 0 .6-.7 1.1-1.5 1.1s-1.5.4-1.5 1c0 .5-.5 1-1.1 1-.6 0-2.4.9-4 2.1-1.6 1.1-2.9 1.7-2.9 1.3 0-.4-.7.1-1.5 1.2-.8 1-1.5 1.5-1.5 1.1 0-.5-.7-.1-1.6.7-.8.9-2.2 1.6-3 1.6-.8 0-1.4.4-1.4 1 0 .5-.7 1-1.5 1-.9 0-1.8.7-2.1 1.5-.4.8-.9 1.3-1.3 1.1-.4-.3-1.3-.1-2 .3-.8.6-.3 1.2 1.8 2.1 1.7.7 3.1 1.6 3.1 2.1s.9.9 2 .9 2.5.9 3.2 1.9c.6 1 1.7 1.7 2.3 1.5.7-.3 1.8.2 2.5 1.1.7.8 2.1 1.5 3.1 1.5 1.1 0 1.9.4 1.9 1 0 .5.6 1 1.3 1 .7 0 2.2.8 3.3 1.7 1.1 1 2.6 1.9 3.4 2.1.7.2 2.6 1.2 4.1 2.3 1.5 1 3.2 1.9 3.8 1.9.6 0 1.1.5 1.1 1.1 0 .5.5.7 1 .4.6-.3 1-.3 1 .2 0 .4 3.4 2.6 7.5 4.8 4.1 2.2 7.5 4.3 7.5 4.7 0 .5.9.8 2 .8s2 .4 2 1c0 .5.7 1 1.5 1s1.5.5 1.5 1.1c0 .5.4.8.9.4.5-.3 1.5.1 2.3.8.7.8 4 2.9 7.3 4.7 3.3 1.8 7.1 4 8.5 4.9 1.4.9 4.2 2.5 6.2 3.5 2.1 1 3.5 2.3 3.2 2.8-.3.5-.2.7.3.6 1.5-.4 5.3 1.3 5.3 2.4 0 .6.3.9.6.5.3-.3 2.5.6 4.7 2s5.6 3.2 7.4 3.9c1.8.8 3.3 1.9 3.3 2.6 0 .6.3.8.6.5.4-.4 1.9.2 3.4 1.3s3 1.7 3.4 1.3c.3-.3.6-.1.6.5s.7.9 1.5.6c.8-.4 1.5-.1 1.5.4 0 .6.8 1.2 1.8 1.4 2.2.5 7.2-1.1 7.2-2.4 0-.5.5-.6 1-.3.6.3 1 .1 1-.5s.5-.8 1-.5c.6.3 1 .1 1-.4 0-.6.7-1.1 1.5-1.1s1.5-.5 1.5-1.1c0-.5.5-.7 1-.4.6.3 1.3-.1 1.6-.9.3-.9 1-1.4 1.4-1.1.5.3 2.2-.6 3.9-2 1.6-1.5 3.4-2.6 3.8-2.7.4 0 2.4-1 4.3-2.2 1.9-1.2 4.7-2.8 6.3-3.5 1.5-.8 2.7-1.8 2.7-2.3 0-.4.6-.8 1.4-.8.7 0 2.5-.9 3.8-2 1.4-1 2.8-1.6 3.2-1.3.3.3.6 0 .6-.7s.3-1 .6-.7c.4.4 1.9-.2 3.4-1.3 1.6-1.1 3.3-2 3.9-2 .6 0 1.1-.5 1.1-1 0-.6.7-1 1.5-1s1.5-.5 1.5-1c0-.6.6-1 1.4-1 .8 0 2.2-.7 3-1.6.9-.8 1.6-1.3 1.6-.9 0 .3 1.5-.4 3.3-1.7 1.7-1.3 3.6-2.3 4-2.3.4 0 1.1-.6 1.6-1.3.5-.8 1-1.3 1.2-1.3 1.4.2 4.9-1.3 4.9-2.1 0-.5.5-.6 1-.3.6.3 1 .2 1-.4 0-.5 1-1.3 2.3-1.7 1.2-.4 2.4-.9 2.7-1.3.3-.3 3-1.9 6-3.5s6-3.4 6.5-4.1c.6-.6 1.5-1 2-.8.6.2 2-.5 3.1-1.4 3.1-2.8 8-5.3 8.9-4.5.5.4.5.1.1-.6s-.1-1.2.8-1.2 1.6-.5 1.6-1.1c0-.5.5-.7 1-.4.6.3 1 .1 1-.5s.5-.8 1-.5c.6.3 1 .2 1-.3 0-.4 2-1.9 4.5-3.1 2.5-1.2 4.5-2.7 4.5-3.3 0-.6.3-.8.7-.5.3.4 1.7 0 3-.8 1.3-.9 2.3-1.2 2.3-.8 0 .5.5 0 1.1-1 .6-.9 1.4-1.5 1.8-1.2.5.2 1.4-.2 2.1-1 .7-.8 1.6-1.2 2.1-.9.5.3.9 0 .9-.5 0-.6.7-1.1 1.5-1.1.7 0 1.8-.7 2.3-1.6.5-.9 1.1-1.5 1.3-1.3.9.5 4.9-1.3 4.9-2.2 0-.5.6-.9 1.4-.9.8 0 2.1-.6 2.8-1.3.7-.7 3.2-2.2 5.5-3.3 2.3-1 4.3-2.4 4.3-3.1 0-.7.6-1 1.4-.7.8.3 1.7 0 2.1-.5.3-.6 1.1-.9 1.6-.6.5.4.9.2.9-.3s1.2-1.7 2.6-2.7c1.8-1.2 2.4-1.3 1.9-.4-.4.9-.2.9.7-.1.7-.8 3.6-2.6 6.3-3.9 2.8-1.4 5.6-3.2 6.3-4 1.1-1.3 1.2-1.3.7-.1-.4 1-.2.9.8-.3.8-.9 1.9-1.7 2.6-1.7.6 0 1.1-.5 1.1-1.1 0-.5.5-.7 1-.4.6.3 1.3-.1 1.6-.9.3-.9 1-1.3 1.5-1 .5.3 1.7-.2 2.6-1.1 2-2 1-3.1-5.9-6.7-2.6-1.4-4.5-2.7-4.3-3 .2-.2-1.1-1-3-1.7s-3.5-1.7-3.5-2.2c0-.6-.4-.8-.9-.5-.5.3-1.1-.1-1.5-.9-.3-.8-1.2-1.5-2.1-1.5-1.7 0-6.5-2.8-7.7-4.5-.4-.5-.8-.7-.8-.3 0 .6-9.9-4.9-12.5-6.9-.5-.4-3.5-2.1-6.5-3.7s-5.7-3.2-6-3.6c-.3-.3-2-1.2-3.7-1.9-1.8-.8-3.3-1.6-3.3-2 0-.4-1.6-1.3-3.5-2s-3.5-1.7-3.5-2.2c0-.5-.9-.9-2-.9s-2-.4-2-.9-1.3-1.4-3-2.1c-1.6-.7-3-1.6-3-2.1s-.9-.9-2-.9-2-.3-2-.8c0-.4-2.1-1.8-4.7-3.2-2.7-1.3-5-2.7-5.3-3-.6-.6-2.5-1.7-10.7-6-3.5-1.7-6.3-3.6-6.3-4.2 0-.5-.4-.6-1-.3-.5.3-1 .1-1-.4 0-.6-.3-1-.8-.8-.4.1-5-2.3-10.2-5.3-5.2-3-9.8-5.4-10.2-5.2-.5.1-.8-.5-.8-1.4 0-.8-.4-1.3-.9-1-.5.3-2-.3-3.4-1.4-1.4-1.1-2.9-2-3.4-2s-2-.8-3.3-1.7c-1.4-1-3.1-1.8-3.8-2-.8-.1-2-1-2.9-2-.8-1.1-1.2-1.2-.8-.3.4 1 .2.9-.8-.3-.8-.9-1.9-1.7-2.5-1.7-.6 0-1.7-.6-2.4-1.3-.7-.6-2.6-1.9-4.3-2.7-1.6-.8-3.6-2.1-4.3-2.8-.8-.7-1.8-1-2.3-.7-.5.4-.9.3-.9-.2 0-.4-1.5-1.4-3.2-2.2-1.8-.8-3.5-1.7-3.8-2.1-.3-.4-3-2-6-3.7-8.5-4.6-10.5-5.7-11-6.4-.3-.4-1.5-.9-2.7-1.3-1.3-.4-2.3-1.2-2.3-1.7 0-1.8-8.5-1-10.7 1zM33.4 153.2c0 2.1.3 3.8.8 3.8s.6.5.2 1.2c-1.1 1.7-1.1 5.8-.1 5.8.4 0 .5.6.1 1.2-1.1 1.8-1.2 4.8-.2 4.8.5 0 .6.6.2 1.2-1.1 1.8-1.2 4.8-.2 4.8.5 0 .6.6.2 1.2-1.2 1.9-1.2 4.8-.1 4.8.5 0 .4.7-.3 1.5-1 1.2-1 1.5.1 1.5 1.2 0 1.2.2 0 .9-.9.6-1 1.1-.2 1.5.6.4.8 1.3.4 1.9-1.1 1.8-1.2 3.7-.2 3.7.6 0 .5.8-.1 2-.8 1.4-.8 2 0 2s.8.6 0 2-.8 2 0 2 .8.6 0 2-.8 2 0 2 .8.6 0 2-.8 2 0 2 .8.6 0 2-.8 2 0 2 .8.6 0 2-.8 2 0 2 .8.6 0 2c-.6 1.1-.7 2-.3 2 .4 0 .8 1.6.8 3.5s-.4 3.5-1 3.5c-.5 0-.3.5.5 1 1.2.8 1.2 1 .1 1-1 0-1.1.3-.2 1.4.8.9.8 1.6.2 2-.6.4-.6 1.8-.1 3.6.6 2 .5 3-.3 3.4-.8.3-.7.5.2.5 1.1.1 1.1.4.1 1.6-.9 1.1-.9 1.5-.1 1.5s.9.5.2 1.7c-.5 1-.5 2.6 0 4s.5 2.3-.1 2.3c-1.2 0-.9 2.2.4 3.1.4.4.4 1.5-.2 2.5-.6 1.1-.7 2.7-.2 4 .6 1.5.5 2.4-.3 2.8-.8.3-.8.5.2.5 1.1.1 1.1.4.1 1.6-.9 1.1-.9 1.5-.1 1.5.7 0 .9.5.4 1.2-1 1.7-1 5.2.1 5.9.4.4.3 1.6-.3 2.8-.8 1.5-.9 2.1-.1 2.1.6 0 .8.5.3 1.2-1.1 1.9-1.2 3.7-.2 4.4.5.3.5 1.3-.1 2.5-.8 1.3-.7 1.9 0 1.9.6 0 .8.5.4 1.2-1.1 1.7-1 6.8 0 6.8.6 0 .5.5-.1 1.1-.6.6-.8 2.3-.3 4.4.4 1.9.5 3.7.2 4-1 1-.8 5.5.3 5.5.5 0 .3.5-.5 1-1.3.9-1.3 1 0 1 .9 0 1.1.3.5.8-1.4 1-1.5 7.2-.1 7.2.6 0 .4.5-.4 1-1.2.8-1.2 1-.1 1 1.1 0 1.1.3 0 1.7-1.1 1.3-1.1 1.7-.1 2 .6.3 1 .9.6 1.4-1.1 1.9-1.3 6.9-.2 6.9.6 0 .5.7-.3 1.7-1.1 1.3-1.1 1.7-.1 2 .6.3 1 .9.6 1.4-1.2 1.9-1.3 7-.2 6.3.7-.5.8-.2.3.7-.5.7-.8 2.6-.7 4.2.2 2-.1 2.7-1 2.2-.7-.4-.5 0 .4.8 1 .8 1.5 1.7 1.1 2.1-.6.6-.8 6.8-.3 9.1.1.5.2 1.2 0 1.5-.7 2-.7 6 0 6 .6 0 .6 1 0 2.5-.7 1.7-.6 2.5.1 2.5.8 0 .8.5-.1 1.5-.9 1.1-.6 2 2 4.5 1.7 1.6 3.7 3 4.5 3 .8 0 1.5.4 1.5 1 0 .5.5 1 1.1 1 .6 0 2.4.9 4 2.1 1.6 1.1 2.9 1.8 2.9 1.4 0-.3 1 .3 2.2 1.5 1.2 1.1 2.7 2 3.4 2 .6 0 1.7.7 2.4 1.5.6.8 1.5 1.4 1.8 1.2.9-.2 6.4 3.4 7.4 4.8.4.5.8.6.8.2 0-.5 1.2 0 2.8 1 1.5 1 3.9 2.5 5.5 3.3 1.5.7 2.7 1.7 2.7 2.2 0 .5.4.7.9.3.6-.3 1.4.3 2 1.2.5 1 1.3 1.7 1.8 1.6 1.2-.3 6.3 2.1 6.3 2.9 0 .5.7.8 1.5.8s1.5.5 1.5 1.1c0 .5.4.7 1 .4.5-.3 1-.1 1 .5s.4.9.9.6c.5-.3 1.2.1 1.5 1 .3.8 1 1.2 1.6.9.5-.3 1-.3 1 .2 0 .4 1.5 1.4 3.3 2.2 1.7.8 3.4 1.7 3.7 2 .4.5 4.4 2.7 12.2 6.8 1.5.8 3 1.8 3.3 2.4.4.5 1.4.9 2.5.9 1 0 2.1.7 2.4 1.6.3.8 1 1.2 1.6.9.5-.3 1-.1 1 .5s.4.9.9.6c.4-.3 1.6.3 2.6 1.4 1 1.1 2.4 2 3 2 .7 0 2.3.9 3.7 1.9 1.4 1.1 3.1 2.1 3.9 2.3.7.2 2.2 1.1 3.3 2 1.1 1 2.6 1.8 3.3 1.8.7 0 1.3.5 1.3 1.1 0 .6.6.9 1.4.6.8-.3 1.7.1 2 .9.3.8 1.1 1.4 1.9 1.4.7 0 2.8 1.1 4.7 2.5 1.8 1.3 3.7 2.2 4.1 1.9.5-.3.9-.1.9.4s1.2 1.5 2.8 2.3c1.5.8 2.9 1.6 3.2 1.9.3.3 2.5 1.6 5 2.9 2.5 1.3 5.2 3 6.1 3.8.9.7 1.8 1.1 2.1.8.3-.3 1.7.6 3.2 2 1.4 1.3 2.7 2.4 2.9 2.3.7-.4 4.7 1.5 4.7 2.3 0 .5.9.9 2 .9s2 .4 2 .8c0 .5 1.8 1.7 4 2.7 2.2 1 4 2.2 4 2.7s.4.7.8.4c.5-.3 2 .5 3.3 1.7 1.3 1.2 2.6 2.1 2.9 1.9.3-.1 1.4.6 2.5 1.5s2.1 1.6 2.3 1.5c.6-.5 2.2-.1 3.4 1.1 2.3 2.1 11.5 6.7 12.2 6 .3-.3.6 0 .6.7 0 1.1.3 1.1 1.1.3 1.1-1.1 2-20.3.9-20.3-.3 0-.6-4.2-.7-9.3-.2-11-.3-11.7-1.8-11.7-.7 0-2-.9-3-2s-2.2-2-2.7-2-1.4-.5-2.1-1c-3.4-2.9-8.9-6-9.8-5.5-.5.4-.9.2-.9-.4 0-.6-2.5-2.3-5.5-3.7-3-1.5-5.5-3.1-5.5-3.6s-.4-.7-.8-.4c-.5.3-1.8-.3-2.8-1.2-1-1-2.3-2-2.9-2.1-3-1-5.5-2.5-5.5-3.3 0-.5-.4-.7-.8-.4-.4.2-3-1.1-5.7-2.9-2.8-1.9-5.6-3.4-6.2-3.5-.7 0-1.3-.5-1.3-1.1 0-.5-.4-.8-.9-.4-.5.3-1.3 0-1.6-.5-.4-.6-1.7-1.6-2.8-2.1-1.2-.6-4-2.1-6.2-3.4-2.2-1.4-5.9-3.5-8.2-4.7-2.4-1.2-4.3-2.6-4.3-3 0-.4-.6-.8-1.2-.8-.7 0-2.4-.9-3.8-2s-3.3-2-4.2-2c-1 0-1.8-.4-1.8-.9s-.8-1.1-1.7-1.4c-1-.4-4-2-6.8-3.7-2.7-1.7-5.7-3.3-6.5-3.7-.8-.4-1.8-1.1-2.2-1.7-.4-.6-1.1-1.1-1.5-1.1-2.3-.2-5.3-1.8-4.8-2.6.4-.5-.1-.9-1-.9-1.5 0-5.5-1.9-6.5-3.1-.3-.3-3.4-2.1-7-4-3.6-1.8-6.7-3.6-7-3.9-.9-.9-4.5-3-7.7-4.5-1.7-.8-3.5-1.9-3.8-2.5-.4-.6-1.1-.8-1.6-.5-.5.4-.9.1-.9-.4 0-.6-.7-1.1-1.5-1.1s-1.5-.4-1.5-.8c0-.5-1.6-1.5-3.5-2.2-2-.8-4.1-2-4.7-2.7-.5-.7-1.4-1.1-1.8-.8-.5.3-1.1-.4-1.5-1.5-.4-1.1-.9-1.8-1.3-1.6-.4.2-.7-30.4-.7-68 0-44.9.3-68.4 1-68.4s.7-.3 0-.8c-.5-.4-1-3.6-1.1-7.2 0-3.6.1-6 .3-5.4.2.7 1.3 1 2.3.7 1.1-.3 2 0 2 .6s1.2 1.7 2.8 2.3c1.5.7 4.1 2.3 5.8 3.5 1.7 1.3 3.5 2.3 3.9 2.3.5 0 1.6.6 2.4 1.4.9.8 4.3 2.8 7.6 4.5 3.3 1.8 8.3 4.5 11 6.2 2.8 1.6 5.8 3.2 6.8 3.5.9.4 1.7 1.1 1.7 1.6s.5.6 1 .3c.6-.3 1-.2 1 .3s1.4 1.5 3 2.2c1.7.7 3 1.7 3 2.2 0 .5.4.7.8.4.4-.2 2.7.9 5.1 2.5 2.4 1.6 5 2.9 5.6 2.9.7 0 1.6.7 1.9 1.6.4.9 1.3 1.4 2.1 1 .8-.3 1.5-.2 1.5.3 0 .9 13.1 8.9 21.5 13 2.8 1.4 5.2 2.9 5.3 3.3.2.5.9.8 1.7.8.7 0 1.8.6 2.5 1.4.6.8 1.9 1.2 2.7.9 1-.4 1.4-.2 1 .3-.3.6 1.4 1.9 3.9 2.9 2.4 1 4.4 2.2 4.4 2.7s.4.7.9.4c.5-.3 1.4.1 2.1.9.7.8 3.6 2.6 6.5 4.1 3 1.4 5.6 3.3 6 4.2.3.9.3 1.4 0 1-.4-.3-1.5.2-2.6 1.3s-2.4 1.7-2.9 1.4c-.6-.4-1-.1-1 .5s-.5.8-1 .5c-.6-.3-1.3.1-1.6.9-.3.9-1 1.4-1.4 1.1-.5-.3-1.6.2-2.4 1.1-.9.8-1.6 1.3-1.6.9s-.7.1-1.6.9c-.8.9-2.3 1.6-3.1 1.6-.9 0-1.3.3-1 .6.7.7-11.3 7-12.6 6.6-.5-.1-.6.1-.3.6.2.4-2.2 2-5.5 3.6-3.2 1.5-5.9 3.2-5.9 3.7 0 .6-.4.7-1 .4-.5-.3-1-.1-1 .4 0 .6-.6 1.1-1.4 1.1-.8 0-2.1.6-2.8 1.3-.7.7-2.8 2-4.5 2.8-1.8.7-3.3 1.8-3.3 2.3 0 .4-.7.6-1.5.2-.8-.3-1.5-.1-1.5.5 0 .5-1.6 1.7-3.5 2.5s-3.5 1.9-3.5 2.5c0 .5-.4.8-.9.4-.5-.3-1.7.2-2.5 1.1-.9.8-1.6 1.3-1.6.9 0-.3-1 .1-2.3 1-1.3.8-2.7 1.2-3.2.8-.4-.5-.5-.3-.2.4.4.7-.5 1.7-2.2 2.4-1.6.7-2.7 1.7-2.5 2.1.3.4 0 .8-.5.8-3 0 1.2 3.6 4.3 3.8.5 0 1.2.4 1.5.9.3.4 3 1.9 5.8 3.3 2.9 1.4 5.3 2.9 5.3 3.3 0 .5.5.5 1 .2.6-.3 1-.3 1 .2 0 .4 2.1 1.9 4.8 3.3 2.6 1.3 5 2.9 5.4 3.5.4.5.8.6.8.1 0-.6.7-.1 1.5 1 .8 1 1.5 1.5 1.5 1.1 0-.5 1.2 0 2.8 1.1 1.5 1 3.2 2.1 3.7 2.3 2.6 1 15 8.4 15.3 9.1.2.4.9.8 1.6.8.7 0 2.1.8 3.2 1.8 1 1 2.1 1.8 2.4 1.9 2.1.2 5 1.6 5 2.5 0 .5.6.8 1.2.6.7-.3 2.1.4 3.2 1.3 1 1 2.3 1.6 2.8 1.3.4-.3.8-.1.8.5 0 .5 2 1.9 4.5 3.1 2.5 1.2 4.7 2.6 5.1 3.1.3.5 1 .7 1.5.4.5-.4.9-.1.9.4 0 .6.6 1.1 1.4 1.1.8 0 1.6.3 1.8.7.4.9 7.1 4.8 11.1 6.4 1.5.6 2.7 1.5 2.7 2s.7.9 1.6.9c.9 0 2.7.9 4.1 2 1.4 1.1 3.2 2 4 2 .8 0 1.1.4.8 1-.5.9 1.5 1.5 3.8 1.1.4 0 .7.3.7.9 0 .5 1 1 2.3 1h2.2l-.3-17.7c-.1-9.8-.3-21.5-.5-26.1-.1-4.5 0-8.2.3-8.2s.3-2.7 0-6c-.3-3.5-.2-6.4.4-7 .7-.7.5-1-.3-1-1.1 0-1.1-.3-.1-1.5.9-1.1.9-1.5.1-1.5-.7 0-.9-.5-.5-1.1.7-1.3 1.1-11.9.4-11.9-.3 0-.5-5.4-.5-12s.4-12 .8-12c.5 0 .6-.4.3-.9s-.6-8.2-.7-17.1c-.2-13.3-.5-16.7-1.8-18.2-.8-1-2.1-1.8-2.8-1.8-.7 0-1.3-.5-1.3-1 0-.6-.6-1-1.3-1-.8 0-2.2-.9-3.2-2s-2.7-2.2-3.9-2.6c-1.1-.3-3-1.4-4-2.3-1.6-1.3-1.8-1.3-1.1-.1.5.9 0 .8-1.3-.4-1.2-1.1-2.2-1.5-2.2-1s-.5.1-1.1-.9c-.6-.9-1.4-1.5-2-1.2-.5.4-.9.2-.9-.3 0-.4-1.6-1.4-3.5-2.2-1.9-.8-3.5-1.8-3.5-2.2 0-.5-.4-.6-1-.3-.5.3-1 .1-1-.4 0-.6-.6-1.1-1.4-1.1-.8 0-2.1-.6-2.8-1.3-.7-.6-2.6-1.9-4.3-2.7-1.6-.8-3.2-1.7-3.5-2-.3-.3-2.6-1.7-5.2-3-2.7-1.4-4.8-2.9-4.8-3.3 0-.5-.4-.6-.8-.3-.5.3-2.5-.6-4.5-2s-3.7-2.2-3.7-1.8c0 .4-.8-.3-1.9-1.4-1-1.2-2-1.9-2.3-1.7-.3.3-2.2-.6-4.2-2s-5.6-3.5-7.9-4.6c-2.3-1.2-4.5-2.7-4.9-3.3-.4-.6-.8-.7-.8-.3 0 .5-1.3-.1-2.9-1.2-1.6-1.2-3.4-2.1-4-2.1-.6 0-1.1-.5-1.1-1 0-.6-.4-1-.9-1-1.2 0-13.4-7.2-14.2-8.3-.4-.5-1.2-.6-1.8-.3-.6.4-1.1.2-1.1-.3 0-.6-.7-1.1-1.5-1.1s-1.5-.5-1.5-1c0-.6-.7-1-1.5-1s-1.5-.5-1.5-1.1c0-.5-.4-.8-1-.4-.5.3-1.8-.2-2.8-1.2-1-1-2.5-1.9-3.3-2.1-.8-.2-2.4-1-3.6-1.8-1.3-.8-2.5-1.4-2.8-1.4-.3 0-1.5-.9-2.7-1.9-1.1-1.1-2.5-1.8-2.9-1.5-.4.2-1.2-.4-1.8-1.3-.6-1-1.1-1.5-1.1-1.1 0 .4-1.6-.4-3.6-1.7-2-1.4-4.3-2.5-5.1-2.5-.8 0-1.1-.5-.8-1 .3-.6-.3-1-1.4-1-1 0-2.1-.3-2.3-.8-.2-.4-2.4-1.8-5-3.1-2.7-1.3-4.8-2.8-4.8-3.3s-.4-.6-1-.3c-.5.3-1 .1-1-.5s-.4-.8-1-.5c-.5.3-1 .1-1-.4 0-.6-.7-1.1-1.5-1.1s-1.5-.5-1.5-1c0-.6-.7-1-1.5-1s-1.5-.5-1.5-1.1c0-.5-.4-.7-1-.4-.5.3-1 .1-1-.4 0-.6-.3-1-.7-.9-.5.1-3.4-1.4-6.6-3.5-3.1-2-6.2-3.7-6.7-3.7s-1.3-.6-1.7-1.4c-.4-.8-1.2-1.5-1.8-1.5-2.2-.2-4.5-1.3-4.5-2.2 0-.5-.7-.9-1.5-.9s-1.5-.4-1.5-.8c0-.5-.6-.9-1.2-.9-.8 0-1.3 1.5-1.4 3.9zM475 151.6c-.7.8-1.8 1.4-2.5 1.4s-1.6.7-1.9 1.6c-.3.8-1 1.3-1.5.9-.6-.3-1.4.3-2 1.2-.6 1-1.1 1.4-1.1.9 0-.4-1.5.3-3.4 1.7-1.8 1.5-3.6 2.4-3.8 2.1-.3-.2-1.1.2-1.8 1.1-.7.8-1.9 1.5-2.6 1.5-.8 0-1.4.5-1.4 1.1 0 .5-.4.7-1 .4-.5-.3-1-.2-1 .2 0 .5-1.6 1.7-3.5 2.7-1.9 1-3.6 2.6-3.9 3.5-.3 1.6-.1 10.4.4 10.8.6.7.6 2.9-.1 3.8-.6.9-.5 6.2.1 9 .1.5.1 1.2 0 1.5-.8 1.7-.5 8.7.4 9.9.7 1 .7 1.3.1.9-.8-.5-1.1 23.3-1.1 76.3 0 42.3.3 76.9.7 76.9.4 0 .1 1.4-.8 3-.8 1.7-1.9 2.8-2.4 2.5-.5-.4-.9-.1-.9.6s-.3.9-.6.6c-.4-.3-1.8.2-3.2 1.3-1.3 1.1-2.8 1.7-3.3 1.4-.5-.3-.9 0-.9.5 0 .6-.5 1.1-1 1.1-.6 0-2.8 1.1-5 2.5s-4.7 2.5-5.5 2.5c-.9 0-1.8.7-2.1 1.5-.4.8-1.2 1.5-2 1.5s-1.4.5-1.4 1.1c0 .5-.4.7-1 .4-.5-.3-1-.2-1 .2 0 .5-1.8 1.6-4 2.6-2.2.9-4 2.2-4 2.8 0 .5-.4.8-.9.4-.5-.3-1.2-.1-1.6.5-.4.6-1.1.8-1.6.5-.5-.4-1.2.1-1.5.9-.3.9-1 1.3-1.5 1-.5-.3-.9-.1-.9.4 0 .9-3.3 2.2-4.6 1.9-.3-.1-1 .6-1.5 1.6-.6.9-1.7 1.7-2.4 1.7-.8 0-1.5.5-1.5 1 0 .6-.3 1-.7.9-1.6-.2-5.3 1.4-5.3 2.3 0 .5-.4.6-1 .3-.5-.3-1-.2-1 .3 0 .4-2 1.9-4.5 3.1-2.5 1.2-4.5 2.7-4.5 3.2s-.3.8-.7.8c-2.1-.3-3.3.2-2.7 1.3.4.6.3.8-.3.5-.6-.4-3.1.7-5.6 2.3-2.5 1.5-4.8 2.6-5.1 2.3-.3-.4-.6-.2-.6.4 0 .5-1.8 1.8-4 2.9-2.2 1-4 2.2-4 2.6 0 .5-.7.8-1.5.8s-1.5.5-1.5 1.1c0 .5-.4.7-1 .4-.5-.3-1-.1-1 .5s-.4.8-1 .5c-.5-.3-1-.1-1 .4 0 .6-.7 1.1-1.5 1.1-.9 0-1.8.7-2.1 1.5-.4.8-1 1.3-1.4 1-.5-.3-1.4.1-2.2.8-.7.7-2.5 1.8-4 2.4-1.6.7-2.8 1.7-2.8 2.3 0 .6-.4.9-.9.5-.5-.3-1.2-.1-1.6.5-.4.6-1 .8-1.5.5-.4-.3-1.1.2-1.4 1.1-.4.9-.9 1.4-1.2 1.1-.4-.3-1.3.1-2.1.9s-1.9 1.2-2.4.9c-.5-.4-.9-.2-.9.3s-.7.9-1.5.9c-1.9 0-2.1-5.7-.2-7.6.7-.9.8-1.1.1-.8-1.6.9-1.6-36.2 0-38.2.8-1 .5-1.7-.9-2.7-1-.8-1.4-1.4-.8-1.4.6 0 .9-1.5.6-3.6-.3-2.7-.1-3.4.9-2.8 1 .6 1 .4.2-.7-1.3-1.7-1.6-11.7-.3-12.4.5-.4.9-1.2.9-1.8 0-.8-.3-.8-.9.1-.4.8-.8-3.6-.8-10.3 0-6.3.4-11.8.8-12.1.5-.3.4-1.5-.3-2.7-.7-1.2-1.1-2.7-.9-3.2.8-2.6.6-9.5-.4-9.9-.6-.3-.6-.5.1-.5.7-.1 1-1.4.8-3.3-.2-1.7.1-3.7.7-4.4.6-.8.7-1.4 0-1.8-1.3-.8-1.1-4.7.3-6.5.8-1.1.8-1.3-.1-.8-1.3.8-1.2-7 .2-9.2.5-.9.4-1.2-.3-.7-.7.4-1-.1-.9-1.4.1-1.1.6-2 1.2-2s.7-.3 0-.8c-1.5-1.1-1.7-6.4-.2-5.5.8.5.8.2-.1-.9-1-1.3-1-1.7.2-2.1.8-.3 1.7.1 2 1 .4.9.9 1.3 1.2 1 .4-.3 1.5.3 2.7 1.4 1.1 1 2.7 1.9 3.4 1.9.7 0 1.3.5 1.3 1.1 0 .5.5.7 1 .4.6-.3 1-.1 1 .5s.5.8 1 .5c.6-.3 1-.1 1 .4 0 .6.7 1.1 1.6 1.1.9 0 2.5 1 3.5 2.2 1.1 1.1 1.9 1.8 1.9 1.4 0-.4 1.5.2 3.3 1.3 1.9 1.1 3.7 1.8 4 1.4.4-.3.7-.1.7.5s2.9 2.6 6.5 4.3c3.6 1.8 6.5 3.7 6.5 4.2 0 .4.4.6.9.2.5-.3 1.5.1 2.3.8.7.7 2.8 2 4.6 2.8 1.7.7 3.2 1.7 3.2 2.1 0 .5.7.8 1.5.8s4.1 1.7 7.2 3.7c4.8 3.1 9.5 5.6 12.3 6.6.6.2 3.6 2.6 5.5 4.4.8.7 2 1.3 2.8 1.3.9 0 1.8.6 2 1.2.4 1 .6 1 .6 0 .1-.8.6-1 1.4-.6.6.4.9.4.5-.1-.4-.4-.3-1.6.2-2.6.7-1.2.7-2 0-2.4-.7-.4-.6-1.3.1-2.7.8-1.5.8-1.9 0-1.4-1.2.8-1.1-2.1.2-4 .3-.6.3-1.4-.1-1.8-1.2-1.3-1.1-15.6.2-14.9.7.5.7.2-.1-.8-1.5-1.8-1.4-7.9.1-9.8.8-1.1.8-1.3 0-.8s-1.2-.4-1.2-2.8c0-1.9.4-3.8.9-4.1.5-.3.9-1.1.9-1.7 0-.8-.3-.8-.9.2-.5.8-.8-1-.8-4.8 0-3.6.5-6.1 1.1-6.1.8 0 .7-.3 0-.8-1.4-.9-1.4-4.3 0-6.1.8-1.1.8-1.3 0-.8-1.5.9-1.4-9.5 0-10.5.8-.5.8-.8 0-.8-.6 0-1.1-1.1-1.1-2.5s.4-2.2 1-1.8c.6.4.7.1.1-.8-1.2-2.1-1.5-7.7-.3-8.4.6-.5.6-1.2-.2-2.2-1-1.1-1-1.9-.1-3.3.6-1.1.8-2.2.3-2.4-.5-.3-.9-2.6-.8-5 0-2.9.4-4.3 1.1-3.9.6.4.6 0-.1-.8-1.5-1.8-1.4-7.9.1-9.8.8-1.1.8-1.3 0-.8s-1.1-1.5-1.1-6.8c.1-4.8.5-7.2 1.2-6.7.5.3.4-.2-.3-1.1-.8-.9-1.1-2-.8-2.5.3-.6-.2-1.6-1.1-2.3-1.2-1-1.4-1-.9-.2.5.9 0 1.3-1.3 1.3-1.2 0-2.1.4-2.1.8 0 .5-1.8 1.6-4 2.6s-4 2.2-4 2.7c0 .6-.4.8-.8.5-.5-.3-1.8.3-2.8 1.2-1 1-2.1 1.9-2.4 1.9-1.2.2-8.6 3.9-9.7 4.8-2.8 2.3-4 3-5.3 3.3-.8.2-1.8.9-2.2 1.5-.4.7-.8.8-.8.3 0-.6-.7-.1-1.5 1-.8 1-1.5 1.6-1.5 1.2 0-.4-2.1.6-4.6 2.2-2.6 1.6-5.1 2.7-5.7 2.3-.6-.3-.7-.2-.4.4.6.9-3.4 3.5-5.6 3.7-.4.1-2 1.2-3.4 2.6-1.5 1.4-2.3 1.9-1.9 1.3.4-.7-.6-.5-2.3.5-1.7.9-3.1 2.1-3.1 2.5 0 .5-.4.5-1 .2-.5-.3-1-.1-1 .5s-.4.9-.9.6c-.5-.4-1.1-.2-1.3.3-.1.5-1 1.1-1.8 1.3-.8.2-2.3 1.1-3.4 2-1.1 1-2.6 1.8-3.3 1.8-.7 0-1.3.5-1.3 1.2 0 .6-.3.8-.6.5-.4-.3-1.8.3-3.2 1.3-1.3 1.1-3.1 2-3.8 2-.8 0-1.4.3-1.4.8 0 .4-1.5 1.3-3.2 2.1-1.8.8-3.5 1.8-3.8 2.2-.3.4-1.2.9-2 1.1-.8.2-2 .9-2.5 1.6-.6.7-2 1.4-3.2 1.5-1.2 0-2.1.6-2 1.1.1.6-.2 1-.8 1.1-1.8.1-9.5 4.8-9.5 5.9 0 .5-.3.6-.7.3-.3-.4-1.2.1-2 1.1-.8.9-1.2 1.1-.8.5.4-.9.1-1.1-.9-.7-.9.3-1.4 1-1.1 1.4.3.5.1 1.1-.4 1.4-.5.4-.9 4.4-.9 9 0 4.7-.3 8.9-.6 9.5-.4.6-.3 1.1.3 1.1.7 0 .7.8.1 2.5-.5 1.4-.6 2.5-.2 2.5.4 0 .7 2.7.7 6s-.4 6-.9 6-.3.7.4 1.5c.9 1.1.9 1.5.1 1.5-.7 0-.9.5-.6 1 .4.6.6 9.5.5 19.8-.6 52.2-.4 108.2.3 108.2.5 0 .5.4.2 1-.3.5-.7 14.1-.8 30.2-.2 25 0 29.5 1.3 30.6.8.8.9 1.1.3.7-.7-.3-1.3-.1-1.3.4 0 .6 1.1 1.1 2.5 1.1s2.5-.5 2.5-1.1c0-.5.4-.8.9-.4.5.3 1.2.1 1.6-.5.4-.6 1.1-.8 1.6-.5.5.4.9.1.9-.5 0-.5 1.6-1.8 3.5-2.7 1.9-.9 3.5-2.1 3.5-2.5 0-.5.4-.7 1-.3.5.3 1.8-.2 2.8-1.2 1-1 2.5-1.9 3.3-2.1.7-.2 1.7-.8 2-1.4.3-.5.8-.9 1-.7.8.4 8.9-4.2 8.9-5.1 0-.6 1.1-1 2.5-1s2.5-.5 2.5-1.2c0-.6.3-.9.6-.6.3.4 1.4-.2 2.5-1.3s2.4-1.7 2.8-1.4c.5.2 1.2-.2 1.5-1.1.4-.9.9-1.4 1.3-1.1.3.3 2.5-.7 4.9-2.4 2.4-1.7 4.9-2.7 5.6-2.3.6.4.8.3.5-.3-.3-.5 2.4-2.5 6.1-4.4 3.7-1.9 7.1-4 7.5-4.7.5-.7 1.2-1 1.8-.7.5.4.9.1.9-.5s.5-.8 1-.5c.6.3 1 .1 1-.4 0-.6.7-1.1 1.5-1.1s1.5-.4 1.5-.8 1.2-1.3 2.8-1.9c3.2-1.4 8.1-4.3 10-6.1.7-.6 2-1.2 2.8-1.2.8 0 1.4-.5 1.4-1 0-.6.6-1 1.4-1 .7 0 2.5-.9 4-2.1 1.4-1.1 2.6-1.7 2.6-1.2 0 .4.4.3.8-.2 1.2-1.8 6.5-4.8 5.7-3.4-.3.8-.1.7.7-.2.7-.9 2.3-1.9 3.6-2.3 1.2-.4 1.9-1.2 1.6-1.8-.5-.7-.2-.8.6-.3.7.4 1.5.3 1.9-.2.3-.6 2.5-2 4.9-3.2 2.3-1.2 4.2-2.6 4.2-3.2 0-.6.4-.7 1-.4.9.5 8.8-4 10.1-5.8.3-.5.8-.8 1-.8 1.2.2 4.9-1.3 4.9-1.9 0-.8 3.8-2.3 5.3-2.1.4.1.7-.4.7-.9 0-.6 1.8-1.8 4-2.7 2.2-1 4-2.1 4-2.5 0-.5.6-.8 1.4-.8.7 0 1.9-.7 2.6-1.5.7-.8 1.6-1.2 2.1-.9.5.3.9 0 .9-.6s.5-.8 1-.5c.6.3 1 .2 1-.3s1.3-1.5 3-2.2c1.7-.7 2.7-1.7 2.3-2.4-.3-.6-.3-.8.2-.4.4.4 1.4.3 2.2-.3.7-.6 1.3-.8 1.3-.3s.4.4.8-.3c.4-.6 1.4-1.3 2.1-1.5.8-.2 2.5-1.2 3.9-2.3 1.3-1.1 2.8-2 3.2-2 .5 0 1.8-.8 2.9-1.7 1.1-.9 2.2-1.4 2.5-1.1.3.4.6.1.6-.6s.5-.9 1-.6c.6.3 1 .2 1-.3s1.1-1.4 2.4-2c1.9-.8 2.4-1.8 2.2-4.1-.1-1.7.1-3.1.6-3.1 1 0 .6-2.3-.6-3.1-.5-.4-.5-1.3 0-2 1.2-2 1.4-3.8.3-4.5-.6-.3-.5-1.2.3-2.1 1.5-1.8 1.5-2.3-.2-3.3-.8-.5-.9-1.3-.4-2.1 1.2-2 1.4-3.8.3-4.5-.6-.4-.6-1 0-1.7 1.4-1.8 1.4-2.9.1-3.7-.8-.5-.9-1.3-.4-2.1 1.2-1.9 1.2-4.9.1-4.9-.6 0-.5-.5.1-1.3 1.5-1.8 1.5-2.9.1-3.8-.9-.5-1-1.1-.2-2.1 1.4-1.6 1.4-2.9.3-4.3-.5-.6-.5-1.7 0-2.5s.5-2.1-.1-3.1c-.6-1.1-.5-2 .1-2.4.5-.3.7-1.1.4-1.8-.9-2.3-1-8.7-.2-8.7 1 0 .6-2.3-.6-3.1-.4-.4-.4-1.5.2-2.5.6-1.1.7-2.7.1-4.1-.5-1.4-.5-2.3.1-2.3 1.2 0 .9-2.2-.4-3.1-.4-.4-.4-1.5.2-2.5.6-1.1.7-2.7.1-4.1-.5-1.4-.5-2.3.1-2.3 1.2 0 .9-2.2-.4-3.1-.4-.4-.4-1.5.2-2.5.6-1.1.7-2.7.1-4.1-.6-1.6-.5-2.3.4-2.3.8 0 .7-.4-.3-1-1.2-.8-1.2-1-.1-1 1 0 1.1-.3.2-1.3-.6-.8-.8-1.7-.4-2 .9-.9 1-5.7.2-5.7-.9 0-.6-2.1.4-3.8.5-.7.3-1.2-.3-1.2s-.8-.5-.3-1.3c1.1-1.8 1.3-3.7.3-3.7-.5 0-.5-1.3 0-2.9.5-2 .5-3.1-.2-3.3-.8-.3-.7-1.1.1-2.6.8-1.5.8-2.2.1-2.2-.6 0-.8-.5-.4-1.2 1.2-1.9 1.2-4.8.1-4.8-.5 0-.4-.7.3-1.5 1-1.2 1-1.5-.1-1.5-1.2 0-1.2-.2 0-.9.9-.6 1-1.1.2-1.5-.6-.4-.8-1.3-.4-1.9 1.1-1.8 1.3-5.7.3-5.7-.6 0-.6-1 0-2.5.6-1.7.6-2.5-.1-2.5-.6 0-.7-.5-.3-1.2 1.2-1.9 1.2-9.8 0-9.8-.6 0-.4-.5.4-1 1.2-.8 1.2-1 .1-1-1.1 0-1.1-.3 0-1.7 1.1-1.3 1.1-1.7.1-2-.6-.3-1-.9-.6-1.4 1.1-1.9 1.3-6.9.2-6.9-.6 0-.5-.7.3-1.7 1.1-1.3 1.1-1.7.2-2-.9-.3-1-1-.3-2.3.7-1.3.7-2.1 0-2.5-.6-.4-.7-1.2-.3-1.8 1.1-1.8 1.2-5.7.2-5.7-.6 0-.8-.4-.4-.9 1.1-1.9 1.2-7.1.1-7.1-.7 0-.7-.3-.1-.8 1.4-1 1.7-3.2.4-3.2-.8 0-.7-.6.2-1.7 1.1-1.3 1.1-1.7.1-2-.6-.3-1-.9-.6-1.4 1.1-1.8 1.3-6.9.3-6.9-.6 0-.7-.6-.2-1.3 2.4-3.8-.1-9.4-2.7-6.1z"
        fill={color ? color : "#fcfbfb" }
      />
    </svg>
  )
};
export default Logo;