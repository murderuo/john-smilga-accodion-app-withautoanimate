import { useEffect, useRef, useState } from 'react';
import { BsPlusCircle} from 'react-icons/bs';
import { BiMinusCircle} from 'react-icons/bi';
import autoAnimate from '@formkit/auto-animate';

function Question({ question }) {
  const [more, setMore] = useState(false);

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="border card-bg rounded mb-3 shadow" key={question?.id} ref={parent}>
      <p className="d-flex justify-content-between align-items-center p-2 mb-0" onClick={() => setMore(!more)}>
        <span className="ff-nunito fw-bolder fs-4" >
          {question?.title}
        </span>
        <span>
          {!more?<BsPlusCircle />:<BiMinusCircle/>}
        </span>
      </p>
      {more && <p className="ff-nunito fw-light p-3 mb-0">{question?.info}</p>}
    </div>
  );
}

export default Question;
