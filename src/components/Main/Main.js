import { useEffect, useState } from 'react';
import questions from '../../data/data';
import Question from '../Question/Question';

function Main() {
  const [data, setData] = useState(questions);

  return (
    <>
      <div className="container vh-100 ">
        <div className="row h-100">
          <div className="col-12 w-75 mx-auto my-auto d-flex flex-wrap border rounded gx-0 p-3 shadow card-detail-bg">
            <div className="col-lg-4 col-md-12 p-2 d-flex ">
              <div className="border card-bg rounded mb-3 w-100 shadow">
                <p className="d-flex justify-content-between align-items-center p-3">
                  <span className="ff-nunito fw-bolder fs-4">FAQ </span>
                </p>
                <p className="ff-nunito fw-light p-3 ">select q question</p>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 p-2">
              {data.map(question => (
                <Question question={question} key={question.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
