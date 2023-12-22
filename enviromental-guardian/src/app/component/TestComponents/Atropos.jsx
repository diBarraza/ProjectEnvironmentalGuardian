import Atropos from 'atropos/react';

export default function AtroposComponent () {
  return (
    <div id="app">
      {/* Atropos */}
      <Atropos className="my-atropos" 
      >
        <div className='column'>
          <img src="/images/ItsFine.jpg" data-atropos-opacity="0;1" data-atropos-offset="-15" />
        </div>
        <div className='column'>
          <img src="/images/ItsFine.jpg" data-atropos-offset="0" />
        </div>
        <div className='column'>
          <img src="/images/ItsFine.jpg" data-atropos-opacity="0;1" data-atropos-offset="15" />
        </div>
      
      
      
      </Atropos>
    </div>
  )
}