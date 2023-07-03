import { nanoid } from '@reduxjs/toolkit';

import { Title } from 'components/Title/Title';
import instruction from './data.json';

import style from './Instruction.module.scss';

const Instruction = () => {
  return (
    <>
      <Title text="Інструкція користувача" />
      <ol className={style.instructionList}>
        {instruction && (instruction.steps.map(step => (
          <li key={nanoid()}>{step}</li>
        )))}
      </ol>
    </>
  );
};

export default Instruction;
