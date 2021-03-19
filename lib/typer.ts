import { Dispatch, SetStateAction } from 'react';

const t = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const rand = (min: number, max: number) => min + Math.floor(Math.random() * (max - min));

const typer = async (message: string, setter: Dispatch<SetStateAction<string>>) => {
  if (!message.length) return;
  const [letter, ...rest] = message;
  setter((prev) => prev + letter);
  await t(rand(30, 80));
  await typer(rest.join(''), setter);
};

export default typer;
