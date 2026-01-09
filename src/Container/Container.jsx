import React from 'react';

const Container = ({children}) => {
    return (
        <div className='md:w-[800px] lg:w-300 mx-auto'>
            {children}
        </div>
    );
};

export default Container;