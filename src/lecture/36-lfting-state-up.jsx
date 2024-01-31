import { useState } from "react";
import A11yHidden from '../components';
import { Children } from "react";


function AccordionPanel() {
return <div className="">{Children}</div>
}

function Accordion() {
  const headlineId = crypto.randomUUID();

  return (
    <article className="" aria-labelledby={headlineId}>
      <A11yHidden as="h2" id={headlineId}>아코디언을 사용해 컴포넌트 간 상태 공유</A11yHidden>
    </article>
  )
}

export default function Exercise() {
  return (
    <div>
      <h2>상태 끌어올리기</h2>
      <Accordion></Accordion>
    </div>
  )
}