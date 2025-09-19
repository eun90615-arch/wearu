import React, { useEffect } from 'react'

const Modal = ({onclose, children }) => {

  useEffect(()=>{
    const original = document.body.style.overflow='hidden';
    return()=>{
      document.body.style.overflow = original
    }
  },[]);
  return (
    <div className='modal-bg' onClick={onclose} role='modal'>
      <div className="modal-panel" onClick={(e)=> e.stopPropagation()}>
        <button onClick={onclose}>❌</button>
        {children}
      </div>

    </div>
  )
}

export default Modal