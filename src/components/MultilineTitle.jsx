import { Fragment } from 'react';

export default function MultilineTitle({ text }) {
  const lines = text.split('\n');
  return lines.map((line, index) => (
    <Fragment key={`${line}-${index}`}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}
