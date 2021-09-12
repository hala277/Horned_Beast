import React from 'react';

class Main extends React.Component {
    render() {
    return (
        <>
      <div>
          <section>
       
        <h2>UniWhal</h2>
        { <img src = "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt = "UniWhal"/>   }
     
      <p>A unicorn and a narwhal nuzzling their horns</p>
      {this.props.HornedBeasts}
      </section>
      <section>
       
        <h2>Unicorn Head</h2>
       { < img src = "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" alt = "UniWhal"/> } 
    {this.props.HornedBeasts}
    <p>Someone wearing a creepy unicorn head mask</p>
    {this.props.HornedBeasts}
    </section>
      
      </div>
      </>
    );
  }
  }

  export default Main;