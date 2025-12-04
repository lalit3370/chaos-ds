import React from "react";
import PropTypes from "prop-types";
import "./accordion.css";

export function Accordion(props) {
  const { accordionData } = props;

  function handleClick(e) {
    let uid = e?.currentTarget?.dataset?.id;
    if(uid) {
        const el = document.getElementById(uid);
        // el.style.visibility = el.style.visibility === 'hidden' ? 'visible': 'hidden'
        
        const curheight = el.style.maxHeight;
        const scrollHeight = el.scrollHeight;
        console.log({el})
        el.style.maxHeight = curheight === '0px' ? `${scrollHeight}px` : '0px'
    }
  }
  return (
    <div className="container">
      {accordionData.map((data) => (
        <div className="panel">
          <h3 className="panel__heading">
            <button onClick={handleClick} data-id={data.id}>
              <span>{data.heading}</span>
            </button>
          </h3>
          <div className="panel__content" id={data.id}>
            <span>
            {data.content}

            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

Accordion.propTypes = {
    accordionData: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string,
        heading: PropTypes.string,
        content: PropTypes.string,
    })
    )
}