import {useState} from 'react';
import { BsChevronRight } from "react-icons/bs";

function CardGroupTitle(props) {

  return (
    <>
      <div className="d-flex justify-content-between">
      <div class="d-flex align-items-center">
          <h4>{props.title}</h4>
          <h5 class="text-primary">&nbsp;| {props.subTitle}</h5>
        </div>
        <a href="./course/overview" className='text-decoration-none d-flex align-items-center text-primary'>查看更多<BsChevronRight className='mt-1'/></a>
      </div>
    </>
  );
}

export default CardGroupTitle;